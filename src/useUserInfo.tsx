import { useState, useEffect } from "react";
import { db, useAuth } from "./firebase";
import { doc, onSnapshot } from "@firebase/firestore";

interface User {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
  projects: string[] | null;
}

function useUserInfo() {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const { user } = useAuth();
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) {
      setUserInfo(null);
      return;
    }

    const userRef = doc(db, `users/${uid}`);

    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        setUserInfo({ ...snapshot.data(), uid } as User);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [uid]);

  return userInfo;
}

export default useUserInfo;
