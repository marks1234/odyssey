import useUserInfo from "./useUserInfo";
import { Button, Spinner } from "react-bootstrap";
import { useAuth } from "./firebase";
import { GoogleAuthProvider } from "@firebase/auth";
import { useNavigate } from "react-router";

const UserProfileCard = () => {
  let user = useUserInfo();
  let auth = useAuth();
  const navigate = useNavigate();
  if (user.loading) {
    return <Spinner animation="border" />;
  }
  if (!user.uid) {
    return (
      <div>
        <Button
          style={{ width: "100%" }}
          onClick={auth.signInWithProvider(new GoogleAuthProvider())}
        >
          Login with Google
        </Button>
      </div>
    );
  }
  return (
    <div className="card" onClick={() => navigate("/profile")}>
      <img
        src={user.photoURL ?? "https://placedog.net/200"}
        className="card-img-top"
        alt="User"
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        {user.projects && <h5>Projects</h5>}
        <ul className="text-start">
          {[...(user.projects ?? [])].map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
        <Button onClick={auth.signOut}>Logout</Button>
      </div>
    </div>
  );
};

export default UserProfileCard;
