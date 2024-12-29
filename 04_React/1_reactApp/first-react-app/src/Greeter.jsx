export default function Greeter({ person = "everyone", from = "jay" }) {
  const roll = Math.floor(Math.random() * 100) + 1;
  return (
    <>
      <h1>Hi there, {person}!!</h1>
      <h2>--{from}</h2>
    </>
  );
}
