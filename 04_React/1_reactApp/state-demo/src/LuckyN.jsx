import { useState } from "react";
import { getRolls, sum } from "./utils"
import Dice from "./Dice";

function LuckyN({numDice = 2, goal = 7}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinnner = sum(dice) === goal;
    const roll = () => setDice(getRolls(numDice));

    return (
        <main className="LuckyN">
            <h1>
                Luncky{goal} {isWinnner && "You Win!"}
            </h1>
            <Dice dice={dice} />
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    );
};
    

export default LuckyN;   
  

