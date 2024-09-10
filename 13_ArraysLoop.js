//For each loop
let num=[1,2,3,4]
num.forEach((ele)=>{
        console.log(ele*ele);
        
})

//Array from 
let name="Qais"
let arr=Array.from(name)
console.log(arr)  

//for of
for(let i of num) 
{
        console.log(i);
        
}
//for in 
for(let keys in num)
{
        console.log(num[keys]);
        
}
