import { createContext, useState } from "react";

export const CheckingCardContext = createContext();

// This usedContext  is necessary bcs the "checkCard" is been used in OrderPlaced page to reload the page and clear the Cart. Before that, despite the localstorage has been cleared as the Paymentent is complited, the cart would not automatically clear.
const CheckingCardProvider = ({ children }) => {
  const [checkCard, setCheckCard] = useState(false);

  return <CheckingCardContext.Provider value={{ checkCard, setCheckCard }}>{children}</CheckingCardContext.Provider>;
};

export default CheckingCardProvider;
