export const SeriesCard = (props) =>{
    // console.log(props);
    // here we destructure the props as we do not want to write repetadely img_url,name like this https://prnt.sc/LZSgErWodhms
    const { img_url, name, rating, description, cast, genre, watch_url } = props.data;
    const verdict = rating >= 8 ? "super_hit" : "average";
    return (
        <li>   
          <div>
            <img className="w-full" src={img_url} alt={name} width="40%" height="40%" />
          </div>
          <h2 className="text-2xl font-bold underline my-3">Name: {name} </h2>
          {/* Here we use "ternary operator" with "template literals" to add class on the basis of rating 
          like this https://prnt.sc/6Saj3_zUXXQc ( here ternary operator covert the string to number and then compare) you can also use variable
          for that like this https://prnt.sc/oVdFBc77o8xS */}
          <h3 className="font-bold">Rating:<span className={`rating  ${verdict}`}> {rating}</span></h3>
          <p>Summary: {description} </p>
          <p>Genre: {genre.join(", ")} </p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url} target="_blank">Watch Now</a>
          <br/>
          <br/>
        </li>
        
      )
}