import Navbar from "@/layouts/partials/Navbar";
import Footer from "@/layouts/partials/Footer";
import style from "@/layouts/DefaultLayout.module.scss";

const DefaultLayout = ({children}) => {

    return (
        <>
            <Navbar />
            <main className={`${style["default-layout"]}`}>
                <div className={`${style["default-layout__container"]}`}>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout
