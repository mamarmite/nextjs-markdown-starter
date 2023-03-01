import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import servicesController from "@/services/ServicesController";

export const getStaticPaths = async () => {
    return await servicesController.getPath();
};

export async function getStaticProps(context) {
    return {
        props: {
            service: await servicesController.getBySlug(context.params.slug)
        }
    };
}

export default function ServiceBySlug(props) {
    const {
        service
    } = props;

    return (
        <DefaultLayout title={service?.title ?? "Projet"} meta={service?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: service?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

