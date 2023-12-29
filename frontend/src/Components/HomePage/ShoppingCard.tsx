import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

interface ShoppingCardProps {
    className: string;
}

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }

  interface ShoppingCart {
    cart: CartItem[];
    
  }
  

const ShoppingCard: React.FC<ShoppingCardProps> = function ({ className }) {

   const shoppingCart = useSelector((state: ShoppingCart) => state.cart);
    return (
        <>
         <NavBar/> 
        <Link to="/shoppingbox">
            <div className={className}>
                {shoppingCart.length}
            </div>
        </Link>
        </>
    );
}



export default ShoppingCard;
