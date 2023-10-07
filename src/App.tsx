import ProjectCards from "./ProjectCard";
import UserProfileCard from "./UserCard";
import "./App.css";
import "./marco/navbar/navbar.css";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container">
        <section className="side">
          <UserProfileCard />
        </section>
        <section className="middle">
          <ProjectCards />
        </section>
      </div>
    </>
  );
}

export default App;
