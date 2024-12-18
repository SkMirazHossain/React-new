// import "MainHeader" using "Default" Method----
// import "Card and Footer" using "Named" Method Here we can import multiple file like "{Card,Footer,SideBar}" but this curli bracess is very important "{   }" -----
import MainHeader, {Card,Footer} from "./components/Card";

export const ImportantNotes = () => {
  return (
    <>
      <MainHeader/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    </>
  );
};
