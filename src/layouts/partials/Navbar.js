import style from "@/layouts/DefaultLayout.module.scss";

const Navbar = (props) => {

    const links = new Map();

    return (
        <div className={`${style["default-layout__container"]}`}>
            <nav>
                <ul>
                    <li>Lien 1</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;