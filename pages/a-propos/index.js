import pageController from "@/pageContent/PagesController";
import PageLayout from "@/pageContent/layouts/PageLayout";


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
        <PageLayout
            page={page} />
    );
}

