let hitung=document.querySelector("#hitung");
let reset=document.querySelector("#reset");
hitung.addEventListener("click", ()=>{
    document.querySelector("#hasil").innerHTML = `
    
    <div class="row">
        <div class="col-full">
            <h3 style="margin-bottom: 0">Hisab Awal Bulan</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-full">
            <h3 style="margin-top: 3rem">Ijtima' Jatuh Pada</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Hari</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Jam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-full">
            <h3 style="margin-top: 3rem">Kondisi Matahari dan Hilal pada</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Maghrib</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Matahari Terbenam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Tinggi Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Lama Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Letak Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Nurul Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Keadaan Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Hilal Terbenam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Jam Hilal Terbenam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: Sek iki jek gurung dadi</p>
        </div>
    </div>
    `
});

reset.addEventListener("click", ()=>{
    document.querySelector("#hasil").innerHTML = ""
});