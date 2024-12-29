// import "./App.css";
// import Chicken from './Chicken';
// import Greeter from './Greeter'
// import Die from './Die'
// import Listpicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';

// function App() {
//   return (
//     <div>
//       <Heading  text="Welcome!" />
//       <DoubleDice />
//       <DoubleDice />
//       <DoubleDice />

//       {/* <Listpicker values={[1,2,3]} />
//       <Listpicker values={["a","b","c"]} />
//       <Greeter person="Raj" from="Yadav" />
//       <Die numSides={12} />
//       <Greeter from="Yadav" />
//       <Greeter person="Akilan" />
//       <Die numSides={20} />
//       <Die />  */}

//     </div>
//     );
// }

//❤️💔💔🧡💛❤️‍🔥💔💖
//===============================================Game======================================
// import "./App.css";
// import Game from "./Game";
// export default function App() {
//   return (
//     <div>
//       <Game val1="❤️" val2="❤️" val3="❤️" />
//       <Game val1="❤️" val2="💔" val3="❤️" />
//     </div>
//   );
// }

//=====================================shopping list=========================================
// import "./App.css";
// import ShoppingList from "./ShoppingList";
// const data = [
//   { id: 1, item: "Eggs", quantity: "12", completed: true },
//   { id: 2, item: "Milk", quantity: "1", completed: false },
//   { id: 3, item: "Bread", quantity: "2", completed: true },
//   { id: 4, item: "Cheese", quantity: "5", completed: false },
//   { id: 5, item: "Butter", quantity: "2", completed: false },
//   { id: 6, item: "Sugar", quantity: "1", completed: true },
// ];

// function App() {
//   return (
//     <div>
//       <ShoppingList items={data} />
//     </div>
//   );
// }

// export default App;

//=============================================Property
// import "./App.css";
// import PropertyList from "./PropertyList";

// // const properties = [
// //   {id: 129031, name: "Bengal Forts Beach", rating: 4.8, price: 150},
// //   {id: 129032, name: "Delhi Supreame Court ", rating: 4.1, price: 120},
// //   {id: 129033, name: "Kerala Backwaters", rating: 4.76, price: 350},
// //   {id: 129034, name: "Goa Beach ", rating: 4.7, price: 250},
// //   {id: 129035, name: "Rajastan desert", rating: 4.8, price: 160},
// //   {id: 129036, name: "TamilNadu Cultures", rating: 4.9, price: 500},
// // ]

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// function App() {
//   return (
//     <PropertyList place={properties} />
//   )
// }

// export default App;


//==================================================================React EVENTS
// import "./App.css";
// import Clicker from "./Clicker";
// import Counter from "./Counter";
// import Form from "./Form";

// function App(){
//   return <div>
//   <Clicker message={"HI!!!!!!!!"} buttonText={"CLICK"} />
//   <Clicker message={"Plz stop clicking Me"} buttonText={"Dont Click me"} />
//   {/* <Form /> */}
// </div>
// }

// export default App;
//============================================================Counter
// import "./App.css";
// import Counter from "./Counter";
// import Toggler from "./Toggler";
// import TogglerCounter from "./ToggleCounter"
// // import Toggler from "./Toggler";

// function App() {
//   return (
//     <div>
//       <TogglerCounter />
//     </div>
//   )
// }

// export default App;

//=================================================================ColorBox
import "./App.css";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "lightGreen",
  "brown",
  "white",
  "oilve",
  "yellow",
  "darkgreen",
  "darkred",
  "darkblue",
  "darkgreen",
  "darkorange",
  "darkpurple",
  "darkbrown",
  "darkyellow"


]
function App() {
  return <ColorBoxGrid colors={colors} />
}

export default App;