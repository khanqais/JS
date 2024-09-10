let p1=new Promise((resolve,reject)=>
{
    console.log("Promises is pending");
    
    setTimeout(()=>
    {
        //console.log("I am promise and i am rejected")
        reject(new Error("I am error"))
        
    },5000)
    
    
})
let p2=new Promise((resolve,reject)=>
    {
        console.log("Promises is pending");
        
        setTimeout(()=>
        {
            console.log("I am promise and i am fulfilled")
            resolve(true)
        },5000)
        
            
    })
p2.then((value)=>
{
    console.log(value);
    
})
p1.catch((value)=>
{
    console.log(value);
    
})
