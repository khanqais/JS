const URL="https://cat-fact.herokuapp.com/facts"



const GetFactts= async()=>
{
    let response= await fetch(URL)
    console.log(response);
    let data= await response.json()
    // console.log(data[0].text);
    document.getElementById("demo").innerHTML=data[1].text

    
}