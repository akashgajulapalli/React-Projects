import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const Base = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");
  const getData = async () => {
    await axios.get(url).then((response) => {        
        const data = response.data;    
        const person = data.results[0];
        const {phone , email } = person;
        const {large} =person.picture;
        const { password } = person.login;
        const {first , last } = person.name;
        const {age} = person.dob;
        const {number , name } =person.location.street;
        const newPerson = {
            image:large,
            phone,
            email,
            password,
            age,
            street:`${number} ${name}`,
            name: `${first} ${last}`
        }
        setPerson(newPerson);
        setLoading(false);
        setTitle("name");
        setValue(newPerson.name);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleMouse = (e) => {
      if(e.target.classList.contains('icon')){
          const newValue = e.target.dataset.label;
          const print = person[newValue];
          setTitle(newValue);
          setValue(print)    
      }

  };
  const handleClick= () => {
      getData();
  };
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person ? person.image : defaultImage}
            alt="User"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleMouse}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleMouse}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleMouse}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleMouse}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleMouse}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleMouse}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={handleClick}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Base;
