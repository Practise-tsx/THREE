import { Author } from "./types";

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
