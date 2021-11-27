import ConfessionList from "./ConfessionsList"
import "./ConfessionsList.scss"
import Button from 'react-bootstrap/Button'
import "./ConfessionDisplay.scss"

export default function ConfessionDisplay(props) {

  const maxPage = parseInt(props.confessions.length / 10);

  const arrayParser = (array) => {
    let finalArray = [];
    let tempArray = [];
    for (const element of array) {
      tempArray.push(element);
      if (tempArray.length === 10) {
        finalArray.push(tempArray);
        tempArray = [];
      };
    };
    return finalArray;
  };


  const arrayOfConfessions = arrayParser(props.confessions);

  const parsedLists = arrayOfConfessions.map((confessions, index) => (
    <ConfessionList
      key={index}
      id={index + 1}
      confessionsToUpdate={props.confessions}
      confessions={confessions}
      setConfessions={props.setConfessions}
    />
  ));

  const containerToDisplay = (array) => {
    for (const list of parsedLists) {
      const listId = list["props"].id;
      // console.log("******", listId)
      if (listId === props.pageToDisplay) {
        // console.log(`displaying page #${listId}`)
        return list;
      };
    };
  };

  return (
    <div>
      {/* <span><strong>{`page: ${props.pageToDisplay}`}</strong></span> */}
      {containerToDisplay(parsedLists)}
      <span className="page-control">
        <Button
          disabled={props.pageToDisplay > 1 ? "" : "false"}
          onClick={() => {
            props.setPageToDisplay((prevState) => (prevState - 1));
            window.scrollTo(0, 0);
          }}>
          Previous Page
        </Button>
        <span><strong>{`page: ${props.pageToDisplay}`}</strong></span>
        <Button
          disabled={props.pageToDisplay >= maxPage ? "false" : ""}
          onClick={() => {
            props.setPageToDisplay((prevState) => (prevState + 1));
            window.scrollTo(0, 0);
          }}>
          Next Page
        </Button>
      </span>

    </div>
  )
}