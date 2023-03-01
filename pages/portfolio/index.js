import pageController from "@/pageContent/PagesController";
import portfolioController from "@/portfolio/PortfolioController";
import Project from "@/portfolio/layouts/Project";
import PageLayout from "@/pageContent/layouts/PageLayout";



export async function getStaticProps() {

    return {
        props: {
            page: await pageController.getBySlug("portfolio"),
            projects: await portfolioController.getAllData()
        }
    }
}


const PortfolioIndex = (props) => {
    const {
        page,
        projects
    } = props;
    return (
        <PageLayout
            list={projects}
            ListComponent={Project}
            page={page} />
    );
}

export default PortfolioIndex
