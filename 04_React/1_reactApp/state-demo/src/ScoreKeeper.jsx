import { useState } from "react";

export default function ScoreKeeper() {
    const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });

    function incrementP1score() {
        setScore((oldScore) => {
            return { ...oldScore, p1Score: oldScore.p1Score + 1 };
        });
    }

    function incrementP2score() {
        setScore((oldScore) => {
            return { ...oldScore, p2Score: oldScore.p2Score + 1 };
        });
    }

        return (
            <div>
                <p>Player 1: {score.p1Score} </p>
                <p>Player 2: {score.p2Score} </p>
                <button onClick={incrementP1score}>+1 Player 1</button>
                <button onClick={incrementP2score}>+1 Player 2</button>
            </div>
        );
    }

// ====================================================================new

// // import { v4 as uuid } from "uuid"
// import { useState } from "react"
// export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
//     const [scores,setScores] = useState(new Array(numplayers).fill(0));
    
//     return (
//         <div>
//             <h1>ScoreKeeper</h1>
//             <ul>
//                 {scores.map((score, idx) => {
//                     return (
//                         <li key={idx}>
//                             Player{idx + 1} : {score}
//                             <button>+1</button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     )
// }













