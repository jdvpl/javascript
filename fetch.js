fetch('https://api.github.com/users/jdvpl/repos')
    .then(response => response.json())
    .then(lol => console.log(lol))
    .catch(e => console.log(e))


// ajax
XMLHttpRequest

// arquitectura soap
/* <xml>
</xml> */

// arquitectura Rest

// {name: "aklsdjflkasdf"}

// endpoint https://jsonplaceholder.typicode.com/users/5
fetch('https://jsonplaceholder.typicode.com/users/5')
    .then((response) => {
        return response.json()
    }).then((data) => {
        document.getElementById("info").innerHTML = data.name;
    });