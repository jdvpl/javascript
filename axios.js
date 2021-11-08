axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then(({data})=>console.log(data)) //se coloca en llaves para el destructuring