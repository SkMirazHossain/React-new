{/* Prop Drilling is basically passing data from multiple layer https://prnt.sc/HPesdOnXE7Vn (like parent to its grand-grand-child ) here the isseu is we have to pass data from
    Parent to its child then from child to it grand-child the from grand-child to its grand-grand-child becaus we can't pass props direcly but but
   here "child" and "grand-child" does not even need the data to over come this issue we use Context API

    */}
export const ParentComponent = () => {
    return (
      <section
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
      >
        <h1>Component A</h1>
        <ChildComponent data="React JS" />
      </section>
    );
  };
  
  const ChildComponent = (props) => {
    return (
      <>
        <h1>Hello, I am component B</h1>
        <GrandChildComponent dataLayer1={props.data} />
      </>
    );
  };
  
  const GrandChildComponent = (props) => {
    return (
      <>
        <h1>Hello, I am component C</h1>
        <GrandGrandChildComponent dataLayer2={props.dataLayer1} />
      </>
    );
  };
  
  const GrandGrandChildComponent = (props) => {
    return (
      <>
        <h1>Hello, I am GrandGrandChildComponent and I love {props.dataLayer2}</h1>
      </>
    );
  };