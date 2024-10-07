import { getTotalPrice, getTotalQuantity } from "../redux/counterCart";
import { useSelector } from "react-redux";



const TotalQuantityImg=()=>{

const totalQuantity=useSelector(getTotalQuantity)

    return(
        <p className="Rasst">{totalQuantity}</p>
    )
}
export default TotalQuantityImg;