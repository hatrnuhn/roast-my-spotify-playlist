import { FC, memo } from "react"
import { Roast } from "../types"
import RoastBlock from "./RoastBlock"

type RoastBlockPastProps = {
    roast: Roast
    index: number
}

const RoastBlockPast: FC<RoastBlockPastProps> = ({ roast, index }) => {
    return (
        <RoastBlock 
            errorMsg={''}
            playlistId={roast?.playlistId}
            roast={roast}
            marginAuto={index === 0}
        />
    )
}

export default memo(RoastBlockPast)