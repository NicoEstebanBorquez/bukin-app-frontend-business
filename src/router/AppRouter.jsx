import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../ui/components/Navbar";
import { HomePage } from "../bukin/pages/HomePage/HomePage";
import { CreateBusinessPage } from "../bukin/pages/CreatePage/CreateBusinessPage";


export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="crear" element={<CreateBusinessPage />} />
            


                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
