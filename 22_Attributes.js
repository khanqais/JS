let html=document.getElementById("myImg").attributes.length;
document.getElementById("demo").innerHTML=html;
function myFunction() {
    let numb = document.getElementById("myButton").attributes.length;
    document.getElementById("demo").innerHTML = numb;
  }


function xfunction(){
    document.getElementById("myDIV").className="mystyle"
} 

//get attributes
let x=document.getElementById("myhi")
let text=x.getAttribute("target")
console.log(text);
document.getElementById("xyz").innerHTML=text

//has attributes
let z=document.getElementById("id2")
let text2=z.hasAttribute("onclick")
console.log(text2);
document.getElementById("meme").innerHTML=text2
