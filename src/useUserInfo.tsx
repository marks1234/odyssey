import { useState, useEffect } from "react";
import { db, useAuth } from "./firebase";
import { doc, onSnapshot } from "@firebase/firestore";

interface User {
  name: string | null;
  email: string | null;
  photoURL: string | null;
}

function useUserInfo() {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const { user } = useAuth();
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) return;

    const userRef = doc(db, `users/${uid}`);

    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        setUserInfo(snapshot.data() as User);
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
