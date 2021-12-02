import React, { useEffect, useState } from "react";
import Alert from "./alert";
import List from "./list";

const getLocalStorage = () => {
  let list = localStorage.getItem('list'); 
  if(list) {
    return JSON.parse(list)
  }
  else{
    return []
  }
}

const Base = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //Display error
      showAlert(true, "please enter the value", "danger");
    } else if (name && isEditing) {
      //Edit item
      const newList = list.map((item) => {
          if(item.id === editId){
              return {
                  id: item.id,
                  title:name                  
              }
          }
      })  

      setList(newList)
      setName('');
      setEditId(null);
      setIsEditing(false)
      showAlert(true,'value changed' , 'success');
      
    } else {
      //Add Item
      showAlert(true, "Item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (x = false, y = "", z = "") => {
    const tempObj = {
      show: x,
      msg: y,
      type: z,
    };
    setAlert(tempObj);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "Item Deleted", "danger");
    const filteredList = list.filter((item) => {
      return item.id !== id;
    });
    setList(filteredList);
  };
  const editItem = (id) => {
      const specificItem = list.find((item) => {
          return item.id === id
      })
      setIsEditing(true);
      setEditId(id);
      setName(specificItem.title);
  }
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  } , [list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show ? (
          <Alert obj={alert} removeAlert={showAlert} list={list} />
        ) : null}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        {list.length > 0 ? (
          <>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={handleClick}>
              clear items
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Base;
