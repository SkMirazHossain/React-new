import { useState } from "react";

export const AdvanceCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  

  const handleStep = (event) => {
    const inputValue = Number(event.target.value);
    if (inputValue >= 0) {
        setStep(inputValue);
    }
};

  
  const handleIncrement = () => {
    if (step <= 0) {
        alert("Incerment Step must be greater than 0"); 
        return; // Exit the function early (early mening "taratari" in Bengali)
    }

    setCount(prevCount => {
        const total = prevCount + step;
        if (total >= 50) {
            return 50 - (50 % step);
        }
         return total;
    });
};



const handleDecrement = () => {
    setCount(prevCount => {
        return (prevCount - step) <= 0 ? 0 : (prevCount - step); 
    });
}

const handelReset = ()=>{
    setStep(0);
    setCount(0);
}


  return (
    <>
    <h2 className="text-2xl font-bold">AdvanceCounte.jsx</h2>
    <h3 className="text-xl font-bold">Current count: {count}</h3>
    <div className="text-xl font-bold">Incerment Step <input  type="number" onChange={handleStep} value={step} /></div>
    <button className= { count >=50 ? "sk-disable" : "sk-active" } onClick={handleIncrement}>Click here for Increase</button> 
    <button onClick={handleDecrement} className= {count <=0 ? "sk-disable" : "sk-active"}>Click here for Decrease</button> 
    <button onClick={handelReset} className={count > 0 || step > 0 ? "sk-active" : "sk-disable"}>Reset all</button> 
    </>
  )
};
