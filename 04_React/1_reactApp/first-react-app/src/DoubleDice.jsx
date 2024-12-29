export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const styles = { color: num1 === num2 ? 'green' : 'red'}
    return (
        <div className="DoubleDice" >
            <h2 style={styles}>Double Dice</h2>
            {num1 === num2 && <h3 style={styles}>You Win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}






// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? "You Win!" : "You Lose:( "
//     return (
//         <div>
//             <h2>{ result }</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }