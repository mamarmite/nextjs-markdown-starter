import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import pageController from "@/controllers/PagesController";
import servicesController from "@/services/ServicesController";
import Service from "@/services/layouts/Service";



export async function getStaticProps() {

    const page = await pageController.getBySlug("services");
    const services = await servicesController.getAll();

    const servicesPromises = services.map(async (slug) => {
        return await servicesController.getBySlug(slug);
    });

    return {
        props: {
            page: page,
            services: await Promise.all(servicesPromises)
        }
    }
}

const ServicesIndex = (props) => {
    const {
        page,
        services
    } = props;
    return (
        <DefaultLayout title={page?.title ?? "Portfolio"} meta={page?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: page?.contentHtml }} />
            </LayoutBlock>
            <LayoutBlock>
                {
                    services.length > 0 &&
                    services.map((service) => {
                        return (
                            <Service {...service} />
                        )
                    })
                }
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default ServicesIndex
