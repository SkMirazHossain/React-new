import { WelcomeUser } from "./WelcomeUser";
export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
      alert(`Hey, ${user}`);
    };
  
    const handleHover = (user) => {
      alert(`Hey Thanks for hovering me ${user}`);
    };
  
    return (
      <>
      <h2 className="text-2xl font-bold">Parent Element EventProps.jsx</h2>
      {/* Here we pass total 3 props https://prnt.sc/tCUBkESbfa-9  in "onButtonClicks" we pass on arrow function like this https://prnt.sc/kLSZ1KUt2xsz */}
        <WelcomeUser onButtonClicks={() => HandleWelcomeUser("Miraz")} onMouseEnter={ ()=> handleHover("Aktar") } name="Miraz" />
      </>
    );
  };
  
  


