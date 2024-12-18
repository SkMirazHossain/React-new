export const WelcomeUser = (props) => {
    // Destructure the props
    const { onButtonClicks, onMouseEnter, name } = props;
    const handleGreeting = () => {
      console.log(`Hey User, Welcome`);
      onButtonClicks();
    };
    return (
      <>
       <h3>Passing normal data like name as props ------ {name}</h3>
        <button onClick={onButtonClicks}>Click</button>
        <br/>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <br/>
        {/* Here for below two buttons we just add event listener in that function we call one of the parent function also like this https://prnt.sc/NbS6E2ZsQ78U   */}
        <button onClick={handleGreeting}>Greeting Using just passing reference</button>
        <br/>
        <button onClick={ ()=> handleGreeting() }>Greeting Using arrow function call</button>
        {/* 
        Here we pass "onButtonClicks" and "onMouseEnter" as props (props name could be any thing what you want) https://prnt.sc/s9tjyhR6JU7i to our parent component that is "EventProps.jsx"
        after that using props (we destructure the props here https://prnt.sc/XvWR3yaty_-L ) we triger event to parenet element from it's children. Means in short we can pass not only data also Events as Props.
            
        */}
      </>
    );
  };