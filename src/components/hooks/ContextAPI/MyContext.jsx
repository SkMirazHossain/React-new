{/*
***Note-----> First of all to avoide prop drilling we use context Api.   
  
1) here MyContext.jsx is like a ware house (source) where I store data which I call on any file. Here we import "createContext" 
2) This "MyProvider" component is imported in "App.jsx" here we paas children----> (In React, "children" is a "special prop" automatically passed
 to a component when it is rendered with content inside it like this https://prnt.sc/Rya1cxaTZM2L )*/}

// ***Note----------> commenting this
// import { createContext,useContext } from "react";

import { createContext,use } from "react";

// 1 step
export const MyContext = createContext();

// 2nd step
export const MyProvider = ({ children }) => {
  const myName = "Miraz";
  const myAge = 25;
  console.log(children);

  return (
    <MyContext.Provider value={{ myName, myAge }}>
      {children}
    </MyContext.Provider>
  );
};



// custom hooks----------------

{/* to reduce this lines of code https://img001.prntscr.com/file/img001/ZYJIbbGeQ-GxhUY0zo973g.png we created custom hooks "useMyContext" whare we assign
  "useContext(MyContext)" to a constant and then return it, here we also do error handeling https://img001.prntscr.com/file/img001/wCvXnk5cTwOabjk88AwODA.png
  you can compare the difference between normal and custom hook by comparing "Home.jsx" and "CallContentfromContextApi.jsx" files.
  
  ***Note There is a new hook which we can use instate of "useContext" that is "use" hooks benifite of "use" hook is that we can call it inside if statement,
  for loop etc which we can't do with useContext.
  
  */}

export const useMyContext = () => {

  // const context = useContext(MyContext);

  // ***Note----> using "use" hooks  instate of "useContext" 
  const context = use(MyContext);
  if (context === undefined) {
  throw new Error ("Component must be wrapped with BioProvider");
  }
  return context;
}