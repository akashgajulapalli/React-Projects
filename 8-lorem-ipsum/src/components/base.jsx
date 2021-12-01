import React, { useState } from "react";
import data from "./data";

const Base = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length - 1) {
      amount = 8;
    }
    let dataToPrint = data.slice(0, amount);
    setText(dataToPrint);
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-article">
        {text.length > 0
          ? text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          : null}
      </article>
    </section>
  );
};

export default Base;
