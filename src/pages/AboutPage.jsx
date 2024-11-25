import MainMenu from "../components/MainMenu";

export default function AboutPage() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>

                <MainMenu />
            </header>

            <main>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere deleniti cupiditate ea doloribus incidunt accusantium natus, voluptates corporis. Soluta at unde ratione consequatur voluptate, voluptates expedita quam inventore provident.</p>
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>
    );
};