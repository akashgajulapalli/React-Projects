import React, { Component } from "react";
import './tours.css';

const Tours = (props) => {
  const { tours } = props;

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>{tours.length > 0 ? tours.map((item) => {
          return <article className='singleTour'>
              <img src={item.image} alt={item.name} />
              <footer>
                  <div className="tour-info">
                      <h4>{item.name}</h4>
                      <h4 className="tourPrice">{item.price}</h4>
                  </div> 
                  <p>{item.info}</p>
                  <button>Not Intrested</button>
              </footer>

          </article>
      }) : null}</div>
    </section>
  );
};

export default Tours;
