


const Buttons =({filteredBooks,filtBook})=>{

    return(
        <div className="booksButton">
            <button className="books" onClick={()=>filteredBooks("ужасы")}>ужасы</button>
            <button className="books" onClick={()=>filteredBooks("детектив")}>детективы</button>
            <button className="books" onClick={()=>filteredBooks("роман")}>романы</button>
            <button className="books" onClick={()=>filteredBooks("фантастика")}>фантастика</button>
            <button className="books" onClick={()=>filteredBooks("триллер")}>триллеры</button>
            <button className="books" onClick={()=> filtBook("все")} >все книги  </button>
        </div>
    )
}
export default Buttons;