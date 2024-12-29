import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const incrementby1 = () => {
        setCount(count + 1)
    };
    const setToTen = () => {
        setCount(10)
    };
    const incrementby3 = () => {
        setCount(count =>count + 1)
        setCount(count =>count + 1)
        setCount(count =>count + 1)
    };
    return (
        <div>
            <h1 >Count: {count}</h1>
            <button onClick={incrementby1}>+1</button>

            <button onClick={incrementby3}>+3</button>
            <button onClick={setToTen}>?</button>
        </div>
    )
}