import Navbar from "@/layouts/partials/Navbar";
import Footer from "@/layouts/partials/Footer";
import style from "@/layouts/DefaultLayout.module.scss";

const DefaultLayout = ({children}) => {

    return (
        <div className={"website container-fluid"}>
            <main className={`${style["default-layout"]} bg-white`}>
                <Navbar className={"bg-white"} />
                <div className={"content"}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
