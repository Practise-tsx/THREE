import React from "react";
import "./index.css";
import "./App.css";
import "./bootstrap.min.css";
import AuthorQuiz from "./AuthorQuiz";
import { shuffle, sample } from "underscore";
import { Authors, Author } from "./types";
import { authors } from "./authors";
import "./index";

export const getTurnData = (authors: Author[]): Authors => {
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
let state = {
  turnData: getTurnData(authors),
  highlight: "",
};
function onAnswerSelected(answer: string) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? "correct" : "wrong";
  console.log(state.highlight);
  console.log(answer);
}

export const App = () => {
  // var m = useContext(AuthorQuizContext);
  // console.log(m);

  return (
    <>
      <AuthorQuiz
        {...state}
        onAnswerSelected={onAnswerSelected}
        // onContinue={m.onContinue}
      />
    </>
  );
};

// export const UserContext = React.createContext(state);

// function render() {
//   debugger;
// }

// render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
