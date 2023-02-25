import style from "@/layouts/DefaultLayout.module.scss";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

const Footer = (props) => {

    return (
        <LayoutBlock tag={"footer"} className={"py-3"}>
            <header>
                <h3>Vous avez atteint la zone infini, attention où vous cliquez.</h3>
            </header>
            <section>
                info x
            </section>
            <section>
                info y
            </section>
            <section>
                info Z
            </section>
            <footer>
                Mamarmite - connecter vos outils
            </footer>
        </LayoutBlock>
    );
}

export default Footer;