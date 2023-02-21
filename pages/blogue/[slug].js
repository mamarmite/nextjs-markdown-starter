import {getPostData} from "@/pages/blogue/blogue";
import DefaultLayout from "@/layouts/DefaultLayout";
import fs from 'fs';
import path from "path";

export const getStaticPaths = async () => {
    const paths = fs.readdirSync(path.resolve(path.join('articles')))
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps(context) {

    const post = await getPostData(context.params.slug);

    return {
        props: {
            post: post
        }
    };
}

export default function Post(props) {
    const {post} = props;

    return (
        <DefaultLayout>
            {post?.title ?? "title"}
            <br />
            {post?.slug ?? "slug"}
            <br />
            {post?.date ?? "date"}
            <br />
            <div dangerouslySetInnerHTML={{ __html: post?.contentHtml }} />
        </DefaultLayout>
    );
}

