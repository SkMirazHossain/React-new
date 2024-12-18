import { useState } from "react";

{/* 
  *** Note here we want to pass input value (given by user) of "InputComponent" to our "DisplayComponent" component both are child of
  "LiftingState" component but I create my useState variable inside "InputComponent" component https://prnt.sc/l0gBDUv81mbi so I can't 
  use the useState value "from child to child" to use it's value I have to lift my useState variable https://prnt.sc/dZ9sbzw8E_CW
  to it's parent "LiftingState" after lifting I can access them via props like this https://prnt.sc/wifekI-glxw_ This consept is called
  "Lifting State Up" in react.
  
*/}
export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
    <h2 className="text-2xl font-bold">Lifting State Up Concept</h2>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

// We destructure props here https://prnt.sc/tMai4VQLCE_L
const InputComponent = ({inputValue,setInputValue}) => {
  return (
    <input
      type="text"
      placeholder="Enter here"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
     
    />
  );
};

const DisplayComponent = ({inputValue}) => {
   const sty = { fontWeight:"bold" };
  //  "toUpperCase()" is used to make the text upper case
  return <h3>I will make your input upper case: <span style={sty}>{inputValue.toUpperCase()}</span> </h3>;
};
