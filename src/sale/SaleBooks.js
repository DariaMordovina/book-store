import DataSaleBooks from "./DataSaleBooks";
import OneSaleBook from "./OneSaleBook";
import { useState } from "react";

const SaleBooks=()=>{
    
    return(
        <div className="product" >
        {DataSaleBooks.map((books =>{
            const{id,name,genge,image,avtor,price,priceTwo}=books;
            return(
                
               <OneSaleBook name={name} image={image} avtor={avtor} price={price} id={id} priceTwo={priceTwo} books={books} />
        
            )
        })) }
                </div>
    )
}
export default SaleBooks;