import Tags from "@/layouts/partials/Tags";

const Service = (props) => {
    const {
        slug,
        title,
        date,
        description,
        tags
    } = props;
    const baseURI = "/services/";
    return (
        <div>
            <h2><a href={baseURI+slug} rel={"follow"} title={title}>{title}</a></h2>
            <p><small>{date}</small></p>
            <p>{description}</p>
            <Tags list={tags} label={"tags"} />
        </div>
    );
}
export default Service;