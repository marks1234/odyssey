import ProjectCards from "./ProjectCard";
import UserProfileCard from "./UserCard";
import NavBar from "./marco/navbar/navbar";
import "./App.css";
import "./marco/navbar/navbar.css";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <section className="side">
          <UserProfileCard />
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
