//Q1 change the color
let x=document.getElementsByTagName("nav")[0]
x.firstElementChild.style.color="black"
x.lastElementChild.style.color="green"
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="cyan"
});

