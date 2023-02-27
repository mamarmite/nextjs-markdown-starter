import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import {getPage} from "@/controllers/PagesController";

export async function getStaticProps(context) {

    const page = await getPage("blogue");

    return {
        props: {
            page: page
        }
    };
}

const home = (props) => {
    return (
        <DefaultLayout title={props?.page?.title ?? "Blogue"} meta={props?.page?.date}>
            <LayoutBlock>
                <p>Blogui blogui gui</p>
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
