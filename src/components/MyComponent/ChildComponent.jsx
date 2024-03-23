import React, { useContext } from "react";
import { MyContext } from "../App";

const ChildComponent = () => {
 
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>{contextValue}</p>
    </div>
  );
};

export default ChildComponent;
