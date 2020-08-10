import { AuthorQuizContext } from "./AuthorQuiz.context";
import React, { FC, useContext, useState } from "react";
import { App } from "./App";
import {Link} from "react-router-dom"
import {
  AuthorQuiZprops,
  BookProps,
  Mapping,
  TurnProps,
  ContinueProps,
} from "./types";

const Hero: FC = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};

const Book: FC<BookProps> = ({ title, onClick }) => {
  return (
    <div
      className="answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
};

const Turn: FC<TurnProps> = ({
  author,
  books,
  highlight,
  onAnswerSelected,
}) => {
  function highlightToBgColor(highlight: string): string {
    const mapping: Mapping = {
      none: "",
      correct: "green",
      wrong: "red",
    };
    return mapping[highlight];
  }
  console.log(highlight);
  return (
    <div
      className="row turn"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="author" />
      </div>
      <div className="col-6">
        {books.map((title: any) => (
          <p>{<Book title={title} key={title} onClick={onAnswerSelected} />}</p>
        ))}
      </div>
    </div>
  );
};

const Continue: FC<ContinueProps> = ({ show }) => {
  var { onContinue } = useContext(AuthorQuizContext);
  console.log(onContinue);

  function onPress(){
    var a = onContinue();
    console.log(a);
    window.location.reload();
  }
  return (
    <div className="row continue">
      {show ? (
        <div className="col-11">
          <button
            className="btn btn-primary btn-lg float-right"
            onClick={onPress}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};
const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="http://commons.wikimedia.org/wiki/Main_Page">
            Wikimedia Commons{" "}
          </a>
          and are in the public domain

        </p>
<p> <Link to = "/add"> Add Author </Link></p>
      </div>
    </div>
  );
};
const AuthorQuiz: FC<AuthorQuiZprops> = ({
  turnData,
  highlight,
  onAnswerSelected,
  authors,
  
}) => {
debugger;
authors.push();
console.log(authors);
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      ></Turn>
      <Continue show={highlight === "correct"} ></Continue>
      <Footer></Footer>
    </div>
  );
};

export default AuthorQuiz;
