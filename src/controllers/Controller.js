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

    async getAllData() {
        const slugList = await this.getAll();

        const promises = slugList.map(async (slug) => {
            return await this.getBySlug(slug);
        });

        return await Promise.all(promises);
    }
}

export default Controller;