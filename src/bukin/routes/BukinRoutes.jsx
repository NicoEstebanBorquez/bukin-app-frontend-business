import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { HomePage } from "../pages/HomePage/HomePage"
import { CreateBusinessPage } from "../pages/CreatePage/CreateBusinessPage"

export const BukinRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="crear" element={<CreateBusinessPage />} />

                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
            </div>

        </>
    )
}
