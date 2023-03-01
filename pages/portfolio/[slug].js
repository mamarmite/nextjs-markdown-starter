import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import portfolioController from "@/portfolio/PortfolioController";

export const getStaticPaths = async () => {
    return await portfolioController.getPath();
};

export async function getStaticProps(context) {

    const project = await portfolioController.getBySlug(context.params.slug);

    return {
        props: {
            project: project
        }
    };
}

export default function Project(props) {
    const {
        project
    } = props;

    return (
        <DefaultLayout title={project?.title ?? "Projet"} meta={project?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: project?.contentHtml }} />
            </LayoutBlock>
        </DefaultLayout>
    );
}

