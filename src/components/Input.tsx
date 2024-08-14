import { ChangeEventHandler, Dispatch, FC, FormEventHandler, memo, SetStateAction, useRef, useState } from "react"
import useMainContext from "../hooks"
import InputErrorMsg from "./InputErrorMsg"

type InputProps = {
    pushFn: Dispatch<SetStateAction<string[]>>
}

const Input: FC<InputProps> = ({ pushFn }) => {
    const [input, setinput] = useState('')
    const { language, setLanguage } = useMainContext()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setinput(() => e.target.value)
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        setIsButtonDisabled(true)
        setTimeout(() => setIsButtonDisabled(false), 1000)

        if (new RegExp('^[a-zA-Z0-9_-]{22}$').test(input))
            pushFn(a => [...a, input])
        else {
            if (inputRef.current)
                inputRef.current.focus()
            setErrorMsg(`${input} is not a valid playlist ID`)
            setTimeout(() => setErrorMsg(''), 2000)
        }
    }

    const switchLanguage = () => {
        switch (language) {
            case 'EN':
                setLanguage!('ID')
                break;
            case 'ID':
                setLanguage!('EN')
                break
        }
    }

    return (
        <div className="flex gap-2.5 lg:gap-5 border-t shadow border-gray-700 pt-5 px-5 lg:px-10" style={{ boxShadow: " 0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)" }}>
            <button type="button" onClick={() => switchLanguage()} className="uppercase text-sm font-bold min-w-5" aria-label={`Button: switch responses language, current language ${language==='EN' ? 'English' : "Bahasa Indonesia"}`} disabled={isButtonDisabled}>
                <span aria-hidden>{language}</span>
            </button>
            <form onSubmit={onSubmit} className="flex grow gap-2.5 lg:gap-5 items-center relative">
                <input type="text" name="input-id" placeholder="" className="text-black indent-4 grow rounded-lg py-1" onChange={onChange} ref={inputRef} aria-label="TextField: Enter your Spotify's playlist ID here"/>
                {errorMsg && <InputErrorMsg  errorMsg={errorMsg}/>}
                <button className="h-6 w-6 block" type="submit" aria-label="Button: generate response">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default memo(Input)