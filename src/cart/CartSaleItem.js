import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/counterCart";
import DataSaleBooks from "../sale/DataSaleBooks";





const CartSaleItem=({cartItem})=>{
const bookName=DataSaleBooks.find(item=>item.id===cartItem.bookId)

const dispatch=useDispatch()

    return(
       <div>

        <div className="containerCartGL">

        <div className="containerCart" >
        <img  src={bookName.image} alt="" width="80px" height="120px"/>
        <p className="textCart ">{bookName.name}</p>
        </div>
       
        <div className="containerCart Two">
        <p className="textCart">{cartItem.quantity} шт</p>
        <p className="textCart">{bookName.price*cartItem.quantity} ₽ <br />
        ({bookName.price} ₽ шт.)</p>
        <span onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
        <img  className="iconDelete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width='25px' height="30px"/>
        </span>
        </div>
        </div>
        

        </div>
    )
}
export default CartSaleItem;