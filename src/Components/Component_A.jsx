import React from "react";
import { Component_B } from "./Component_B";
import { Component_C } from "./Component_C";

export const Component_A = () => {
  return (
    <div>
      <Component_B></Component_B>
      <Component_C></Component_C>
    </div>
  );
};
