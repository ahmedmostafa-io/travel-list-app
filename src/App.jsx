import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";

// * Items
export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("travelItems");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("travelItems", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all Lists"
    );
    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItem}></Form>
        <PackingList
          items={items}
          handleToggleItem={handleToggleItem}
          onRemoveItems={handleDeleteItem}
          handleClearList={handleClearList}
          key={items.id}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
