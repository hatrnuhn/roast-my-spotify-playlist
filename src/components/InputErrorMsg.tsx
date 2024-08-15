import { FC, memo, useEffect, useState } from "react"

type InputErrorMsgProps = {
    errorMsg: string
}

const InputErrorMsg: FC<InputErrorMsgProps> = ({ errorMsg }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <p className={`absolute text-center translate-x-2 -top-4 text-xs bg-red-800 text-gray-200 font-semibold px-2 py-1 rounded-t-md pb-5 transition-all shadow ${show ? 'input-error-active' : 'input-error'}`} role='alert'>{errorMsg}</p>
    )
}

export default memo(InputErrorMsg)