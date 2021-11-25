var micadena="asdfasdfasdfasdfasd";
var minumero=10;


const divideCadena =(str,size)=>{
    const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }
  var result="";
  for (let value of chunks) {
    result +=value + " ";
  }
  result=result.trim();
  console.log(result)
}

divideCadena(micadena,minumero);