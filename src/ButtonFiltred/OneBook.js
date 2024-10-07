import { useState } from "react";
import ChangeQuantity from "../cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/counterCart";

const OneBook = ({books}) =>{
    const[quantity,setQuantity]=useState(1)
    const dispatch=useDispatch();
    return(
        <div className="product-card" key="id">
            <img className="Picture" src={books.image} alt="" width="200px" height="300px" />
        <div>
            <div className="product-info">
<h3 className="Name">{books.name}</h3>
<p className="Avtor">{books.avtor}</p>
<h4 className="Price">{books.price} ₽</h4>
<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
<button className="btnBuy" onClick={()=>{dispatch(addItemToCart({books,quantity}));}}>купить</button>
            </div>
            </div>
        </div>
    )
}
export default OneBook;