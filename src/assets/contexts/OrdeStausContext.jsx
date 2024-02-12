// This context is for capture the reducer from ReducerBcg and be able to use it in both, Footer and Orderstatus file. Once the change should occur only on Orderstatus's page, the way to do it is through usecontext orthewise the change just can be happening locally. Meaning, if the reducer (even if it is the same reducer) is called in footer's file the change will happen only in footer's file, the same for Orderstatus page. But with useContext the reducer can be called in one file and the change can happen in another file.

import React, { createContext, useReducer, useContext, useState } from "react";
import ReducerBcg, { initialState } from "../pages/ordertStatus/ReducerBcg";

const BcgContext = createContext();
useState;

export const BcgProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerBcg, initialState); //Grabbing the reducer from ReducerBcg and send to footer's file and Orderstatus's file.
  const [trackerData, setTrackerData] = useState(true);

  return <BcgContext.Provider value={{ state, dispatch, trackerData, setTrackerData }}>{children}</BcgContext.Provider>;
};

// Custom hook to use the context
export const useBcg = () => useContext(BcgContext);

export default BcgProvider;
