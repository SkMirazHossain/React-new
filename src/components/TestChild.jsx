// using normal props methor

// export const TestChild= (props)=>{ 
//     return(
//         <>
//         <p>my name is {props.data}</p>
//         </>
//     )
// }

// using  props destructureing methor

export const TestChild= ({data})=>{ 
    return(
        <>
        <p>My name is {data}</p>
        </>
    )
}

