

const LayoutBlock = ({children, ...props}) => {

    const {
        tag,
        className,
        containerClass
    } = props
    const MainTag = tag ?? "div";
    const containerClasses = containerClass ?? "container";

    return (
        <MainTag className={`${containerClasses} ${className}`}>
            <div className={"row"}>
                <div className={"col"}>
                    {children}
                </div>
            </div>
        </MainTag>
    );
}

export default LayoutBlock;
