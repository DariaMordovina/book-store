import { useState } from "react";
import ChangeQuantity from "../cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart} from "../redux/counterCart";

const OneSaleBook =({id,name,image,avtor,price,books,priceTwo})=>{
    const[quantity,setQuantity]=useState(1)
    const dispatch=useDispatch();
    return(
        <div className="product-card" key="id">
            <img className="Picture" src={image} alt="" width="200px" height="300px" />
        <div>
            <div className="product-info">
<h3 className="Name">{name}</h3>
<p className="Avtor">{avtor}</p>
<h4 className="Price"> <ins>{price} ₽ </ins> <br /> <del>{priceTwo} ₽</del>  </h4>
<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
<button className="btnBuy" onClick={()=>{dispatch(addItemToCart({books,quantity}));}}>купить</button>
            </div>
            </div>
        </div>
    )
}
export default OneSaleBook;