import Header from "../components/Header"
import MainPage from "../pages/Main"

const MainLayout = () => {
    return (
        <div className="h-screen w-screen flex flex-col">
            <Header />
            <MainPage />
        </div>
    )
}

export default MainLayout