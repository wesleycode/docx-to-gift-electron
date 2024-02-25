import { Route, Routes } from "react-router-dom";
import { DefaultDashboard } from "../../presentation/pages/dashboards/default/DefaultDashboard";
import { SettingsPage } from "../../presentation/pages/settingspage/SettingsPage";

export function MyRouter() {
    return (
        <Routes>
            <Route element={<DefaultDashboard />} path='/' />
            <Route element={<SettingsPage />} path='/settings' />
        </Routes>
    );
}