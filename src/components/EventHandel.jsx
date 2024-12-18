export const EventHandel = () =>{

    const handleMouse = (event) => {
        // console.log(event);
        alert("Hello");
    }

    const handleWelcome = (user) => {
        alert(`We welcome You ${user} to our website`);
    }

// ***Important not we have to use "on" as prefix to every eventhandeler like "onClick" or "onMouseEnter" means it also must be camelCase.

    return(
        <> 
         <h2 className="text-2xl font-bold">Parent Element EventHandel.jsx</h2>
        {/* for the first btn we does not call function like this "handleMouse()"
         Remember how we haven't called this function, if you call this
        function here then it will run without even clicking. You just need
        to pass reference and not call here. */}
       
        <button onMouseEnter={handleMouse}>Hover on Me</button>
        <br/>

        {/* for the 2nd btn we use flat arrow function here this is https://prnt.sc/JAl9F3Y7bMWO just a callback this function https://prnt.sc/mDkDqTSdnq1_ here also we have to pass "event" 
         Note from thapa ---------------> In React, event handlers receive the event object as an argument by default.
            However, when you use an arrow function directly in the onClick attribute without
            passing the event explicitly, React doesn't pass the event object to your handler
            function. This is because the arrow function creates a new function and calls your
            handler without passing any arguments so we have to pass "event" here. */}
        <button onClick = { (event) => handleButtonClick(event)} >click Me again</button>

        <br/>

        {/* HERE WE PASSING ARGUMENTS IN FUNCTION FOR THAT WE HAVE TO USE FLAT ARROW FUNCTION
        Here we paas "Miraz" as argument and pAss "user" as paremeter https://prnt.sc/A-oPL5ZgjXsJ and ALSO we use Template literals.
        Difference b/w "parameters" and "arguments"-----
        Which we pass in function in the time of it's making is called "parameters" and when we pass it during calling it is called "argument".
        for example here "user" is parameter of handleWelcome function and "Miraz" is argument.
        */}
        <button onClick = { () => handleWelcome("Miraz")} >Click here To get Welcome</button>
        <br/>
        <button onClick = { () => handleWelcome("Aktar")} >Click here To get Welcome</button>
        </>

        
    )
}