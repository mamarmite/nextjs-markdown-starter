import DefaultLayout from "@/layouts/DefaultLayout";
import {getArticleBySlug, getArticlesPath} from "@/articles/ArticlesController";
import LayoutBlock from "@/layouts/partials/LayoutBlock";

export const getStaticPaths = async () => {
    const paths = await getArticlesPath();
    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps(context) {

    const post = await getArticleBySlug(context.params.slug);

    return {
        props: {
            post: post
        }
    };
}

export default function Post(props) {
    const {post} = props;

    return (
        <DefaultLayout>
            <LayoutBlock>
                {post?.title ?? "title"}
                <br />
                {post?.slug ?? "slug"}
                <br />
                {post?.date ?? "date"}
                <br />
                <div dangerouslySetInnerHTML={{ __html: post?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

