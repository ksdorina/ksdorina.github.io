var adatok0=[];
var veletlen=-1;
fetch("https://restcountries.eu/rest/v2/all")
.then(x => x.json())
.then(y => tarol(y));

function tarol(adatok){
    console.log(adatok);
    adatok0=adatok;
}

function sorsol(){
    veletlen=Math.floor(Math.random() * adatok0.length);
    
    var sz='<h4>Ország: '+adatok0[veletlen].name+'</h4>'; 
    sz+='<p>Ország kódja:'+adatok0[veletlen].callingCodes+'</p>';
    sz+='<img src="'+adatok0[veletlen].flag+'" class="nagykep">';
    sz+='<input type="text" id="bevitel" class="form-control">';
    sz+='<button class="btn btn-primary"  id="ellenorzes"  >Ellenőrzés</button>';
    
    document.getElementById("fovaros").innerHTML=sz;

    document.getElementById("ellenorzes").addEventListener("click",ellenoriz);


}


function ellenoriz(){
    //console.log("hello");
    var nepesseg=document.getElementById("bevitel").value;
    if (adatok0[veletlen].population*0.1<=nepesseg)
        document.getElementById("visszajelzes").innerHTML='<h4>Gratulálok, a helyes megoldás:'+adatok0[veletlen].population+'</h4>';
    else
        document.getElementById("visszajelzes").innerHTML='<h4>Nem jó, a helyes megoldás:'+adatok0[veletlen].population+'</h4>';
        
}