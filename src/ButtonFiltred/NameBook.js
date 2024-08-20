
import OneBook from "./OneBook";


const NameBook=({book})=>{
    return(
        <div className="product" >
{book.map((books =>{
    const{id,name,genre,image,avtor,price}=books;
    return(
       <OneBook books={books}/>

    )
})) }
        </div>
    )
}
export default NameBook;