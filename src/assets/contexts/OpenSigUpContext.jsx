import { createContext, useState } from "react";

export const OpensignUpContext = createContext();

const OpensignUpProvider = ({ children }) => {
  const [togglevisibilitySignUp, setTogglevisibilitySignUp] = useState("");
  const [allowToggleVisibility, setAllowToggleVisibility] = useState(false);
  const [togglevisibilityCart, setTogglevisibilityCart] = useState(false);
  const [togglevisibilitySearch, setTogglevisibilitySearch] = useState(false);
  const [togglevisibility2, setTogglevisibility2] = useState(false);
  const [togglevisibility, setTogglevisibility] = useState(false);

  return (
    <OpensignUpContext.Provider
      value={{
        togglevisibilitySignUp,
        setTogglevisibilitySignUp,
        allowToggleVisibility,
        setAllowToggleVisibility,
        togglevisibilityCart,
        setTogglevisibilityCart,
        togglevisibilitySearch,
        setTogglevisibilitySearch,
        togglevisibility,
        setTogglevisibility,
        togglevisibility2,
        setTogglevisibility2,
      }}
    >
      {children}
    </OpensignUpContext.Provider>
  );
};

export default OpensignUpProvider;
