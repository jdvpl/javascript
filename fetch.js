fetch('https://api.github.com/users/jdvpl/repos')
    .then(response => response.json())
    .then(lol=> console.log(lol))
    .catch(e => console.log(e))
    