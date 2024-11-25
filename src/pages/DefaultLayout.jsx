import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />

            <main>
                <Outlet /> {/* Tutto quello che metto nei componenti viene inserito qui */}
            </main>

            <AppFooter />
        </>
    );
};