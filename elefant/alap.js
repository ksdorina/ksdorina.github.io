fetch("https://raw.githubusercontent.com/siraly1636/siraly1636.github.io/main/elefant/assets/json/elefant.json")
.then(x => x.json())
.then(y => elefantJson(y));

function elefantJson(adatok){

    var sz="";
    for (elem of adatok){
        sz+="<div class='col-sm-4'><span class='nev'>"+elem.name+"</span><br>";
        sz+="<a href='"+elem.image+"'><img src='"+elem.image+"' class='kep'></a>";
        sz+="<p class='link'><a target='_blank' href='"+elem.wikilink+"'>Wikilink</a></p></div>" 
        
    }
    document.getElementById("elefantok").innerHTML=sz;
}