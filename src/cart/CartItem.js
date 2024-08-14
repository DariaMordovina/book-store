import DataBooks from "../ButtonFiltred/DataBooks";

const CartItem=({cartItem})=>{

    const bookName=DataBooks.find(item=>item.id===cartItem.bookId)

    return(
        <div className="containerCart">
            <img src={bookName.image} alt="" width="110px" height="120px"/>
         
        <p>{bookName.name}</p>
        <p>{cartItem.quantity} шт</p>
        </div>
    )
}
export default CartItem;