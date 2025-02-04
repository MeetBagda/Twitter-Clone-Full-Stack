import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "./firebase";
  import { createContext, useContext, useEffect, useState } from "react";
  
  const UserAuthContext = createContext();
  
  export const UserAuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
  
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
    function signIn(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
      return signOut(auth);
    }
    function googleSignIn() {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("Auth", currentUser);
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <UserAuthContext.Provider value={{ user, logIn, signIn, logOut, googleSignIn }}>
        {children}
      </UserAuthContext.Provider>
    );
  };
  
  export function useUserAuth() {
    return useContext(UserAuthContext);
  }