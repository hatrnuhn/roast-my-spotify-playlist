import { FC, memo, useCallback, useEffect, useState } from "react"
import axios from "../axios"
import { Roast } from "../types"
import useMainContext from "../hooks"
import RoastBlock from "./RoastBlock"
import { AxiosError } from "axios"
import history from "../libs/history"

type RoastBlockPastProps = {
    playlistId: string,
    marginAuto?: boolean
}

const RoastBlockPast: FC<RoastBlockPastProps> = ({ playlistId, marginAuto }) => {
    const [roast, setRoast] = useState<Roast>()
    const [errorMsg, setErrorMsg] = useState('')
    const { language } = useMainContext()

    const storeLocally = useCallback(async (roast: Roast) => {
        try {
            const data = await history.get()

            if (data) {
                if (history.size && history.size < 500 * 1000)
                    await history.set([ ...data, roast ])
                else
                    await history.set([ ...data.slice(-100), roast])
            }
            else
                await history.set([ roast ])
        } catch (err) {
            if (err instanceof Error && err.name === 'InvalidCharacterError')
                await history.set([ roast ])
        }
    }, [])

    const generate = useCallback(async () => {
        try {
            const res = await axios.post('/roasts', {
                playlistId,
                language
            })

            const generatedRoast = res.data as Roast
            setRoast(generatedRoast)
            await storeLocally(generatedRoast)
        } catch (err) {
            if (err instanceof AxiosError && err.response?.status === 404) 
                setErrorMsg('Playlist could not be found')
            else 
                setErrorMsg('Could not generate, try again')
        }
    }, [setRoast, storeLocally, language, playlistId])

    useEffect(() => {
        generate()
    }, [generate])

    return (
        <RoastBlock 
            errorMsg={errorMsg}
            roast={roast}
            playlistId={playlistId}
            marginAuto={marginAuto}
        />
    )
}

export default memo(RoastBlockPast)