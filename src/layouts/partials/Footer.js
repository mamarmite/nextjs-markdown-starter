import style from "@/layouts/DefaultLayout.module.scss";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

const Footer = (props) => {

    return (
        <>
        <LayoutBlock tag={"footer"} className={"py-5"}>
            <header>
                <h3>Vous avez atteint la zone infini, attention où vous cliquez.</h3>
            </header>
            <section className={"row"}>
                <nav className={"col"}>
                    <ul className={"nav flex-column"}>
                        <li className="nav-item">
                            <a className="nav-link" href={"/systeme"} title={"Design Système"}>Design system</a>
                        </li>
                    </ul>
                </nav>
                <nav className={"col"}>
                    <ul className={"nav flex-column"}>
                        <li className="nav-item">
                            <a className="nav-link" href={"/systeme"} title={"Design Système"}>Design system</a>
                        </li>
                    </ul>
                </nav>
                <nav className={"col"}>
                    <ul className={"nav flex-column"}>
                        <li className="nav-item">
                            <a className="nav-link" href={"/systeme"} title={"Design Système"}>Design system</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </LayoutBlock>
        <LayoutBlock tag={"footer"} className={"py-1"}>
            <footer>
                Mamarmite - ever boiling ideas.
            </footer>
        </LayoutBlock>
        </>
    );
}

export default Footer;