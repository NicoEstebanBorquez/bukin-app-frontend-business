import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { BukinRoutes } from "../bukin/routes/BukinRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<BukinRoutes />} />
            </Routes>
        </>
    )
}
