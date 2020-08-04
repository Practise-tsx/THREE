export type Authors = {
  author: Author;
  books: string[];
};
export type Author = {
  name: string;
  imageUrl: string;
  imageSource: string;
  imageAttribution?: string;
  books: string[];
};
export type AuthorQuiZprops = {
  turnData: Authors;
  highlight: string;
  onAnswerSelected: (bookName: string) => void;
  onContinue: () => void;
};
export type BookProps = {
  title: string;
  onClick: (title: string) => void;
};

export type TurnProps = {
  // author:any;
  author: Author;
  books: string[];
  highlight: string;
  onAnswerSelected: (bookName: string) => void;
};

export type ContinueProps = {
  show: boolean;
  onContinue: () => void;
};
export type State = {
  turnData: Authors;
  highlight: string;
};
export type Mapping = {
  [key: string]: string;
};
