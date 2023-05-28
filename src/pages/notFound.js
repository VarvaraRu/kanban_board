import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { NotFoundComponent } from "../components/notFoundComponent/notFound"

export const NotFoundPage =() => {
    return (
        <>
            <Header/>
            <NotFoundComponent/>
            <Footer/>
        </>
    )
}