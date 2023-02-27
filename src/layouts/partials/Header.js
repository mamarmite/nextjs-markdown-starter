import LayoutBlock from "@/layouts/partials/LayoutBlock";

const Header = (props) => {

    const {
        title,
        meta,
    } = props;

    return (
        <LayoutBlock tag={"header"} className={"py-5"}>
            <h1>{title}</h1>
            <p>{meta}</p>
        </LayoutBlock>
    );
}

export default Header;