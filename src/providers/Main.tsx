import { FC, ReactNode, useState } from "react"
import { MainContext } from "../contexts/Main"
import useMainContext from "../hooks"

type MainProviderProps = {
    children: ReactNode
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
    const { apiUrl } = useMainContext()
    const [language, setLanguage] = useState<'EN' | 'ID'>('EN')

    return (
        <MainContext.Provider value={{ apiUrl, language, setLanguage }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider