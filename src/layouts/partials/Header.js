import LayoutBlock from "@/layouts/partials/LayoutBlock";

const Header = (props) => {

    const {
        title
    } = props;

    return (
        <LayoutBlock tag={"header"}>
            <h1>{title}</h1>
        </LayoutBlock>
    );
}

export default Header;