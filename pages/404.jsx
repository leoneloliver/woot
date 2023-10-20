import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselProducts from "../components/CarouselProducts";
export default function Custom404() {
    return <>
        <Header />
        <div className="container mx-auto px-4 max-w-screen-xl mt-8 pt-8 pb-6">

        <h3 className="text-3xl font-semibold text-green-700">
          Page not found! =(
        </h3>
        <CarouselProducts />
        
      </div>
        <Footer />
    </>
}