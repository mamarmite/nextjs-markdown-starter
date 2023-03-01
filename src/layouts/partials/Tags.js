
const Tags = (props) => {

    const {
        list,
        label
    } = props;

    return (
        <div>
            {
                label &&
            <label>{label}</label>
            }
            <ul className={"list-unstyled list-inline"}>
                {
                    list.map((tag, index) => {
                        return (
                            <li className={"list-inline-item"} key={`${tag} ${index}`}>
                                <span className={"badge bg-primary"}>{tag}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Tags;