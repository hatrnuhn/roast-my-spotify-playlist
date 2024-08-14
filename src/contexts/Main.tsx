import { createContext, Dispatch, SetStateAction } from "react";

type MainContextProps = {
    apiUrl: string
    language: 'EN' | 'ID'
    setLanguage: Dispatch<SetStateAction<'EN' | 'ID'>> | null
}

export const MainContext = createContext<MainContextProps>({
    apiUrl: 'https://roast-my-playlist-api.hatrnuhn.my.id',
    language: 'EN',
    setLanguage: null
})