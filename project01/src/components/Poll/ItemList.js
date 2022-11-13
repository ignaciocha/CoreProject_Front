import React from "react";

const ItemList = ({ item, handleItem }) => {
  const itemCh = (event) => {
    handleItem(event.target.value);
  };

  return (
    <div>
      <div className="poll-item-section">
        <div className="poll-align-items-center">
          <input
            type="radio"
            id="option1"
            name="option"
            value={item}
            className="poll-item-view"
            onChange={itemCh}
          />
          <h4 className="poll-item-h">{item}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
