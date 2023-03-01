import Tags from "@/layouts/partials/Tags";

const Project = (props) => {
    const {
        slug,
        title,
        date,
        description,
        client,
        clientFinal,
        services,
        technologies,
        tags
    } = props;
    const baseURI = "/portfolio/";
    return (
        <div>
            <h2><a href={baseURI+slug} rel={"follow"} title={title}>{title}</a></h2>
            <p><small>{date}</small></p>
            <p>{description}</p>
            <p>Client : {client}</p>
            <p>clientFinal : {clientFinal}</p>
            <Tags list={services} label={"Services"} />
            <Tags list={technologies} label={"Technologies"} />
            <Tags list={tags} label={"tags"} />
        </div>
    );
}
export default Project;