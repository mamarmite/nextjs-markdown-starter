import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

const home = () => {
    return (
        <DefaultLayout>
            <Header title={"Portfolio"} />
            <LayoutBlock>
                <p>Ici gi mon expertise caché au travers des résultats.</p>
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
