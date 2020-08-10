import React,{useState,useContext} from "react";
import "./index.css";
import "./App.css";
import "./bootstrap.min.css";
import AuthorQuiz from "./AuthorQuiz";
import { Authors, Author } from "./types";

import {AuthorQuizContext} from "./AuthorQuiz.context"
import "./index";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthorWrapper } from "./AuthorWrapper";
import { authors } from "./authors";

import AddAuthorForm from "./AddAuthorForm"


export const App = () => {
  var m = useContext(AuthorQuizContext);
  console.log(m);
  // console.log(m.state.highlight);
  console.log(m.turnData);

  const [high, sethigh] = useState(0);

  function OnAnswerSelected(answer: string) {
    const isCorrect = m.turnData.author.books.some((book) => book === answer);
    m.highlight = isCorrect ? "correct" : "wrong";
    // console.log(m.state.highlight);
    console.log(answer);
    sethigh(high+1);
  }
  // var author=[];  
  // const authors: Author[] = [
  //   {
  //     name: "",
  //     imageUrl: "",
  //     imageSource: "",
  //     books: [""],
  //   }
  // ];
  
  return (
    
      
      <BrowserRouter>
<Route exact path='/' render={(props) => ( <AuthorQuiz  authors={authors}turnData={m.turnData} highlight={m.highlight} onAnswerSelected={OnAnswerSelected} />  )}/>
      <Route path="/add" render={(props)=> (<AddAuthorForm {...props} onAddAuthor={(author: Author) => {
        authors.push(author);debugger;       props.history.push("/");
        sethigh(high+1);

      }}/>)}/>
      </BrowserRouter>
  
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
