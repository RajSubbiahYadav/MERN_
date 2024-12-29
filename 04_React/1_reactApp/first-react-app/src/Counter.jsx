// export default function Counter() {
//     let num = 0;
//     const incrementNum = () => {
//         num += 1;
//         console.log(num);
//     }
//     return (
//         <div>
//             <p>The Count is: {num}</p>
//             <button onClick={incrementNum}>Click</button>
//         </div>
//     )
// }


import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(5);
    console.log("COMPONENT HAS BEEN EXECUTED AGAIN!");
    console.log(`num : ${num}`)
    const changeNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>The Count is:{num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}