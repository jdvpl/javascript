const datos=[
    {nombre:"Juan Daniel", edad:15},
    {nombre:"Juan David", edad:26},
    {nombre:"Juan kakarot", edad:418},
    {nombre:"Juan Saitama", edad:163},
    {nombre:"Juan Luis", edad:19},
    {nombre:"Juan Vergeta", edad:193},
]

// // con forEach
// datos.forEach(element => {
//     console.log(element.nombre)
//     console.log(element.edad)
// })

// console.log("\n---------------Map-----------------\n")
// // con map es mucho mas rapido

// datos.map(element => {
//     console.log(element.nombre)
//     console.log(element.edad)
// })





const obtenerRepos=async()=>{
    try{
        const response = await fetch('https://api.github.com/users/jdvpl/repos')
        const datps= await response.json()
        datps.map(element => {
            console.log(`id: ${element.id}, Nombre: ${element.name},URL: ${element.html_url}`)
        })
    }catch(err){
        console.log(err)
    }
}

obtenerRepos()