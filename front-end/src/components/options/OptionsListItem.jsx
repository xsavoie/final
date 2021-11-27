import './OptionsListItem.scss'
import OptionsForm from "./OptionsForm"


export default function OptionsListItem(props) {


  return (
    <article>
      <div className="options__content">
       <p>{props.content}</p>
      </div>
      <div className="options__votes">
      <p>{props.votes}</p>
      </div>
     
    </article>
  )
};