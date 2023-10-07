import useUserInfo from "./useUserInfo";
import { Button } from "react-bootstrap";
import { useAuth } from "./firebase";
import { GoogleAuthProvider } from "@firebase/auth";

const UserProfileCard = () => {
  let user = useUserInfo();
  let auth = useAuth();
  if (!user) {
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
    <div className="card">
      <img
        src={user.photoURL ?? "https://placedog.net/200"}
        className="card-img-top"
        alt="User"
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <Button onClick={auth.signOut}>Logout</Button>
      </div>
    </div>
  );
};

export default UserProfileCard;
