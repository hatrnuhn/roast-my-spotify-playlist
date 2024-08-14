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
        <p className={`text-black absolute -top-4 text-xs bg-red-800 text-gray-300 font-semibold px-2 rounded-md transition-all ${show ? 'input-error-active' : 'input-error'}`} role='alert'>{errorMsg}</p>
    )
}

export default memo(InputErrorMsg)