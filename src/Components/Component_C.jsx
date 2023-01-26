import React from "react";
import { useSelector } from "react-redux";
import '../App.css';

export const Component_C = () => {
  const data = useSelector((store) => store.reducer.data);
  return (
    <div>
      {/* <ul>
        <li>List:{data}</li>
      </ul> */}
      <h2>Your Product : </h2>
      <h3>{data}</h3>
    </div>
  );
};
