import pageController from "@/pageContent/PagesController";
import servicesController from "@/services/ServicesController";
import Service from "@/services/layouts/Service";
import PageLayout from "@/pageContent/layouts/PageLayout";



export async function getStaticProps() {

    return {
        props: {
            page: await pageController.getBySlug("portfolio"),
            projects: await servicesController.getAllData()
        }
    }
}

const ServicesIndex = (props) => {
    const {
        page,
        services
    } = props;

    return (
        <PageLayout
            list={services}
            ListComponent={Service}
            page={page} />
    );
}

export default ServicesIndex
