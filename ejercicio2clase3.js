function Par(x){
    if (x % 2 == 0){
        return (x* x);
    }
    else{
        return x;
    }
}
var entrada=[1, 2, 3, 4, 5];
var salida = entrada.map(Par)
console.log(salida);
