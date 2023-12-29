import AllProducts from "../../Components/HomePage/AllProducts"
import Footer from "../../Components/HomePage/Footer"
import NavBar from "../../Components/HomePage/NavBar"
import ProductsWelcome from "../../Components/HomePage/ProductsWelcome"


const ProductsPage = () => {
  return (
    <>
        <NavBar/>
        <ProductsWelcome/>
        <AllProducts/>
        <Footer/>
    </>
  )
}

export default ProductsPage
