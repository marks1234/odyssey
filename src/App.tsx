import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectCards from "./ProjectCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <section className="side">
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px",
              height: "100%",
            }}
          ></div>
        </section>
        <section className="middle">
          <ProjectCards />
        </section>
        <section className="side">
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px",
              height: "100%",
            }}
          ></div>
        </section>
      </div>
    </>
  );
}

export default App;
