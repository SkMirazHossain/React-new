import { useState } from "react";
// here we use react icon https://prnt.sc/LHr91HosgMX4
import { FaCircleArrowRight } from "react-icons/fa6";


export const State = () => {

  const [count, setCounts] = useState(0);

  const handelIncrment = () => {
    setCounts((initialCount) => initialCount + 1);
  };
  // here we console it for single time but get console for two times https://prnt.sc/DgwoF5AL58je this happen because of "StrictMode" https://prnt.sc/WM6SUQP6E2rd of react
  const Console = (props)=>{
    console.log("testing");
    return(
    <p>test {props.testcount}</p>
    )
  }
const sty= {display:"flex",alignItems:"center",gap:"10px"}
  return (
    <>
      <h2 className="text-2xl font-bold">Increase the number using "useState" hook of react State.jsx</h2> 
      <h3 className="text-xl font-bold">Total Clicks: {count}</h3>
      <button style={sty} onClick={ () => handelIncrment()}> <FaCircleArrowRight /> Click to Increment the Number</button>
      <Console testcount={count}/>
    </>
  );
};

// **Note if the state of parent component is changed this it re-render it's child component also you can take example of "Console" child component https://prnt.sc/up-kJCIXW7T6