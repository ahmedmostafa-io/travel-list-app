import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percantage = Math.round((numPacked / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percantage === 100
            ? `you 've got everyThing! ready to go ✈️`
            : `💼 you have ${numItems} of your list,and you already picked ${numPacked}
          (${percantage}%)`}
        </em>
      </footer>
    </>
  );
}
