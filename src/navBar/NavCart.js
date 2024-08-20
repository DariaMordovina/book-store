import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import CartSaleItem from "../cart/CartSaleItem";
import TotalPrice from "../cart/TotalPrice";
import TotalQuantity from "../cart/TotalQuantity";
import { getCartItems } from "../redux/counterCart";



const NavCart=()=>{
    const cartItems=useSelector(getCartItems);
    return(
        <div>
        <h1 className="Korzina">корзина</h1>
        <div>
      {cartItems.map(cartItem=> <CartItem cartItem={cartItem}/>)}
      
      </div>
      
      <div className="totalQ" >
      <TotalQuantity/>
      </div>
      <div className="totalP">
      <TotalPrice/>
      </div>
        </div>
      
    )
}
export default NavCart;