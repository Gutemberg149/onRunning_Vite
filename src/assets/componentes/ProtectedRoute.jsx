import { Navigate } from "react-router-dom";
// import { useUserAuth } from "../contexts/UserAuthContext";
import { useContext } from "react";
import { OpensignUpContext } from "../contexts/OpenSigUpContext";

const ProtectedRoute = ({ children }) => {
  const { setTogglevisibilitySignUp, setAllowToggleVisibility } = useContext(OpensignUpContext);

  // const { user } = useUserAuth();

  //In UserAuthContext, when the user sign-up orlog-in or sing-out it sets local storage true or false, allowing the user to proceed to checkout page or not. By using the useUserAuth (line 9) instead of local storage when the checkout page was refresh it would automatically send the user to signUpPage (it was a bug).
  let user = JSON.parse(localStorage.getItem("userAuth"));
  if (!user) {
    setTogglevisibilitySignUp(false);
    setAllowToggleVisibility(false);

    return <Navigate to={"/signUpPage"} />;
  } else {
  }

  return children;
};

export default ProtectedRoute;
