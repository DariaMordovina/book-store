const Sale =()=>{
    return(
        <div className="parentSale">
            <div className="saleOne">
                <h2 className="saleH2">На гребне волны</h2>
                <p className="saleP">Дарим фирменный бокс при покупке <b> 4 книг </b> 
                по промокоду <b> БОМБОРА </b></p> 
                <p className="salePromo">БОМБОРА</p>  
            </div>
            <div className="saleOne">
                <h2 className="saleH2">Клетки да линейки</h2>
                <p className="saleP"> -20% при покупке <b>пяти тетрадей </b> в клетку или линейку по промокоду <b> ТЕТРАДЬ </b></p> 
                <p className="salePromo">ТЕТРАДЬ</p>  
            </div>
            <div className="saleOne">
                <h2 className="saleH2">Время творить</h2>
                <p className="saleP"> -25% при покупке <b>трех наборов </b>акварели, гуаши или пластилина "Гамма" по промокоду</p> 
                <p className="salePromo">ГАММА</p>  
            </div>
        </div>
    )
}
export default Sale;