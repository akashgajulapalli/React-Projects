import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./question";

const Main = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="page">
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.length > 0
            ? questions.map((item) => {
                return <SingleQuestion key={item.id}  data={item}   />;
              })
            : null}
        </section>
      </div>
    </main>
  );
};

export default Main;
