import React from "react";
import { MdOutlineDone } from "react-icons/md";

const List = ({ text }: any) => {
  return (
    <li className="list-item">
      <MdOutlineDone
        className="list-icon md hydrated"
        name="checkmark-outline"
        role="img"
        aria-label="checkmark outline"
      />
      <span> {text} </span>
    </li>
  );
};

export default List;
