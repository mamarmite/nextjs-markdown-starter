import style from "@/layouts/DefaultLayout.module.scss";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

const Navbar = (props) => {

    const {
        className
    } = props;

    const links = new Map();

    return (
        <LayoutBlock className={"main-nav" + className}>
            <nav className={"navbar navbar-nav bg-body-tertiary"}>
                <div className="container-fluid">
                    <a className="navbar-brand" href={"/"}>
                        Mamarmite
                    </a>

                    <ul className="nav">
                        <li className="nav-item"><a href={"/portfolio"} className={"nav-link"} title={"Portfolio"} rel={"follow"}>Portfolio</a></li>
                        <li className="nav-item"><a href={"/blogue"} className={"nav-link"} title={"Blogue"} rel={"follow"}>Blogue</a></li>
                    </ul>
                </div>
            </nav>
        </LayoutBlock>
    );
}

export default Navbar;