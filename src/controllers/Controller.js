import {
    getMarkdownFilesSlugsForPaths,
    getMarkdownList,
    loadMarkdownBySlug
} from "@/markdown/Loader";

class Controller {

    constructor(folder) {
        this.folder = folder;
    }

    async getAll() {
        return await getMarkdownList(this.folder);
    }
    async getBySlug(slug) {
        return await loadMarkdownBySlug(slug, this.folder);
    }
    async getPath() {
        return await getMarkdownFilesSlugsForPaths(this.folder);
    }
}
export default Controller;