const PromiseAll = ()=>{
    
   const p1 = fetch("https://dummyjson.com/users").then(res => res.json());
   const p2 = fetch("https://dummyjson.com/posts").then(res => res.json());
   const p3 = fetch("https://dummyjson.com/comments").then(res => res.json());



    const pro=Promise.all([p1, p2, p3]).then((values)=>{
    console.log(values);
    }).catch((error)=>{
        console.log(error);
    })

    console.log(pro);

    return(
        <>
        <h1>Promise All</h1>
        </>
    )
}

export default PromiseAll;