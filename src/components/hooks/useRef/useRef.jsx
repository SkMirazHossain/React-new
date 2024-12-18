import {useRef} from 'react'
{/* useRef is to get refarence of any element like we do in normall js by "document.getelement" initially it return one object with "current" key and
    the value it return which we pass to it https://prnt.sc/TmAx_V7igW_s we can all do it by useStage but if there is only one or two field we can
    use this, this does not re render the component
    
    
    
*/}
export const UseRefHook = ()=>{
    const uname = useRef(null);
    const upass = useRef(null);
    // const [Name,setName]=useState("");
   

    const handelSubmit =(e)=>{
      e.preventDefault();
      console.log(uname.current.value,upass.current.value);
    }


    // Using useState -------------------

    // const handelSubmit =(e)=>{
    //   e.preventDefault();
    //   console.log(Name);
    // }

    

return (
    <>
    <form onSubmit={handelSubmit}>
        <input type="text" id="username" ref={uname} required />
        <br/>
        <input type="password" id="password" ref={upass} required />
        <br/>
        <button type="submit">send</button>
    </form>

    {/* <form onSubmit={handelSubmit}>
        <input type="text" id="username" onChange={(e)=>setName(e.target.value)} value={Name} />
        <br/>
        <button type="submit">send</button>
    </form> */}
    
    </>)
} 