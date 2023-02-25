import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

const home = () => {
    return (
        <DefaultLayout>
            <Header title={"CTA principal"} />
            <LayoutBlock>
                <p>Main section!</p>
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
