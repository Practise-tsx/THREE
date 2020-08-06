import React from "react";

import AddAuthorForm from "./AddAuthorForm";
import { withRouter } from "react-router-dom";
import { Author } from "./types";
import { authors } from "./authors";

export const AuthorWrapper = withRouter(({ history }) => {
  return (
    <AddAuthorForm
      onAddAuthor={(author: Author) => {
        authors.push(author);
        history.push("/");
      }}
    />
  );
});
