var div_covid=document.createElement("div")
div_covid.innerHTML=`<input type="text" id="text">
                    <button onclick="foo()">Search</button>
                    <div id="active"></div>
                    <div id="recovered"></div>
                    <div id="death"></div>`
                    
document.body.append(div_covid)
div_covid.style.textAlign="center";

async function foo(){
    let country_name=document.getElementById("text").value;
    let result=await fetch (`https://api.covid19api.com/dayone/country/${country_name}`);
    let result1=await result.json();
    let index=result1.length-1;
    var active_case=result1[index].Active;
    var recovered_case=result1[index].Recovered;
    var deaths=result1[index].Deaths;

    var Active=document.getElementById("active").innerText=`Total Active Case : ${active_case}`
    var Recovered=document.getElementById("recovered").innerText=`Total Recovered Case : ${recovered_case}`
    var Deaths=document.getElementById("death").innerText=`Total Deaths  : ${deaths}`

   
}
