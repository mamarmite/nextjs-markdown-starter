import DefaultLayout from "@/layouts/DefaultLayout";
import articlesController from "@/articles/ArticlesController";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

export const getStaticPaths = async () => {
    return await articlesController.getPath();
};

export async function getStaticProps(context) {

    const post = await articlesController.getBySlug(context.params.slug);

    return {
        props: {
            post: post
        }
    };
}

export default function Article(props) {
    const {
        post
    } = props;

    return (
        <DefaultLayout title={post?.title ?? "Blogue"} meta={post?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: post?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

