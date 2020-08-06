import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
// import { AuthorWrapper } from "./AuthorWrapper";
import { AuthorQuizProvider } from "./AuthorQuiz.context";

ReactDOM.render(
  <AuthorQuizProvider>
    <App />
  </AuthorQuizProvider>,
  document.getElementById("root")
);
