import { useContext } from "react"
import { MainContext } from "../contexts/Main"

const useMainContext = () => useContext(MainContext)

export default useMainContext