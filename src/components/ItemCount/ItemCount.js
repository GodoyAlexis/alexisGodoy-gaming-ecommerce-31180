import "./ItemCount.css"
import { useState } from "react";
import { Button } from "react-bootstrap"

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    return(
        <div className="containerCount">
            <Button variant="outline-info" onClick={()=>{if(count > 1){setCount(count - 1)}}}>-</Button>
            <p className="countSelected">{count}</p>
            <Button variant="outline-info" onClick={()=>{if(count <= stock){setCount(count + 1)}}}>+</Button>
        </div>
    )
}

export default ItemCount;