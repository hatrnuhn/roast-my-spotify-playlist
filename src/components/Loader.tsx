import { memo } from "react"

const Loader = () => {
    return (
        <>
            <span className="loader block" aria-live="polite" aria-label="Generating response"/>
        </>
    )
}

export default memo(Loader)