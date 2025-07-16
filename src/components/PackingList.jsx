import React, { useState } from "react";

export default function PackingList({
  items,
  onRemoveItems,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") sortedList = items;
  if (sortBy === "description")
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            onRemoveItems={onRemoveItems}
            handleToggleItem={handleToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> sort by input</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onRemoveItems, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItems(item.id)}>❌</button>
    </li>
  );
}
