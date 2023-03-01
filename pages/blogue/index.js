import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import pageController from "@/controllers/PagesController";
import {loadMarkdownBySlug} from "@/markdown/Loader";
import articlesController from "@/articles/ArticlesController";
import Post from "@/articles/Layouts/Post";

export async function getStaticProps() {

    const page = await pageController.getBySlug("blogue");
    const postSlugs = await articlesController.getAll();

    const postsPromises = postSlugs.map(async (slug) => {
        return await loadMarkdownBySlug(slug, "articles");
    });

    return {
        props: {
            page: page,
            posts: await Promise.all(postsPromises)
        }
    };
}

const home = (props) => {
    const {
        page,
        posts
    } = props;

    return (
        <DefaultLayout title={props?.page?.title ?? "Blogue"} meta={props?.page?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: page?.contentHtml }} />
            </LayoutBlock>
            <LayoutBlock>
                {
                    posts.length > 0 &&
                    posts.map((post) => {
                        return (
                            <Post {...post} />
                        )
                    })
                }
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
