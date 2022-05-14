var n=5;
const letras = (n) => {
    resultado=""
    for (let i=0; i<n; i++) {
            if(i%2===1){
                resultado += "_X_X_";
            }else{
                resultado +="X_X_X";
            }
        resultado+="\n";
    }
    console.log(resultado);
};

letras(n);