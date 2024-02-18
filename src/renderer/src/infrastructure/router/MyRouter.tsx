import { Route, Routes } from "react-router-dom";
import { DefaultDashboard } from "../../presentation/pages/dashboards/default/DefaultDashboard";
import { MenuPage } from "../../presentation/pages/menupage/MenuPage";

export function MyRouter() {
    return (
        <Routes>
            <Route element={<DefaultDashboard />} path='/' />
            <Route element={<MenuPage />} path='/page-2' />
        </Routes>
    );
}