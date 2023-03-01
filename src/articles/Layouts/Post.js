import Tags from "@/layouts/partials/Tags";

const Post = (props) => {
    const {
        slug,
        title,
        date,
        description,
        author,
        tags
    } = props;
    const baseURI = "/blogue/";
    return (
        <div>
            <h2><a href={baseURI+slug} rel={"follow"} title={title}>{title}</a></h2>
            <p><small>{author}</small>, <small>{date}</small></p>
            <p>{description}</p>
            <Tags list={tags} label={"tags"} />
        </div>
    );
}
export default Post;