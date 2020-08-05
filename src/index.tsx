import React,{useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import "./bootstrap.min.css";
import AuthorQuiz from "./AuthorQuiz";
import { shuffle, sample } from "underscore";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import AddAuthorForm from "./AddAuthorForm";
// import { UserProvider } from "./Context";
import { Authors, Author } from "./types";
import {AuthorQuizContext} from "./AuthorQuizContext"

export const authors: Author[] = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktwin.jpeg",
    imageSource: "Wikimedia Commons",
    books: ["The Adventures of Huckleberry Finn"],
  },
  {
    name: "Joseph Conrad",
    imageUrl: "images/authors/josephconrad.jpeg",
    imageSource: "Wikimedia Commons",
    books: ["Heart of darkness"],
  },
  {
    name: "J.K. Rowling",
    imageUrl: "images/authors/jkrowling.jpeg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Daniel Ogren",
    books: ["Harry Potter and the Sorcerers Stone"],
  },
  {
    name: "Stephen King",
    imageUrl: "images/authors/stephenking.jpeg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Pinguino",
    books: ["The Shining", "IT"],
  },
];
 
export const getTurnData=(authors: Author[]): Authors =>{
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
}

let state = resetState();

function onAnswerSelected(answer: string) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? "correct" : "wrong";
  debugger;
  render();
}

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: "",
  };
}
function onContinue(){
  state=resetState();
  render();
}
function App() {
  var m = useContext(AuthorQuizContext);
  console.log(m);

  return (
    <AuthorQuiz
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={onContinue}
    />
  );
}

const AuthorWrapper = withRouter(({ history }) => {
  return (
    <AddAuthorForm
      onAddAuthor={(author: Author) => {
        authors.push(author);
        history.push("/");
      }}
    />
  );
});
// export const UserContext = React.createContext(state);

const UserProvider = AuthorQuizContext.Provider;

function render() {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        {/* <UserProvider  value={{state:state,onContinue:onContinue}}> */}
        <UserProvider  value={{onContinue:onContinue}}>

          <Route exact path="/" component={App}></Route>
          <Route exact path="/Add" component={AuthorWrapper}></Route>
        </UserProvider>
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
