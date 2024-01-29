import { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { auth } from "../utils/Firebase";

export const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [btnToggle, setBtnToggle] = useState(false); //to move between signup and login.
  const [errorSignIn, setErrorSignIn] = useState(false); //to display message of error in Login page
  const [errorSignUp, setErrorSignUp] = useState(false); //to display message of error in Sign UP page and allow or not the page to move to login

  // ------------------------------------------------------------------------------------
  const db = getFirestore();

  const signUp = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      const dockef = addDoc(collection(db, "myCollection"), {
        displayName: name,
      });
      localStorage.setItem("localStorageUserName", JSON.stringify(name));
      setErrorSignUp(false);
    } catch (error) {
      console.log(error);
      setErrorSignUp(true);
      throw new Error("Invalid email");
    }
  };

  // ---------------------------------------------------------------------

  //In this code bellow is fro doing the login and capture the user's name than send it to local store, to be displayed in navbar. As showed in Navabar page line 29.
  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userInfoName = user.providerData[0].displayName;
      localStorage.setItem("localStorageUserName", JSON.stringify(userInfoName));
      setErrorSignIn(false);
      console.log(errorSignIn);
    } catch (error) {
      setErrorSignIn(true);
      console.error("Error signing in:", error.message);
      throw new Error("Invalid email or password. Please try again.");
    }
  };

  // ---------------------------------------------------------------------

  const logOut = () => {
    localStorage.setItem("localStorageUserName", JSON.stringify(""));
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      return setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // ---------------------------------------------------------------------
  return (
    <userAuthContext.Provider value={{ signUp, logIn, logOut, user, btnToggle, setBtnToggle, errorSignIn, errorSignUp }}>{children}</userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
