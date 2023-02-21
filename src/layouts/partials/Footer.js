import style from "@/layouts/DefaultLayout.module.scss";

const Footer = (props) => {

    return (
        <footer>
            <header className={`${style["default-layout__container"]}`}>
                <h3>Footer</h3>
            </header>
        </footer>
    );
}

export default Footer;