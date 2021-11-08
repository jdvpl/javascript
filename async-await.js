const saludo=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Hello")
    })
}

saludo().then((res)=>console.log(res))
// no promesa
const saludo2=async()=>{
    return "sin promesa"
}

saludo2().then((res)=>console.log(res))


const peticion=async()=>{
    setTimeout( ()=>{
        const datos ={
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        };
        console.log(datos);
    },1000)
}

peticion();