import { remark } from "remark";
import matter from "gray-matter";
import html from 'remark-html';
import fs from "fs";
import path from "path";

//basé sur le tutoriel : https://nextjs.org/learn/basics/dynamic-routes/render-markdown

const markdownBasePath = 'content';
const cache = new Map();

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
    const cacheKey = "FilesSlugs"+targetPath;
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    const mdxExpression = /\.mdx?$/;
    const mdExpression = /\.md?$/;
    const expression = extension === "mdx" ? mdxExpression : mdExpression;

    cache.set(cacheKey, await fs.readdirSync( path.resolve(path.join(`${markdownBasePath}/${targetPath}`)) )
        .map((path) => path.replace(expression, ''))
    );
    return cache.get(cacheKey);
}

export async function getMarkdownFilesSlugsForPaths(targetPath, extension="mdx")  {

    const files = await getMarkdownFilesSlugs(targetPath, extension);
    const slugs = files.map((slug) => ({ params: { slug } }));

    return {
        paths: slugs,
        fallback: false
    }
}

export async function getMarkdownList(targetPath, extension = 'mdx') {
    return await getMarkdownFilesSlugs(targetPath, extension);
}
