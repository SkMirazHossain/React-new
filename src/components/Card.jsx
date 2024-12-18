//card.jsx is called in ImportantNotes.jsx file-------------



const inline_style ={ textAlign:"center",fontSize:"45px" };

// inline style are besically object means kay value payer so if you have to write inline style best practies is to make if a variable first out
// side the jsx to avoid multiple object reder this is not recomended https://prnt.sc/XVoKCKiNkeGM 
export const MainHeader = () =>{
    return(
        <h1 style={inline_style}>This is Header</h1>
    );
}



const Name = "Sk Miraz Hossain";

const MyOcupation = () => {
      const Ocupation = "Developer";
      return Ocupation;
}

const Age = 19;


// here we use futionnal logic
let CanContact = "You can't contact";
if(Age>=18) CanContact= "Yes You can contact";


// 2) There is one another method to import and export component which is called "Named" methode here just we need to write "export" just before
//  our component like this "export const Card = () =>{......" but you have to import it within curly brecess like this the benifite of "Named" export
//  is NOW YOU CAN EXPORT MUTIPLE FILE FORM ONE .JSX FILE.
export const Card = () =>{
  return (
  <div>
  <img className="test" src="./images/banner.webp" alt="banner" />
  <h2>Hi {Name} It's React {10 +9}</h2>
  <h3>hello</h3>
  {/* here we call a function */}
  <p>Ocupation {MyOcupation()}</p>
  {/* here we use "Ternari Oparator"  like this "{Age>=18 ? '/contact': '#'}" means if it is stisfiing the condition then we get "/contact" or else we get "#"*/}
  <p><a href= {Age>=18 ? "/contact": "#"}> {Age>=18 ? "Contact Me": "Not allowed"}</a></p>
  {/* if we want to pass any variable then we have to use curly breces like this "{CanContact}" */}
  <button>{CanContact}</button>
  </div>
  )
}




export const Footer = () =>{
    return(
        <h2 style={inline_style}>This is footer</h2>
    );
}



// 1) EXPORT "MainHeader" COMPONENT SO WE CAN IMPORT IT TO ANY FILE IN REACT here we use "Default" import and export method but the limitation is you
// can use "ONLY ONE default export in one .jsx file" 
 export default MainHeader


// Loop using map----------------------------------
// export const App = () => {
//   const cards = Array(4).fill(null); // Creates an array with 4 elements
//   return (
//     <>
//       {cards.map((_, index) => (
//         <Card key={index} />
//       ))}
//     </>
//   );
// };
