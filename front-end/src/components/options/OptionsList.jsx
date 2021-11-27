
import OptionsListItem from "./OptionsListItem"
import "./OptionsList.scss"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function OptionsList(props) {

  const { user } = useContext(UserContext)

  const parsedOptions = props.options.map((option) => (
    <OptionsListItem
      key={option.id}
      content={option.content}
      votes={option.count}
      setPolls={props.setPolls}
    />
  ));

  return (
    <section className="options__list">
      <ul>{parsedOptions}</ul>
    </section>
  )
};