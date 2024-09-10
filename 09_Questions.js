//Question No 1
let Marks=
{
    qais:28,
    Khan:99,
    idk:55
}
for(let keys in Marks)
    {
        console.log("Marks of "+keys+" are "+Marks[keys])
    }
for(let i=0;i<Object.keys(Marks).length;i++)
{
    console.log("Marks of "+Object.keys(Marks)[i]+" are "+Marks[Object.keys(Marks)[i]])
}
//question no 2
let correct=3
// var n=prompt("Enter the number:")
// while(n!=correct)
// {
//     alert("Try again")
//     var n=prompt("Enter the number")
    
// }
// console.log("you have entered correct number")
//Question No 3
let a=3;
let b=6;
let c=5;
let d=4;


let mean=(a,b,c,d)=>
{
    return (a+b+c+d)/4
}
console.log("The mean is:"+mean(a,b,c,d))
