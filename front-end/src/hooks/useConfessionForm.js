import axios from "axios";
import classNames from "classnames";
import { useContext, useState } from "react";
import { UserContext } from "../components/contexts/UserContext";

export default function useConfessionForm(props) {

  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

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

  let confessionClass = classNames("category", {
    "category--secret": category === 1,
    "category--story": category === 2,
    "category--question": category === 3
  });


  const updateConfessionState = (newConfession, confessionState) => {
    newConfession.likes = 0;
    newConfession.comments = [];
    let stateCopy = [...confessionState];

    stateCopy.unshift(newConfession);
    const max = stateCopy.length - 1;
    return stateCopy.slice(0, max);
  };

  const validateConfession = (content, categoryId) => {
    if (content.length < 10) {
      setError("Too Short");
      return false;
    };
    if (!categoryId) {
      setError("Select a category");
      return false;
    };
    return true;
  };

  const createConfession = (userId, categoryId, content) => {
    const created_at = new Date();
    const newConfession = {
      userId,
      categoryId,
      content,
      title,
      created_at
    };

    const valid = validateConfession(content, categoryId);

    if (valid) {
      return axios.post("/api/confessions/new", { newConfession })
        .then(res => {
          // console.log(res.data);
          props.setConfessions(updateConfessionState(res.data, props.confessions));
          props.setPageToDisplay(1);
          props.setShowForm(false);
          setContent("");
          setTitle("");
        })
        .catch(err => {
          console.log(err.message);
        })
    };
  };

  return {
    user,
    title,
    setTitle,
    content,
    setContent,
    category,
    setCategory,
    error,
    setError,
    categoryParser,
    confessionClass,
    updateConfessionState,
    validateConfession,
    createConfession
  };

}