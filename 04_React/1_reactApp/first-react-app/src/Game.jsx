export default function Game({ val1, val2, val3 }) {
  const Lucky = val1 === val2 && val1 === val3;
  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h2 style={{ color: Lucky ? "Green" : "red" }}>
        {Lucky ? "You Win!" : "You Lose!"}
      </h2>
          {/* <h3>{Lucky ? "Congrats" : ""}</h3> or */}
          {Lucky && <h3>Congrats</h3> }
    </div>
  );
}
