import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import displayNames from "../Redux/action";
import "../App.css";

export const Component_B = () => {
  // const [name,setName] = useState([])
  
  const dispatch = useDispatch();

  const submitValue = (e) => {
    dispatch(displayNames(e.target.value));
  };

  return (
    <div>
      <h2>Please Type Here </h2>
      <input
        type="text"
        placeholder="Type Here"
        onChange={(r) => submitValue(r)}
      />
    </div>
  );
};
