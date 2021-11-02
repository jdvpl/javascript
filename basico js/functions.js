function saludar(){
    console.log("jiren")
}
saludar();

// arrow function

const saludor=()=>{
    console.log("kakaroto")
}

saludor();

const jiren=(a,b,c)=>{
    j=a+b+c;
    console.log("la suma es "+j)
}

jiren(1,5,8);

// funcion dentro de otra

const fun1=(a)=>{
    return a;
}
const fun2=(d)=>{
    console.log(d)
}
fun2(fun1('jiren es un marica'))