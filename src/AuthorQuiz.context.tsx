import React, { useState } from "react";
import { IState } from "./types";
import { authors } from "./authors";
import { shuffle, sample } from "underscore";
import { Authors, Author } from "./types";

const getTurnData = (authors: Author[]): Authors => {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, [] as string[]);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  let newAuth = authors.find((author) =>
    author.books.some((title: string) => title === answer)
  );
  if (!newAuth) {
    newAuth = authors[0];
  }
  return {
    books: fourRandomBooks,
    author: newAuth,
  };
};

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

      const [highlight, setHighlight] =useState("");
      // const state = {
      //   turnData: getTurnData(authors),
      //   highlight: "",
      // }; 
const turnData = getTurnData(authors);
      const onContinue = () => {
    return {
      turnData: getTurnData(authors),
      highlight: "",
    };
  };

  return (
    // <AuthorQuizContext.Provider value={{state:state,onContinue:onContinue}}>
    <AuthorQuizContext.Provider value={{ turnData, highlight,onContinue }}>
      {children}
    </AuthorQuizContext.Provider>
  );
};
