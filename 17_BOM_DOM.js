//BOM:Brower object model
//DOM:Document object model
let a=prompt("Enter the Age:")
a=Number.parseInt(a)
if(a<0)
{
    console.error("Age is Invalid");
    
}
else if(a<18 && a>0)
{
    alert("Not allowed to drive");
    
}
else
{
    alert("You can drive");
    
}


