import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [selectedCourse, setSelectedCourse] = useState(1);

  return (
    <AppContext.Provider value={[selectedCourse, setSelectedCourse]}>
      {props.children}
    </AppContext.Provider>
  );
};
