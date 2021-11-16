const myArray = [1,2,1,3,3,1,2,1,5,1];

const MaximaCantidad = {}
for (let i = 1; i <= Math.max(...myArray) ; i++){ 
    MaximaCantidad[i] = ""; 
}
myArray.map(e=> MaximaCantidad[e] += "*"); 
const resultado=(obj)=> {
    var result = ``;
    for (var i in obj) {
        result += `${i}: ${obj[i]}\n`;
    }
    console.log(result) ;
}
resultado(MaximaCantidad)