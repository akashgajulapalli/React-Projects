import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const Base = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
      let slider = setInterval(() => {
          setIndex(index + 1 )
      },3000)
      return () => {
          clearInterval(slider)
      }
  } , [index])

  const handleClick1 = () => {
    setIndex(index - 1);
  };
  const handleClick2 = () => {
    setIndex(index + 1);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.length > 0
          ? people.map((item, itemIndex) => {
              const { id, image, name, title, quote } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeSlide";
              }
              if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })
          : null}
        <button className="prev" onClick={handleClick1}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={handleClick2}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Base;
