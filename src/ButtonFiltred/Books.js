import { useState } from "react";
import Buttons from "./Buttons";
import DataBooks from "./DataBooks";
import NameBook from "./NameBook";

const Books=()=>{
    const [books,setBooks]=useState(DataBooks);
    
   
    const filterBook=(genre)=>{
        const newFilterBook=DataBooks.filter(element=>element.genre===genre);
        setBooks(newFilterBook)
    }
    const filterSeach=(seach)=>{
        const newFilteredSeach=DataBooks.filter(item=>item.seach===seach);
        setBooks(newFilteredSeach)
    }
    return(
        <div>
        <Buttons filteredBooks={filterBook} filtBook={filterSeach}/>
        <NameBook book={books}/>
        </div>
    )
}
export default Books;