// Here we import "useContext" and "MyContext"
import  { useMyContext } from './MyContext';

export const Home = () => {
    const {myName,myAge} = useMyContext();

  return (

      <h1>
        Hello Context API. My name is {myName}. I am {myAge} yrs old
      </h1>
  );
};