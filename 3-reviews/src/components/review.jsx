import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./../App.css";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const handleClick1 = () => {
    let newIndex = index - 1;
    let temp = checkNumber(newIndex);
    setIndex(temp);
  };
  const handleClick2 = () => {
    let newIndex = index + 1;
    let temp = checkNumber(newIndex);
    setIndex(temp);
  };
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const handleClick3 = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const temp = checkNumber(randomNumber);
    setIndex(temp);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handleClick1}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleClick2}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleClick3}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
