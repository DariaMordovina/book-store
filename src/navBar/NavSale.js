import Sale from "../sale/Sale";
import SaleBooks from "../sale/SaleBooks";

const NavSale=()=>{
    return(
        <div>
           <h1 className="Akcii">Акции и промокоды</h1> 
           <Sale/>
           <SaleBooks/>
        </div>
    )
}
export default NavSale;