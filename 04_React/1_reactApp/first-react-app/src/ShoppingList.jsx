import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          item={i.item}
          quantity={i.quantity}
          completed={i.completed}
        />
      ))}
    </ul>
  );
}

// const data = [
//     { item: "eggs", quantity: "12", completed: true },
//     { item: "milk", quantity: "1", completed: false },
//     { item: "bread", quantity: "2", completed: true },
//     { item: "cheese", quantity: "5", completed: false },
//     { item: "butter", quantity: "2", completed: false },
//     { item: "sugar", quantity: "1", completed: true },
//   ];
