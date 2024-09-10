let sum=0;
let n=prompt("enter the number:")
n=Number.parseInt(n)
for(let i=1;i<=n;i++)
{
    sum=sum+i;
   
}
console.log("The sum is:",sum);
console.log(typeof n);


let obj={
    qais:90,
    vishal:33,
    khan:22,
}
for(let a in obj)
{
    console.log("Marks of "+a+" are "+obj[a])
}





