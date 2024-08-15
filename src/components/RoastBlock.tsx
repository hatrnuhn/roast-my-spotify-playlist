import { FC, memo } from "react"
import { Roast } from "../types"
import PlaylistChip from "./PlaylistChip"
import RoastPaper from "./RoastPaper"

type RoastBlockProps = {
    errorMsg: string
    playlistId?: string
    roast?: Roast
    marginAuto?: boolean
}

const RoastBlock: FC<RoastBlockProps> = ({ errorMsg, marginAuto, playlistId, roast }) => {
    return (
        <article 
            className={`flex flex-col items-center gap-5 my-5 mx-5 lg:mx-10 ${marginAuto ? 'mt-auto' : ''}`}
            aria-live="polite"
            aria-busy={roast ? 'false' : 'true'}
            role={errorMsg ? 'alert' : 'article'}
        >
        {
            errorMsg.length > 0 ? 
                <p className="bg-red-800 text-gray-300 text-sm px-3 py-2 text-sm rounded-full text-center shadow">{errorMsg}</p> :
                <>
                    <PlaylistChip playlistId={playlistId}/>
                    <RoastPaper roast={roast} />
                </>
        }
        </article>
    )
}

export default memo(RoastBlock)