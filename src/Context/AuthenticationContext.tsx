import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';



interface User {
  email: string | null;
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signUp: () => {},
  logIn: () => {},
  logOut: () => {},
});

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setDoc(doc(db, 'users', email), {
          savedShows: [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log(error);
      });
  }

  function handleLogOut() {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? { email: currentUser.email } : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut: handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth(): { user: User | null; email: string | null } {
  const { user } = useContext(AuthContext);
  return { user, email: user?.email || null };
}
