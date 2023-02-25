

const LayoutBlock = ({children, ...props}) => {

    const {
        tag,
        className
    } = props
    const mainTag = tag ?? "div";

    return (
        <mainTag className={className}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        {children}
                    </div>
                </div>
            </div>
        </mainTag>
    );
}

export default LayoutBlock;
