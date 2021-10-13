fetch("http://localhost:3000/termekek")
.then(x => x.json())
.then(y => termek_megjelenit(y));





function termek_megjelenit(adatok){

    console.log(adatok);

    var sz="";
    for (elem of adatok){
        sz+='<tr>';
        sz+='<td>'+elem.id+'</td>';
        sz+='<td>'+elem.név+'</td>';
        sz+='<td>'+elem.ár+' Ft</td>';
        sz+='<td>'+elem.szín+'</td>';
        sz+='<td>'+elem.méret+'</td>';
        sz+='<td>'+elem.anyag+'</td>';
        sz+='</tr>';
    }
    document.getElementById("tablazat").innerHTML=sz;

}




function termek_felvitel(){

    var bemenet={
        bevitel1:document.getElementById("bevitel1").value,
        bevitel2:document.getElementById("bevitel2").value,
        bevitel3:document.getElementById("bevitel3").value,
        bevitel4:document.getElementById("bevitel4").value,
        bevitel5:document.getElementById("bevitel5").value
    }
    fetch("http://localhost:3000/termek_felvitel", {
        method: "POST",
        body: JSON.stringify(bemenet),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    )
    .then(x => x.text());
}