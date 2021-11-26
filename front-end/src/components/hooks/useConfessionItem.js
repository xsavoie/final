import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import axios from "axios";
import classNames from "classnames";


export default function useConfessionItem(props) {

  const { user } = useContext(UserContext)
  const [liked, setLiked] = useState(false);


  // check if user liked current post
  useEffect(() => {
    if (user.id) {
      const confessionInfo = {
        userId: user.id,
        confessionId: props.id
      }
      // console.log(confessionInfo)
      return axios.get("/api/confessions/likes/verify", { params: { confessionInfo } })
      .then(res => {
        // console.log("RES", res.data)
        if (res.data) {
          setLiked(true)
        }
      }).catch(err => {
        console.log(err.message)
      })
    }
  }, [user.id, props.id])


  const categoryParser = (categoryId) => {
    if (categoryId === 1) {
      return "Secret";
    };
    if (categoryId === 2) {
      return "Story";
    };
    if (categoryId === 3) {
      return "Question";
    };
  };

  // let confessionsCopy = [...props.confessionState];


  const increaseLikeState = (confessionsState, confessionId) => {
    const confessionsCopy = [ ...confessionsState]
    
    let updatedConfession = confessionsCopy.find((confession) => confession.id === confessionId)
    updatedConfession.likes += 1;
  
    const newState = confessionsCopy.map(confession =>
      confession.id === confessionId ? updatedConfession : confession
      );
  
    // return updatedConfession
    return newState
  }

  const decreaseLikeState = (confessionsState, confessionId) => {
    const confessionsCopy = [ ...confessionsState]
    
    let updatedConfession = confessionsCopy.find((confession) => confession.id === confessionId)
    updatedConfession.likes -= 1;
  
    const newState = confessionsCopy.map(confession =>
      confession.id === confessionId ? updatedConfession : confession
      );
  
    // return updatedConfession
    return newState
  }

  // insert like in db and modifies state
  const submitLike = (userId, confessionId, confessionState) => {
    const newLike = {
      userId,
      confessionId
    };

    return axios.post("/api/confessions/likes", { newLike })
      .then(res => {
        // console.log(res.data);
        props.setConfessions(increaseLikeState(confessionState, confessionId));
      }).catch(err => {
        console.log(err.message);
      })
  }

  // delete like in db and modifies state
  const deleteLike = (userId, confessionId, confessionState) => {
    const likeInfo = {
      userId,
      confessionId
    };
    // should not use body to delete? --> refactor later?
    return axios.delete("/api/confessions/likes", { data: { likeInfo } })
      .then(res => {
        // console.log(res.data);
        props.setConfessions(decreaseLikeState(confessionState, confessionId))
      }).catch(err => {
        console.log(err.message);
      })
  }

  let badgeClass = classNames("badge", {
    "badge--secret": props.categoryId === 1,
    "badge--story": props.categoryId === 2,
    "badge--question": props.categoryId === 3
  });



  return { user, liked, setLiked, categoryParser, increaseLikeState, decreaseLikeState, submitLike, deleteLike, badgeClass }
}