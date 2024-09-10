//Array Map method 
let arr=[1,2,3,4]
let a=arr.map((value,index,array)=>  //Maps create a new loop after certain operation
{
    console.log(value,index,array);
    return value+index  


})
console.log(a);

//FIlter method
let arr2=[45,54,22,3,4,5,2]
let a2=arr2.filter((value)=>
{
   return value>10 
   
})
console.log(a2)
console.log(arr2);

//Array reduce method 
let arr3=[1,2,3,2,4,5]
let newarr3=arr3.reduce((h1,h2,h3)=>      
{
     return h1+h2+h3
})
console.log(newarr3);
 //h1 is called accumilator which stores result if reduction
 //h2 is the current value being processed in the array 
 //h3 is the index which will add 

