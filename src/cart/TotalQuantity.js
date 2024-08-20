import { getTotalPrice, getTotalQuantity } from "../redux/counterCart";
import { useSelector } from "react-redux";



const TotalQuantity=()=>{

const totalQuantity=useSelector(getTotalQuantity)

    return(
        <div>
            <h3>Кол-во: {totalQuantity} шт</h3>
        </div>
    )
}
export default TotalQuantity;