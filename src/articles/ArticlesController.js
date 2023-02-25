import {getMarkdownFilesSlugs, loadMarkdownBySlug} from "@/markdown/Loader";

const folder = "articles";

export const getArticleBySlug = async (slug) => {
    return await loadMarkdownBySlug(slug, folder);
}

export const getArticlesPath = async () => {
    return await getMarkdownFilesSlugs(folder);
}