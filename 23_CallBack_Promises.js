//Synchronous programming 
// let a=prompt("What is the name")
// let b=prompt("Enter the age")
// let c=prompt("Enter the favorite color")
// console.log(a+" is "+b+" years old and has "+c+" favorite color");

//ASynchronous programming 
// console.log("I am first")
// console.log("I am first")
// setTimeout(function(){
//     console.log("Khan Qais");
    
// },1000
// )

///Callbacks
// function loadScript(src,Callbacks)
// { 
//   var script=document.createElement('script');
//   script.src=src;
//   script.onload=function()
//   {
//     console.log("SRC:"+src);
//     Callbacks();

//   }
//   document.head.append(script);
// }
// function hello()
// {
//   alert("ehehe");
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)

///promises
let promise = new Promise(function(resolve, reject){
  console.log("Hello from promise");
  
  resolve(56)
})

console.log("Hello 1");
setTimeout(function() {
  console.log("Hello in 2 sec");
}, 1000);
console.log("Hello 3");
console.log(promise);

function sum(a,b){
  console.log(a+b);
  
}
function calculator(a,b,sumcallback)
{
  sumcallback(a,b)  
}
calculator(5,3,sum)




