import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import pageController from "@/pageContent/PagesController";


export async function getStaticProps() {

    const page = await pageController.getBySlug("home");

    return {
        props: {
            page: page
        }
    };
}

const home = (props) => {
    const {
        page
    } = props;
    return (
        <DefaultLayout title={page?.title ?? "Ever boiling ideas"} meta={page?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: page?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
