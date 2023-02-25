import { remark } from "remark";
import matter from "gray-matter";
import html from 'remark-html';
import fs from "fs";
import path from "path";

//basé sur le tutoriel : https://nextjs.org/learn/basics/dynamic-routes/render-markdown

const markdownBasePath = 'content';

export async function loadMarkdownBySlug(slug, targetPath, extension="mdx", encoding="utf8")
{
    const fullPath = path.join(`${markdownBasePath}/${targetPath}`, `${slug}.${extension}`);
    const fileContents = fs.readFileSync(fullPath, encoding);

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

export async function getMarkdownFilesSlugs(targetPath, extension="mdx") {
    const mdxExpression = /\.mdx?$/;
    const mdExpression = /\.md?$/;
    const expression = extension === "mdx" ? mdxExpression : mdExpression;

    return fs.readdirSync( path.resolve(path.join(`${markdownBasePath}/${targetPath}`)) )
        .map((path) => path.replace(expression, ''))
        .map((slug) => ({ params: { slug } }));
}
