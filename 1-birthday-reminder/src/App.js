import { useState } from "react";
import "./App.css";
import List from "./components/list";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={handleClick}> Clear All</button>
      </section>
    </main>
  );
}

export default App;
