import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";
import reactLogo from "../assets/react.svg"

export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={reactLogo} alt="" />
                </div>

                <MainMenu />
            </header>

            <main>
                <Outlet /> {/* Tutto quello che metto nei componenti viene inserito qui */}
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>

    );
};