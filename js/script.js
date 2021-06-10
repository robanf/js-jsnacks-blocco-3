/* Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri */

/* var parola1=prompt("inserisci parola");
var parola2=prompt("inserisci seconda parola");

var finale=parolalunga(parola1, parola2);

console.log(finale);
 */

/* function parolalunga(x , y){
    if(x.length>y.length)
    {
        return x;
    }else if(x.length<y.length){
        return y;
    }else{
        return (x+" "+y);
    }
} */


/* Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */


/* var array=[14,15,12,35,567,43,2,2,34,5,6];

var a=prompt("dimmi valore di a")

var b=prompt("dimmi un valore più grande di b");



if(a>b){
    var c=b;
    b=a;
    a=c;
}

var finale=compresi(array,a,b);


console.log(finale);




function compresi(x,y,z){
    var array=[];
    if(y==z){
        return x[y];
    }
    for(i=y;i<z;i++){
        array.push(x[i]);
    }
    return array;
}
 */



//Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


/* var a=["a",'b','c'];
var b=[1,2,3];
var c=[];


for(var i=0;i<3;i++){
    c.push(a[i]);
    c.push(b[i]);
}


console.log(a);
console.log(b);
console.log(c); */


/* 
Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo. */

var str='ciao';

console.log(capitalize(str));


function capitalize(str){
    str=str[0].toUpperCase()+ str.substring(1) ;
    return str;
}