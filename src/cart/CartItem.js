
import { useDispatch } from "react-redux";
import DataBooks from "../ButtonFiltred/DataBooks";
import { removeItemFromCart } from "../redux/counterCart";





const CartItem=({cartItem})=>{

const dispatch=useDispatch()

    return(
       <div>

        <div className="containerCartGL">

        <div className="containerCart" >
        <img  src={cartItem.image} alt="" width="80px" height="120px"/>
        <p className="textCart ">{cartItem.name}</p>
        </div>
       
        <div className="containerCart Two">
        <p className="textCart">{cartItem.quantity} шт</p>
        <p className="textCart">{cartItem.price*cartItem.quantity} ₽ <br />
        ({cartItem.price} ₽ шт.)</p>
        <span onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
        <img  className="iconDelete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width='25px' height="30px"/>
        </span>
        </div>
        </div>
        

        </div>
    )
}
export default CartItem;