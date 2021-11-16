
const letras = (n) => {
    resultado=""
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            resultado += (j==i || j==n-i-1) ? "X" : "_";
        }
        resultado+="\n";
    }
    console.log(resultado);
};

letras(n);