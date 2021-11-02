// fetch('https://api.github.com/users/jdvpl/repos')
//     .then(response => response.json())
//     .then(lol=> console.log(lol))
//     .catch(e => console.log(e))

// el codigo se ejecuta secuencialmente con el async se ejecuta en hilo

const obtenerRepos=async()=>{
    try{
        const response = await fetch('https://api.github.com/users/jdvpl/repos')
        const datps= await response.json()
        console.log(datps)
    }catch(err){
        console.log(err)
    }
}

obtenerRepos()