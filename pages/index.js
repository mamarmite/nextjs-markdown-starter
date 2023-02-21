import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/partials/Header";

const home = () => {
    return (
        <DefaultLayout>
            <Header title={"Welcome to Next.js!"} />
            <section>
                <p>Main section!</p>
            </section>
        </DefaultLayout>
    );
}

export default home
