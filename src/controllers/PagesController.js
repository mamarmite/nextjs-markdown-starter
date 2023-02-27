import {getMarkdownFilesSlugs, loadMarkdownBySlug} from "@/markdown/Loader";

const folder = "pages";

export const getPage = async (slug) => {
    return await loadMarkdownBySlug(slug, folder);
}