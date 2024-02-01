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

  const [blockLinkDiv, setBlockLink] = useState(false);

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
      localStorage.setItem("userAuth", JSON.stringify(true)); //this LocalStoarge is to display the warning in Cart Page.
      setErrorSignUp(false);
      setBlockLink(true);
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
      localStorage.setItem("userAuth", JSON.stringify(true)); //this LocalStoarge is to display the warning in Cart Page.
      setBlockLink(true);
      setErrorSignIn(false);
    } catch (error) {
      setErrorSignIn(true);
      console.error("Error signing in:", error.message);
      throw new Error("Invalid email or password. Please try again.");
      localStorage.setItem("userAuth", JSON.stringify(false));
    }
  };

  // ---------------------------------------------------------------------

  const logOut = () => {
    localStorage.setItem("localStorageUserName", JSON.stringify(""));
    localStorage.setItem("userAuth", JSON.stringify(false));
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
    <userAuthContext.Provider value={{ signUp, logIn, logOut, user, btnToggle, setBtnToggle, errorSignIn, errorSignUp, blockLinkDiv, setBlockLink }}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
