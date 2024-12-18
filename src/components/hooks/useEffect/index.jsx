import { useEffect, useState } from "react";
import "./index.css";

{/* useEffect are use to handel side effects (means coming from out side the react) for example Api 
    
    useEffect take one dependency arrey when ever the value of dependency arrey changes it call the function in our case "count" is that arrey https://prnt.sc/sUSXcLowrkyO which
    we pass as dependency and whenever the valu of count change it call the function like here we just console https://prnt.sc/TMswsU6h4wit */}

export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count value:", count);
  }, [count]);

  return (
    <div className="container effect-container">
      <h1>useEffect Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


// like here setTime is updating

export const ReactUseEffectDate = () => {
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        const updatedTime = new Date();
        setTime(updatedTime.toLocaleTimeString());
      }, 1000);
    }, []);
  
    return (
      <div className="container effect-container">
        <h1> Time : {time} </h1>
      </div>
    );
  };