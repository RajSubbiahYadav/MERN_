import { useState } from "react";
import "./Toggler.css"

export default function TogglerCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);

    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
        countNum();
    }
    const countNum = () => setCount(count + 1);
    
    return (
        <div>
        <p className="Toggler" onClick={toggleIsHappy}>
          {isHappy? "😊" : "😖"}  
            </p>
            <p className="count" >Count : {count}</p>
            {/* <button onClick={countNum}>Click</button> */}
        </div>
    )
}

