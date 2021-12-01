import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./component/loading";
import Tours from "./component/tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => {
      return item.id !== id;
    });
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tempTours = await response.json();
      setLoading(false);
      setTours(tempTours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleClick = () => {
    fetchTours();
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      {tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={handleClick}>
            refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
