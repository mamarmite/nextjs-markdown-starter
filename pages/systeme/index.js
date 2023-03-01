import pageController from "@/pageContent/PagesController";
import PageLayout from "@/pageContent/layouts/PageLayout";


export async function getStaticProps() {

    return {
        props: {
            page: await pageController.getBySlug("design-system")
        }
    };
}

export default function Systeme(props) {
    const {page} = props;

    return (
        <PageLayout
            page={page} />
    );
}

