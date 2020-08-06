import React, { useState } from "react";
import { getTurnData } from "./App";
import { IState } from "./types";
import { authors } from "./authors";

export const AuthorQuizContext = React.createContext<IState>(
  // state:{turnData:()=>{},highlight:''},
  {} as IState
);

export const AuthorQuizProvider: React.FC = ({ children }) => {
  //    var state={
  //         turnData: getTurnData(authors),
  //         highlight: "",
  //     }
  // const [highlight, sethighlightTheme] = useState<Highlight>("blue");
      // sethighlightTheme(highlight === "blue" ? "dark" : "blue");

  const highlight = "";
  const onContinue = () => {
    return {
      turnData: getTurnData(authors),
      highlight: "",
    };
  };

  return (
    // <AuthorQuizContext.Provider value={{state:state,onContinue:onContinue}}>
    <AuthorQuizContext.Provider value={{ highlight, onContinue }}>
      {children}
    </AuthorQuizContext.Provider>
  );
};
