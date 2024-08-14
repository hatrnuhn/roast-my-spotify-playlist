import { memo, useCallback, useEffect, useRef, useState } from "react"
import Input from "../components/Input"
import history from "../libs/history"
import { Roast } from "../types"
import RoastBlockPast from "../components/RoastBlockPast"
import RoastBlockPlaylistID from "../components/RoastBlockPlaylistID"

const MainPage = () => {
    const [requestPlaylistIds, setRequestPlaylistIds] = useState<string[]>([])
    const [pastRoasts, setPastRoasts] = useState<Roast[]>([])
    const [isGettingPastRoastsError, setIsGettingPastRoastsError] = useState(false)
    const divRef = useRef<HTMLDivElement>(null)

    const getPastRoasts = useCallback(async () => {
        try {
            const data = await history.get()
            if (data)
                setPastRoasts(data)    
        } catch (err) {
            console.error(err)
            setIsGettingPastRoastsError(true)
        }
    }, [setPastRoasts])

    useEffect(() => {
        getPastRoasts()
    }, [getPastRoasts])

    useEffect(() => {
        divRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [requestPlaylistIds])

    return (
        <main className="grow flex flex-col overflow-hidden pb-5">
            <div className="grow flex flex-col overflow-scroll pt-5">
                {!isGettingPastRoastsError && pastRoasts.map((r, i) => (
                    <RoastBlockPast roast={r} index={i} key={i} />
                ))}
                {requestPlaylistIds.map((pId, i) => (
                    <RoastBlockPlaylistID playlistId={pId} key={i} marginAuto={pastRoasts.length ? false : i === 0 ? true : false}/>
                ))}
                <div ref={divRef}/>
            </div>
            <Input pushFn={setRequestPlaylistIds}/>
        </main>
    )
}

export default memo(MainPage)