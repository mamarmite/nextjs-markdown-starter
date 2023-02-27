import Navbar from "@/layouts/partials/Navbar";
import Footer from "@/layouts/partials/Footer";
import style from "@/layouts/DefaultLayout.module.scss";
import Header from "@/layouts/partials/Header";

const DefaultLayout = (props) => {

    const {
        title,
        meta,
        children
    } = props;

    return (
        <div className={"website container-fluid gx-0"}>
            <main className={`${style["default-layout"]} bg-white`}>
                <Navbar className={"bg-white"} />
                <Header title={title} meta={meta} />
                <div className={"content"}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
