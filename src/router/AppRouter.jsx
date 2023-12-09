import { Route, Routes } from "react-router-dom";


import { LoginPage } from "../auth";
import { PublicRoute } from "../bukin/routes/PublicRoute";
import { PrivateRoute } from "../bukin/routes/PrivateRoute";
import { BukinRoutes } from "../bukin/routes/BukinRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        {/* Si hubieran más rutas públicas hay una forma de hacerlo explicado en el vídeo 216 */}
                        <LoginPage />
                    </PublicRoute>
                } />
                {/*<Route path="login" element={<LoginPage />} />*/}

                <Route path="/*" element={
                    <PrivateRoute>
                        <BukinRoutes />
                    </PrivateRoute>
                } />
                {/*<Route path="/*" element={<BukinRoutes />} />*/}

            </Routes>
        </>
    )
}
