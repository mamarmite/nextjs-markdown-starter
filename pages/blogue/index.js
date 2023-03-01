
import pageController from "@/pageContent/PagesController";
import articlesController from "@/articles/ArticlesController";
import Post from "@/articles/Layouts/Post";
import PageLayout from "@/pageContent/layouts/PageLayout";


export async function getStaticProps() {

    return {
        props: {
            page: await pageController.getBySlug("blogue"),
            posts: await articlesController.getAllData()
        }
    };
}

const BlogueIndex = (props) => {

    const {
        page,
        posts
    } = props;

    return (
        <PageLayout
            list={posts}
            ListComponent={Post}
            page={page} />
    );
}

export default BlogueIndex
