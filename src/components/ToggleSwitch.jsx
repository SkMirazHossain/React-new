import { useState } from "react";

export const ToggleSwitch = () => {
const valu= "On"
  const [state, setState] = useState(valu);

  const handelState = () => {
    setTimeout(() => {
        setState((prevState) => prevState === "On" ? "Off" : "On");
      }, 600);
  };

  const result = (state === "On" ? "btn-on" : "btn-off");

  return (
    <>
     <h2 className="text-2xl font-bold">On/Off switch Component ToggleSwitch.jsx</h2>
      <button className={`sk-btn ${result}`} onClick={ () => handelState()}>{state}</button>
    </>
  );
};

 {/* 
    ***Note here we use "useState" hook and "ternary oparatoy" and "template litrals" to make on off switch we also use set time out here.
*/}