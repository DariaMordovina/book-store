import DataSaleBooks from "./DataSaleBooks";
import OneSaleBook from "./OneSaleBook";
import { useState } from "react";

const SaleBooks=()=>{
    const [books,setBooks]=useState(DataSaleBooks);
    
    return(
        <div className="product" >
        {books.map((books =>{
            const{id,name,genre,image,avtor,price}=books;
            return(
                
               <OneSaleBook books={books}/>
        
            )
        })) }
                </div>
    )
}
export default SaleBooks;