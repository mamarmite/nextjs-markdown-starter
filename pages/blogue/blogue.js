import { remark } from "remark";
import matter from "gray-matter";
import html from 'remark-html';
import fs from "fs";
import path from "path";

//basé sur le tutoriel : https://nextjs.org/learn/basics/dynamic-routes/render-markdown

export async function getPostData(slug) {
    const fullPath = path.join('articles', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}
