import MainMenu from "./MainMenu"
import reactLogo from "../assets/react.svg"

export default function AppHeader() {
    return (
        <header>
            <div className="logo">
                <img src={reactLogo} alt="" />
            </div>

            <MainMenu />
        </header>
    );
};