import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import { getCartItems } from "../redux/counterCart";


const NavCart=()=>{
    const cartItems=useSelector(getCartItems);
    return(
        <div>
        <h1>корзина</h1>
      {cartItems.map(cartItem=> <CartItem cartItem={cartItem}/>)}
        </div>
    )
}
export default NavCart;