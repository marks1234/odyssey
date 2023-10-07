// Import the functions you need from the SDKs you need
import { AuthProvider, User, getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrTeLxLDxnfyctBl5TaD8k1yzDC_1N8wA",
  authDomain: "odyssey-9d76e.firebaseapp.com",
  projectId: "odyssey-9d76e",
  storageBucket: "odyssey-9d76e.appspot.com",
  messagingSenderId: "874042016950",
  appId: "1:874042016950:web:037bdd7d1255013fe4d217",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const db = getFirestore(app);

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = () => {
    auth.signOut();
  };

  const signInWithProvider = (provider: AuthProvider) => {
    return () =>
      signInWithPopup(auth, provider).then((result) => {
        setDoc(doc(db, "users", result.user.uid), {
          name: result.user?.displayName,
          email: result.user?.email,
          photoURL: result.user?.photoURL,
        });
      });
  };

  const loggedIn = user != null;

  return {
    user,
    loading,
    auth,
    signOut,
    loggedIn,
    signInWithProvider,
  };
};
