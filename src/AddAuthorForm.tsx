import React, { FC, useReducer, useState } from "react";
import "./AddAuthorForm.css";
import { Author } from "./types";

type AuthorFormProps = {
  onAddAuthor: (author: Author) => void;
};
type AddState={
  name:string;
  imageUrl:string; 
  Booktemp:string;
  books:string[];
}
type Action=
|{type: "setName"; name:string}
|{type:"setImage";imageUrl:string}
|{type:"setbook"; Booktemp:string}
|{type:"setbookarray"};

const AuthorFunction = (props: any) => {
  const state ={
    name: "",
    imageUrl: "",
    books: [],
    Booktemp: "",
  };

  const reducer = (state: AddState, action: Action) => {
    debugger;
    switch (action.type) {
      case "setName":
        return {
          ...state,
          name: action.name,
        };
      case "setImage":
        return {
          ...state,
          imageUrl: action.imageUrl,
        };
      case "setbook":
        return {
          ...state,
          Booktemp: action.Booktemp,
        };
      case "setbookarray":
        return {
          ...state,
          books: state.books.concat([state.Booktemp]),
        };

      default: {
        return {
          ...state,
        };
      }
    }
  };

  const [reducerState, dispatch] = useReducer(reducer, state);

  // const handleAddbook = (e) => {
  //   debugger;

  //   setstate({ ...state, books: state.books.concat([state.Booktemp]) });
  // };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onAddAuthor(reducerState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="AddAuthorForm-input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={reducerState.name}
          onChange={(e) => dispatch({ type: "setName", name: e.target.value })}
        ></input>
      </div>
      <div className="AddAuthorForm-input">
        <label htmlFor="imageUrl">ImageUrl</label>
        <input
          type="text"
          name="image"
          value={reducerState.imageUrl}
          onChange={(e) => dispatch({ type: "setImage", imageUrl: e.target.value })}
        ></input>
      </div>

      <div className="AddAuthorForm-input">
        {reducerState.books.map((book: string) => (
          <p>{book}</p>
        ))}
      </div>
      <div className="AddAuthorForm-input">
        <label htmlFor="books">Books</label>
        <input
          type="text"
          name="booktemp"
          value={reducerState.Booktemp}
          onChange={(e) =>
            dispatch({ type: "setbook", Booktemp: e.target.value })
          }
        ></input>
        <input
          type="button"
          value="+"
          onClick={() => {
            dispatch({ type: "setbookarray" });
          }}
        ></input>
      </div>
      <div className="AddAuthorForm__input">
        <input type="submit" value="submit"></input>
      </div>
    </form>
  );
};

const AddAuthorForm: FC<AuthorFormProps> = ({ onAddAuthor }) => {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author Form</h1>
      <AuthorFunction onAddAuthor={onAddAuthor} />
    </div>
  );
};

export default AddAuthorForm;
