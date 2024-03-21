import Button from "./Button";

const List = [
  "All", "Live", "Gaming", "Music", "News", "Movies",
  "Fashion&Beauty", "Learning", "Sports", "Shorts",
  "360 Video", "Cricket"
];

function ButtonList() {
  return <Button list={List} />;
}

export default ButtonList;
