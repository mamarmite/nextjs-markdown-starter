import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import pageController from "@/controllers/PagesController";


export async function getStaticProps() {

    return {
        props: {
            page: await pageController.getBySlug("a-propos")
        }
    };
}

export default function AboutMe(props) {
    const {page} = props;

    return (
        <DefaultLayout title={page?.title ?? "title"} meta={page?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: page?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

