/*let a =10;
//var b=23;
const c=22;

console.log(a);
console.log(b);
console.log(c);*/

//why we use let ,var, const in js //

/*if(true) {
let a =10;
var b=23;
const c=22;

}

/*console.log(a);
console.log(c);
console.log(b);*/


// what is global scope ? 
//OUTPUT [ inner 66    100]


let a = 100;

if(true){
    let a = 66;
    console.log("inner",a);
}

console.log(a);
