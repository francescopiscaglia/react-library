import MainMenu from "../components/MainMenu";

export default function HomePage() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>

                <MainMenu />
            </header>

            <main>
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum dolores omnis laudantium molestiae voluptas, eveniet exercitationem inventore. Dolor voluptates, atque ratione consectetur debitis nulla odio perferendis laborum voluptate excepturi!</p>
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>

    );
};