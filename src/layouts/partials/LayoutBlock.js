

const LayoutBlock = ({children, ...props}) => {

    const {
        tag,
        className
    } = props
    const MainTag = tag ?? "div";

    return (
        <MainTag className={className}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        {children}
                    </div>
                </div>
            </div>
        </MainTag>
    );
}

export default LayoutBlock;
