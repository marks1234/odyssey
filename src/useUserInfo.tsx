import { useState, useEffect } from "react";
import { auth } from "./firebase";

interface User {
  name: string | null;
  email: string | null;
  photoURL: string | null;
}

function useUserInfo() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          name: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export default useUserInfo;
