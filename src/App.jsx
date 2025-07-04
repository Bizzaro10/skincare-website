import Header from './sections/Header.jsx'
import Hero from "./sections/Hero.jsx";
import Info from "./sections/Info.jsx";
import Product from "./sections/Product.jsx";
import Header2 from "./sections/Header2.jsx";
import Buy from "./sections/Buy.jsx";
import Section2 from "./sections/Section2.jsx";
import Cart from "./sections/Cart.jsx";
import Faq from "./sections/Faq.jsx";
import Footer from "./sections/Footer.jsx";
import Loading from "./sections/Loading.jsx";


const App = () => {
    return (
        <main className="overflow-hidden">
            <Loading/>
            <Header/>
            <Hero/>
            <Info/>
            <Product/>
            <Header2/>
            <Buy/>
            <Section2/>
            <Cart/>
            <Faq/>
            <Footer/>
        </main>
    )
}
export default App

