import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import {getPage} from "@/controllers/PagesController";


export async function getStaticProps(context) {

    const page = await getPage("design-system");

    return {
        props: {
            page: page
        }
    };
}

export default function Systeme(props) {
    const {page} = props;

    return (
        <DefaultLayout title={page?.title ?? "title"} meta={page?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: page?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

