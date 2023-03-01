import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";
import pageController from "@/pages/PagesController";
import portfolioController from "@/portfolio/PortfolioController";
import {loadMarkdownBySlug} from "@/markdown/Loader";
import Project from "@/portfolio/layouts/Project";



export async function getStaticProps() {

    const page = await pageController.getBySlug("portfolio");
    const portfolioProjects = await portfolioController.getAll();

    const projectPromises = portfolioProjects.map(async (slug) => {
        return await loadMarkdownBySlug(slug, "portfolio");
    });

    return {
        props: {
            page: page,
            projects: await Promise.all(projectPromises)
        }
    }
}

const home = (props) => {
    const {
        page,
        projects
    } = props;
    return (
        <DefaultLayout title={props?.title ?? "Portfolio"} meta={props?.date}>
            <LayoutBlock>
                <div dangerouslySetInnerHTML={{ __html: page?.contentHtml }} />
            </LayoutBlock>
            <LayoutBlock>
                {
                    projects.length > 0 &&
                    projects.map((project) => {
                        return (
                            <Project {...project} />
                        )
                    })
                }
            </LayoutBlock>
        </DefaultLayout>
    );
}

export default home
