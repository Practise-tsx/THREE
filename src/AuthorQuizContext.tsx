import React, { useState } from "react";
import { getTurnData, authors } from "./index";
import { IState} from "./types";

export const AuthorQuizContext = React.createContext<IState>({
    // state:{turnData:()=>{},highlight:''},
    onContinue:()=>{

    }
});


export const AuthorQuizProvider: React.FC = ({ children }) => {
//    var state={
//         turnData: getTurnData(authors),
//         highlight: "",
//     }
    const onContinue = () => {
    return {
      turnData: getTurnData(authors),
      highlight: "",
    };
  };

  return (
    // <AuthorQuizContext.Provider value={{state:state,onContinue:onContinue}}>
    <AuthorQuizContext.Provider value={{onContinue:onContinue}}>

      {children}
    </AuthorQuizContext.Provider>
  );
};
