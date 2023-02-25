import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

const home = () => {
    return (
        <DefaultLayout>
            <Header title={"Blogue"} />
            <LayoutBlock>
                <p>Blogui blogui gui</p>
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
