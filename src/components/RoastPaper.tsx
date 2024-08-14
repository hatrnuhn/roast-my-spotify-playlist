import { FC, memo } from "react"
import Loader from "./Loader"
import { Roast } from "../types"

type RoastPaperProps = {
    roast?: Roast,
}

const RoastPaper: FC<RoastPaperProps> = ({ roast }) => {
    return (
        <p className="text-sm rounded-lg bg-green-600 box-border px-6 py-3 shadow-lg text-justify flex flex-col" aria-label={`"For playlist ID: ${roast?.playlistId}`}>
            {
                !roast ?
                    <Loader /> :
                    <>
                        <>{roast.content}</>
                        <span className="text-xs self-end mt-2">{new Date(roast.createdAt).toLocaleString(navigator.language)}</span>
                    </>
            }
        </p>
    )
}

export default memo(RoastPaper)