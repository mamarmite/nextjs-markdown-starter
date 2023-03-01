import LayoutBlock from "@/layouts/partials/LayoutBlock";

const Navbar = (props) => {

    const {
        className
    } = props;

    //const links = new Map();

    return (
        <LayoutBlock className={"gx-0"}>
            <nav className={"navbar navbar-nav navbar-expand-lg bg-body-tertiary"}>

                <div className={`main-nav ${className}`}>
                    <a className="navbar-brand" href={"/"}>
                        <img src={"/mamarmite/principal-clementine-mam-logo.svg"} alt={"logo mamarmite orange clementine peel"} width="auto" height="40" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#MainNav" aria-controls="MainNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse"} id="MainNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href={"/portfolio"} className={"nav-link"} title={"Portfolio"} rel={"follow"}>Portfolio</a></li>
                            <li className="nav-item"><a href={"/services"} className={"nav-link"} title={"Comment je peux améliorer votre situation"} rel={"follow"}>Mes services</a></li>
                            <li className="nav-item"><a href={"/open-source"} className={"nav-link"} title={"Projets open source"} rel={"follow"}>Open source</a></li>
                            <li className="nav-item"><a href={"/a-propos"} className={"nav-link"} title={"À propos de moi"} rel={"follow"}>À Propos</a></li>
                            <li className="nav-item"><a href={"/blogue"} className={"nav-link"} title={"Blogue"} rel={"follow"}>Blogue</a></li>
                            <li className="nav-item"><a href={"/lab"} className={"nav-link"} title={"Laboratoire et expérimentations"} rel={"follow"}>Lab</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </LayoutBlock>
    );
}

export default Navbar;