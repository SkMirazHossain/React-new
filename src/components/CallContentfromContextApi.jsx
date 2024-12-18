// Here we import "useContext" and "MyContext"
import { useContext } from 'react';
import { MyContext } from './hooks/ContextAPI/MyContext.jsx';

export const CallContentfromContextApi = () => {
    const {myName,myAge} = useContext(MyContext);

  return (
      <h1>
        Hello Context API I call you from CallContentfromContextApi.jsx file My name is {myName}. I am {myAge} yrs old.
      </h1>
  );
};