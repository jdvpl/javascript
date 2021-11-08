const peticion =async()=>{
    const response= await fetch("https://api.github.com/repos/jdvpl/Angular");
    const data=await response.json()
    return data
    
}
const data=peticion().then(console.log);
