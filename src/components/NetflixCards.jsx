import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";
const NfSeries = () => {
  return (
    <>
    <h2 className="text-2xl font-bold text-center">NetFlix Series</h2>
    <ul className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl gap-6 my-10 mx-auto">
      {seriesData.map((curElem) => 
        // here "data" is a props. props means property
        // ***Note#1 When there is single component no need to write "return" and also remove the curly bracess which is just after flat arrow
        // ***Note#2 If there is children in side your component like this https://prnt.sc/x-Gcs3PfdADC then you can access that children via "{props.children}" like this https://prnt.sc/_g9g3puUztX_ 
          <SeriesCard key={curElem.id} data ={curElem} /> 
      )}
    </ul>
    </>
  );
};

export default NfSeries
