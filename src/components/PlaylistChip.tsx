import { FC, memo } from "react"

type PlaylistChipProps = {
    playlistId?: string
}

const PlaylistChip: FC<PlaylistChipProps> = ({ playlistId }) => {
    return (
        <h2>
            <a 
                href={`https://open.spotify.com/playlist/${playlistId}`} 
                className="bg-gray-800 text-sm px-4 py-2 box-border rounded-full shadow-lg text-gray-300 hover:bg-gray-600 focus-visible:outline-offset-4"
                target="_blank"
                aria-label={`Link to playlist ${playlistId}`}
            >
                {playlistId}
            </a>
        </h2>
    )
}

export default memo(PlaylistChip)