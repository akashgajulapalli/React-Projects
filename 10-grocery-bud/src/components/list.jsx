import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = (props) => {
  const { items, removeItem, editItem } = props;
  const handleClick1 = (id) => {
    removeItem(id);
  };
  const handleClick2 = (id) => {
    console.log(id);
    editItem(id);
  };
  return (
    <div className="grocery-list">
      {items.map((item) => {
        //   console.log(item)
        const { id , title } = item;
        // console.log(id);
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit onClick={() => handleClick2(id)} />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash onClick={() => handleClick1(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
