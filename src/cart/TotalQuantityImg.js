import { getTotalPrice, getTotalQuantity } from "../redux/counterCart";
import { useSelector } from "react-redux";



const TotalQuantityImg=()=>{

const totalQuantity=useSelector(getTotalQuantity)

    return(
        <div>
            <p>{totalQuantity}</p>
        </div>
    )
}
export default TotalQuantityImg;