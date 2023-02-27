import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import {getPage} from "@/controllers/PagesController";


export async function getStaticProps(context) {

    const page = await getPage("portfolio");

    return {
        props: {
            page: page
        }
    };
}

const home = (props) => {
    return (
        <DefaultLayout title={props?.title ?? "Portfolio"} meta={props?.date}>
            <LayoutBlock>
                <p>Ici gi mon expertise caché au travers des résultats.</p>
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
