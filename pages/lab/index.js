import PageLayout from "@/pageContent/layouts/PageLayout";
import pageController from "@/pageContent/PagesController";


export async function getStaticProps() {

    return {
        props: {
            page: await pageController.getBySlug("lab")
        }
    }
}

const LabIndex = (props) => {

    return (
        <PageLayout {...props} />
    );
}

export default LabIndex;