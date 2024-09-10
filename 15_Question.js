///Add number to the array
let arr=[1,2,3,4]
// let value=prompt("Enter the value")
// value=Number.parseInt(value)
// console.log(typeof value);
// let a=arr.map((val)=>
// {
//      return value+val
// })
// console.log(a);


///push a number the number to the array until 0 comes
// let arr=[1,2,3,4,10,20,30]
// let a;
// do{
//     a=prompt("Enter the value")
//     a=Number.parseInt(a)
//     arr.push(a)
// }while(a!=0)
// console.log(arr);


///Filter the number divisible by 10
let a1=arr.filter((value)=>
{
     return value%10==0

})
//console.log(a1);

///create a array of square of given number
let a3=arr.map((val)=>
{
    return val*val
})
//console.log(a3);

///Use reduce to find factorial of a number
let n=prompt("Enter the number:")
n=Number.parseInt(n)
let a4=array.reduce((h1,h2)=>
{
    return h1*h2
})
console.log("The factorial:"+a4);






