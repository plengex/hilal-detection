let hitung=document.querySelector("#hitung");
let reset=document.querySelector("#reset");
hitung.addEventListener("click", ()=>{
    document.querySelector("#hasil").innerHTML = `<hr><p class="lead" style="color: #000">Sek iki jek gurung dadi</p>`
});

reset.addEventListener("click", ()=>{
    document.querySelector("#hasil").innerHTML = ""
});