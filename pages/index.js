import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import {getPage} from "@/controllers/PagesController";


export async function getStaticProps(context) {

    const page = await getPage("home");

    return {
        props: {
            page: page
        }
    };
}

const home = (props) => {
    return (
        <DefaultLayout title={props?.page?.title ?? "Ever boiling ideas"} meta={props?.page?.date}>
            <LayoutBlock>
                <p>Main section!</p>
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
