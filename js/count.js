let hitung = document.querySelector("#hitung");
let reset = document.querySelector("#reset");
hitung.addEventListener("click", ()=>{

    // function jumlah()
    // {
    var ltdr1 = parseFloat(document.getElementById("lintangDerajat").value);
    if (isNaN (ltdr1))
    ltdr1=0.0;
    var ltmn1 = parseFloat(document.getElementById("lintangMenit").value);
    if (isNaN (ltmn1))
    ltmn1=0.0;
    var ltdt1 = parseFloat(document.getElementById("lintangDetik").value);
    if (isNaN (ltdt1))
    ltdt1=0.0;
    var bjdr1 = parseFloat(document.getElementById("bujurDerajat").value);
    if (isNaN (bjdr1))
    bjdr1=0.0;
    var bjmn1 = parseFloat(document.getElementById("bujurMenit").value);
    if (isNaN (bjmn1))
    bjmn1=0.0;
    var bjdt1 = parseFloat(document.getElementById("bujurDetik").value);
    if (isNaN (bjdt1))
    bjdt1=0.0;
    var nthn = parseFloat(document.getElementById("tahun").value);
    if (isNaN (nthn))
    nthn=0.0;
    var ntgl = parseFloat(document.getElementById("tanggal").value);
    if (isNaN (ntgl))
    ntgl=0.0;
    
    //logika lintang bujur
    var  jenislt = document.getElementById("lintangJenis").value;
    var jenisbj = document.getElementById("bujurJenis").value;
    var nbln = document.getElementById("bulan").value;
    
    
    var namabulan
    
    if(nbln==1){
    namabulan = "Muharam";
    }else if(nbln==2){
    namabulan = "Safar";
    }else if(nbln==3){
    namabulan = "Rabiul Awal";
    }else if(nbln==4){
    namabulan = "Rabiul Akhir";
    }else if(nbln==5){
    namabulan = "Jumadil Awal";
    }else if(nbln==6){
    namabulan = "Jumadil Akhir";
    }else if(nbln==7){
    namabulan = "Rajab";
    }else if(nbln==8){
    namabulan = "Syaban";
    }else if(nbln==9){
    namabulan = "Ramadan";
    }else if(nbln==10){
    namabulan = "Syawal";
    }else if(nbln==11){
    namabulan = "Zulkaidah";
    }else if(nbln==12){
    namabulan = "Zulhijah";
    }else{
    namabulan = "Error";
    }
    
    
    
    //mencari nilai masing-masing
    var nlin = (ltdr1+ltmn1/60+ltdt1/3600)*jenislt;
    var nbujur = (bjdr1+bjmn1/60+bjdt1/3600)*jenisbj;
    
    
    //fungsi integer bro
    var INTG = function (a){
    var hasiln 
    if (a>0){
     hasiln = Math.floor(a)
    } else {
     hasiln = Math.ceil(a)
    };
    
    return hasiln;
    };
    
    //fungsi mod bro
    var MOD = function (a,b){
    var hasiln1 = a/b
    var hasilint = Math.floor(hasiln1)
    var hasiln2 = hasiln1-hasilint
    var hasiln = hasiln2*b
    return hasiln;
    };
    
    
    var thnmbs
    if (nbln<=2){
    
    if(MOD(nthn-2,30)==0){
        thnmbs=30.0;
        }else{
        thnmbs=Math.round(MOD(nthn-2,30));
    }
    }else{
    if(MOD(nthn-1,30)==0){
        thnmbs=30.0;
        }else{
        thnmbs=Math.round(MOD(nthn-1,30));
    }
    }
    
    var blntam
    if(((nbln-2+12)%12)==0){
        blntam = 12.0;
    }	else {
        blntam= ((nbln-2+12)%12);
    }
    
    var thnmajm
    if(blntam>10){
        thnmajm = nthn-2-thnmbs;
        }else{
        thnmajm = nthn-1-thnmbs;
        }
        
    
    //harokat wasath syams 1
    
    var wsthnmj
    
    if (thnmajm==-60){wsthnmj=	38.26472222;}
    else if (thnmajm==-30){wsthnmj=	76.68083333;}
    else if(thnmajm==0){wsthnmj=115.0969444;}
    else if(thnmajm==30){wsthnmj=153.5130556;}
    else if(thnmajm==60){wsthnmj=191.9291667;}
    else if(thnmajm==90){wsthnmj=230.3452778;}
    else if(thnmajm==120){wsthnmj=268.7613889;}
    else if(thnmajm==150){wsthnmj=307.1775;}
    else if(thnmajm==180){wsthnmj=345.5936111;}
    else if(thnmajm==210){wsthnmj=24.00972222;}
    else if(thnmajm==240){wsthnmj=62.42583333;}
    else if(thnmajm==270){wsthnmj=100.8419444;}
    else if(thnmajm==300){wsthnmj=139.2580556;}
    else if(thnmajm==330){wsthnmj=177.6741667;}
    else if(thnmajm==360){wsthnmj=216.0902778;}
    else if(thnmajm==390){wsthnmj=254.5063889;}
    else if(thnmajm==420){wsthnmj=292.9225;}
    else if(thnmajm==450){wsthnmj=331.3386111;}
    else if(thnmajm==480){wsthnmj=9.754722222;}
    else if(thnmajm==510){wsthnmj=48.17083333;}
    else if(thnmajm==540){wsthnmj=86.58694444;}
    else if(thnmajm==570){wsthnmj=125.0030556;}
    else if(thnmajm==600){wsthnmj=163.4191667;}
    else if(thnmajm==630){wsthnmj=201.8352778;}
    else if(thnmajm==660){wsthnmj=240.2513889;}
    else if(thnmajm==690){wsthnmj=278.6675;}
    else if(thnmajm==720){wsthnmj=317.0836111;}
    else if(thnmajm==750){wsthnmj=355.4997222;}
    else if(thnmajm==780){wsthnmj=33.91583333;}
    else if(thnmajm==810){wsthnmj=72.33194444;}
    else if(thnmajm==840){wsthnmj=110.7480556;}
    else if(thnmajm==870){wsthnmj=149.1641667;}
    else if(thnmajm==900){wsthnmj=187.5802778;}
    else if(thnmajm==930){wsthnmj=225.9963889;}
    else if(thnmajm==960){wsthnmj=264.4125;}
    else if(thnmajm==990){wsthnmj=302.8286111;}
    else if(thnmajm==1020){wsthnmj=341.2447222;}
    else if(thnmajm==1050){wsthnmj=19.66083333;}
    else if(thnmajm==1080){wsthnmj=58.07694444;}
    else if(thnmajm==1110){wsthnmj=96.49305556;}
    else if(thnmajm==1140){wsthnmj=134.9091667;}
    else if(thnmajm==1170){wsthnmj=173.3252778;}
    else if(thnmajm==1200){wsthnmj=211.7413889;}
    else if(thnmajm==1230){wsthnmj=250.1575;}
    else if(thnmajm==1260){wsthnmj=288.5736111;}
    else if(thnmajm==1290){wsthnmj=326.9897222;}
    else if(thnmajm==1320){wsthnmj=5.405833333;}
    else if(thnmajm==1350){wsthnmj=43.82194444;}
    else if(thnmajm==1380){wsthnmj=82.23805556;}
    else if(thnmajm==1410){wsthnmj=120.6541667;}
    else if(thnmajm==1440){wsthnmj=159.0702778;}
    else if(thnmajm==1470){wsthnmj=197.4863889;}
    else if(thnmajm==1500){wsthnmj=235.9025;}
    else if(thnmajm==1530){wsthnmj=274.3186111;}
    else if(thnmajm==1560){wsthnmj=312.7347222;}
    else if(thnmajm==1590){wsthnmj=351.1508333;}
    else if(thnmajm==1620){wsthnmj=29.56694444;}
    else if(thnmajm==1650){wsthnmj=67.98305556;}
    else if(thnmajm==1680){wsthnmj=106.3991667;}
    else if(thnmajm==1710){wsthnmj=144.8152778;}
    else if(thnmajm==1740){wsthnmj=183.2313889;}
    else if(thnmajm==1770){wsthnmj=221.6475;}
    else if(thnmajm==1800){wsthnmj=260.0636111;}
    else if(thnmajm==1830){wsthnmj=298.4797222;}
    else if(thnmajm==1860){wsthnmj=336.8958333;}
    else if(thnmajm==1890){wsthnmj=15.31194444;}
    else{wsthnmj=999999999.0}
    
    
    var wsthnmb
    
    if(thnmbs==1){wsthnmb=348.9191667;}
    else if( thnmbs==2){wsthnmb=338.8238889;}
    else if( thnmbs==3){wsthnmb=327.7430556;}
    else if( thnmbs==4){wsthnmb=316.6622222;}
    else if( thnmbs==5){wsthnmb=306.5669444;}
    else if( thnmbs==6){wsthnmb=295.4861111;}
    else if( thnmbs==7){wsthnmb=285.3908333;}
    else if( thnmbs==8){wsthnmb=274.31;}
    else if( thnmbs==9){wsthnmb=263.2291667;}
    else if( thnmbs==10){wsthnmb=253.1338889;}
    else if( thnmbs==11){wsthnmb=242.0530556;}
    else if( thnmbs==12){wsthnmb=230.9722222;}
    else if( thnmbs==13){wsthnmb=220.8769444;}
    else if( thnmbs==14){wsthnmb=209.7961111;}
    else if( thnmbs==15){wsthnmb=199.7008333;}
    else if( thnmbs==16){wsthnmb=188.62;}
    else if( thnmbs==17){wsthnmb=177.5391667;}
    else if( thnmbs==18){wsthnmb=167.4438889;}
    else if( thnmbs==19){wsthnmb=156.3630556;}
    else if( thnmbs==20){wsthnmb=145.2822222;}
    else if( thnmbs==21){wsthnmb=135.1869444;}
    else if( thnmbs==22){wsthnmb=124.1061111;}
    else if( thnmbs==23){wsthnmb=113.0252778;}
    else if( thnmbs==24){wsthnmb=102.93;}
    else if( thnmbs==25){wsthnmb=91.84916667;}
    else if( thnmbs==26){wsthnmb=81.75388889;}
    else if( thnmbs==27){wsthnmb=70.67305556;}
    else if( thnmbs==28){wsthnmb=59.59222222;}
    else if( thnmbs==29){wsthnmb=49.49694444;}
    else if( thnmbs==30){wsthnmb=38.41611111;}
    else{wsthnmb=9999999999;}
    
    
    var wsblntam
    if( blntam==1){wsblntam=29.56944444;}
    else if( blntam==2){wsblntam=58.15305556;}
    else if( blntam==3	){wsblntam=87.7225;}
    else if( blntam==4	){wsblntam=116.3063889;}
    else if( blntam==5	){wsblntam=145.8758333;}
    else if( blntam==6	){wsblntam=174.4594444;}
    else if( blntam==7	){wsblntam=204.0288889;}
    else if( blntam==8	){wsblntam=232.6127778;}
    else if( blntam==9	){wsblntam=262.1822222;}
    else if( blntam==10	){wsblntam=290.7658333;}
    else if( blntam==11	){wsblntam=320.3352778;}
    else if( blntam==12	){wsblntam=348.9191667;}
    else{wsblntam=9999999;}
        
    var wstgl= MOD(ntgl*0.985647268,360);
    
    
    
    //harokat khosshoh syams 1
    
    var ksthnmj
    
    if ( thnmajm==-60){ksthnmj=321.2091667;}
    else if ( thnmajm==-30){ksthnmj=359.0955556;}
    else if ( thnmajm==0){ksthnmj=36.98194444;}
    else if ( thnmajm==30){ksthnmj=74.86833333;}
    else if ( thnmajm==60){ksthnmj=112.7547222;}
    else if ( thnmajm==90){ksthnmj=150.6411111;}
    else if ( thnmajm==120){ksthnmj=188.5275;}
    else if ( thnmajm==150){ksthnmj=226.4138889;}
    else if ( thnmajm==180){ksthnmj=264.3002778;}
    else if ( thnmajm==210){ksthnmj=302.1866667;}
    else if ( thnmajm==240){ksthnmj=340.0730556;}
    else if ( thnmajm==270){ksthnmj=17.95944444;}
    else if ( thnmajm==300){ksthnmj=55.84583333;}
    else if ( thnmajm==330){ksthnmj=93.73222222;}
    else if ( thnmajm==360){ksthnmj=131.6186111;}
    else if ( thnmajm==390){ksthnmj=169.505;}
    else if ( thnmajm==420){ksthnmj=207.3913889;}
    else if ( thnmajm==450){ksthnmj=245.2777778;}
    else if ( thnmajm==480){ksthnmj=283.1641667;}
    else if ( thnmajm==510){ksthnmj=321.0505556;}
    else if ( thnmajm==540){ksthnmj=358.9369444;}
    else if ( thnmajm==570){ksthnmj=36.82333333;}
    else if ( thnmajm==600){ksthnmj=74.70972222;}
    else if ( thnmajm==630){ksthnmj=112.5961111;}
    else if ( thnmajm==660){ksthnmj=150.4825;}
    else if ( thnmajm==690){ksthnmj=188.3688889;}
    else if ( thnmajm==720){ksthnmj=226.2552778;}
    else if ( thnmajm==750){ksthnmj=264.1416667;}
    else if ( thnmajm==780){ksthnmj=302.0280556;}
    else if ( thnmajm==810){ksthnmj=339.9144444;}
    else if ( thnmajm==840){ksthnmj=17.80083333;}
    else if ( thnmajm==870){ksthnmj=55.68722222;}
    else if ( thnmajm==900){ksthnmj=93.57361111;}
    else if ( thnmajm==930){ksthnmj=131.46;}
    else if ( thnmajm==960){ksthnmj=169.3463889;}
    else if ( thnmajm==990){ksthnmj=207.2327778;}
    else if ( thnmajm==1020){ksthnmj=245.1191667;}
    else if ( thnmajm==1050){ksthnmj=283.0055556;}
    else if ( thnmajm==1080){ksthnmj=320.8919444;}
    else if ( thnmajm==1110){ksthnmj=358.7783333;}
    else if ( thnmajm==1140){ksthnmj=36.66472222;}
    else if ( thnmajm==1170){ksthnmj=74.55111111;}
    else if ( thnmajm==1200){ksthnmj=112.4375;}
    else if ( thnmajm==1230){ksthnmj=150.3238889;}
    else if ( thnmajm==1260){ksthnmj=188.2102778;}
    else if ( thnmajm==1290){ksthnmj=226.0966667;}
    else if ( thnmajm==1320){ksthnmj=263.9830556;}
    else if ( thnmajm==1350){ksthnmj=301.8694444;}
    else if ( thnmajm==1380){ksthnmj=339.7558333;}
    else if ( thnmajm==1410){ksthnmj=17.64222222;}
    else if ( thnmajm==1440){ksthnmj=55.52861111;}
    else if ( thnmajm==1470){ksthnmj=93.415;}
    else if ( thnmajm==1500){ksthnmj=131.3013889;}
    else if ( thnmajm==1530){ksthnmj=169.1877778;}
    else if ( thnmajm==1560){ksthnmj=207.0741667;}
    else if ( thnmajm==1590){ksthnmj=244.9605556;}
    else if ( thnmajm==1620){ksthnmj=282.8469444;}
    else if ( thnmajm==1650){ksthnmj=320.7333333;}
    else if ( thnmajm==1680){ksthnmj=358.6197222;}
    else if ( thnmajm==1710){ksthnmj=36.50611111;}
    else if ( thnmajm==1740){ksthnmj=74.3925;}
    else if ( thnmajm==1770){ksthnmj=74.3925;}
    else if ( thnmajm==1800){ksthnmj=74.3925;}
    else if ( thnmajm==1830){ksthnmj=188.0516667;}
    else if ( thnmajm==1860){ksthnmj=225.9380556;}
    else if ( thnmajm==1890){ksthnmj=263.8244444;}
    else {ksthnmj=999999.0;}
        
        
        
    var ksthnmb
    
    if( thnmbs==1){ksthnmb=348.9013889;}
    else if( thnmbs==2){ksthnmb=338.7886111;}
    else if( thnmbs==3){ksthnmb=327.69;}
    else if( thnmbs==4){ksthnmb=316.5916667;}
    else if( thnmbs==5){ksthnmb=306.4786111;}
    else if( thnmbs==6){ksthnmb=295.38;}
    else if( thnmbs==7){ksthnmb=285.2672222;}
    else if( thnmbs==8){ksthnmb=274.1686111;}
    else if( thnmbs==9){ksthnmb=263.0702778;}
    else if( thnmbs==10){ksthnmb=252.9572222;}
    else if( thnmbs==11){ksthnmb=241.8588889;}
    else if( thnmbs==12){ksthnmb=230.7602778;}
    else if( thnmbs==13){ksthnmb=220.6475;}
    else if( thnmbs==14){ksthnmb=209.5488889;}
    else if( thnmbs==15){ksthnmb=199.4358333;}
    else if( thnmbs==16){ksthnmb=188.3375;}
    else if( thnmbs==17){ksthnmb=177.2388889;}
    else if( thnmbs==18){ksthnmb=167.1261111;}
    else if( thnmbs==19){ksthnmb=156.0275;}
    else if( thnmbs==20){ksthnmb=144.9291667;}
    else if( thnmbs==21){ksthnmb=134.8161111;}
    else if( thnmbs==22){ksthnmb=123.7177778;}
    else if( thnmbs==23){ksthnmb=112.6191667;}
    else if( thnmbs==24){ksthnmb=102.5061111;}
    else if( thnmbs==25){ksthnmb=91.40777778;}
    else if( thnmbs==26){ksthnmb=81.29472222;}
    else if( thnmbs==27){ksthnmb=70.19611111;}
    else if( thnmbs==28){ksthnmb=59.09777778;}
    else if( thnmbs==29){ksthnmb=48.985;}
    else if( thnmbs==30){ksthnmb=37.88638889;}
    else {ksthnmb=999999.0}	
        
        
    var ksblntam
    
    if(blntam==1){ksblntam=29.56805556;}
    else if(blntam==2){ksblntam=58.15;}
    else if(blntam==3){ksblntam=87.71805556;}
    else if(blntam==4){ksblntam=116.3005556;}
    else if(blntam==5){ksblntam=145.8683333;}
    else if(blntam==6){ksblntam=174.4505556;}
    else if(blntam==7){ksblntam=204.0188889;}
    else if(blntam==8){ksblntam=232.6011111;}
    else if(blntam==9){ksblntam=262.1688889;}
    else if(blntam==10){ksblntam=290.7511111;}
    else if(blntam==11){ksblntam=320.3191667;}
    else if(blntam==12){ksblntam=348.9013889;}
    else {ksblntam=9999999}
        
        
    var kstgl = MOD(ntgl*0.98559744,360);
        
        
    // wasath qomar
    
    var wqthnmj
    
    if( thnmajm==-60){wqthnmj=53.43194444;}
    else if( thnmajm==-30){wqthnmj=91.70694444;}
    else if( thnmajm==0){wqthnmj=129.9819444;}
    else if( thnmajm==30){wqthnmj=168.2569444;}
    else if( thnmajm==60){wqthnmj=206.5319444;}
    else if( thnmajm==90){wqthnmj=244.8069444;}
    else if( thnmajm==120){wqthnmj=283.0819444;}
    else if( thnmajm==150){wqthnmj=321.3569444;}
    else if( thnmajm==180){wqthnmj=359.6319444;}
    else if( thnmajm==210){wqthnmj=37.90694444;}
    else if( thnmajm==240){wqthnmj=76.18194444;}
    else if( thnmajm==270){wqthnmj=114.4569444;}
    else if( thnmajm==300){wqthnmj=152.7319444;}
    else if( thnmajm==330){wqthnmj=191.0069444;}
    else if( thnmajm==360){wqthnmj=229.2819444;}
    else if( thnmajm==390){wqthnmj=267.5569444;}
    else if( thnmajm==420){wqthnmj=305.8319444;}
    else if( thnmajm==450){wqthnmj=344.1069444;}
    else if( thnmajm==480){wqthnmj=22.38194444;}
    else if( thnmajm==510){wqthnmj=60.65694444;}
    else if( thnmajm==540){wqthnmj=98.93194444;}
    else if( thnmajm==570){wqthnmj=137.2069444;}
    else if( thnmajm==600){wqthnmj=175.4819444;}
    else if( thnmajm==630){wqthnmj=213.7569444;}
    else if( thnmajm==660){wqthnmj=252.0319444;}
    else if( thnmajm==690){wqthnmj=290.3069444;}
    else if( thnmajm==720){wqthnmj=328.5819444;}
    else if( thnmajm==750){wqthnmj=6.856944444;}
    else if( thnmajm==780){wqthnmj=45.13194444;}
    else if( thnmajm==810){wqthnmj=83.40694444;}
    else if( thnmajm==840){wqthnmj=121.6819444;}
    else if( thnmajm==870){wqthnmj=159.9569444;}
    else if( thnmajm==900){wqthnmj=198.2319444;}
    else if( thnmajm==930){wqthnmj=236.5069444;}
    else if( thnmajm==960){wqthnmj=274.7819444;}
    else if( thnmajm==990){wqthnmj=313.0569444;}
    else if( thnmajm==1020){wqthnmj=351.3319444;}
    else if( thnmajm==1050){wqthnmj=29.60694444;}
    else if( thnmajm==1080){wqthnmj=67.88194444;}
    else if( thnmajm==1110){wqthnmj=106.1569444;}
    else if( thnmajm==1140){wqthnmj=144.4319444;}
    else if( thnmajm==1170){wqthnmj=182.7069444;}
    else if( thnmajm==1200){wqthnmj=220.9819444;}
    else if( thnmajm==1230){wqthnmj=259.2569444;}
    else if( thnmajm==1260){wqthnmj=297.5319444;}
    else if( thnmajm==1290){wqthnmj=335.8069444;}
    else if( thnmajm==1320){wqthnmj=14.08194444;}
    else if( thnmajm==1350){wqthnmj=52.35694444;}
    else if( thnmajm==1380){wqthnmj=90.63194444;}
    else if( thnmajm==1410){wqthnmj=128.9069444;}
    else if( thnmajm==1440){wqthnmj=167.1819444;}
    else if( thnmajm==1470){wqthnmj=205.4569444;}
    else if( thnmajm==1500){wqthnmj=243.7319444;}
    else if( thnmajm==1530){wqthnmj=282.0069444;}
    else if( thnmajm==1560){wqthnmj=320.2819444;}
    else if( thnmajm==1590){wqthnmj=358.5569444;}
    else if( thnmajm==1620){wqthnmj=36.83194444;}
    else if( thnmajm==1650){wqthnmj=75.10694444;}
    else if( thnmajm==1680){wqthnmj=113.3819444;}
    else if( thnmajm==1710){wqthnmj=151.6569444;}
    else if( thnmajm==1740){wqthnmj=189.9319444;}
    else if( thnmajm==1770){wqthnmj=228.2069444;}
    else if( thnmajm==1800){wqthnmj=266.4819444;}
    else if( thnmajm==1830){wqthnmj=304.7569444;}
    else if( thnmajm==1860){wqthnmj=343.0319444;}
    else if( thnmajm==1890){wqthnmj=21.30694444;}
    else {wqthnmj=9999999}
        
        
    var wqthnmb
    
    if( thnmbs==1){wqthnmb=344.4444444;}
    else if( thnmbs==2){wqthnmb=342.0652778;}
    else if( thnmbs==3){wqthnmb=326.51;}
    else if( thnmbs==4){wqthnmb=310.9544444;}
    else if( thnmbs==5){wqthnmb=308.5752778;}
    else if( thnmbs==6){wqthnmb=293.0197222;}
    else if( thnmbs==7){wqthnmb=290.6405556;}
    else if( thnmbs==8){wqthnmb=275.085;}
    else if( thnmbs==9){wqthnmb=259.5297222;}
    else if( thnmbs==10){wqthnmb=257.1505556;}
    else if( thnmbs==11){wqthnmb=241.595;}
    else if( thnmbs==12){wqthnmb=226.0394444;}
    else if( thnmbs==13){wqthnmb=223.6602778;}
    else if( thnmbs==14){wqthnmb=208.1047222;}
    else if( thnmbs==15){wqthnmb=205.7258333;}
    else if( thnmbs==16){wqthnmb=190.1702778;}
    else if( thnmbs==17){wqthnmb=174.6147222;}
    else if( thnmbs==18){wqthnmb=172.2355556;}
    else if( thnmbs==19){wqthnmb=156.68;}
    else if( thnmbs==20){wqthnmb=141.1244444;}
    else if( thnmbs==21){wqthnmb=138.7455556;}
    else if( thnmbs==22){wqthnmb=123.19;}
    else if( thnmbs==23){wqthnmb=107.6344444;}
    else if( thnmbs==24){wqthnmb=105.2552778;}
    else if( thnmbs==25){wqthnmb=89.69972222;}
    else if( thnmbs==26){wqthnmb=87.32083333;}
    else if( thnmbs==27){wqthnmb=71.76527778;}
    else if( thnmbs==28){wqthnmb=56.20972222;}
    else if( thnmbs==29){wqthnmb=53.83055556;}
    else if( thnmbs==30){wqthnmb=38.275;}
    else {wqthnmb=99999;}
        
        
        
    var wqblntam
    
    if(blntam==1){wqblntam=35.29194444;}
    else if(blntam==2){wqblntam=	57.4075;}
    else if(blntam==3){wqblntam=	92.69916667;}
    else if(blntam==4){wqblntam=	114.8147222;}
    else if(blntam==5){wqblntam=	150.1066667;}
    else if(blntam==6){wqblntam=	172.2222222;}
    else if(blntam==7){wqblntam=	207.5141667;}
    else if(blntam==8){wqblntam=	229.6294444;}
    else if(blntam==9){wqblntam=	264.9213889;}
    else if(blntam==10){wqblntam=	287.0369444;}
    else if(blntam==11){wqblntam=	322.3288889;}
    else if(blntam==12){wqblntam=	344.4444444;}
    else {wqblntam=99999999;}
        
        
    var wqtgl =MOD(ntgl*13.17639673,360);
        
    
    
    //khoshoh qomar
    
    var kqthnmj
    
    
    if( thnmajm==-60){kqthnmj=248.5394444;}
    else if( thnmajm==-30){kqthnmj=182.4355556;}
    else if( thnmajm==0){kqthnmj=116.3316667;}
    else if( thnmajm==30){kqthnmj=50.22777778;}
    else if( thnmajm==60){kqthnmj=344.1238889;}
    else if( thnmajm==90){kqthnmj=278.02;}
    else if( thnmajm==120){kqthnmj=211.9161111;}
    else if( thnmajm==150){kqthnmj=145.8122222;}
    else if( thnmajm==180){kqthnmj=79.70833333;}
    else if( thnmajm==210){kqthnmj=13.60444444;}
    else if( thnmajm==240){kqthnmj=307.5005556;}
    else if( thnmajm==270){kqthnmj=241.3966667;}
    else if( thnmajm==300){kqthnmj=175.2927778;}
    else if( thnmajm==330){kqthnmj=109.1888889;}
    else if( thnmajm==360){kqthnmj=43.085;}
    else if( thnmajm==390){kqthnmj=336.9811111;}
    else if( thnmajm==420){kqthnmj=270.8772222;}
    else if( thnmajm==450){kqthnmj=204.7733333;}
    else if( thnmajm==480){kqthnmj=138.6694444;}
    else if( thnmajm==510){kqthnmj=72.56555556;}
    else if( thnmajm==540){kqthnmj=6.461666667;}
    else if( thnmajm==570){kqthnmj=300.3577778;}
    else if( thnmajm==600){kqthnmj=234.2538889;}
    else if( thnmajm==630){kqthnmj=168.15;}
    else if( thnmajm==660){kqthnmj=102.0461111;}
    else if( thnmajm==690){kqthnmj=35.94222222;}
    else if( thnmajm==720){kqthnmj=329.8383333;}
    else if( thnmajm==750){kqthnmj=263.7344444;}
    else if( thnmajm==780){kqthnmj=197.6305556;}
    else if( thnmajm==810){kqthnmj=131.5266667;}
    else if( thnmajm==840){kqthnmj=65.42277778;}
    else if( thnmajm==870){kqthnmj=359.3188889;}
    else if( thnmajm==900){kqthnmj=293.215;}
    else if( thnmajm==930){kqthnmj=227.1111111;}
    else if( thnmajm==960){kqthnmj=161.0072222;}
    else if( thnmajm==990){kqthnmj=94.90333333;}
    else if( thnmajm==1020){kqthnmj=28.79944444;}
    else if( thnmajm==1050){kqthnmj=322.6955556;}
    else if( thnmajm==1080){kqthnmj=256.5916667;}
    else if( thnmajm==1110){kqthnmj=190.4877778;}
    else if( thnmajm==1140){kqthnmj=124.3838889;}
    else if( thnmajm==1170){kqthnmj=58.28;}
    else if( thnmajm==1200){kqthnmj=352.1761111;}
    else if( thnmajm==1230){kqthnmj=286.0722222;}
    else if( thnmajm==1260){kqthnmj=219.9683333;}
    else if( thnmajm==1290){kqthnmj=153.8644444;}
    else if( thnmajm==1320){kqthnmj=87.76055556;}
    else if( thnmajm==1350){kqthnmj=21.65666667;}
    else if( thnmajm==1380){kqthnmj=315.5527778;}
    else if( thnmajm==1410){kqthnmj=249.4488889;}
    else if( thnmajm==1440){kqthnmj=183.345;}
    else if( thnmajm==1470){kqthnmj=117.2411111;}
    else if( thnmajm==1500){kqthnmj=51.13722222;}
    else if( thnmajm==1530){kqthnmj=345.0333333;}
    else if( thnmajm==1560){kqthnmj=278.9294444;}
    else if( thnmajm==1590){kqthnmj=212.8255556;}
    else if( thnmajm==1620){kqthnmj=146.7216667;}
    else if( thnmajm==1650){kqthnmj=80.61777778;}
    else if( thnmajm==1680){kqthnmj=14.51388889;}
    else if( thnmajm==1710){kqthnmj=308.41;}
    else if( thnmajm==1740){kqthnmj=242.3061111;}
    else if( thnmajm==1770){kqthnmj=176.2022222;}
    else if( thnmajm==1800){kqthnmj=110.0983333;}
    else if( thnmajm==1830){kqthnmj=43.99444444;}
    else if( thnmajm==1860){kqthnmj=337.8905556;}
    else if( thnmajm==1890){kqthnmj=271.7866667;}
    else {kqthnmj=9999999;}
        
        
    var kqthnmb
    
    if( thnmbs==1){kqthnmb=305.0061111;}
    else if( thnmbs==2){kqthnmb=263.0769444;}
    else if( thnmbs==3){kqthnmb=208.0830556;}
    else if( thnmbs==4){kqthnmb=153.0891667;}
    else if( thnmbs==5){kqthnmb=111.1602778;}
    else if( thnmbs==6){kqthnmb=56.16611111;}
    else if( thnmbs==7){kqthnmb=14.23722222;}
    else if( thnmbs==8){kqthnmb=319.2433333;}
    else if( thnmbs==9){kqthnmb=264.2494444;}
    else if( thnmbs==10){kqthnmb=222.3202778;}
    else if( thnmbs==11){kqthnmb=167.3263889;}
    else if( thnmbs==12){kqthnmb=112.3325;}
    else if( thnmbs==13){kqthnmb=70.40361111;}
    else if( thnmbs==14){kqthnmb=15.40944444;}
    else if( thnmbs==15){kqthnmb=333.4805556;}
    else if( thnmbs==16){kqthnmb=278.4866667;}
    else if( thnmbs==17){kqthnmb=223.4925;}
    else if( thnmbs==18){kqthnmb=181.5636111;}
    else if( thnmbs==19){kqthnmb=126.5697222;}
    else if( thnmbs==20){kqthnmb=71.57583333;}
    else if( thnmbs==21){kqthnmb=29.64666667;}
    else if( thnmbs==22){kqthnmb=334.6527778;}
    else if( thnmbs==23){kqthnmb=279.6588889;}
    else if( thnmbs==24){kqthnmb=237.7297222;}
    else if( thnmbs==25){kqthnmb=182.7358333;}
    else if( thnmbs==26){kqthnmb=140.8069444;}
    else if( thnmbs==27){kqthnmb=85.81305556;}
    else if( thnmbs==28){kqthnmb=30.81888889;}
    else if( thnmbs==29){kqthnmb=348.89;}
    else if( thnmbs==30){kqthnmb=293.8961111;}
    else {kqthnmb=99999999;}
    
    var kqblntam
    if( blntam==1){kqblntam=31.94972222;}
    else if( blntam==2	){kqblntam=50.83444444;}
    else if( blntam==3	){kqblntam=82.78388889;}
    else if( blntam==4	){kqblntam=101.6686111;}
    else if( blntam==5	){kqblntam=133.6183333;}
    else if( blntam==6	){kqblntam=152.5030556;}
    else if( blntam==7	){kqblntam=184.4527778;}
    else if( blntam==8	){kqblntam=203.3372222;}
    else if( blntam==9	){kqblntam=235.2869444;}
    else if( blntam==10	){kqblntam=254.1716667;}
    else if( blntam==11	){kqblntam=286.1213889;}
    else if( blntam==12	){kqblntam=305.0061111;}
    else{kqblntam=999999;}
    
    var kqtgl =MOD(ntgl*13.06498901,360);
    
    
    //uqdah
    
    var uqthnmj
    
    if( thnmajm==-60){uqthnmj=187.0961111;}
    else if( thnmajm==-30){uqthnmj=30.06166667;}
    else if( thnmajm==0){uqthnmj=233.0272222;}
    else if( thnmajm==30){uqthnmj=75.99277778;}
    else if( thnmajm==60){uqthnmj=278.9583333;}
    else if( thnmajm==90){uqthnmj=121.9238889;}
    else if( thnmajm==120){uqthnmj=324.8894444;}
    else if( thnmajm==150){uqthnmj=167.855;}
    else if( thnmajm==180){uqthnmj=10.82055556;}
    else if( thnmajm==210){uqthnmj=213.7861111;}
    else if( thnmajm==240){uqthnmj=56.75166667;}
    else if( thnmajm==270){uqthnmj=259.7172222;}
    else if( thnmajm==300){uqthnmj=102.6827778;}
    else if( thnmajm==330){uqthnmj=305.6483333;}
    else if( thnmajm==360){uqthnmj=148.6138889;}
    else if( thnmajm==390){uqthnmj=351.5794444;}
    else if( thnmajm==420){uqthnmj=194.545;}
    else if( thnmajm==450){uqthnmj=37.51055556;}
    else if( thnmajm==480){uqthnmj=240.4761111;}
    else if( thnmajm==510){uqthnmj=83.44166667;}
    else if( thnmajm==540){uqthnmj=286.4072222;}
    else if( thnmajm==570){uqthnmj=129.3727778;}
    else if( thnmajm==600){uqthnmj=332.3383333;}
    else if( thnmajm==630){uqthnmj=175.3038889;}
    else if( thnmajm==660){uqthnmj=18.26944444;}
    else if( thnmajm==690){uqthnmj=221.235;}
    else if( thnmajm==720){uqthnmj=64.20055556;}
    else if( thnmajm==750){uqthnmj=267.1661111;}
    else if( thnmajm==780){uqthnmj=110.1316667;}
    else if( thnmajm==810){uqthnmj=313.0972222;}
    else if( thnmajm==840){uqthnmj=156.0627778;}
    else if( thnmajm==870){uqthnmj=359.0283333;}
    else if( thnmajm==900){uqthnmj=201.9938889;}
    else if( thnmajm==930){uqthnmj=44.95944444;}
    else if( thnmajm==960){uqthnmj=247.925;}
    else if( thnmajm==990){uqthnmj=90.89055556;}
    else if( thnmajm==1020){uqthnmj=293.8561111;}
    else if( thnmajm==1050){uqthnmj=136.8216667;}
    else if( thnmajm==1080){uqthnmj=339.7872222;}
    else if( thnmajm==1110){uqthnmj=182.7527778;}
    else if( thnmajm==1140){uqthnmj=25.71833333;}
    else if( thnmajm==1170){uqthnmj=228.6838889;}
    else if( thnmajm==1200){uqthnmj=71.64944444;}
    else if( thnmajm==1230){uqthnmj=274.615;}
    else if( thnmajm==1260){uqthnmj=117.5805556;}
    else if( thnmajm==1290){uqthnmj=320.5461111;}
    else if( thnmajm==1320){uqthnmj=163.5116667;}
    else if( thnmajm==1350){uqthnmj=6.477222222;}
    else if( thnmajm==1380){uqthnmj=209.4427778;}
    else if( thnmajm==1410){uqthnmj=52.40833333;}
    else if( thnmajm==1440){uqthnmj=255.3738889;}
    else if( thnmajm==1470){uqthnmj=98.33944444;}
    else if( thnmajm==1500){uqthnmj=301.305;}
    else if( thnmajm==1530){uqthnmj=144.2705556;}
    else if( thnmajm==1560){uqthnmj=347.2361111;}
    else if( thnmajm==1590){uqthnmj=190.2016667;}
    else if( thnmajm==1620){uqthnmj=33.16722222;}
    else if( thnmajm==1650){uqthnmj=236.1327778;}
    else if( thnmajm==1680){uqthnmj=79.09833333;}
    else if( thnmajm==1710){uqthnmj=282.0638889;}
    else if( thnmajm==1740){uqthnmj=125.0294444;}
    else if( thnmajm==1770){uqthnmj=327.995;}
    else if( thnmajm==1800){uqthnmj=170.9605556;}
    else if( thnmajm==1830){uqthnmj=13.92611111;}
    else if( thnmajm==1860){uqthnmj=216.8916667;}
    else if( thnmajm==1890){uqthnmj=59.85722222;}
    else {uqthnmj=99999}
    
    var uqthnmb
    
    if( thnmbs==1){uqthnmb=18.74611111;}
    else if( thnmbs==2){uqthnmb=37.54527778;}
    else if( thnmbs==3){uqthnmb=56.29138889;}
    else if( thnmbs==4){uqthnmb=75.0375;}
    else if( thnmbs==5){uqthnmb=93.83638889;}
    else if( thnmbs==6){uqthnmb=112.5825;}
    else if( thnmbs==7){uqthnmb=131.3816667;}
    else if( thnmbs==8){uqthnmb=150.1277778;}
    else if( thnmbs==9){uqthnmb=168.8738889;}
    else if( thnmbs==10){uqthnmb=187.6727778;}
    else if( thnmbs==11){uqthnmb=206.4188889;}
    else if( thnmbs==12){uqthnmb=225.165;}
    else if( thnmbs==13){uqthnmb=243.9641667;}
    else if( thnmbs==14){uqthnmb=262.7102778;}
    else if( thnmbs==15){uqthnmb=281.5091667;}
    else if( thnmbs==16){uqthnmb=300.2552778;}
    else if( thnmbs==17){uqthnmb=319.0013889;}
    else if( thnmbs==18){uqthnmb=337.8005556;}
    else if( thnmbs==19){uqthnmb=356.5466667;}
    else if( thnmbs==20){uqthnmb=15.29277778;}
    else if( thnmbs==21){uqthnmb=34.09194444;}
    else if( thnmbs==22){uqthnmb=52.83805556;}
    else if( thnmbs==23){uqthnmb=71.58416667;}
    else if( thnmbs==24){uqthnmb=90.38305556;}
    else if( thnmbs==25){uqthnmb=109.1291667;}
    else if( thnmbs==26){uqthnmb=127.9283333;}
    else if( thnmbs==27){uqthnmb=146.6744444;}
    else if( thnmbs==28){uqthnmb=165.4205556;}
    else if( thnmbs==29){uqthnmb=184.2194444;}
    else if( thnmbs==30){uqthnmb=202.9655556;}
    else{uqthnmb=999999;}
        
        
    var uqblntam	
    if( blntam==1){uqblntam=1.588611111;}
    else if( blntam==2){uqblntam=3.124444444;}
    else if( blntam==3){uqblntam=4.713055556;}
    else if( blntam==4){uqblntam=6.248611111;}
    else if( blntam==5){uqblntam=7.837222222;}
    else if( blntam==6){uqblntam=9.372777778;}
    else if( blntam==7){uqblntam=10.96166667;}
    else if( blntam==8){uqblntam=12.4975;}
    else if( blntam==9){uqblntam=14.08611111;}
    else if( blntam==10){uqblntam=15.62166667;}
    else if( blntam==11){uqblntam=17.21027778;}
    else if( blntam==12){uqblntam=18.74611111;}
    else{uqblntam=999999999;}
    
    
    
    var uqtgl=MOD(ntgl*0.052955097,360);
    
    
    //carimaghrib
    var ts1 = MOD(wsthnmj+wsthnmb+wsblntam+wstgl,360);
    var dek1 =180/Math.PI*(Math.asin(Math.sin(Math.PI/180*(ts1))*Math.sin(Math.PI/180*(23.44444444))));
    var mag =180/Math.PI*(Math.acos(-1*(Math.tan(Math.PI/180*(nlin))*Math.tan(Math.PI/180*(dek1))-
    Math.sin(Math.PI/180*(-1.216666667))/Math.cos(Math.PI/180*(nlin))/Math.cos(Math.PI/180*(dek1)))))/15;
    var magj = Math.floor(mag);
    var magm = Math.floor((mag-magj)*60);
    var magd = Math.round((((mag-magj)*60)-magm)*60);
    var jam = magj
    var menit 
    if(magd>=30){
        menit = magm+1;
        }else{
        menit =magm;
    }
    
    var st =((110.6666667)-(nbujur))/15
    
    //harokat lanjutan
    var wsjam = MOD(jam*0.041068636,360);
    var wsmenit = MOD (menit*0.000684477,360);
    var wsst =  MOD(st*0.041068636,360);
    
    var ksjam = MOD (jam*0.04106656,360);
    var ksmenit =MOD (menit*0.000684443,360);
    var ksst  = MOD (st*0.04106656,360);
    
    var wqjam = MOD (jam*0.549016531,360);
    var wqmenit = MOD (menit *0.009150276,360);
    var wqst =MOD (st*0.549016531,360);
    
    var kqjam = MOD (jam*0.544374542,360);
    var kqmenit = MOD (menit*0.009072909,360);
    var kqst = MOD (st*0.544374542,360);
    
    var uqjam = MOD (jam*0.002206462,360);
    var uqmenit = MOD (menit*0.0000367743727671302,360);
    var uqst= MOD (st*0.002206462,360);
    
    //tafawut
    var acuantafawut = Math.floor(MOD(wsthnmj+wsthnmb+wsblntam+wstgl+wsjam+wsmenit+wsst+360,360));
    var tafawut
    if( acuantafawut==0){tafawut=7;}
    else if( acuantafawut==1){tafawut=7;}
    else if( acuantafawut==2){tafawut=7;}
    else if( acuantafawut==3){tafawut=6;}
    else if( acuantafawut==4){tafawut=6;}
    else if( acuantafawut==5){tafawut=6;}
    else if( acuantafawut==6){tafawut=5;}
    else if( acuantafawut==7){tafawut=5;}
    else if( acuantafawut==8){tafawut=5;}
    else if( acuantafawut==9){tafawut=4;}
    else if( acuantafawut==10){tafawut=4;}
    else if( acuantafawut==11){tafawut=4;}
    else if( acuantafawut==12){tafawut=3;}
    else if( acuantafawut==13){tafawut=3;}
    else if( acuantafawut==14){tafawut=3;}
    else if( acuantafawut==15){tafawut=3;}
    else if( acuantafawut==16){tafawut=2;}
    else if( acuantafawut==17){tafawut=2;}
    else if( acuantafawut==18){tafawut=2;}
    else if( acuantafawut==19){tafawut=1;}
    else if( acuantafawut==20){tafawut=1;}
    else if( acuantafawut==21){tafawut=1;}
    else if( acuantafawut==22){tafawut=1;}
    else if( acuantafawut==23){tafawut=0;}
    else if( acuantafawut==24){tafawut=0;}
    else if( acuantafawut==25){tafawut=0;}
    else if( acuantafawut==26){tafawut=0;}
    else if( acuantafawut==27){tafawut=-1;}
    else if( acuantafawut==28){tafawut=-1;}
    else if( acuantafawut==29){tafawut=-1;}
    else if( acuantafawut==30){tafawut=-1;}
    else if( acuantafawut==31){tafawut=-2;}
    else if( acuantafawut==32){tafawut=-2;}
    else if( acuantafawut==33){tafawut=-2;}
    else if( acuantafawut==34){tafawut=-2;}
    else if( acuantafawut==35){tafawut=-2;}
    else if( acuantafawut==36){tafawut=-3;}
    else if( acuantafawut==37){tafawut=-3;}
    else if( acuantafawut==38){tafawut=-3;}
    else if( acuantafawut==39){tafawut=-3;}
    else if( acuantafawut==40){tafawut=-3;}
    else if( acuantafawut==41){tafawut=-3;}
    else if( acuantafawut==42){tafawut=-3;}
    else if( acuantafawut==43){tafawut=-3;}
    else if( acuantafawut==44){tafawut=-3;}
    else if( acuantafawut==45){tafawut=-4;}
    else if( acuantafawut==46){tafawut=-4;}
    else if( acuantafawut==47){tafawut=-4;}
    else if( acuantafawut==48){tafawut=-4;}
    else if( acuantafawut==49){tafawut=-4;}
    else if( acuantafawut==50){tafawut=-4;}
    else if( acuantafawut==51){tafawut=-4;}
    else if( acuantafawut==52){tafawut=-4;}
    else if( acuantafawut==53){tafawut=-4;}
    else if( acuantafawut==54){tafawut=-4;}
    else if( acuantafawut==55){tafawut=-4;}
    else if( acuantafawut==56){tafawut=-4;}
    else if( acuantafawut==57){tafawut=-4;}
    else if( acuantafawut==58){tafawut=-4;}
    else if( acuantafawut==59){tafawut=-3;}
    else if( acuantafawut==60){tafawut=-3;}
    else if( acuantafawut==61){tafawut=-3;}
    else if( acuantafawut==62){tafawut=-3;}
    else if( acuantafawut==63){tafawut=-3;}
    else if( acuantafawut==64){tafawut=-3;}
    else if( acuantafawut==65){tafawut=-3;}
    else if( acuantafawut==66){tafawut=-3;}
    else if( acuantafawut==67){tafawut=-3;}
    else if( acuantafawut==68){tafawut=-3;}
    else if( acuantafawut==69){tafawut=-2;}
    else if( acuantafawut==70){tafawut=-2;}
    else if( acuantafawut==71){tafawut=-2;}
    else if( acuantafawut==72){tafawut=-2;}
    else if( acuantafawut==73){tafawut=-2;}
    else if( acuantafawut==74){tafawut=-2;}
    else if( acuantafawut==75){tafawut=-1;}
    else if( acuantafawut==76){tafawut=-1;}
    else if( acuantafawut==77){tafawut=-1;}
    else if( acuantafawut==78){tafawut=-1;}
    else if( acuantafawut==79){tafawut=-1;}
    else if( acuantafawut==80){tafawut=-1;}
    else if( acuantafawut==81){tafawut=0;}
    else if( acuantafawut==82){tafawut=0;}
    else if( acuantafawut==83){tafawut=0;}
    else if( acuantafawut==84){tafawut=0;}
    else if( acuantafawut==85){tafawut=1;}
    else if( acuantafawut==86){tafawut=1;}
    else if( acuantafawut==87){tafawut=1;}
    else if( acuantafawut==88){tafawut=1;}
    else if( acuantafawut==89){tafawut=2;}
    else if( acuantafawut==90){tafawut=2;}
    else if( acuantafawut==91){tafawut=2;}
    else if( acuantafawut==92){tafawut=2;}
    else if( acuantafawut==93){tafawut=2;}
    else if( acuantafawut==94){tafawut=3;}
    else if( acuantafawut==95){tafawut=3;}
    else if( acuantafawut==96){tafawut=3;}
    else if( acuantafawut==97){tafawut=3;}
    else if( acuantafawut==98){tafawut=3;}
    else if( acuantafawut==99){tafawut=4;}
    else if( acuantafawut==100){tafawut=4;}
    else if( acuantafawut==101){tafawut=4;}
    else if( acuantafawut==102){tafawut=4;}
    else if( acuantafawut==103){tafawut=4;}
    else if( acuantafawut==104){tafawut=5;}
    else if( acuantafawut==105){tafawut=5;}
    else if( acuantafawut==106){tafawut=5;}
    else if( acuantafawut==107){tafawut=5;}
    else if( acuantafawut==108){tafawut=5;}
    else if( acuantafawut==109){tafawut=5;}
    else if( acuantafawut==110){tafawut=5;}
    else if( acuantafawut==111){tafawut=6;}
    else if( acuantafawut==112){tafawut=6;}
    else if( acuantafawut==113){tafawut=6;}
    else if( acuantafawut==114){tafawut=6;}
    else if( acuantafawut==115){tafawut=6;}
    else if( acuantafawut==116){tafawut=6;}
    else if( acuantafawut==117){tafawut=6;}
    else if( acuantafawut==118){tafawut=6;}
    else if( acuantafawut==119){tafawut=6;}
    else if( acuantafawut==120){tafawut=6;}
    else if( acuantafawut==121){tafawut=6;}
    else if( acuantafawut==122){tafawut=6;}
    else if( acuantafawut==123){tafawut=6;}
    else if( acuantafawut==124){tafawut=6;}
    else if( acuantafawut==125){tafawut=6;}
    else if( acuantafawut==126){tafawut=6;}
    else if( acuantafawut==127){tafawut=6;}
    else if( acuantafawut==128){tafawut=6;}
    else if( acuantafawut==129){tafawut=6;}
    else if( acuantafawut==130){tafawut=6;}
    else if( acuantafawut==131){tafawut=6;}
    else if( acuantafawut==132){tafawut=6;}
    else if( acuantafawut==133){tafawut=6;}
    else if( acuantafawut==134){tafawut=6;}
    else if( acuantafawut==135){tafawut=5;}
    else if( acuantafawut==136){tafawut=5;}
    else if( acuantafawut==137){tafawut=5;}
    else if( acuantafawut==138){tafawut=5;}
    else if( acuantafawut==139){tafawut=5;}
    else if( acuantafawut==140){tafawut=5;}
    else if( acuantafawut==141){tafawut=4;}
    else if( acuantafawut==142){tafawut=4;}
    else if( acuantafawut==143){tafawut=4;}
    else if( acuantafawut==144){tafawut=4;}
    else if( acuantafawut==145){tafawut=4;}
    else if( acuantafawut==146){tafawut=3;}
    else if( acuantafawut==147){tafawut=3;}
    else if( acuantafawut==148){tafawut=3;}
    else if( acuantafawut==149){tafawut=3;}
    else if( acuantafawut==150){tafawut=2;}
    else if( acuantafawut==151){tafawut=2;}
    else if( acuantafawut==152){tafawut=2;}
    else if( acuantafawut==153){tafawut=1;}
    else if( acuantafawut==154){tafawut=1;}
    else if( acuantafawut==155){tafawut=1;}
    else if( acuantafawut==156){tafawut=0;}
    else if( acuantafawut==157){tafawut=0;}
    else if( acuantafawut==158){tafawut=0;}
    else if( acuantafawut==159){tafawut=-1;}
    else if( acuantafawut==160){tafawut=-1;}
    else if( acuantafawut==161){tafawut=-1;}
    else if( acuantafawut==162){tafawut=-2;}
    else if( acuantafawut==163){tafawut=-2;}
    else if( acuantafawut==164){tafawut=-2;}
    else if( acuantafawut==165){tafawut=-3;}
    else if( acuantafawut==166){tafawut=-3;}
    else if( acuantafawut==167){tafawut=-3;}
    else if( acuantafawut==168){tafawut=-4;}
    else if( acuantafawut==169){tafawut=-4;}
    else if( acuantafawut==170){tafawut=-4;}
    else if( acuantafawut==171){tafawut=-5;}
    else if( acuantafawut==172){tafawut=-5;}
    else if( acuantafawut==173){tafawut=-5;}
    else if( acuantafawut==174){tafawut=-6;}
    else if( acuantafawut==175){tafawut=-6;}
    else if( acuantafawut==176){tafawut=-7;}
    else if( acuantafawut==177){tafawut=-7;}
    else if( acuantafawut==178){tafawut=-7;}
    else if( acuantafawut==179){tafawut=-8;}
    else if( acuantafawut==180){tafawut=-8;}
    else if( acuantafawut==181){tafawut=-9;}
    else if( acuantafawut==182){tafawut=-9;}
    else if( acuantafawut==183){tafawut=-9;}
    else if( acuantafawut==184){tafawut=-10;}
    else if( acuantafawut==185){tafawut=-10;}
    else if( acuantafawut==186){tafawut=-10;}
    else if( acuantafawut==187){tafawut=-11;}
    else if( acuantafawut==188){tafawut=-11;}
    else if( acuantafawut==189){tafawut=-11;}
    else if( acuantafawut==190){tafawut=-11;}
    else if( acuantafawut==191){tafawut=-12;}
    else if( acuantafawut==192){tafawut=-12;}
    else if( acuantafawut==193){tafawut=-12;}
    else if( acuantafawut==194){tafawut=-13;}
    else if( acuantafawut==195){tafawut=-13;}
    else if( acuantafawut==196){tafawut=-13;}
    else if( acuantafawut==197){tafawut=-14;}
    else if( acuantafawut==198){tafawut=-14;}
    else if( acuantafawut==199){tafawut=-14;}
    else if( acuantafawut==200){tafawut=-14;}
    else if( acuantafawut==201){tafawut=-14;}
    else if( acuantafawut==202){tafawut=-15;}
    else if( acuantafawut==203){tafawut=-15;}
    else if( acuantafawut==204){tafawut=-15;}
    else if( acuantafawut==205){tafawut=-15;}
    else if( acuantafawut==206){tafawut=-15;}
    else if( acuantafawut==207){tafawut=-15;}
    else if( acuantafawut==208){tafawut=-16;}
    else if( acuantafawut==209){tafawut=-16;}
    else if( acuantafawut==210){tafawut=-16;}
    else if( acuantafawut==211){tafawut=-16;}
    else if( acuantafawut==212){tafawut=-16;}
    else if( acuantafawut==213){tafawut=-16;}
    else if( acuantafawut==214){tafawut=-16;}
    else if( acuantafawut==215){tafawut=-16;}
    else if( acuantafawut==216){tafawut=-16;}
    else if( acuantafawut==217){tafawut=-16;}
    else if( acuantafawut==218){tafawut=-16;}
    else if( acuantafawut==219){tafawut=-16;}
    else if( acuantafawut==220){tafawut=-16;}
    else if( acuantafawut==221){tafawut=-16;}
    else if( acuantafawut==222){tafawut=-16;}
    else if( acuantafawut==223){tafawut=-16;}
    else if( acuantafawut==224){tafawut=-16;}
    else if( acuantafawut==225){tafawut=-16;}
    else if( acuantafawut==226){tafawut=-16;}
    else if( acuantafawut==227){tafawut=-16;}
    else if( acuantafawut==228){tafawut=-16;}
    else if( acuantafawut==229){tafawut=-16;}
    else if( acuantafawut==230){tafawut=-16;}
    else if( acuantafawut==231){tafawut=-15;}
    else if( acuantafawut==232){tafawut=-15;}
    else if( acuantafawut==233){tafawut=-15;}
    else if( acuantafawut==234){tafawut=-15;}
    else if( acuantafawut==235){tafawut=-15;}
    else if( acuantafawut==236){tafawut=-14;}
    else if( acuantafawut==237){tafawut=-14;}
    else if( acuantafawut==238){tafawut=-14;}
    else if( acuantafawut==239){tafawut=-14;}
    else if( acuantafawut==240){tafawut=-13;}
    else if( acuantafawut==241){tafawut=-13;}
    else if( acuantafawut==242){tafawut=-13;}
    else if( acuantafawut==243){tafawut=-12;}
    else if( acuantafawut==244){tafawut=-12;}
    else if( acuantafawut==245){tafawut=-12;}
    else if( acuantafawut==246){tafawut=-11;}
    else if( acuantafawut==247){tafawut=-11;}
    else if( acuantafawut==248){tafawut=-11;}
    else if( acuantafawut==249){tafawut=-10;}
    else if( acuantafawut==250){tafawut=-10;}
    else if( acuantafawut==251){tafawut=-9;}
    else if( acuantafawut==252){tafawut=-9;}
    else if( acuantafawut==253){tafawut=-9;}
    else if( acuantafawut==254){tafawut=-8;}
    else if( acuantafawut==255){tafawut=-8;}
    else if( acuantafawut==256){tafawut=-7;}
    else if( acuantafawut==257){tafawut=-7;}
    else if( acuantafawut==258){tafawut=-6;}
    else if( acuantafawut==259){tafawut=-6;}
    else if( acuantafawut==260){tafawut=-5;}
    else if( acuantafawut==261){tafawut=-5;}
    else if( acuantafawut==262){tafawut=-4;}
    else if( acuantafawut==263){tafawut=-4;}
    else if( acuantafawut==264){tafawut=-4;}
    else if( acuantafawut==265){tafawut=-3;}
    else if( acuantafawut==266){tafawut=-3;}
    else if( acuantafawut==267){tafawut=-2;}
    else if( acuantafawut==268){tafawut=-2;}
    else if( acuantafawut==269){tafawut=-2;}
    else if( acuantafawut==270){tafawut=-1;}
    else if( acuantafawut==271){tafawut=0;}
    else if( acuantafawut==272){tafawut=0;}
    else if( acuantafawut==273){tafawut=0;}
    else if( acuantafawut==274){tafawut=1;}
    else if( acuantafawut==275){tafawut=1;}
    else if( acuantafawut==276){tafawut=2;}
    else if( acuantafawut==277){tafawut=2;}
    else if( acuantafawut==278){tafawut=3;}
    else if( acuantafawut==279){tafawut=4;}
    else if( acuantafawut==280){tafawut=4;}
    else if( acuantafawut==281){tafawut=4;}
    else if( acuantafawut==282){tafawut=5;}
    else if( acuantafawut==283){tafawut=5;}
    else if( acuantafawut==284){tafawut=6;}
    else if( acuantafawut==285){tafawut=6;}
    else if( acuantafawut==286){tafawut=7;}
    else if( acuantafawut==287){tafawut=7;}
    else if( acuantafawut==288){tafawut=7;}
    else if( acuantafawut==289){tafawut=8;}
    else if( acuantafawut==290){tafawut=8;}
    else if( acuantafawut==291){tafawut=9;}
    else if( acuantafawut==292){tafawut=9;}
    else if( acuantafawut==293){tafawut=10;}
    else if( acuantafawut==294){tafawut=10;}
    else if( acuantafawut==295){tafawut=10;}
    else if( acuantafawut==296){tafawut=10;}
    else if( acuantafawut==297){tafawut=11;}
    else if( acuantafawut==298){tafawut=11;}
    else if( acuantafawut==299){tafawut=11;}
    else if( acuantafawut==300){tafawut=12;}
    else if( acuantafawut==301){tafawut=12;}
    else if( acuantafawut==302){tafawut=12;}
    else if( acuantafawut==303){tafawut=13;}
    else if( acuantafawut==304){tafawut=13;}
    else if( acuantafawut==305){tafawut=13;}
    else if( acuantafawut==306){tafawut=13;}
    else if( acuantafawut==307){tafawut=13;}
    else if( acuantafawut==308){tafawut=13;}
    else if( acuantafawut==309){tafawut=14;}
    else if( acuantafawut==310){tafawut=14;}
    else if( acuantafawut==311){tafawut=14;}
    else if( acuantafawut==312){tafawut=14;}
    else if( acuantafawut==313){tafawut=14;}
    else if( acuantafawut==314){tafawut=14;}
    else if( acuantafawut==315){tafawut=14;}
    else if( acuantafawut==316){tafawut=14;}
    else if( acuantafawut==317){tafawut=14;}
    else if( acuantafawut==318){tafawut=14;}
    else if( acuantafawut==319){tafawut=14;}
    else if( acuantafawut==320){tafawut=14;}
    else if( acuantafawut==321){tafawut=14;}
    else if( acuantafawut==322){tafawut=14;}
    else if( acuantafawut==323){tafawut=14;}
    else if( acuantafawut==324){tafawut=14;}
    else if( acuantafawut==325){tafawut=14;}
    else if( acuantafawut==326){tafawut=14;}
    else if( acuantafawut==327){tafawut=14;}
    else if( acuantafawut==328){tafawut=14;}
    else if( acuantafawut==329){tafawut=13;}
    else if( acuantafawut==330){tafawut=13;}
    else if( acuantafawut==331){tafawut=13;}
    else if( acuantafawut==332){tafawut=13;}
    else if( acuantafawut==333){tafawut=13;}
    else if( acuantafawut==334){tafawut=13;}
    else if( acuantafawut==335){tafawut=13;}
    else if( acuantafawut==336){tafawut=13;}
    else if( acuantafawut==337){tafawut=13;}
    else if( acuantafawut==338){tafawut=13;}
    else if( acuantafawut==339){tafawut=13;}
    else if( acuantafawut==340){tafawut=12;}
    else if( acuantafawut==341){tafawut=12;}
    else if( acuantafawut==342){tafawut=12;}
    else if( acuantafawut==343){tafawut=12;}
    else if( acuantafawut==344){tafawut=12;}
    else if( acuantafawut==345){tafawut=11;}
    else if( acuantafawut==346){tafawut=11;}
    else if( acuantafawut==347){tafawut=11;}
    else if( acuantafawut==348){tafawut=11;}
    else if( acuantafawut==349){tafawut=10;}
    else if( acuantafawut==350){tafawut=10;}
    else if( acuantafawut==351){tafawut=9;}
    else if( acuantafawut==352){tafawut=9;}
    else if( acuantafawut==353){tafawut=9;}
    else if( acuantafawut==354){tafawut=9;}
    else if( acuantafawut==355){tafawut=9;}
    else if( acuantafawut==356){tafawut=8;}
    else if( acuantafawut==357){tafawut=8;}
    else if( acuantafawut==358){tafawut=8;}
    else if( acuantafawut==359){tafawut=8;}
    else if( acuantafawut==360){tafawut=7;}
    else {tafawut=9999999999;}
    
    //harokatlanjutan2
    
    var wstafawut = tafawut*0.000684477;
    
    var kstafawut =tafawut*0.000684443;
    
    var wqtafawut =tafawut *0.009150276;
    
    var kqtafawut =tafawut*0.009072909;
    
    var uqtafawut =tafawut*0.0000367743727671302;
    
    //yaum
    var ythnmj
    
    if( thnmajm==-60){ythnmj=2;}
    else if( thnmajm==-30){ythnmj=7;}
    else if( thnmajm==0){ythnmj=5;}
    else if( thnmajm==30){ythnmj=3;}
    else if( thnmajm==60){ythnmj=1;}
    else if( thnmajm==90){ythnmj=6;}
    else if( thnmajm==120){ythnmj=4;}
    else if( thnmajm==150){ythnmj=2;}
    else if( thnmajm==180){ythnmj=7;}
    else if( thnmajm==210){ythnmj=5;}
    else if( thnmajm==240){ythnmj=3;}
    else if( thnmajm==270){ythnmj=1;}
    else if( thnmajm==300){ythnmj=6;}
    else if( thnmajm==330){ythnmj=4;}
    else if( thnmajm==360){ythnmj=2;}
    else if( thnmajm==390){ythnmj=7;}
    else if( thnmajm==420){ythnmj=5;}
    else if( thnmajm==450){ythnmj=3;}
    else if( thnmajm==480){ythnmj=1;}
    else if( thnmajm==510){ythnmj=6;}
    else if( thnmajm==540){ythnmj=4;}
    else if( thnmajm==570){ythnmj=2;}
    else if( thnmajm==600){ythnmj=7;}
    else if( thnmajm==630){ythnmj=5;}
    else if( thnmajm==660){ythnmj=3;}
    else if( thnmajm==690){ythnmj=1;}
    else if( thnmajm==720){ythnmj=6;}
    else if( thnmajm==750){ythnmj=4;}
    else if( thnmajm==780){ythnmj=2;}
    else if( thnmajm==810){ythnmj=7;}
    else if( thnmajm==840){ythnmj=5;}
    else if( thnmajm==870){ythnmj=3;}
    else if( thnmajm==900){ythnmj=1;}
    else if( thnmajm==930){ythnmj=6;}
    else if( thnmajm==960){ythnmj=4;}
    else if( thnmajm==990){ythnmj=2;}
    else if( thnmajm==1020){ythnmj=7;}
    else if( thnmajm==1050){ythnmj=5;}
    else if( thnmajm==1080){ythnmj=3;}
    else if( thnmajm==1110){ythnmj=1;}
    else if( thnmajm==1140){ythnmj=6;}
    else if( thnmajm==1170){ythnmj=4;}
    else if( thnmajm==1200){ythnmj=2;}
    else if( thnmajm==1230){ythnmj=7;}
    else if( thnmajm==1260){ythnmj=5;}
    else if( thnmajm==1290){ythnmj=3;}
    else if( thnmajm==1320){ythnmj=1;}
    else if( thnmajm==1350){ythnmj=6;}
    else if( thnmajm==1380){ythnmj=4;}
    else if( thnmajm==1410){ythnmj=2;}
    else if( thnmajm==1440){ythnmj=7;}
    else if( thnmajm==1470){ythnmj=5;}
    else if( thnmajm==1500){ythnmj=3;}
    else if( thnmajm==1530){ythnmj=1;}
    else if( thnmajm==1560){ythnmj=6;}
    else if( thnmajm==1590){ythnmj=4;}
    else if( thnmajm==1620){ythnmj=2;}
    else if( thnmajm==1650){ythnmj=7;}
    else if( thnmajm==1680){ythnmj=5;}
    else if( thnmajm==1710){ythnmj=3;}
    else if( thnmajm==1740){ythnmj=1;}
    else if( thnmajm==1770){ythnmj=6;}
    else if( thnmajm==1800){ythnmj=4;}
    else if( thnmajm==1830){ythnmj=2;}
    else if( thnmajm==1860){ythnmj=7;}
    else if( thnmajm==1890){ythnmj=5;}
    else {ythnmj=99999999999;}
    
    var ythnmb
    
    if( thnmbs==1){ythnmb=4;}
    else if( thnmbs==2){ythnmb=2;}
    else if( thnmbs==3){ythnmb=6;}
    else if( thnmbs==4){ythnmb=3;}
    else if( thnmbs==5){ythnmb=1;}
    else if( thnmbs==6){ythnmb=5;}
    else if( thnmbs==7){ythnmb=3;}
    else if( thnmbs==8){ythnmb=7;}
    else if( thnmbs==9){ythnmb=4;}
    else if( thnmbs==10){ythnmb=2;}
    else if( thnmbs==11){ythnmb=6;}
    else if( thnmbs==12){ythnmb=3;}
    else if( thnmbs==13){ythnmb=1;}
    else if( thnmbs==14){ythnmb=5;}
    else if( thnmbs==15){ythnmb=3;}
    else if( thnmbs==16){ythnmb=7;}
    else if( thnmbs==17){ythnmb=4;}
    else if( thnmbs==18){ythnmb=2;}
    else if( thnmbs==19){ythnmb=6;}
    else if( thnmbs==20){ythnmb=3;}
    else if( thnmbs==21){ythnmb=1;}
    else if( thnmbs==22){ythnmb=5;}
    else if( thnmbs==23){ythnmb=2;}
    else if( thnmbs==24){ythnmb=7;}
    else if( thnmbs==25){ythnmb=4;}
    else if( thnmbs==26){ythnmb=2;}
    else if( thnmbs==27){ythnmb=6;}
    else if( thnmbs==28){ythnmb=3;}
    else if( thnmbs==29){ythnmb=1;}
    else if( thnmbs==30){ythnmb=5;}
    else {ythnmb=999999999;}
    
    var yblntam
    
    if( blntam==1){yblntam=2;}
    else if( blntam==2){yblntam=3;}
    else if( blntam==3){yblntam=5;}
    else if( blntam==4){yblntam=6;}
    else if( blntam==5){yblntam=1;}
    else if( blntam==6){yblntam=2;}
    else if( blntam==7){yblntam=4;}
    else if( blntam==8){yblntam=5;}
    else if( blntam==9){yblntam=7;}
    else if( blntam==10){yblntam=1;}
    else if( blntam==11){yblntam=3;}
    else if( blntam==12){yblntam=4;}
    else {yblntam=999999999;}
    
    
    var ytgl = Math.floor(MOD(ntgl,7));
    
    var jtgl
    
    if ((Math.floor(MOD(ythnmj+ythnmb+yblntam+ytgl,7)))==0){
        jtgl = 7;
        }else{
        jtgl = Math.floor(MOD(ythnmj+ythnmb+yblntam+ytgl,7));
        }
    
    var jws = MOD(wsthnmb+wsthnmj+wsblntam+wstgl+wsjam+wsmenit+wsst+wstafawut+360,360);
    var jks = MOD(ksthnmb+ksthnmj+ksblntam+kstgl+ksjam+ksmenit+ksst+kstafawut+360,360);
    var jwq = MOD(wqthnmb+wqthnmj+wqblntam+wqtgl+wqjam+wqmenit+wqst+wqtafawut+360,360);
    var jkq = MOD(kqthnmb+kqthnmj+kqblntam+kqtgl+kqjam+kqmenit+kqst+kqtafawut+360,360);
    var juq = MOD(uqthnmb+uqthnmj+uqblntam+uqtgl+uqjam+uqmenit+uqst+uqtafawut+360,360);
    
    
    
    
    
    
    
    var intdalil1 = Math.floor(jks);
    
    //fungsi tdla0
    var ftdla0 = function (a,b){
    
    var tdla0_1
    if( a==0){tdla0_1=0;}
    else if( a==1){tdla0_1=-0.033055556;}
    else if( a==2){tdla0_1=-0.065833333;}
    else if( a==3){tdla0_1=-0.098611111;}
    else if( a==4){tdla0_1=-0.131666667;}
    else if( a==5){tdla0_1=-0.164444444;}
    else if( a==6){tdla0_1=-0.197222222;}
    else if( a==7){tdla0_1=-0.23;}
    else if( a==8){tdla0_1=-0.2625;}
    else if( a==9){tdla0_1=-0.296388889;}
    else if( a==10){tdla0_1=-0.3275;}
    else if( a==11){tdla0_1=-0.36;}
    else if( a==12){tdla0_1=-0.392222222;}
    else if( a==13){tdla0_1=-0.424444444;}
    else if( a==14){tdla0_1=-0.456388889;}
    else if( a==15){tdla0_1=-0.488333333;}
    else if( a==16){tdla0_1=-0.520277778;}
    else if( a==17){tdla0_1=-0.551944444;}
    else if( a==18){tdla0_1=-0.583333333;}
    else if( a==19){tdla0_1=-0.614722222;}
    else if( a==20){tdla0_1=-0.645833333;}
    else if( a==21){tdla0_1=-0.676666667;}
    else if( a==22){tdla0_1=-0.7075;}
    else if( a==23){tdla0_1=-0.738055556;}
    else if( a==24){tdla0_1=-0.768333333;}
    else if( a==25){tdla0_1=-0.798611111;}
    else if( a==26){tdla0_1=-0.828333333;}
    else if( a==27){tdla0_1=-0.858055556;}
    else if( a==28){tdla0_1=-0.8875;}
    else if( a==29){tdla0_1=-0.916666667;}
    else if( a==30){tdla0_1=-0.945555556;}
    else if( a==31){tdla0_1=-0.974166667;}
    else if( a==32){tdla0_1=-1.0025;}
    else if( a==33){tdla0_1=-1.030555556;}
    else if( a==34){tdla0_1=-1.058055556;}
    else if( a==35){tdla0_1=-1.085555556;}
    else if( a==36){tdla0_1=-1.113611111;}
    else if( a==37){tdla0_1=-1.139444444;}
    else if( a==38){tdla0_1=-1.165833333;}
    else if( a==39){tdla0_1=-1.192222222;}
    else if( a==40){tdla0_1=-1.217777778;}
    else if( a==41){tdla0_1=-1.243333333;}
    else if( a==42){tdla0_1=-1.268333333;}
    else if( a==43){tdla0_1=-1.293055556;}
    else if( a==44){tdla0_1=-1.3175;}
    else if( a==45){tdla0_1=-1.341388889;}
    else if( a==46){tdla0_1=-1.365;}
    else if( a==47){tdla0_1=-1.388055556;}
    else if( a==48){tdla0_1=-1.410833333;}
    else if( a==49){tdla0_1=-1.433333333;}
    else if( a==50){tdla0_1=-1.452222222;}
    else if( a==51){tdla0_1=-1.476666667;}
    else if( a==52){tdla0_1=-1.497777778;}
    else if( a==53){tdla0_1=-1.518333333;}
    else if( a==54){tdla0_1=-1.538611111;}
    else if( a==55){tdla0_1=-1.558333333;}
    else if( a==56){tdla0_1=-1.5775;}
    else if( a==57){tdla0_1=-1.596388889;}
    else if( a==58){tdla0_1=-1.603611111;}
    else if( a==59){tdla0_1=-1.6325;}
    else if( a==60){tdla0_1=-1.65;}
    else if( a==61){tdla0_1=-1.666666667;}
    else if( a==62){tdla0_1=-1.683055556;}
    else if( a==63){tdla0_1=-1.699166667;}
    else if( a==64){tdla0_1=-1.714444444;}
    else if( a==65){tdla0_1=-1.729444444;}
    else if( a==66){tdla0_1=-1.743611111;}
    else if( a==67){tdla0_1=-1.7575;}
    else if( a==68){tdla0_1=-1.770833333;}
    else if( a==69){tdla0_1=-1.783888889;}
    else if( a==70){tdla0_1=-1.796111111;}
    else if( a==71){tdla0_1=-1.807777778;}
    else if( a==72){tdla0_1=-1.818888889;}
    else if( a==73){tdla0_1=-1.829722222;}
    else if( a==74){tdla0_1=-1.84;}
    else if( a==75){tdla0_1=-1.849444444;}
    else if( a==76){tdla0_1=-1.858333333;}
    else if( a==77){tdla0_1=-1.866944444;}
    else if( a==78){tdla0_1=-1.874722222;}
    else if( a==79){tdla0_1=-1.882222222;}
    else if( a==80){tdla0_1=-1.888888889;}
    else if( a==81){tdla0_1=-1.895277778;}
    else if( a==82){tdla0_1=-1.900833333;}
    else if( a==83){tdla0_1=-1.905833333;}
    else if( a==84){tdla0_1=-1.910277778;}
    else if( a==85){tdla0_1=-1.914166667;}
    else if( a==86){tdla0_1=-1.9175;}
    else if( a==87){tdla0_1=-1.920277778;}
    else if( a==88){tdla0_1=-1.9225;}
    else if( a==89){tdla0_1=-1.924166667;}
    else if( a==90){tdla0_1=-1.925;}
    else if( a==91){tdla0_1=-1.925555556;}
    else if( a==92){tdla0_1=-1.925277778;}
    else if( a==93){tdla0_1=-1.924444444;}
    else if( a==94){tdla0_1=-1.923055556;}
    else if( a==95){tdla0_1=-1.921388889;}
    else if( a==96){tdla0_1=-1.918888889;}
    else if( a==97){tdla0_1=-1.915555556;}
    else if( a==98){tdla0_1=-1.911944444;}
    else if( a==99){tdla0_1=-1.9075;}
    else if( a==100){tdla0_1=-1.902777778;}
    else if( a==101){tdla0_1=-1.897222222;}
    else if( a==102){tdla0_1=-1.891111111;}
    else if( a==103){tdla0_1=-1.884722222;}
    else if( a==104){tdla0_1=-1.8775;}
    else if( a==105){tdla0_1=-1.869722222;}
    else if( a==106){tdla0_1=-1.861388889;}
    else if( a==107){tdla0_1=-1.852222222;}
    else if( a==108){tdla0_1=-1.842777778;}
    else if( a==109){tdla0_1=-1.832777778;}
    else if( a==110){tdla0_1=-1.821944444;}
    else if( a==111){tdla0_1=-1.810555556;}
    else if( a==112){tdla0_1=-1.798888889;}
    else if( a==113){tdla0_1=-1.786666667;}
    else if( a==114){tdla0_1=-1.773888889;}
    else if( a==115){tdla0_1=-1.760277778;}
    else if( a==116){tdla0_1=-1.746388889;}
    else if( a==117){tdla0_1=-1.731666667;}
    else if( a==118){tdla0_1=-1.716666667;}
    else if( a==119){tdla0_1=-1.701111111;}
    else if( a==120){tdla0_1=-1.685;}
    else if( a==121){tdla0_1=-1.668333333;}
    else if( a==122){tdla0_1=-1.651111111;}
    else if( a==123){tdla0_1=-1.633333333;}
    else if( a==124){tdla0_1=-1.615;}
    else if( a==125){tdla0_1=-1.596111111;}
    else if( a==126){tdla0_1=-1.576944444;}
    else if( a==127){tdla0_1=-1.557222222;}
    else if( a==128){tdla0_1=-1.536944444;}
    else if( a==129){tdla0_1=-1.516111111;}
    else if( a==130){tdla0_1=-1.495;}
    else if( a==131){tdla0_1=-1.473333333;}
    else if( a==132){tdla0_1=-1.451111111;}
    else if( a==133){tdla0_1=-1.428611111;}
    else if( a==134){tdla0_1=-1.405277778;}
    else if( a==135){tdla0_1=-1.381944444;}
    else if( a==136){tdla0_1=-1.357777778;}
    else if( a==137){tdla0_1=-1.333611111;}
    else if( a==138){tdla0_1=-1.308611111;}
    else if( a==139){tdla0_1=-1.283333333;}
    else if( a==140){tdla0_1=-1.257777778;}
    else if( a==141){tdla0_1=-1.230833333;}
    else if( a==142){tdla0_1=-1.205277778;}
    else if( a==143){tdla0_1=-1.178333333;}
    else if( a==144){tdla0_1=-1.151111111;}
    else if( a==145){tdla0_1=-1.123611111;}
    else if( a==146){tdla0_1=-1.095555556;}
    else if( a==147){tdla0_1=-1.0675;}
    else if( a==148){tdla0_1=-1.038611111;}
    else if( a==149){tdla0_1=-1.009722222;}
    else if( a==150){tdla0_1=-0.980555556;}
    else if( a==151){tdla0_1=-0.950833333;}
    else if( a==152){tdla0_1=-0.920833333;}
    else if( a==153){tdla0_1=-0.890833333;}
    else if( a==154){tdla0_1=-0.860277778;}
    else if( a==155){tdla0_1=-0.829444444;}
    else if( a==156){tdla0_1=-0.798333333;}
    else if( a==157){tdla0_1=-0.767222222;}
    else if( a==158){tdla0_1=-0.735555556;}
    else if( a==159){tdla0_1=-0.703888889;}
    else if( a==160){tdla0_1=-0.671666667;}
    else if( a==161){tdla0_1=-0.639444444;}
    else if( a==162){tdla0_1=-0.606944444;}
    else if( a==163){tdla0_1=-0.574444444;}
    else if( a==164){tdla0_1=-0.541666667;}
    else if( a==165){tdla0_1=-0.508611111;}
    else if( a==166){tdla0_1=-0.492222222;}
    else if( a==167){tdla0_1=-0.442222222;}
    else if( a==168){tdla0_1=-0.408611111;}
    else if( a==169){tdla0_1=-0.375;}
    else if( a==170){tdla0_1=-0.341388889;}
    else if( a==171){tdla0_1=-0.3075;}
    else if( a==172){tdla0_1=-0.273611111;}
    else if( a==173){tdla0_1=-0.239722222;}
    else if( a==174){tdla0_1=-0.205555556;}
    else if( a==175){tdla0_1=-0.171388889;}
    else if( a==176){tdla0_1=-0.137222222;}
    else if( a==177){tdla0_1=-0.103055556;}
    else if( a==178){tdla0_1=-0.068611111;}
    else if( a==179){tdla0_1=-0.034444444;}
    else if( a==180){tdla0_1=0;}
    else if( a==181){tdla0_1=0.034444444;}
    else if( a==182){tdla0_1=0.068611111;}
    else if( a==183){tdla0_1=0.103055556;}
    else if( a==184){tdla0_1=0.137222222;}
    else if( a==185){tdla0_1=0.171388889;}
    else if( a==186){tdla0_1=0.205555556;}
    else if( a==187){tdla0_1=0.239722222;}
    else if( a==188){tdla0_1=0.273611111;}
    else if( a==189){tdla0_1=0.3075;}
    else if( a==190){tdla0_1=0.341388889;}
    else if( a==191){tdla0_1=0.375;}
    else if( a==192){tdla0_1=0.408611111;}
    else if( a==193){tdla0_1=0.442222222;}
    else if( a==194){tdla0_1=0.492222222;}
    else if( a==195){tdla0_1=0.508611111;}
    else if( a==196){tdla0_1=0.541666667;}
    else if( a==197){tdla0_1=0.574444444;}
    else if( a==198){tdla0_1=0.606944444;}
    else if( a==199){tdla0_1=0.639444444;}
    else if( a==200){tdla0_1=0.671666667;}
    else if( a==201){tdla0_1=0.703888889;}
    else if( a==202){tdla0_1=0.735555556;}
    else if( a==203){tdla0_1=0.767222222;}
    else if( a==204){tdla0_1=0.798333333;}
    else if( a==205){tdla0_1=0.829444444;}
    else if( a==206){tdla0_1=0.860277778;}
    else if( a==207){tdla0_1=0.890833333;}
    else if( a==208){tdla0_1=0.920833333;}
    else if( a==209){tdla0_1=0.950833333;}
    else if( a==210){tdla0_1=0.980555556;}
    else if( a==211){tdla0_1=1.009722222;}
    else if( a==212){tdla0_1=1.038611111;}
    else if( a==213){tdla0_1=1.0675;}
    else if( a==214){tdla0_1=1.095555556;}
    else if( a==215){tdla0_1=1.123611111;}
    else if( a==216){tdla0_1=1.151111111;}
    else if( a==217){tdla0_1=1.178333333;}
    else if( a==218){tdla0_1=1.205277778;}
    else if( a==219){tdla0_1=1.230833333;}
    else if( a==220){tdla0_1=1.257777778;}
    else if( a==221){tdla0_1=1.283333333;}
    else if( a==222){tdla0_1=1.308611111;}
    else if( a==223){tdla0_1=1.333611111;}
    else if( a==224){tdla0_1=1.357777778;}
    else if( a==225){tdla0_1=1.381944444;}
    else if( a==226){tdla0_1=1.405277778;}
    else if( a==227){tdla0_1=1.428611111;}
    else if( a==228){tdla0_1=1.451111111;}
    else if( a==229){tdla0_1=1.473333333;}
    else if( a==230){tdla0_1=1.495;}
    else if( a==231){tdla0_1=1.516111111;}
    else if( a==232){tdla0_1=1.536944444;}
    else if( a==233){tdla0_1=1.557222222;}
    else if( a==234){tdla0_1=1.576944444;}
    else if( a==235){tdla0_1=1.596111111;}
    else if( a==236){tdla0_1=1.615;}
    else if( a==237){tdla0_1=1.633333333;}
    else if( a==238){tdla0_1=1.651111111;}
    else if( a==239){tdla0_1=1.668333333;}
    else if( a==240){tdla0_1=1.685;}
    else if( a==241){tdla0_1=1.701111111;}
    else if( a==242){tdla0_1=1.716666667;}
    else if( a==243){tdla0_1=1.731666667;}
    else if( a==244){tdla0_1=1.746388889;}
    else if( a==245){tdla0_1=1.760277778;}
    else if( a==246){tdla0_1=1.773888889;}
    else if( a==247){tdla0_1=1.786666667;}
    else if( a==248){tdla0_1=1.798888889;}
    else if( a==249){tdla0_1=1.810555556;}
    else if( a==250){tdla0_1=1.821944444;}
    else if( a==251){tdla0_1=1.832777778;}
    else if( a==252){tdla0_1=1.842777778;}
    else if( a==253){tdla0_1=1.852222222;}
    else if( a==254){tdla0_1=1.861388889;}
    else if( a==255){tdla0_1=1.869722222;}
    else if( a==256){tdla0_1=1.8775;}
    else if( a==257){tdla0_1=1.884722222;}
    else if( a==258){tdla0_1=1.891111111;}
    else if( a==259){tdla0_1=1.897222222;}
    else if( a==260){tdla0_1=1.902777778;}
    else if( a==261){tdla0_1=1.9075;}
    else if( a==262){tdla0_1=1.911944444;}
    else if( a==263){tdla0_1=1.915555556;}
    else if( a==264){tdla0_1=1.918888889;}
    else if( a==265){tdla0_1=1.921388889;}
    else if( a==266){tdla0_1=1.923055556;}
    else if( a==267){tdla0_1=1.924444444;}
    else if( a==268){tdla0_1=1.925277778;}
    else if( a==269){tdla0_1=1.925555556;}
    else if( a==270){tdla0_1=1.925;}
    else if( a==271){tdla0_1=1.924166667;}
    else if( a==272){tdla0_1=1.9225;}
    else if( a==273){tdla0_1=1.920277778;}
    else if( a==274){tdla0_1=1.9175;}
    else if( a==275){tdla0_1=1.914166667;}
    else if( a==276){tdla0_1=1.910277778;}
    else if( a==277){tdla0_1=1.905833333;}
    else if( a==278){tdla0_1=1.900833333;}
    else if( a==279){tdla0_1=1.895277778;}
    else if( a==280){tdla0_1=1.888888889;}
    else if( a==281){tdla0_1=1.882222222;}
    else if( a==282){tdla0_1=1.874722222;}
    else if( a==283){tdla0_1=1.866944444;}
    else if( a==284){tdla0_1=1.858333333;}
    else if( a==285){tdla0_1=1.849444444;}
    else if( a==286){tdla0_1=1.84;}
    else if( a==287){tdla0_1=1.829722222;}
    else if( a==288){tdla0_1=1.818888889;}
    else if( a==289){tdla0_1=1.807777778;}
    else if( a==290){tdla0_1=1.796111111;}
    else if( a==291){tdla0_1=1.783888889;}
    else if( a==292){tdla0_1=1.770833333;}
    else if( a==293){tdla0_1=1.7575;}
    else if( a==294){tdla0_1=1.743611111;}
    else if( a==295){tdla0_1=1.729444444;}
    else if( a==296){tdla0_1=1.714444444;}
    else if( a==297){tdla0_1=1.699166667;}
    else if( a==298){tdla0_1=1.683055556;}
    else if( a==299){tdla0_1=1.666666667;}
    else if( a==300){tdla0_1=1.65;}
    else if( a==301){tdla0_1=1.6325;}
    else if( a==302){tdla0_1=1.603611111;}
    else if( a==303){tdla0_1=1.596388889;}
    else if( a==304){tdla0_1=1.5775;}
    else if( a==305){tdla0_1=1.558333333;}
    else if( a==306){tdla0_1=1.538611111;}
    else if( a==307){tdla0_1=1.518333333;}
    else if( a==308){tdla0_1=1.497777778;}
    else if( a==309){tdla0_1=1.476666667;}
    else if( a==310){tdla0_1=1.452222222;}
    else if( a==311){tdla0_1=1.433333333;}
    else if( a==312){tdla0_1=1.410833333;}
    else if( a==313){tdla0_1=1.388055556;}
    else if( a==314){tdla0_1=1.365;}
    else if( a==315){tdla0_1=1.341388889;}
    else if( a==316){tdla0_1=1.3175;}
    else if( a==317){tdla0_1=1.293055556;}
    else if( a==318){tdla0_1=1.268333333;}
    else if( a==319){tdla0_1=1.243333333;}
    else if( a==320){tdla0_1=1.217777778;}
    else if( a==321){tdla0_1=1.192222222;}
    else if( a==322){tdla0_1=1.165833333;}
    else if( a==323){tdla0_1=1.139444444;}
    else if( a==324){tdla0_1=1.113611111;}
    else if( a==325){tdla0_1=1.085555556;}
    else if( a==326){tdla0_1=1.058055556;}
    else if( a==327){tdla0_1=1.030555556;}
    else if( a==328){tdla0_1=1.0025;}
    else if( a==329){tdla0_1=0.974166667;}
    else if( a==330){tdla0_1=0.945555556;}
    else if( a==331){tdla0_1=0.916666667;}
    else if( a==332){tdla0_1=0.8875;}
    else if( a==333){tdla0_1=0.858055556;}
    else if( a==334){tdla0_1=0.828333333;}
    else if( a==335){tdla0_1=0.798611111;}
    else if( a==336){tdla0_1=0.768333333;}
    else if( a==337){tdla0_1=0.738055556;}
    else if( a==338){tdla0_1=0.7075;}
    else if( a==339){tdla0_1=0.676666667;}
    else if( a==340){tdla0_1=0.645833333;}
    else if( a==341){tdla0_1=0.614722222;}
    else if( a==342){tdla0_1=0.583333333;}
    else if( a==343){tdla0_1=0.551944444;}
    else if( a==344){tdla0_1=0.520277778;}
    else if( a==345){tdla0_1=0.488333333;}
    else if( a==346){tdla0_1=0.456388889;}
    else if( a==347){tdla0_1=0.424444444;}
    else if( a==348){tdla0_1=0.392222222;}
    else if( a==349){tdla0_1=0.36;}
    else if( a==350){tdla0_1=0.3275;}
    else if( a==351){tdla0_1=0.296388889;}
    else if( a==352){tdla0_1=0.2625;}
    else if( a==353){tdla0_1=0.23;}
    else if( a==354){tdla0_1=0.197222222;}
    else if( a==355){tdla0_1=0.164444444;}
    else if( a==356){tdla0_1=0.131666667;}
    else if( a==357){tdla0_1=0.098611111;}
    else if( a==358){tdla0_1=0.065833333;}
    else if( a==359){tdla0_1=0.033055556;}
    else if( a==360){tdla0_1=0;}
    else if( a==361){tdla0_1=-0.033055556;}
    else {tdla0_1=999999999;}
    
    var tdla0_2
    
    
    if( a+1==0){tdla0_2=0;}
    else if( a+1==1){tdla0_2=-0.033055556;}
    else if( a+1==2){tdla0_2=-0.065833333;}
    else if( a+1==3){tdla0_2=-0.098611111;}
    else if( a+1==4){tdla0_2=-0.131666667;}
    else if( a+1==5){tdla0_2=-0.164444444;}
    else if( a+1==6){tdla0_2=-0.197222222;}
    else if( a+1==7){tdla0_2=-0.23;}
    else if( a+1==8){tdla0_2=-0.2625;}
    else if( a+1==9){tdla0_2=-0.296388889;}
    else if( a+1==10){tdla0_2=-0.3275;}
    else if( a+1==11){tdla0_2=-0.36;}
    else if( a+1==12){tdla0_2=-0.392222222;}
    else if( a+1==13){tdla0_2=-0.424444444;}
    else if( a+1==14){tdla0_2=-0.456388889;}
    else if( a+1==15){tdla0_2=-0.488333333;}
    else if( a+1==16){tdla0_2=-0.520277778;}
    else if( a+1==17){tdla0_2=-0.551944444;}
    else if( a+1==18){tdla0_2=-0.583333333;}
    else if( a+1==19){tdla0_2=-0.614722222;}
    else if( a+1==20){tdla0_2=-0.645833333;}
    else if( a+1==21){tdla0_2=-0.676666667;}
    else if( a+1==22){tdla0_2=-0.7075;}
    else if( a+1==23){tdla0_2=-0.738055556;}
    else if( a+1==24){tdla0_2=-0.768333333;}
    else if( a+1==25){tdla0_2=-0.798611111;}
    else if( a+1==26){tdla0_2=-0.828333333;}
    else if( a+1==27){tdla0_2=-0.858055556;}
    else if( a+1==28){tdla0_2=-0.8875;}
    else if( a+1==29){tdla0_2=-0.916666667;}
    else if( a+1==30){tdla0_2=-0.945555556;}
    else if( a+1==31){tdla0_2=-0.974166667;}
    else if( a+1==32){tdla0_2=-1.0025;}
    else if( a+1==33){tdla0_2=-1.030555556;}
    else if( a+1==34){tdla0_2=-1.058055556;}
    else if( a+1==35){tdla0_2=-1.085555556;}
    else if( a+1==36){tdla0_2=-1.113611111;}
    else if( a+1==37){tdla0_2=-1.139444444;}
    else if( a+1==38){tdla0_2=-1.165833333;}
    else if( a+1==39){tdla0_2=-1.192222222;}
    else if( a+1==40){tdla0_2=-1.217777778;}
    else if( a+1==41){tdla0_2=-1.243333333;}
    else if( a+1==42){tdla0_2=-1.268333333;}
    else if( a+1==43){tdla0_2=-1.293055556;}
    else if( a+1==44){tdla0_2=-1.3175;}
    else if( a+1==45){tdla0_2=-1.341388889;}
    else if( a+1==46){tdla0_2=-1.365;}
    else if( a+1==47){tdla0_2=-1.388055556;}
    else if( a+1==48){tdla0_2=-1.410833333;}
    else if( a+1==49){tdla0_2=-1.433333333;}
    else if( a+1==50){tdla0_2=-1.452222222;}
    else if( a+1==51){tdla0_2=-1.476666667;}
    else if( a+1==52){tdla0_2=-1.497777778;}
    else if( a+1==53){tdla0_2=-1.518333333;}
    else if( a+1==54){tdla0_2=-1.538611111;}
    else if( a+1==55){tdla0_2=-1.558333333;}
    else if( a+1==56){tdla0_2=-1.5775;}
    else if( a+1==57){tdla0_2=-1.596388889;}
    else if( a+1==58){tdla0_2=-1.603611111;}
    else if( a+1==59){tdla0_2=-1.6325;}
    else if( a+1==60){tdla0_2=-1.65;}
    else if( a+1==61){tdla0_2=-1.666666667;}
    else if( a+1==62){tdla0_2=-1.683055556;}
    else if( a+1==63){tdla0_2=-1.699166667;}
    else if( a+1==64){tdla0_2=-1.714444444;}
    else if( a+1==65){tdla0_2=-1.729444444;}
    else if( a+1==66){tdla0_2=-1.743611111;}
    else if( a+1==67){tdla0_2=-1.7575;}
    else if( a+1==68){tdla0_2=-1.770833333;}
    else if( a+1==69){tdla0_2=-1.783888889;}
    else if( a+1==70){tdla0_2=-1.796111111;}
    else if( a+1==71){tdla0_2=-1.807777778;}
    else if( a+1==72){tdla0_2=-1.818888889;}
    else if( a+1==73){tdla0_2=-1.829722222;}
    else if( a+1==74){tdla0_2=-1.84;}
    else if( a+1==75){tdla0_2=-1.849444444;}
    else if( a+1==76){tdla0_2=-1.858333333;}
    else if( a+1==77){tdla0_2=-1.866944444;}
    else if( a+1==78){tdla0_2=-1.874722222;}
    else if( a+1==79){tdla0_2=-1.882222222;}
    else if( a+1==80){tdla0_2=-1.888888889;}
    else if( a+1==81){tdla0_2=-1.895277778;}
    else if( a+1==82){tdla0_2=-1.900833333;}
    else if( a+1==83){tdla0_2=-1.905833333;}
    else if( a+1==84){tdla0_2=-1.910277778;}
    else if( a+1==85){tdla0_2=-1.914166667;}
    else if( a+1==86){tdla0_2=-1.9175;}
    else if( a+1==87){tdla0_2=-1.920277778;}
    else if( a+1==88){tdla0_2=-1.9225;}
    else if( a+1==89){tdla0_2=-1.924166667;}
    else if( a+1==90){tdla0_2=-1.925;}
    else if( a+1==91){tdla0_2=-1.925555556;}
    else if( a+1==92){tdla0_2=-1.925277778;}
    else if( a+1==93){tdla0_2=-1.924444444;}
    else if( a+1==94){tdla0_2=-1.923055556;}
    else if( a+1==95){tdla0_2=-1.921388889;}
    else if( a+1==96){tdla0_2=-1.918888889;}
    else if( a+1==97){tdla0_2=-1.915555556;}
    else if( a+1==98){tdla0_2=-1.911944444;}
    else if( a+1==99){tdla0_2=-1.9075;}
    else if( a+1==100){tdla0_2=-1.902777778;}
    else if( a+1==101){tdla0_2=-1.897222222;}
    else if( a+1==102){tdla0_2=-1.891111111;}
    else if( a+1==103){tdla0_2=-1.884722222;}
    else if( a+1==104){tdla0_2=-1.8775;}
    else if( a+1==105){tdla0_2=-1.869722222;}
    else if( a+1==106){tdla0_2=-1.861388889;}
    else if( a+1==107){tdla0_2=-1.852222222;}
    else if( a+1==108){tdla0_2=-1.842777778;}
    else if( a+1==109){tdla0_2=-1.832777778;}
    else if( a+1==110){tdla0_2=-1.821944444;}
    else if( a+1==111){tdla0_2=-1.810555556;}
    else if( a+1==112){tdla0_2=-1.798888889;}
    else if( a+1==113){tdla0_2=-1.786666667;}
    else if( a+1==114){tdla0_2=-1.773888889;}
    else if( a+1==115){tdla0_2=-1.760277778;}
    else if( a+1==116){tdla0_2=-1.746388889;}
    else if( a+1==117){tdla0_2=-1.731666667;}
    else if( a+1==118){tdla0_2=-1.716666667;}
    else if( a+1==119){tdla0_2=-1.701111111;}
    else if( a+1==120){tdla0_2=-1.685;}
    else if( a+1==121){tdla0_2=-1.668333333;}
    else if( a+1==122){tdla0_2=-1.651111111;}
    else if( a+1==123){tdla0_2=-1.633333333;}
    else if( a+1==124){tdla0_2=-1.615;}
    else if( a+1==125){tdla0_2=-1.596111111;}
    else if( a+1==126){tdla0_2=-1.576944444;}
    else if( a+1==127){tdla0_2=-1.557222222;}
    else if( a+1==128){tdla0_2=-1.536944444;}
    else if( a+1==129){tdla0_2=-1.516111111;}
    else if( a+1==130){tdla0_2=-1.495;}
    else if( a+1==131){tdla0_2=-1.473333333;}
    else if( a+1==132){tdla0_2=-1.451111111;}
    else if( a+1==133){tdla0_2=-1.428611111;}
    else if( a+1==134){tdla0_2=-1.405277778;}
    else if( a+1==135){tdla0_2=-1.381944444;}
    else if( a+1==136){tdla0_2=-1.357777778;}
    else if( a+1==137){tdla0_2=-1.333611111;}
    else if( a+1==138){tdla0_2=-1.308611111;}
    else if( a+1==139){tdla0_2=-1.283333333;}
    else if( a+1==140){tdla0_2=-1.257777778;}
    else if( a+1==141){tdla0_2=-1.230833333;}
    else if( a+1==142){tdla0_2=-1.205277778;}
    else if( a+1==143){tdla0_2=-1.178333333;}
    else if( a+1==144){tdla0_2=-1.151111111;}
    else if( a+1==145){tdla0_2=-1.123611111;}
    else if( a+1==146){tdla0_2=-1.095555556;}
    else if( a+1==147){tdla0_2=-1.0675;}
    else if( a+1==148){tdla0_2=-1.038611111;}
    else if( a+1==149){tdla0_2=-1.009722222;}
    else if( a+1==150){tdla0_2=-0.980555556;}
    else if( a+1==151){tdla0_2=-0.950833333;}
    else if( a+1==152){tdla0_2=-0.920833333;}
    else if( a+1==153){tdla0_2=-0.890833333;}
    else if( a+1==154){tdla0_2=-0.860277778;}
    else if( a+1==155){tdla0_2=-0.829444444;}
    else if( a+1==156){tdla0_2=-0.798333333;}
    else if( a+1==157){tdla0_2=-0.767222222;}
    else if( a+1==158){tdla0_2=-0.735555556;}
    else if( a+1==159){tdla0_2=-0.703888889;}
    else if( a+1==160){tdla0_2=-0.671666667;}
    else if( a+1==161){tdla0_2=-0.639444444;}
    else if( a+1==162){tdla0_2=-0.606944444;}
    else if( a+1==163){tdla0_2=-0.574444444;}
    else if( a+1==164){tdla0_2=-0.541666667;}
    else if( a+1==165){tdla0_2=-0.508611111;}
    else if( a+1==166){tdla0_2=-0.492222222;}
    else if( a+1==167){tdla0_2=-0.442222222;}
    else if( a+1==168){tdla0_2=-0.408611111;}
    else if( a+1==169){tdla0_2=-0.375;}
    else if( a+1==170){tdla0_2=-0.341388889;}
    else if( a+1==171){tdla0_2=-0.3075;}
    else if( a+1==172){tdla0_2=-0.273611111;}
    else if( a+1==173){tdla0_2=-0.239722222;}
    else if( a+1==174){tdla0_2=-0.205555556;}
    else if( a+1==175){tdla0_2=-0.171388889;}
    else if( a+1==176){tdla0_2=-0.137222222;}
    else if( a+1==177){tdla0_2=-0.103055556;}
    else if( a+1==178){tdla0_2=-0.068611111;}
    else if( a+1==179){tdla0_2=-0.034444444;}
    else if( a+1==180){tdla0_2=0;}
    else if( a+1==181){tdla0_2=0.034444444;}
    else if( a+1==182){tdla0_2=0.068611111;}
    else if( a+1==183){tdla0_2=0.103055556;}
    else if( a+1==184){tdla0_2=0.137222222;}
    else if( a+1==185){tdla0_2=0.171388889;}
    else if( a+1==186){tdla0_2=0.205555556;}
    else if( a+1==187){tdla0_2=0.239722222;}
    else if( a+1==188){tdla0_2=0.273611111;}
    else if( a+1==189){tdla0_2=0.3075;}
    else if( a+1==190){tdla0_2=0.341388889;}
    else if( a+1==191){tdla0_2=0.375;}
    else if( a+1==192){tdla0_2=0.408611111;}
    else if( a+1==193){tdla0_2=0.442222222;}
    else if( a+1==194){tdla0_2=0.492222222;}
    else if( a+1==195){tdla0_2=0.508611111;}
    else if( a+1==196){tdla0_2=0.541666667;}
    else if( a+1==197){tdla0_2=0.574444444;}
    else if( a+1==198){tdla0_2=0.606944444;}
    else if( a+1==199){tdla0_2=0.639444444;}
    else if( a+1==200){tdla0_2=0.671666667;}
    else if( a+1==201){tdla0_2=0.703888889;}
    else if( a+1==202){tdla0_2=0.735555556;}
    else if( a+1==203){tdla0_2=0.767222222;}
    else if( a+1==204){tdla0_2=0.798333333;}
    else if( a+1==205){tdla0_2=0.829444444;}
    else if( a+1==206){tdla0_2=0.860277778;}
    else if( a+1==207){tdla0_2=0.890833333;}
    else if( a+1==208){tdla0_2=0.920833333;}
    else if( a+1==209){tdla0_2=0.950833333;}
    else if( a+1==210){tdla0_2=0.980555556;}
    else if( a+1==211){tdla0_2=1.009722222;}
    else if( a+1==212){tdla0_2=1.038611111;}
    else if( a+1==213){tdla0_2=1.0675;}
    else if( a+1==214){tdla0_2=1.095555556;}
    else if( a+1==215){tdla0_2=1.123611111;}
    else if( a+1==216){tdla0_2=1.151111111;}
    else if( a+1==217){tdla0_2=1.178333333;}
    else if( a+1==218){tdla0_2=1.205277778;}
    else if( a+1==219){tdla0_2=1.230833333;}
    else if( a+1==220){tdla0_2=1.257777778;}
    else if( a+1==221){tdla0_2=1.283333333;}
    else if( a+1==222){tdla0_2=1.308611111;}
    else if( a+1==223){tdla0_2=1.333611111;}
    else if( a+1==224){tdla0_2=1.357777778;}
    else if( a+1==225){tdla0_2=1.381944444;}
    else if( a+1==226){tdla0_2=1.405277778;}
    else if( a+1==227){tdla0_2=1.428611111;}
    else if( a+1==228){tdla0_2=1.451111111;}
    else if( a+1==229){tdla0_2=1.473333333;}
    else if( a+1==230){tdla0_2=1.495;}
    else if( a+1==231){tdla0_2=1.516111111;}
    else if( a+1==232){tdla0_2=1.536944444;}
    else if( a+1==233){tdla0_2=1.557222222;}
    else if( a+1==234){tdla0_2=1.576944444;}
    else if( a+1==235){tdla0_2=1.596111111;}
    else if( a+1==236){tdla0_2=1.615;}
    else if( a+1==237){tdla0_2=1.633333333;}
    else if( a+1==238){tdla0_2=1.651111111;}
    else if( a+1==239){tdla0_2=1.668333333;}
    else if( a+1==240){tdla0_2=1.685;}
    else if( a+1==241){tdla0_2=1.701111111;}
    else if( a+1==242){tdla0_2=1.716666667;}
    else if( a+1==243){tdla0_2=1.731666667;}
    else if( a+1==244){tdla0_2=1.746388889;}
    else if( a+1==245){tdla0_2=1.760277778;}
    else if( a+1==246){tdla0_2=1.773888889;}
    else if( a+1==247){tdla0_2=1.786666667;}
    else if( a+1==248){tdla0_2=1.798888889;}
    else if( a+1==249){tdla0_2=1.810555556;}
    else if( a+1==250){tdla0_2=1.821944444;}
    else if( a+1==251){tdla0_2=1.832777778;}
    else if( a+1==252){tdla0_2=1.842777778;}
    else if( a+1==253){tdla0_2=1.852222222;}
    else if( a+1==254){tdla0_2=1.861388889;}
    else if( a+1==255){tdla0_2=1.869722222;}
    else if( a+1==256){tdla0_2=1.8775;}
    else if( a+1==257){tdla0_2=1.884722222;}
    else if( a+1==258){tdla0_2=1.891111111;}
    else if( a+1==259){tdla0_2=1.897222222;}
    else if( a+1==260){tdla0_2=1.902777778;}
    else if( a+1==261){tdla0_2=1.9075;}
    else if( a+1==262){tdla0_2=1.911944444;}
    else if( a+1==263){tdla0_2=1.915555556;}
    else if( a+1==264){tdla0_2=1.918888889;}
    else if( a+1==265){tdla0_2=1.921388889;}
    else if( a+1==266){tdla0_2=1.923055556;}
    else if( a+1==267){tdla0_2=1.924444444;}
    else if( a+1==268){tdla0_2=1.925277778;}
    else if( a+1==269){tdla0_2=1.925555556;}
    else if( a+1==270){tdla0_2=1.925;}
    else if( a+1==271){tdla0_2=1.924166667;}
    else if( a+1==272){tdla0_2=1.9225;}
    else if( a+1==273){tdla0_2=1.920277778;}
    else if( a+1==274){tdla0_2=1.9175;}
    else if( a+1==275){tdla0_2=1.914166667;}
    else if( a+1==276){tdla0_2=1.910277778;}
    else if( a+1==277){tdla0_2=1.905833333;}
    else if( a+1==278){tdla0_2=1.900833333;}
    else if( a+1==279){tdla0_2=1.895277778;}
    else if( a+1==280){tdla0_2=1.888888889;}
    else if( a+1==281){tdla0_2=1.882222222;}
    else if( a+1==282){tdla0_2=1.874722222;}
    else if( a+1==283){tdla0_2=1.866944444;}
    else if( a+1==284){tdla0_2=1.858333333;}
    else if( a+1==285){tdla0_2=1.849444444;}
    else if( a+1==286){tdla0_2=1.84;}
    else if( a+1==287){tdla0_2=1.829722222;}
    else if( a+1==288){tdla0_2=1.818888889;}
    else if( a+1==289){tdla0_2=1.807777778;}
    else if( a+1==290){tdla0_2=1.796111111;}
    else if( a+1==291){tdla0_2=1.783888889;}
    else if( a+1==292){tdla0_2=1.770833333;}
    else if( a+1==293){tdla0_2=1.7575;}
    else if( a+1==294){tdla0_2=1.743611111;}
    else if( a+1==295){tdla0_2=1.729444444;}
    else if( a+1==296){tdla0_2=1.714444444;}
    else if( a+1==297){tdla0_2=1.699166667;}
    else if( a+1==298){tdla0_2=1.683055556;}
    else if( a+1==299){tdla0_2=1.666666667;}
    else if( a+1==300){tdla0_2=1.65;}
    else if( a+1==301){tdla0_2=1.6325;}
    else if( a+1==302){tdla0_2=1.603611111;}
    else if( a+1==303){tdla0_2=1.596388889;}
    else if( a+1==304){tdla0_2=1.5775;}
    else if( a+1==305){tdla0_2=1.558333333;}
    else if( a+1==306){tdla0_2=1.538611111;}
    else if( a+1==307){tdla0_2=1.518333333;}
    else if( a+1==308){tdla0_2=1.497777778;}
    else if( a+1==309){tdla0_2=1.476666667;}
    else if( a+1==310){tdla0_2=1.452222222;}
    else if( a+1==311){tdla0_2=1.433333333;}
    else if( a+1==312){tdla0_2=1.410833333;}
    else if( a+1==313){tdla0_2=1.388055556;}
    else if( a+1==314){tdla0_2=1.365;}
    else if( a+1==315){tdla0_2=1.341388889;}
    else if( a+1==316){tdla0_2=1.3175;}
    else if( a+1==317){tdla0_2=1.293055556;}
    else if( a+1==318){tdla0_2=1.268333333;}
    else if( a+1==319){tdla0_2=1.243333333;}
    else if( a+1==320){tdla0_2=1.217777778;}
    else if( a+1==321){tdla0_2=1.192222222;}
    else if( a+1==322){tdla0_2=1.165833333;}
    else if( a+1==323){tdla0_2=1.139444444;}
    else if( a+1==324){tdla0_2=1.113611111;}
    else if( a+1==325){tdla0_2=1.085555556;}
    else if( a+1==326){tdla0_2=1.058055556;}
    else if( a+1==327){tdla0_2=1.030555556;}
    else if( a+1==328){tdla0_2=1.0025;}
    else if( a+1==329){tdla0_2=0.974166667;}
    else if( a+1==330){tdla0_2=0.945555556;}
    else if( a+1==331){tdla0_2=0.916666667;}
    else if( a+1==332){tdla0_2=0.8875;}
    else if( a+1==333){tdla0_2=0.858055556;}
    else if( a+1==334){tdla0_2=0.828333333;}
    else if( a+1==335){tdla0_2=0.798611111;}
    else if( a+1==336){tdla0_2=0.768333333;}
    else if( a+1==337){tdla0_2=0.738055556;}
    else if( a+1==338){tdla0_2=0.7075;}
    else if( a+1==339){tdla0_2=0.676666667;}
    else if( a+1==340){tdla0_2=0.645833333;}
    else if( a+1==341){tdla0_2=0.614722222;}
    else if( a+1==342){tdla0_2=0.583333333;}
    else if( a+1==343){tdla0_2=0.551944444;}
    else if( a+1==344){tdla0_2=0.520277778;}
    else if( a+1==345){tdla0_2=0.488333333;}
    else if( a+1==346){tdla0_2=0.456388889;}
    else if( a+1==347){tdla0_2=0.424444444;}
    else if( a+1==348){tdla0_2=0.392222222;}
    else if( a+1==349){tdla0_2=0.36;}
    else if( a+1==350){tdla0_2=0.3275;}
    else if( a+1==351){tdla0_2=0.296388889;}
    else if( a+1==352){tdla0_2=0.2625;}
    else if( a+1==353){tdla0_2=0.23;}
    else if( a+1==354){tdla0_2=0.197222222;}
    else if( a+1==355){tdla0_2=0.164444444;}
    else if( a+1==356){tdla0_2=0.131666667;}
    else if( a+1==357){tdla0_2=0.098611111;}
    else if( a+1==358){tdla0_2=0.065833333;}
    else if( a+1==359){tdla0_2=0.033055556;}
    else if( a+1==360){tdla0_2=0;}
    else if( a+1==361){tdla0_2=-0.033055556;}
    else {tdla0_2=9999999999999999;}
    
    var hasil = (tdla0_1)+(tdla0_2-tdla0_1)*(b-a);
    
    return hasil ;
    };
    
    var tdla0 = ftdla0(intdalil1, jks);
    
    var thulsyams = MOD(jws+tdla0+360,360);
    
    var ftdlc0d0 = function (a,b){
    
    var tdlc0d0_1
    
    if( a==0){tdlc0d0_1=0;}
    else if( a==1){tdlc0d0_1=0.004166667;}
    else if( a==2){tdlc0d0_1=0.006388889;}
    else if( a==3){tdlc0d0_1=0.009722222;}
    else if( a==4){tdlc0d0_1=0.013055556;}
    else if( a==5){tdlc0d0_1=0.016111111;}
    else if( a==6){tdlc0d0_1=0.019444444;}
    else if( a==7){tdlc0d0_1=0.0225;}
    else if( a==8){tdlc0d0_1=0.025833333;}
    else if( a==9){tdlc0d0_1=0.029166667;}
    else if( a==10){tdlc0d0_1=0.032222222;}
    else if( a==11){tdlc0d0_1=0.035277778;}
    else if( a==12){tdlc0d0_1=0.038611111;}
    else if( a==13){tdlc0d0_1=0.041666667;}
    else if( a==14){tdlc0d0_1=0.045;}
    else if( a==15){tdlc0d0_1=0.048055556;}
    else if( a==16){tdlc0d0_1=0.051111111;}
    else if( a==17){tdlc0d0_1=0.054166667;}
    else if( a==18){tdlc0d0_1=0.057222222;}
    else if( a==19){tdlc0d0_1=0.060555556;}
    else if( a==20){tdlc0d0_1=0.063611111;}
    else if( a==21){tdlc0d0_1=0.066388889;}
    else if( a==22){tdlc0d0_1=0.069444444;}
    else if( a==23){tdlc0d0_1=0.0725;}
    else if( a==24){tdlc0d0_1=0.075555556;}
    else if( a==25){tdlc0d0_1=0.078611111;}
    else if( a==26){tdlc0d0_1=0.081388889;}
    else if( a==27){tdlc0d0_1=0.084444444;}
    else if( a==28){tdlc0d0_1=0.087222222;}
    else if( a==29){tdlc0d0_1=0.09;}
    else if( a==30){tdlc0d0_1=0.093055556;}
    else if( a==31){tdlc0d0_1=0.095833333;}
    else if( a==32){tdlc0d0_1=0.098333333;}
    else if( a==33){tdlc0d0_1=0.101111111;}
    else if( a==34){tdlc0d0_1=0.103888889;}
    else if( a==35){tdlc0d0_1=0.106666667;}
    else if( a==36){tdlc0d0_1=0.109166667;}
    else if( a==37){tdlc0d0_1=0.111944444;}
    else if( a==38){tdlc0d0_1=0.114444444;}
    else if( a==39){tdlc0d0_1=0.116944444;}
    else if( a==40){tdlc0d0_1=0.119444444;}
    else if( a==41){tdlc0d0_1=0.121944444;}
    else if( a==42){tdlc0d0_1=0.124444444;}
    else if( a==43){tdlc0d0_1=0.126944444;}
    else if( a==44){tdlc0d0_1=0.129444444;}
    else if( a==45){tdlc0d0_1=0.131666667;}
    else if( a==46){tdlc0d0_1=0.133888889;}
    else if( a==47){tdlc0d0_1=0.136111111;}
    else if( a==48){tdlc0d0_1=0.138333333;}
    else if( a==49){tdlc0d0_1=0.140555556;}
    else if( a==50){tdlc0d0_1=0.142777778;}
    else if( a==51){tdlc0d0_1=0.144722222;}
    else if( a==52){tdlc0d0_1=0.146944444;}
    else if( a==53){tdlc0d0_1=0.148888889;}
    else if( a==54){tdlc0d0_1=0.150833333;}
    else if( a==55){tdlc0d0_1=0.152777778;}
    else if( a==56){tdlc0d0_1=0.154444444;}
    else if( a==57){tdlc0d0_1=0.156388889;}
    else if( a==58){tdlc0d0_1=0.158333333;}
    else if( a==59){tdlc0d0_1=0.16;}
    else if( a==60){tdlc0d0_1=0.162777778;}
    else if( a==61){tdlc0d0_1=0.163333333;}
    else if( a==62){tdlc0d0_1=0.165;}
    else if( a==63){tdlc0d0_1=0.166388889;}
    else if( a==64){tdlc0d0_1=0.168055556;}
    else if( a==65){tdlc0d0_1=0.169444444;}
    else if( a==66){tdlc0d0_1=0.170555556;}
    else if( a==67){tdlc0d0_1=0.171944444;}
    else if( a==68){tdlc0d0_1=0.173333333;}
    else if( a==69){tdlc0d0_1=0.174444444;}
    else if( a==70){tdlc0d0_1=0.175833333;}
    else if( a==71){tdlc0d0_1=0.176944444;}
    else if( a==72){tdlc0d0_1=0.178055556;}
    else if( a==73){tdlc0d0_1=0.178888889;}
    else if( a==74){tdlc0d0_1=0.18;}
    else if( a==75){tdlc0d0_1=0.180833333;}
    else if( a==76){tdlc0d0_1=0.181666667;}
    else if( a==77){tdlc0d0_1=0.1825;}
    else if( a==78){tdlc0d0_1=0.183055556;}
    else if( a==79){tdlc0d0_1=0.183888889;}
    else if( a==80){tdlc0d0_1=0.184444444;}
    else if( a==81){tdlc0d0_1=0.185;}
    else if( a==82){tdlc0d0_1=0.185555556;}
    else if( a==83){tdlc0d0_1=0.186111111;}
    else if( a==84){tdlc0d0_1=0.186388889;}
    else if( a==85){tdlc0d0_1=0.186944444;}
    else if( a==86){tdlc0d0_1=0.187222222;}
    else if( a==87){tdlc0d0_1=0.1875;}
    else if( a==88){tdlc0d0_1=0.1875;}
    else if( a==89){tdlc0d0_1=0.187777778;}
    else if( a==90){tdlc0d0_1=0.187777778;}
    else if( a==91){tdlc0d0_1=0.187777778;}
    else if( a==92){tdlc0d0_1=0.187777778;}
    else if( a==93){tdlc0d0_1=0.1875;}
    else if( a==94){tdlc0d0_1=0.187222222;}
    else if( a==95){tdlc0d0_1=0.187222222;}
    else if( a==96){tdlc0d0_1=0.186944444;}
    else if( a==97){tdlc0d0_1=0.186666667;}
    else if( a==98){tdlc0d0_1=0.186388889;}
    else if( a==99){tdlc0d0_1=0.185833333;}
    else if( a==100){tdlc0d0_1=0.185277778;}
    else if( a==101){tdlc0d0_1=0.184722222;}
    else if( a==102){tdlc0d0_1=0.184166667;}
    else if( a==103){tdlc0d0_1=0.183333333;}
    else if( a==104){tdlc0d0_1=0.182777778;}
    else if( a==105){tdlc0d0_1=0.181944444;}
    else if( a==106){tdlc0d0_1=0.181111111;}
    else if( a==107){tdlc0d0_1=0.180277778;}
    else if( a==108){tdlc0d0_1=0.179166667;}
    else if( a==109){tdlc0d0_1=0.178333333;}
    else if( a==110){tdlc0d0_1=0.177222222;}
    else if( a==111){tdlc0d0_1=0.176111111;}
    else if( a==112){tdlc0d0_1=0.175;}
    else if( a==113){tdlc0d0_1=0.173611111;}
    else if( a==114){tdlc0d0_1=0.1725;}
    else if( a==115){tdlc0d0_1=0.171111111;}
    else if( a==116){tdlc0d0_1=0.169722222;}
    else if( a==117){tdlc0d0_1=0.168333333;}
    else if( a==118){tdlc0d0_1=0.166666667;}
    else if( a==119){tdlc0d0_1=0.165277778;}
    else if( a==120){tdlc0d0_1=0.163611111;}
    else if( a==121){tdlc0d0_1=0.161944444;}
    else if( a==122){tdlc0d0_1=0.160277778;}
    else if( a==123){tdlc0d0_1=0.158611111;}
    else if( a==124){tdlc0d0_1=0.156666667;}
    else if( a==125){tdlc0d0_1=0.155;}
    else if( a==126){tdlc0d0_1=0.153055556;}
    else if( a==127){tdlc0d0_1=0.151111111;}
    else if( a==128){tdlc0d0_1=0.149166667;}
    else if( a==129){tdlc0d0_1=0.146944444;}
    else if( a==130){tdlc0d0_1=0.145;}
    else if( a==131){tdlc0d0_1=0.142777778;}
    else if( a==132){tdlc0d0_1=0.140555556;}
    else if( a==133){tdlc0d0_1=0.138333333;}
    else if( a==134){tdlc0d0_1=0.136111111;}
    else if( a==135){tdlc0d0_1=0.133888889;}
    else if( a==136){tdlc0d0_1=0.131666667;}
    else if( a==137){tdlc0d0_1=0.129166667;}
    else if( a==138){tdlc0d0_1=0.126666667;}
    else if( a==139){tdlc0d0_1=0.124166667;}
    else if( a==140){tdlc0d0_1=0.121666667;}
    else if( a==141){tdlc0d0_1=0.119166667;}
    else if( a==142){tdlc0d0_1=0.116666667;}
    else if( a==143){tdlc0d0_1=0.114166667;}
    else if( a==144){tdlc0d0_1=0.111388889;}
    else if( a==145){tdlc0d0_1=0.108888889;}
    else if( a==146){tdlc0d0_1=0.106111111;}
    else if( a==147){tdlc0d0_1=0.103333333;}
    else if( a==148){tdlc0d0_1=0.100555556;}
    else if( a==149){tdlc0d0_1=0.097777778;}
    else if( a==150){tdlc0d0_1=0.095;}
    else if( a==151){tdlc0d0_1=0.091944444;}
    else if( a==152){tdlc0d0_1=0.089166667;}
    else if( a==153){tdlc0d0_1=0.086111111;}
    else if( a==154){tdlc0d0_1=0.083055556;}
    else if( a==155){tdlc0d0_1=0.080277778;}
    else if( a==156){tdlc0d0_1=0.077222222;}
    else if( a==157){tdlc0d0_1=0.074166667;}
    else if( a==158){tdlc0d0_1=0.071111111;}
    else if( a==159){tdlc0d0_1=0.068055556;}
    else if( a==160){tdlc0d0_1=0.065;}
    else if( a==161){tdlc0d0_1=0.061944444;}
    else if( a==162){tdlc0d0_1=0.058611111;}
    else if( a==163){tdlc0d0_1=0.055555556;}
    else if( a==164){tdlc0d0_1=0.052222222;}
    else if( a==165){tdlc0d0_1=0.049166667;}
    else if( a==166){tdlc0d0_1=0.046944444;}
    else if( a==167){tdlc0d0_1=0.0425;}
    else if( a==168){tdlc0d0_1=0.039166667;}
    else if( a==169){tdlc0d0_1=0.036111111;}
    else if( a==170){tdlc0d0_1=0.033055556;}
    else if( a==171){tdlc0d0_1=0.029722222;}
    else if( a==172){tdlc0d0_1=0.026388889;}
    else if( a==173){tdlc0d0_1=0.023055556;}
    else if( a==174){tdlc0d0_1=0.019722222;}
    else if( a==175){tdlc0d0_1=0.016666667;}
    else if( a==176){tdlc0d0_1=0.013333333;}
    else if( a==177){tdlc0d0_1=0.01;}
    else if( a==178){tdlc0d0_1=0.006666667;}
    else if( a==179){tdlc0d0_1=0.003333333;}
    else if( a==180){tdlc0d0_1=0;}
    else if( a==181){tdlc0d0_1=-0.003333333;}
    else if( a==182){tdlc0d0_1=-0.006666667;}
    else if( a==183){tdlc0d0_1=-0.01;}
    else if( a==184){tdlc0d0_1=-0.013333333;}
    else if( a==185){tdlc0d0_1=-0.016666667;}
    else if( a==186){tdlc0d0_1=-0.019722222;}
    else if( a==187){tdlc0d0_1=-0.023055556;}
    else if( a==188){tdlc0d0_1=-0.026388889;}
    else if( a==189){tdlc0d0_1=-0.029722222;}
    else if( a==190){tdlc0d0_1=-0.033055556;}
    else if( a==191){tdlc0d0_1=-0.036111111;}
    else if( a==192){tdlc0d0_1=-0.039166667;}
    else if( a==193){tdlc0d0_1=-0.0425;}
    else if( a==194){tdlc0d0_1=-0.046944444;}
    else if( a==195){tdlc0d0_1=-0.049166667;}
    else if( a==196){tdlc0d0_1=-0.052222222;}
    else if( a==197){tdlc0d0_1=-0.055555556;}
    else if( a==198){tdlc0d0_1=-0.058611111;}
    else if( a==199){tdlc0d0_1=-0.061944444;}
    else if( a==200){tdlc0d0_1=-0.065;}
    else if( a==201){tdlc0d0_1=-0.068055556;}
    else if( a==202){tdlc0d0_1=-0.071111111;}
    else if( a==203){tdlc0d0_1=-0.074166667;}
    else if( a==204){tdlc0d0_1=-0.077222222;}
    else if( a==205){tdlc0d0_1=-0.080277778;}
    else if( a==206){tdlc0d0_1=-0.083055556;}
    else if( a==207){tdlc0d0_1=-0.086111111;}
    else if( a==208){tdlc0d0_1=-0.089166667;}
    else if( a==209){tdlc0d0_1=-0.091944444;}
    else if( a==210){tdlc0d0_1=-0.095;}
    else if( a==211){tdlc0d0_1=-0.097777778;}
    else if( a==212){tdlc0d0_1=-0.100555556;}
    else if( a==213){tdlc0d0_1=-0.103333333;}
    else if( a==214){tdlc0d0_1=-0.106111111;}
    else if( a==215){tdlc0d0_1=-0.108888889;}
    else if( a==216){tdlc0d0_1=-0.111388889;}
    else if( a==217){tdlc0d0_1=-0.114166667;}
    else if( a==218){tdlc0d0_1=-0.116666667;}
    else if( a==219){tdlc0d0_1=-0.119166667;}
    else if( a==220){tdlc0d0_1=-0.121666667;}
    else if( a==221){tdlc0d0_1=-0.124166667;}
    else if( a==222){tdlc0d0_1=-0.126666667;}
    else if( a==223){tdlc0d0_1=-0.129166667;}
    else if( a==224){tdlc0d0_1=-0.131666667;}
    else if( a==225){tdlc0d0_1=-0.133888889;}
    else if( a==226){tdlc0d0_1=-0.136111111;}
    else if( a==227){tdlc0d0_1=-0.138333333;}
    else if( a==228){tdlc0d0_1=-0.140555556;}
    else if( a==229){tdlc0d0_1=-0.142777778;}
    else if( a==230){tdlc0d0_1=-0.145;}
    else if( a==231){tdlc0d0_1=-0.146944444;}
    else if( a==232){tdlc0d0_1=-0.149166667;}
    else if( a==233){tdlc0d0_1=-0.151111111;}
    else if( a==234){tdlc0d0_1=-0.153055556;}
    else if( a==235){tdlc0d0_1=-0.155;}
    else if( a==236){tdlc0d0_1=-0.156666667;}
    else if( a==237){tdlc0d0_1=-0.158611111;}
    else if( a==238){tdlc0d0_1=-0.160277778;}
    else if( a==239){tdlc0d0_1=-0.161944444;}
    else if( a==240){tdlc0d0_1=-0.163611111;}
    else if( a==241){tdlc0d0_1=-0.165277778;}
    else if( a==242){tdlc0d0_1=-0.166666667;}
    else if( a==243){tdlc0d0_1=-0.168333333;}
    else if( a==244){tdlc0d0_1=-0.169722222;}
    else if( a==245){tdlc0d0_1=-0.171111111;}
    else if( a==246){tdlc0d0_1=-0.1725;}
    else if( a==247){tdlc0d0_1=-0.173611111;}
    else if( a==248){tdlc0d0_1=-0.175;}
    else if( a==249){tdlc0d0_1=-0.176111111;}
    else if( a==250){tdlc0d0_1=-0.177222222;}
    else if( a==251){tdlc0d0_1=-0.178333333;}
    else if( a==252){tdlc0d0_1=-0.179166667;}
    else if( a==253){tdlc0d0_1=-0.180277778;}
    else if( a==254){tdlc0d0_1=-0.181111111;}
    else if( a==255){tdlc0d0_1=-0.181944444;}
    else if( a==256){tdlc0d0_1=-0.182777778;}
    else if( a==257){tdlc0d0_1=-0.183333333;}
    else if( a==258){tdlc0d0_1=-0.184166667;}
    else if( a==259){tdlc0d0_1=-0.184722222;}
    else if( a==260){tdlc0d0_1=-0.185277778;}
    else if( a==261){tdlc0d0_1=-0.185833333;}
    else if( a==262){tdlc0d0_1=-0.186388889;}
    else if( a==263){tdlc0d0_1=-0.186666667;}
    else if( a==264){tdlc0d0_1=-0.186944444;}
    else if( a==265){tdlc0d0_1=-0.187222222;}
    else if( a==266){tdlc0d0_1=-0.187222222;}
    else if( a==267){tdlc0d0_1=-0.1875;}
    else if( a==268){tdlc0d0_1=-0.187777778;}
    else if( a==269){tdlc0d0_1=-0.187777778;}
    else if( a==270){tdlc0d0_1=-0.187777778;}
    else if( a==271){tdlc0d0_1=-0.187777778;}
    else if( a==272){tdlc0d0_1=-0.1875;}
    else if( a==273){tdlc0d0_1=-0.1875;}
    else if( a==274){tdlc0d0_1=-0.187222222;}
    else if( a==275){tdlc0d0_1=-0.186944444;}
    else if( a==276){tdlc0d0_1=-0.186388889;}
    else if( a==277){tdlc0d0_1=-0.186111111;}
    else if( a==278){tdlc0d0_1=-0.185555556;}
    else if( a==279){tdlc0d0_1=-0.185;}
    else if( a==280){tdlc0d0_1=-0.184444444;}
    else if( a==281){tdlc0d0_1=-0.183888889;}
    else if( a==282){tdlc0d0_1=-0.183055556;}
    else if( a==283){tdlc0d0_1=-0.1825;}
    else if( a==284){tdlc0d0_1=-0.181666667;}
    else if( a==285){tdlc0d0_1=-0.180833333;}
    else if( a==286){tdlc0d0_1=-0.18;}
    else if( a==287){tdlc0d0_1=-0.178888889;}
    else if( a==288){tdlc0d0_1=-0.178055556;}
    else if( a==289){tdlc0d0_1=-0.176944444;}
    else if( a==290){tdlc0d0_1=-0.175833333;}
    else if( a==291){tdlc0d0_1=-0.174444444;}
    else if( a==292){tdlc0d0_1=-0.173333333;}
    else if( a==293){tdlc0d0_1=-0.171944444;}
    else if( a==294){tdlc0d0_1=-0.170555556;}
    else if( a==295){tdlc0d0_1=-0.169444444;}
    else if( a==296){tdlc0d0_1=-0.168055556;}
    else if( a==297){tdlc0d0_1=-0.166388889;}
    else if( a==298){tdlc0d0_1=-0.165;}
    else if( a==299){tdlc0d0_1=-0.163333333;}
    else if( a==300){tdlc0d0_1=-0.162777778;}
    else if( a==301){tdlc0d0_1=-0.16;}
    else if( a==302){tdlc0d0_1=-0.158333333;}
    else if( a==303){tdlc0d0_1=-0.156388889;}
    else if( a==304){tdlc0d0_1=-0.154444444;}
    else if( a==305){tdlc0d0_1=-0.152777778;}
    else if( a==306){tdlc0d0_1=-0.150833333;}
    else if( a==307){tdlc0d0_1=-0.148888889;}
    else if( a==308){tdlc0d0_1=-0.146944444;}
    else if( a==309){tdlc0d0_1=-0.144722222;}
    else if( a==310){tdlc0d0_1=-0.142777778;}
    else if( a==311){tdlc0d0_1=-0.140555556;}
    else if( a==312){tdlc0d0_1=-0.138333333;}
    else if( a==313){tdlc0d0_1=-0.136111111;}
    else if( a==314){tdlc0d0_1=-0.133888889;}
    else if( a==315){tdlc0d0_1=-0.131666667;}
    else if( a==316){tdlc0d0_1=-0.129444444;}
    else if( a==317){tdlc0d0_1=-0.126944444;}
    else if( a==318){tdlc0d0_1=-0.124444444;}
    else if( a==319){tdlc0d0_1=-0.121944444;}
    else if( a==320){tdlc0d0_1=-0.119444444;}
    else if( a==321){tdlc0d0_1=-0.116944444;}
    else if( a==322){tdlc0d0_1=-0.114444444;}
    else if( a==323){tdlc0d0_1=-0.111944444;}
    else if( a==324){tdlc0d0_1=-0.109166667;}
    else if( a==325){tdlc0d0_1=-0.106666667;}
    else if( a==326){tdlc0d0_1=-0.103888889;}
    else if( a==327){tdlc0d0_1=-0.101111111;}
    else if( a==328){tdlc0d0_1=-0.098333333;}
    else if( a==329){tdlc0d0_1=-0.095833333;}
    else if( a==330){tdlc0d0_1=-0.093055556;}
    else if( a==331){tdlc0d0_1=-0.09;}
    else if( a==332){tdlc0d0_1=-0.087222222;}
    else if( a==333){tdlc0d0_1=-0.084444444;}
    else if( a==334){tdlc0d0_1=-0.081388889;}
    else if( a==335){tdlc0d0_1=-0.078611111;}
    else if( a==336){tdlc0d0_1=-0.075555556;}
    else if( a==337){tdlc0d0_1=-0.0725;}
    else if( a==338){tdlc0d0_1=-0.069444444;}
    else if( a==339){tdlc0d0_1=-0.066388889;}
    else if( a==340){tdlc0d0_1=-0.063611111;}
    else if( a==341){tdlc0d0_1=-0.060555556;}
    else if( a==342){tdlc0d0_1=-0.057222222;}
    else if( a==343){tdlc0d0_1=-0.054166667;}
    else if( a==344){tdlc0d0_1=-0.051111111;}
    else if( a==345){tdlc0d0_1=-0.048055556;}
    else if( a==346){tdlc0d0_1=-0.045;}
    else if( a==347){tdlc0d0_1=-0.041666667;}
    else if( a==348){tdlc0d0_1=-0.038611111;}
    else if( a==349){tdlc0d0_1=-0.035277778;}
    else if( a==350){tdlc0d0_1=-0.032222222;}
    else if( a==351){tdlc0d0_1=-0.029166667;}
    else if( a==352){tdlc0d0_1=-0.025833333;}
    else if( a==353){tdlc0d0_1=-0.0225;}
    else if( a==354){tdlc0d0_1=-0.019444444;}
    else if( a==355){tdlc0d0_1=-0.016111111;}
    else if( a==356){tdlc0d0_1=-0.013055556;}
    else if( a==357){tdlc0d0_1=-0.009722222;}
    else if( a==358){tdlc0d0_1=-0.006388889;}
    else if( a==359){tdlc0d0_1=-0.004166667;}
    else if( a==360){tdlc0d0_1=0;}
    else if( a==361){tdlc0d0_1=0.004166667;}
    else { tdlc0d0_1=99999999999999;}
    
    var tdlc0d0_2
    
    if( a+1==0){tdlc0d0_2=0;}
    else if( a+1==1){tdlc0d0_2=0.004166667;}
    else if( a+1==2){tdlc0d0_2=0.006388889;}
    else if( a+1==3){tdlc0d0_2=0.009722222;}
    else if( a+1==4){tdlc0d0_2=0.013055556;}
    else if( a+1==5){tdlc0d0_2=0.016111111;}
    else if( a+1==6){tdlc0d0_2=0.019444444;}
    else if( a+1==7){tdlc0d0_2=0.0225;}
    else if( a+1==8){tdlc0d0_2=0.025833333;}
    else if( a+1==9){tdlc0d0_2=0.029166667;}
    else if( a+1==10){tdlc0d0_2=0.032222222;}
    else if( a+1==11){tdlc0d0_2=0.035277778;}
    else if( a+1==12){tdlc0d0_2=0.038611111;}
    else if( a+1==13){tdlc0d0_2=0.041666667;}
    else if( a+1==14){tdlc0d0_2=0.045;}
    else if( a+1==15){tdlc0d0_2=0.048055556;}
    else if( a+1==16){tdlc0d0_2=0.051111111;}
    else if( a+1==17){tdlc0d0_2=0.054166667;}
    else if( a+1==18){tdlc0d0_2=0.057222222;}
    else if( a+1==19){tdlc0d0_2=0.060555556;}
    else if( a+1==20){tdlc0d0_2=0.063611111;}
    else if( a+1==21){tdlc0d0_2=0.066388889;}
    else if( a+1==22){tdlc0d0_2=0.069444444;}
    else if( a+1==23){tdlc0d0_2=0.0725;}
    else if( a+1==24){tdlc0d0_2=0.075555556;}
    else if( a+1==25){tdlc0d0_2=0.078611111;}
    else if( a+1==26){tdlc0d0_2=0.081388889;}
    else if( a+1==27){tdlc0d0_2=0.084444444;}
    else if( a+1==28){tdlc0d0_2=0.087222222;}
    else if( a+1==29){tdlc0d0_2=0.09;}
    else if( a+1==30){tdlc0d0_2=0.093055556;}
    else if( a+1==31){tdlc0d0_2=0.095833333;}
    else if( a+1==32){tdlc0d0_2=0.098333333;}
    else if( a+1==33){tdlc0d0_2=0.101111111;}
    else if( a+1==34){tdlc0d0_2=0.103888889;}
    else if( a+1==35){tdlc0d0_2=0.106666667;}
    else if( a+1==36){tdlc0d0_2=0.109166667;}
    else if( a+1==37){tdlc0d0_2=0.111944444;}
    else if( a+1==38){tdlc0d0_2=0.114444444;}
    else if( a+1==39){tdlc0d0_2=0.116944444;}
    else if( a+1==40){tdlc0d0_2=0.119444444;}
    else if( a+1==41){tdlc0d0_2=0.121944444;}
    else if( a+1==42){tdlc0d0_2=0.124444444;}
    else if( a+1==43){tdlc0d0_2=0.126944444;}
    else if( a+1==44){tdlc0d0_2=0.129444444;}
    else if( a+1==45){tdlc0d0_2=0.131666667;}
    else if( a+1==46){tdlc0d0_2=0.133888889;}
    else if( a+1==47){tdlc0d0_2=0.136111111;}
    else if( a+1==48){tdlc0d0_2=0.138333333;}
    else if( a+1==49){tdlc0d0_2=0.140555556;}
    else if( a+1==50){tdlc0d0_2=0.142777778;}
    else if( a+1==51){tdlc0d0_2=0.144722222;}
    else if( a+1==52){tdlc0d0_2=0.146944444;}
    else if( a+1==53){tdlc0d0_2=0.148888889;}
    else if( a+1==54){tdlc0d0_2=0.150833333;}
    else if( a+1==55){tdlc0d0_2=0.152777778;}
    else if( a+1==56){tdlc0d0_2=0.154444444;}
    else if( a+1==57){tdlc0d0_2=0.156388889;}
    else if( a+1==58){tdlc0d0_2=0.158333333;}
    else if( a+1==59){tdlc0d0_2=0.16;}
    else if( a+1==60){tdlc0d0_2=0.162777778;}
    else if( a+1==61){tdlc0d0_2=0.163333333;}
    else if( a+1==62){tdlc0d0_2=0.165;}
    else if( a+1==63){tdlc0d0_2=0.166388889;}
    else if( a+1==64){tdlc0d0_2=0.168055556;}
    else if( a+1==65){tdlc0d0_2=0.169444444;}
    else if( a+1==66){tdlc0d0_2=0.170555556;}
    else if( a+1==67){tdlc0d0_2=0.171944444;}
    else if( a+1==68){tdlc0d0_2=0.173333333;}
    else if( a+1==69){tdlc0d0_2=0.174444444;}
    else if( a+1==70){tdlc0d0_2=0.175833333;}
    else if( a+1==71){tdlc0d0_2=0.176944444;}
    else if( a+1==72){tdlc0d0_2=0.178055556;}
    else if( a+1==73){tdlc0d0_2=0.178888889;}
    else if( a+1==74){tdlc0d0_2=0.18;}
    else if( a+1==75){tdlc0d0_2=0.180833333;}
    else if( a+1==76){tdlc0d0_2=0.181666667;}
    else if( a+1==77){tdlc0d0_2=0.1825;}
    else if( a+1==78){tdlc0d0_2=0.183055556;}
    else if( a+1==79){tdlc0d0_2=0.183888889;}
    else if( a+1==80){tdlc0d0_2=0.184444444;}
    else if( a+1==81){tdlc0d0_2=0.185;}
    else if( a+1==82){tdlc0d0_2=0.185555556;}
    else if( a+1==83){tdlc0d0_2=0.186111111;}
    else if( a+1==84){tdlc0d0_2=0.186388889;}
    else if( a+1==85){tdlc0d0_2=0.186944444;}
    else if( a+1==86){tdlc0d0_2=0.187222222;}
    else if( a+1==87){tdlc0d0_2=0.1875;}
    else if( a+1==88){tdlc0d0_2=0.1875;}
    else if( a+1==89){tdlc0d0_2=0.187777778;}
    else if( a+1==90){tdlc0d0_2=0.187777778;}
    else if( a+1==91){tdlc0d0_2=0.187777778;}
    else if( a+1==92){tdlc0d0_2=0.187777778;}
    else if( a+1==93){tdlc0d0_2=0.1875;}
    else if( a+1==94){tdlc0d0_2=0.187222222;}
    else if( a+1==95){tdlc0d0_2=0.187222222;}
    else if( a+1==96){tdlc0d0_2=0.186944444;}
    else if( a+1==97){tdlc0d0_2=0.186666667;}
    else if( a+1==98){tdlc0d0_2=0.186388889;}
    else if( a+1==99){tdlc0d0_2=0.185833333;}
    else if( a+1==100){tdlc0d0_2=0.185277778;}
    else if( a+1==101){tdlc0d0_2=0.184722222;}
    else if( a+1==102){tdlc0d0_2=0.184166667;}
    else if( a+1==103){tdlc0d0_2=0.183333333;}
    else if( a+1==104){tdlc0d0_2=0.182777778;}
    else if( a+1==105){tdlc0d0_2=0.181944444;}
    else if( a+1==106){tdlc0d0_2=0.181111111;}
    else if( a+1==107){tdlc0d0_2=0.180277778;}
    else if( a+1==108){tdlc0d0_2=0.179166667;}
    else if( a+1==109){tdlc0d0_2=0.178333333;}
    else if( a+1==110){tdlc0d0_2=0.177222222;}
    else if( a+1==111){tdlc0d0_2=0.176111111;}
    else if( a+1==112){tdlc0d0_2=0.175;}
    else if( a+1==113){tdlc0d0_2=0.173611111;}
    else if( a+1==114){tdlc0d0_2=0.1725;}
    else if( a+1==115){tdlc0d0_2=0.171111111;}
    else if( a+1==116){tdlc0d0_2=0.169722222;}
    else if( a+1==117){tdlc0d0_2=0.168333333;}
    else if( a+1==118){tdlc0d0_2=0.166666667;}
    else if( a+1==119){tdlc0d0_2=0.165277778;}
    else if( a+1==120){tdlc0d0_2=0.163611111;}
    else if( a+1==121){tdlc0d0_2=0.161944444;}
    else if( a+1==122){tdlc0d0_2=0.160277778;}
    else if( a+1==123){tdlc0d0_2=0.158611111;}
    else if( a+1==124){tdlc0d0_2=0.156666667;}
    else if( a+1==125){tdlc0d0_2=0.155;}
    else if( a+1==126){tdlc0d0_2=0.153055556;}
    else if( a+1==127){tdlc0d0_2=0.151111111;}
    else if( a+1==128){tdlc0d0_2=0.149166667;}
    else if( a+1==129){tdlc0d0_2=0.146944444;}
    else if( a+1==130){tdlc0d0_2=0.145;}
    else if( a+1==131){tdlc0d0_2=0.142777778;}
    else if( a+1==132){tdlc0d0_2=0.140555556;}
    else if( a+1==133){tdlc0d0_2=0.138333333;}
    else if( a+1==134){tdlc0d0_2=0.136111111;}
    else if( a+1==135){tdlc0d0_2=0.133888889;}
    else if( a+1==136){tdlc0d0_2=0.131666667;}
    else if( a+1==137){tdlc0d0_2=0.129166667;}
    else if( a+1==138){tdlc0d0_2=0.126666667;}
    else if( a+1==139){tdlc0d0_2=0.124166667;}
    else if( a+1==140){tdlc0d0_2=0.121666667;}
    else if( a+1==141){tdlc0d0_2=0.119166667;}
    else if( a+1==142){tdlc0d0_2=0.116666667;}
    else if( a+1==143){tdlc0d0_2=0.114166667;}
    else if( a+1==144){tdlc0d0_2=0.111388889;}
    else if( a+1==145){tdlc0d0_2=0.108888889;}
    else if( a+1==146){tdlc0d0_2=0.106111111;}
    else if( a+1==147){tdlc0d0_2=0.103333333;}
    else if( a+1==148){tdlc0d0_2=0.100555556;}
    else if( a+1==149){tdlc0d0_2=0.097777778;}
    else if( a+1==150){tdlc0d0_2=0.095;}
    else if( a+1==151){tdlc0d0_2=0.091944444;}
    else if( a+1==152){tdlc0d0_2=0.089166667;}
    else if( a+1==153){tdlc0d0_2=0.086111111;}
    else if( a+1==154){tdlc0d0_2=0.083055556;}
    else if( a+1==155){tdlc0d0_2=0.080277778;}
    else if( a+1==156){tdlc0d0_2=0.077222222;}
    else if( a+1==157){tdlc0d0_2=0.074166667;}
    else if( a+1==158){tdlc0d0_2=0.071111111;}
    else if( a+1==159){tdlc0d0_2=0.068055556;}
    else if( a+1==160){tdlc0d0_2=0.065;}
    else if( a+1==161){tdlc0d0_2=0.061944444;}
    else if( a+1==162){tdlc0d0_2=0.058611111;}
    else if( a+1==163){tdlc0d0_2=0.055555556;}
    else if( a+1==164){tdlc0d0_2=0.052222222;}
    else if( a+1==165){tdlc0d0_2=0.049166667;}
    else if( a+1==166){tdlc0d0_2=0.046944444;}
    else if( a+1==167){tdlc0d0_2=0.0425;}
    else if( a+1==168){tdlc0d0_2=0.039166667;}
    else if( a+1==169){tdlc0d0_2=0.036111111;}
    else if( a+1==170){tdlc0d0_2=0.033055556;}
    else if( a+1==171){tdlc0d0_2=0.029722222;}
    else if( a+1==172){tdlc0d0_2=0.026388889;}
    else if( a+1==173){tdlc0d0_2=0.023055556;}
    else if( a+1==174){tdlc0d0_2=0.019722222;}
    else if( a+1==175){tdlc0d0_2=0.016666667;}
    else if( a+1==176){tdlc0d0_2=0.013333333;}
    else if( a+1==177){tdlc0d0_2=0.01;}
    else if( a+1==178){tdlc0d0_2=0.006666667;}
    else if( a+1==179){tdlc0d0_2=0.003333333;}
    else if( a+1==180){tdlc0d0_2=0;}
    else if( a+1==181){tdlc0d0_2=-0.003333333;}
    else if( a+1==182){tdlc0d0_2=-0.006666667;}
    else if( a+1==183){tdlc0d0_2=-0.01;}
    else if( a+1==184){tdlc0d0_2=-0.013333333;}
    else if( a+1==185){tdlc0d0_2=-0.016666667;}
    else if( a+1==186){tdlc0d0_2=-0.019722222;}
    else if( a+1==187){tdlc0d0_2=-0.023055556;}
    else if( a+1==188){tdlc0d0_2=-0.026388889;}
    else if( a+1==189){tdlc0d0_2=-0.029722222;}
    else if( a+1==190){tdlc0d0_2=-0.033055556;}
    else if( a+1==191){tdlc0d0_2=-0.036111111;}
    else if( a+1==192){tdlc0d0_2=-0.039166667;}
    else if( a+1==193){tdlc0d0_2=-0.0425;}
    else if( a+1==194){tdlc0d0_2=-0.046944444;}
    else if( a+1==195){tdlc0d0_2=-0.049166667;}
    else if( a+1==196){tdlc0d0_2=-0.052222222;}
    else if( a+1==197){tdlc0d0_2=-0.055555556;}
    else if( a+1==198){tdlc0d0_2=-0.058611111;}
    else if( a+1==199){tdlc0d0_2=-0.061944444;}
    else if( a+1==200){tdlc0d0_2=-0.065;}
    else if( a+1==201){tdlc0d0_2=-0.068055556;}
    else if( a+1==202){tdlc0d0_2=-0.071111111;}
    else if( a+1==203){tdlc0d0_2=-0.074166667;}
    else if( a+1==204){tdlc0d0_2=-0.077222222;}
    else if( a+1==205){tdlc0d0_2=-0.080277778;}
    else if( a+1==206){tdlc0d0_2=-0.083055556;}
    else if( a+1==207){tdlc0d0_2=-0.086111111;}
    else if( a+1==208){tdlc0d0_2=-0.089166667;}
    else if( a+1==209){tdlc0d0_2=-0.091944444;}
    else if( a+1==210){tdlc0d0_2=-0.095;}
    else if( a+1==211){tdlc0d0_2=-0.097777778;}
    else if( a+1==212){tdlc0d0_2=-0.100555556;}
    else if( a+1==213){tdlc0d0_2=-0.103333333;}
    else if( a+1==214){tdlc0d0_2=-0.106111111;}
    else if( a+1==215){tdlc0d0_2=-0.108888889;}
    else if( a+1==216){tdlc0d0_2=-0.111388889;}
    else if( a+1==217){tdlc0d0_2=-0.114166667;}
    else if( a+1==218){tdlc0d0_2=-0.116666667;}
    else if( a+1==219){tdlc0d0_2=-0.119166667;}
    else if( a+1==220){tdlc0d0_2=-0.121666667;}
    else if( a+1==221){tdlc0d0_2=-0.124166667;}
    else if( a+1==222){tdlc0d0_2=-0.126666667;}
    else if( a+1==223){tdlc0d0_2=-0.129166667;}
    else if( a+1==224){tdlc0d0_2=-0.131666667;}
    else if( a+1==225){tdlc0d0_2=-0.133888889;}
    else if( a+1==226){tdlc0d0_2=-0.136111111;}
    else if( a+1==227){tdlc0d0_2=-0.138333333;}
    else if( a+1==228){tdlc0d0_2=-0.140555556;}
    else if( a+1==229){tdlc0d0_2=-0.142777778;}
    else if( a+1==230){tdlc0d0_2=-0.145;}
    else if( a+1==231){tdlc0d0_2=-0.146944444;}
    else if( a+1==232){tdlc0d0_2=-0.149166667;}
    else if( a+1==233){tdlc0d0_2=-0.151111111;}
    else if( a+1==234){tdlc0d0_2=-0.153055556;}
    else if( a+1==235){tdlc0d0_2=-0.155;}
    else if( a+1==236){tdlc0d0_2=-0.156666667;}
    else if( a+1==237){tdlc0d0_2=-0.158611111;}
    else if( a+1==238){tdlc0d0_2=-0.160277778;}
    else if( a+1==239){tdlc0d0_2=-0.161944444;}
    else if( a+1==240){tdlc0d0_2=-0.163611111;}
    else if( a+1==241){tdlc0d0_2=-0.165277778;}
    else if( a+1==242){tdlc0d0_2=-0.166666667;}
    else if( a+1==243){tdlc0d0_2=-0.168333333;}
    else if( a+1==244){tdlc0d0_2=-0.169722222;}
    else if( a+1==245){tdlc0d0_2=-0.171111111;}
    else if( a+1==246){tdlc0d0_2=-0.1725;}
    else if( a+1==247){tdlc0d0_2=-0.173611111;}
    else if( a+1==248){tdlc0d0_2=-0.175;}
    else if( a+1==249){tdlc0d0_2=-0.176111111;}
    else if( a+1==250){tdlc0d0_2=-0.177222222;}
    else if( a+1==251){tdlc0d0_2=-0.178333333;}
    else if( a+1==252){tdlc0d0_2=-0.179166667;}
    else if( a+1==253){tdlc0d0_2=-0.180277778;}
    else if( a+1==254){tdlc0d0_2=-0.181111111;}
    else if( a+1==255){tdlc0d0_2=-0.181944444;}
    else if( a+1==256){tdlc0d0_2=-0.182777778;}
    else if( a+1==257){tdlc0d0_2=-0.183333333;}
    else if( a+1==258){tdlc0d0_2=-0.184166667;}
    else if( a+1==259){tdlc0d0_2=-0.184722222;}
    else if( a+1==260){tdlc0d0_2=-0.185277778;}
    else if( a+1==261){tdlc0d0_2=-0.185833333;}
    else if( a+1==262){tdlc0d0_2=-0.186388889;}
    else if( a+1==263){tdlc0d0_2=-0.186666667;}
    else if( a+1==264){tdlc0d0_2=-0.186944444;}
    else if( a+1==265){tdlc0d0_2=-0.187222222;}
    else if( a+1==266){tdlc0d0_2=-0.187222222;}
    else if( a+1==267){tdlc0d0_2=-0.1875;}
    else if( a+1==268){tdlc0d0_2=-0.187777778;}
    else if( a+1==269){tdlc0d0_2=-0.187777778;}
    else if( a+1==270){tdlc0d0_2=-0.187777778;}
    else if( a+1==271){tdlc0d0_2=-0.187777778;}
    else if( a+1==272){tdlc0d0_2=-0.1875;}
    else if( a+1==273){tdlc0d0_2=-0.1875;}
    else if( a+1==274){tdlc0d0_2=-0.187222222;}
    else if( a+1==275){tdlc0d0_2=-0.186944444;}
    else if( a+1==276){tdlc0d0_2=-0.186388889;}
    else if( a+1==277){tdlc0d0_2=-0.186111111;}
    else if( a+1==278){tdlc0d0_2=-0.185555556;}
    else if( a+1==279){tdlc0d0_2=-0.185;}
    else if( a+1==280){tdlc0d0_2=-0.184444444;}
    else if( a+1==281){tdlc0d0_2=-0.183888889;}
    else if( a+1==282){tdlc0d0_2=-0.183055556;}
    else if( a+1==283){tdlc0d0_2=-0.1825;}
    else if( a+1==284){tdlc0d0_2=-0.181666667;}
    else if( a+1==285){tdlc0d0_2=-0.180833333;}
    else if( a+1==286){tdlc0d0_2=-0.18;}
    else if( a+1==287){tdlc0d0_2=-0.178888889;}
    else if( a+1==288){tdlc0d0_2=-0.178055556;}
    else if( a+1==289){tdlc0d0_2=-0.176944444;}
    else if( a+1==290){tdlc0d0_2=-0.175833333;}
    else if( a+1==291){tdlc0d0_2=-0.174444444;}
    else if( a+1==292){tdlc0d0_2=-0.173333333;}
    else if( a+1==293){tdlc0d0_2=-0.171944444;}
    else if( a+1==294){tdlc0d0_2=-0.170555556;}
    else if( a+1==295){tdlc0d0_2=-0.169444444;}
    else if( a+1==296){tdlc0d0_2=-0.168055556;}
    else if( a+1==297){tdlc0d0_2=-0.166388889;}
    else if( a+1==298){tdlc0d0_2=-0.165;}
    else if( a+1==299){tdlc0d0_2=-0.163333333;}
    else if( a+1==300){tdlc0d0_2=-0.162777778;}
    else if( a+1==301){tdlc0d0_2=-0.16;}
    else if( a+1==302){tdlc0d0_2=-0.158333333;}
    else if( a+1==303){tdlc0d0_2=-0.156388889;}
    else if( a+1==304){tdlc0d0_2=-0.154444444;}
    else if( a+1==305){tdlc0d0_2=-0.152777778;}
    else if( a+1==306){tdlc0d0_2=-0.150833333;}
    else if( a+1==307){tdlc0d0_2=-0.148888889;}
    else if( a+1==308){tdlc0d0_2=-0.146944444;}
    else if( a+1==309){tdlc0d0_2=-0.144722222;}
    else if( a+1==310){tdlc0d0_2=-0.142777778;}
    else if( a+1==311){tdlc0d0_2=-0.140555556;}
    else if( a+1==312){tdlc0d0_2=-0.138333333;}
    else if( a+1==313){tdlc0d0_2=-0.136111111;}
    else if( a+1==314){tdlc0d0_2=-0.133888889;}
    else if( a+1==315){tdlc0d0_2=-0.131666667;}
    else if( a+1==316){tdlc0d0_2=-0.129444444;}
    else if( a+1==317){tdlc0d0_2=-0.126944444;}
    else if( a+1==318){tdlc0d0_2=-0.124444444;}
    else if( a+1==319){tdlc0d0_2=-0.121944444;}
    else if( a+1==320){tdlc0d0_2=-0.119444444;}
    else if( a+1==321){tdlc0d0_2=-0.116944444;}
    else if( a+1==322){tdlc0d0_2=-0.114444444;}
    else if( a+1==323){tdlc0d0_2=-0.111944444;}
    else if( a+1==324){tdlc0d0_2=-0.109166667;}
    else if( a+1==325){tdlc0d0_2=-0.106666667;}
    else if( a+1==326){tdlc0d0_2=-0.103888889;}
    else if( a+1==327){tdlc0d0_2=-0.101111111;}
    else if( a+1==328){tdlc0d0_2=-0.098333333;}
    else if( a+1==329){tdlc0d0_2=-0.095833333;}
    else if( a+1==330){tdlc0d0_2=-0.093055556;}
    else if( a+1==331){tdlc0d0_2=-0.09;}
    else if( a+1==332){tdlc0d0_2=-0.087222222;}
    else if( a+1==333){tdlc0d0_2=-0.084444444;}
    else if( a+1==334){tdlc0d0_2=-0.081388889;}
    else if( a+1==335){tdlc0d0_2=-0.078611111;}
    else if( a+1==336){tdlc0d0_2=-0.075555556;}
    else if( a+1==337){tdlc0d0_2=-0.0725;}
    else if( a+1==338){tdlc0d0_2=-0.069444444;}
    else if( a+1==339){tdlc0d0_2=-0.066388889;}
    else if( a+1==340){tdlc0d0_2=-0.063611111;}
    else if( a+1==341){tdlc0d0_2=-0.060555556;}
    else if( a+1==342){tdlc0d0_2=-0.057222222;}
    else if( a+1==343){tdlc0d0_2=-0.054166667;}
    else if( a+1==344){tdlc0d0_2=-0.051111111;}
    else if( a+1==345){tdlc0d0_2=-0.048055556;}
    else if( a+1==346){tdlc0d0_2=-0.045;}
    else if( a+1==347){tdlc0d0_2=-0.041666667;}
    else if( a+1==348){tdlc0d0_2=-0.038611111;}
    else if( a+1==349){tdlc0d0_2=-0.035277778;}
    else if( a+1==350){tdlc0d0_2=-0.032222222;}
    else if( a+1==351){tdlc0d0_2=-0.029166667;}
    else if( a+1==352){tdlc0d0_2=-0.025833333;}
    else if( a+1==353){tdlc0d0_2=-0.0225;}
    else if( a+1==354){tdlc0d0_2=-0.019444444;}
    else if( a+1==355){tdlc0d0_2=-0.016111111;}
    else if( a+1==356){tdlc0d0_2=-0.013055556;}
    else if( a+1==357){tdlc0d0_2=-0.009722222;}
    else if( a+1==358){tdlc0d0_2=-0.006388889;}
    else if( a+1==359){tdlc0d0_2=-0.004166667;}
    else if( a+1==360){tdlc0d0_2=0;}
    else if( a+1==361){tdlc0d0_2=0.004166667;}
    else { tdlc0d0_2=99999999999999;}
    
    
    var hasil = (tdlc0d0_1)+(tdlc0d0_2-tdlc0d0_1)*(b-a);
    return hasil ;
    };
    
    var tdlc0d0 = ftdlc0d0(intdalil1,jks);
    
    var kwq_1 = MOD(jwq+tdlc0d0+360,360);
    var kkq_1 = MOD(jkq+tdlc0d0+360,360);
    
    var dalil2 =MOD(2*(jwq-thulsyams)-jkq+360,360);
    var intdalil2 = Math.floor(dalil2);
    
    var ftdlc1d1 = function (a,b){
    
    var c_1
    
    if( a==0){c_1=0;}
    else if( a==1){c_1=-0.023055556;}
    else if( a==2){c_1=-0.046111111;}
    else if( a==3){c_1=-0.069166667;}
    else if( a==4){c_1=-0.092222222;}
    else if( a==5){c_1=-0.115277778;}
    else if( a==6){c_1=-0.138333333;}
    else if( a==7){c_1=-0.161111111;}
    else if( a==8){c_1=-0.184166667;}
    else if( a==9){c_1=-0.206944444;}
    else if( a==10){c_1=-0.229722222;}
    else if( a==11){c_1=-0.2525;}
    else if( a==12){c_1=-0.275;}
    else if( a==13){c_1=-0.2975;}
    else if( a==14){c_1=-0.32;}
    else if( a==15){c_1=-0.3425;}
    else if( a==16){c_1=-0.364722222;}
    else if( a==17){c_1=-0.386944444;}
    else if( a==18){c_1=-0.408888889;}
    else if( a==19){c_1=-0.430833333;}
    else if( a==20){c_1=-0.452777778;}
    else if( a==21){c_1=-0.474444444;}
    else if( a==22){c_1=-0.495833333;}
    else if( a==23){c_1=-0.517222222;}
    else if( a==24){c_1=-0.538611111;}
    else if( a==25){c_1=-0.559722222;}
    else if( a==26){c_1=-0.580555556;}
    else if( a==27){c_1=-0.601388889;}
    else if( a==28){c_1=-0.621944444;}
    else if( a==29){c_1=-0.6425;}
    else if( a==30){c_1=-0.662777778;}
    else if( a==31){c_1=-0.682777778;}
    else if( a==32){c_1=-0.7025;}
    else if( a==33){c_1=-0.722222222;}
    else if( a==34){c_1=-0.747222222;}
    else if( a==35){c_1=-0.760833333;}
    else if( a==36){c_1=-0.779722222;}
    else if( a==37){c_1=-0.798333333;}
    else if( a==38){c_1=-0.816944444;}
    else if( a==39){c_1=-0.835277778;}
    else if( a==40){c_1=-0.853333333;}
    else if( a==41){c_1=-0.871111111;}
    else if( a==42){c_1=-0.888611111;}
    else if( a==43){c_1=-0.905833333;}
    else if( a==44){c_1=-0.922777778;}
    else if( a==45){c_1=-0.939444444;}
    else if( a==46){c_1=-0.955833333;}
    else if( a==47){c_1=-0.971944444;}
    else if( a==48){c_1=-0.987777778;}
    else if( a==49){c_1=-1.003333333;}
    else if( a==50){c_1=-1.018611111;}
    else if( a==51){c_1=-1.033611111;}
    else if( a==52){c_1=-1.048333333;}
    else if( a==53){c_1=-1.062777778;}
    else if( a==54){c_1=-1.076944444;}
    else if( a==55){c_1=-1.090555556;}
    else if( a==56){c_1=-1.103888889;}
    else if( a==57){c_1=-1.116944444;}
    else if( a==58){c_1=-1.129722222;}
    else if( a==59){c_1=-1.142222222;}
    else if( a==60){c_1=-1.154166667;}
    else if( a==61){c_1=-1.165833333;}
    else if( a==62){c_1=-1.177222222;}
    else if( a==63){c_1=-1.188333333;}
    else if( a==64){c_1=-1.198888889;}
    else if( a==65){c_1=-1.209166667;}
    else if( a==66){c_1=-1.219166667;}
    else if( a==67){c_1=-1.228611111;}
    else if( a==68){c_1=-1.237777778;}
    else if( a==69){c_1=-1.246666667;}
    else if( a==70){c_1=-1.255277778;}
    else if( a==71){c_1=-1.263611111;}
    else if( a==72){c_1=-1.271388889;}
    else if( a==73){c_1=-1.278611111;}
    else if( a==74){c_1=-1.285555556;}
    else if( a==75){c_1=-1.291944444;}
    else if( a==76){c_1=-1.298055556;}
    else if( a==77){c_1=-1.303888889;}
    else if( a==78){c_1=-1.309166667;}
    else if( a==79){c_1=-1.314166667;}
    else if( a==80){c_1=-1.318888889;}
    else if( a==81){c_1=-1.323333333;}
    else if( a==82){c_1=-1.327222222;}
    else if( a==83){c_1=-1.330555556;}
    else if( a==84){c_1=-1.333333333;}
    else if( a==85){c_1=-1.335833333;}
    else if( a==86){c_1=-1.337777778;}
    else if( a==87){c_1=-1.339444444;}
    else if( a==88){c_1=-1.340833333;}
    else if( a==89){c_1=-1.341944444;}
    else if( a==90){c_1=-1.3425;}
    else if( a==91){c_1=-1.342777778;}
    else if( a==92){c_1=-1.3425;}
    else if( a==93){c_1=-1.341944444;}
    else if( a==94){c_1=-1.340833333;}
    else if( a==95){c_1=-1.339166667;}
    else if( a==96){c_1=-1.34;}
    else if( a==97){c_1=-1.334722222;}
    else if( a==98){c_1=-1.331944444;}
    else if( a==99){c_1=-1.328888889;}
    else if( a==100){c_1=-1.325555556;}
    else if( a==101){c_1=-1.321666667;}
    else if( a==102){c_1=-1.317222222;}
    else if( a==103){c_1=-1.3125;}
    else if( a==104){c_1=-1.307222222;}
    else if( a==105){c_1=-1.301666667;}
    else if( a==106){c_1=-1.298333333;}
    else if( a==107){c_1=-1.289166667;}
    else if( a==108){c_1=-1.2825;}
    else if( a==109){c_1=-1.275277778;}
    else if( a==110){c_1=-1.267777778;}
    else if( a==111){c_1=-1.259722222;}
    else if( a==112){c_1=-1.251388889;}
    else if( a==113){c_1=-1.242777778;}
    else if( a==114){c_1=-1.233888889;}
    else if( a==115){c_1=-1.224166667;}
    else if( a==116){c_1=-1.214444444;}
    else if( a==117){c_1=-1.204166667;}
    else if( a==118){c_1=-1.193611111;}
    else if( a==119){c_1=-1.1825;}
    else if( a==120){c_1=-1.171111111;}
    else if( a==121){c_1=-1.159444444;}
    else if( a==122){c_1=-1.1475;}
    else if( a==123){c_1=-1.135;}
    else if( a==124){c_1=-1.122222222;}
    else if( a==125){c_1=-1.108888889;}
    else if( a==126){c_1=-1.095277778;}
    else if( a==127){c_1=-1.081388889;}
    else if( a==128){c_1=-1.067222222;}
    else if( a==129){c_1=-1.052777778;}
    else if( a==130){c_1=-1.038055556;}
    else if( a==131){c_1=-1.023055556;}
    else if( a==132){c_1=-1.0075;}
    else if( a==133){c_1=-0.991666667;}
    else if( a==134){c_1=-0.975555556;}
    else if( a==135){c_1=-0.959166667;}
    else if( a==136){c_1=-0.9425;}
    else if( a==137){c_1=-0.925555556;}
    else if( a==138){c_1=-0.908333333;}
    else if( a==139){c_1=-0.890555556;}
    else if( a==140){c_1=-0.8725;}
    else if( a==141){c_1=-0.854166667;}
    else if( a==142){c_1=-0.835555556;}
    else if( a==143){c_1=-0.816944444;}
    else if( a==144){c_1=-0.798055556;}
    else if( a==145){c_1=-0.778888889;}
    else if( a==146){c_1=-0.759444444;}
    else if( a==147){c_1=-0.739722222;}
    else if( a==148){c_1=-0.72;}
    else if( a==149){c_1=-0.7;}
    else if( a==150){c_1=-0.679722222;}
    else if( a==151){c_1=-0.659166667;}
    else if( a==152){c_1=-0.638333333;}
    else if( a==153){c_1=-0.6175;}
    else if( a==154){c_1=-0.596388889;}
    else if( a==155){c_1=-0.575;}
    else if( a==156){c_1=-0.553611111;}
    else if( a==157){c_1=-0.531944444;}
    else if( a==158){c_1=-0.51;}
    else if( a==159){c_1=-0.487777778;}
    else if( a==160){c_1=-0.465555556;}
    else if( a==161){c_1=-0.443055556;}
    else if( a==162){c_1=-0.420555556;}
    else if( a==163){c_1=-0.398055556;}
    else if( a==164){c_1=-0.375277778;}
    else if( a==165){c_1=-0.3525;}
    else if( a==166){c_1=-0.329444444;}
    else if( a==167){c_1=-0.306388889;}
    else if( a==168){c_1=-0.283055556;}
    else if( a==169){c_1=-0.259722222;}
    else if( a==170){c_1=-0.236388889;}
    else if( a==171){c_1=-0.213055556;}
    else if( a==172){c_1=-0.189444444;}
    else if( a==173){c_1=-0.165833333;}
    else if( a==174){c_1=-0.142222222;}
    else if( a==175){c_1=-0.118611111;}
    else if( a==176){c_1=-0.095;}
    else if( a==177){c_1=-0.071388889;}
    else if( a==178){c_1=-0.0475;}
    else if( a==179){c_1=-0.023888889;}
    else if( a==180){c_1=0;}
    else if( a==181){c_1=0.023888889;}
    else if( a==182){c_1=0.0475;}
    else if( a==183){c_1=0.071388889;}
    else if( a==184){c_1=0.095;}
    else if( a==185){c_1=0.118611111;}
    else if( a==186){c_1=0.142222222;}
    else if( a==187){c_1=0.165833333;}
    else if( a==188){c_1=0.189444444;}
    else if( a==189){c_1=0.213055556;}
    else if( a==190){c_1=0.236388889;}
    else if( a==191){c_1=0.259722222;}
    else if( a==192){c_1=0.283055556;}
    else if( a==193){c_1=0.306388889;}
    else if( a==194){c_1=0.329444444;}
    else if( a==195){c_1=0.3525;}
    else if( a==196){c_1=0.375277778;}
    else if( a==197){c_1=0.398055556;}
    else if( a==198){c_1=0.420555556;}
    else if( a==199){c_1=0.443055556;}
    else if( a==200){c_1=0.465555556;}
    else if( a==201){c_1=0.487777778;}
    else if( a==202){c_1=0.51;}
    else if( a==203){c_1=0.531944444;}
    else if( a==204){c_1=0.553611111;}
    else if( a==205){c_1=0.575;}
    else if( a==206){c_1=0.596388889;}
    else if( a==207){c_1=0.6175;}
    else if( a==208){c_1=0.638333333;}
    else if( a==209){c_1=0.659166667;}
    else if( a==210){c_1=0.679722222;}
    else if( a==211){c_1=0.7;}
    else if( a==212){c_1=0.72;}
    else if( a==213){c_1=0.739722222;}
    else if( a==214){c_1=0.759444444;}
    else if( a==215){c_1=0.778888889;}
    else if( a==216){c_1=0.798055556;}
    else if( a==217){c_1=0.816944444;}
    else if( a==218){c_1=0.835555556;}
    else if( a==219){c_1=0.854166667;}
    else if( a==220){c_1=0.8725;}
    else if( a==221){c_1=0.890555556;}
    else if( a==222){c_1=0.908333333;}
    else if( a==223){c_1=0.925555556;}
    else if( a==224){c_1=0.9425;}
    else if( a==225){c_1=0.959166667;}
    else if( a==226){c_1=0.975555556;}
    else if( a==227){c_1=0.991666667;}
    else if( a==228){c_1=1.0075;}
    else if( a==229){c_1=1.023055556;}
    else if( a==230){c_1=1.038055556;}
    else if( a==231){c_1=1.052777778;}
    else if( a==232){c_1=1.067222222;}
    else if( a==233){c_1=1.081388889;}
    else if( a==234){c_1=1.095277778;}
    else if( a==235){c_1=1.108888889;}
    else if( a==236){c_1=1.122222222;}
    else if( a==237){c_1=1.135;}
    else if( a==238){c_1=1.1475;}
    else if( a==239){c_1=1.159444444;}
    else if( a==240){c_1=1.171111111;}
    else if( a==241){c_1=1.1825;}
    else if( a==242){c_1=1.193611111;}
    else if( a==243){c_1=1.204166667;}
    else if( a==244){c_1=1.214444444;}
    else if( a==245){c_1=1.224166667;}
    else if( a==246){c_1=1.233888889;}
    else if( a==247){c_1=1.242777778;}
    else if( a==248){c_1=1.251388889;}
    else if( a==249){c_1=1.259722222;}
    else if( a==250){c_1=1.267777778;}
    else if( a==251){c_1=1.275277778;}
    else if( a==252){c_1=1.2825;}
    else if( a==253){c_1=1.289166667;}
    else if( a==254){c_1=1.298333333;}
    else if( a==255){c_1=1.301666667;}
    else if( a==256){c_1=1.307222222;}
    else if( a==257){c_1=1.3125;}
    else if( a==258){c_1=1.317222222;}
    else if( a==259){c_1=1.321666667;}
    else if( a==260){c_1=1.325555556;}
    else if( a==261){c_1=1.328888889;}
    else if( a==262){c_1=1.331944444;}
    else if( a==263){c_1=1.334722222;}
    else if( a==264){c_1=1.339166667;}
    else if( a==265){c_1=1.34;}
    else if( a==266){c_1=1.340833333;}
    else if( a==267){c_1=1.341944444;}
    else if( a==268){c_1=1.3425;}
    else if( a==269){c_1=1.342777778;}
    else if( a==270){c_1=1.3425;}
    else if( a==271){c_1=1.341944444;}
    else if( a==272){c_1=1.340833333;}
    else if( a==273){c_1=1.339444444;}
    else if( a==274){c_1=1.337777778;}
    else if( a==275){c_1=1.335833333;}
    else if( a==276){c_1=1.333333333;}
    else if( a==277){c_1=1.330555556;}
    else if( a==278){c_1=1.327222222;}
    else if( a==279){c_1=1.323333333;}
    else if( a==280){c_1=1.318888889;}
    else if( a==281){c_1=1.314166667;}
    else if( a==282){c_1=1.309166667;}
    else if( a==283){c_1=1.303888889;}
    else if( a==284){c_1=1.298055556;}
    else if( a==285){c_1=1.291944444;}
    else if( a==286){c_1=1.285555556;}
    else if( a==287){c_1=1.278611111;}
    else if( a==288){c_1=1.271388889;}
    else if( a==289){c_1=1.263611111;}
    else if( a==290){c_1=1.255277778;}
    else if( a==291){c_1=1.246666667;}
    else if( a==292){c_1=1.237777778;}
    else if( a==293){c_1=1.228611111;}
    else if( a==294){c_1=1.219166667;}
    else if( a==295){c_1=1.209166667;}
    else if( a==296){c_1=1.198888889;}
    else if( a==297){c_1=1.188333333;}
    else if( a==298){c_1=1.177222222;}
    else if( a==299){c_1=1.165833333;}
    else if( a==300){c_1=1.154166667;}
    else if( a==301){c_1=1.142222222;}
    else if( a==302){c_1=1.129722222;}
    else if( a==303){c_1=1.116944444;}
    else if( a==304){c_1=1.103888889;}
    else if( a==305){c_1=1.090555556;}
    else if( a==306){c_1=1.076944444;}
    else if( a==307){c_1=1.062777778;}
    else if( a==308){c_1=1.048333333;}
    else if( a==309){c_1=1.033611111;}
    else if( a==310){c_1=1.018611111;}
    else if( a==311){c_1=1.003333333;}
    else if( a==312){c_1=0.987777778;}
    else if( a==313){c_1=0.971944444;}
    else if( a==314){c_1=0.955833333;}
    else if( a==315){c_1=0.939444444;}
    else if( a==316){c_1=0.922777778;}
    else if( a==317){c_1=0.905833333;}
    else if( a==318){c_1=0.888611111;}
    else if( a==319){c_1=0.871111111;}
    else if( a==320){c_1=0.853333333;}
    else if( a==321){c_1=0.835277778;}
    else if( a==322){c_1=0.816944444;}
    else if( a==323){c_1=0.798333333;}
    else if( a==324){c_1=0.779722222;}
    else if( a==325){c_1=0.760833333;}
    else if( a==326){c_1=0.747222222;}
    else if( a==327){c_1=0.722222222;}
    else if( a==328){c_1=0.7025;}
    else if( a==329){c_1=0.682777778;}
    else if( a==330){c_1=0.662777778;}
    else if( a==331){c_1=0.6425;}
    else if( a==332){c_1=0.621944444;}
    else if( a==333){c_1=0.601388889;}
    else if( a==334){c_1=0.580555556;}
    else if( a==335){c_1=0.559722222;}
    else if( a==336){c_1=0.538611111;}
    else if( a==337){c_1=0.517222222;}
    else if( a==338){c_1=0.495833333;}
    else if( a==339){c_1=0.474444444;}
    else if( a==340){c_1=0.452777778;}
    else if( a==341){c_1=0.430833333;}
    else if( a==342){c_1=0.408888889;}
    else if( a==343){c_1=0.386944444;}
    else if( a==344){c_1=0.364722222;}
    else if( a==345){c_1=0.3425;}
    else if( a==346){c_1=0.32;}
    else if( a==347){c_1=0.2975;}
    else if( a==348){c_1=0.275;}
    else if( a==349){c_1=0.2525;}
    else if( a==350){c_1=0.229722222;}
    else if( a==351){c_1=0.206944444;}
    else if( a==352){c_1=0.184166667;}
    else if( a==353){c_1=0.161111111;}
    else if( a==354){c_1=0.138333333;}
    else if( a==355){c_1=0.115277778;}
    else if( a==356){c_1=0.092222222;}
    else if( a==357){c_1=0.069166667;}
    else if( a==358){c_1=0.046111111;}
    else if( a==359){c_1=0.023055556;}
    else if( a==360){c_1=0;}
    else if( a==361){c_1=-0.023055556;}
    else {c_1=99999999999999;}
    
    
    var c_2
    
    if( a+1==0){c_2=0;}
    else if( a+1==1){c_2=-0.023055556;}
    else if( a+1==2){c_2=-0.046111111;}
    else if( a+1==3){c_2=-0.069166667;}
    else if( a+1==4){c_2=-0.092222222;}
    else if( a+1==5){c_2=-0.115277778;}
    else if( a+1==6){c_2=-0.138333333;}
    else if( a+1==7){c_2=-0.161111111;}
    else if( a+1==8){c_2=-0.184166667;}
    else if( a+1==9){c_2=-0.206944444;}
    else if( a+1==10){c_2=-0.229722222;}
    else if( a+1==11){c_2=-0.2525;}
    else if( a+1==12){c_2=-0.275;}
    else if( a+1==13){c_2=-0.2975;}
    else if( a+1==14){c_2=-0.32;}
    else if( a+1==15){c_2=-0.3425;}
    else if( a+1==16){c_2=-0.364722222;}
    else if( a+1==17){c_2=-0.386944444;}
    else if( a+1==18){c_2=-0.408888889;}
    else if( a+1==19){c_2=-0.430833333;}
    else if( a+1==20){c_2=-0.452777778;}
    else if( a+1==21){c_2=-0.474444444;}
    else if( a+1==22){c_2=-0.495833333;}
    else if( a+1==23){c_2=-0.517222222;}
    else if( a+1==24){c_2=-0.538611111;}
    else if( a+1==25){c_2=-0.559722222;}
    else if( a+1==26){c_2=-0.580555556;}
    else if( a+1==27){c_2=-0.601388889;}
    else if( a+1==28){c_2=-0.621944444;}
    else if( a+1==29){c_2=-0.6425;}
    else if( a+1==30){c_2=-0.662777778;}
    else if( a+1==31){c_2=-0.682777778;}
    else if( a+1==32){c_2=-0.7025;}
    else if( a+1==33){c_2=-0.722222222;}
    else if( a+1==34){c_2=-0.747222222;}
    else if( a+1==35){c_2=-0.760833333;}
    else if( a+1==36){c_2=-0.779722222;}
    else if( a+1==37){c_2=-0.798333333;}
    else if( a+1==38){c_2=-0.816944444;}
    else if( a+1==39){c_2=-0.835277778;}
    else if( a+1==40){c_2=-0.853333333;}
    else if( a+1==41){c_2=-0.871111111;}
    else if( a+1==42){c_2=-0.888611111;}
    else if( a+1==43){c_2=-0.905833333;}
    else if( a+1==44){c_2=-0.922777778;}
    else if( a+1==45){c_2=-0.939444444;}
    else if( a+1==46){c_2=-0.955833333;}
    else if( a+1==47){c_2=-0.971944444;}
    else if( a+1==48){c_2=-0.987777778;}
    else if( a+1==49){c_2=-1.003333333;}
    else if( a+1==50){c_2=-1.018611111;}
    else if( a+1==51){c_2=-1.033611111;}
    else if( a+1==52){c_2=-1.048333333;}
    else if( a+1==53){c_2=-1.062777778;}
    else if( a+1==54){c_2=-1.076944444;}
    else if( a+1==55){c_2=-1.090555556;}
    else if( a+1==56){c_2=-1.103888889;}
    else if( a+1==57){c_2=-1.116944444;}
    else if( a+1==58){c_2=-1.129722222;}
    else if( a+1==59){c_2=-1.142222222;}
    else if( a+1==60){c_2=-1.154166667;}
    else if( a+1==61){c_2=-1.165833333;}
    else if( a+1==62){c_2=-1.177222222;}
    else if( a+1==63){c_2=-1.188333333;}
    else if( a+1==64){c_2=-1.198888889;}
    else if( a+1==65){c_2=-1.209166667;}
    else if( a+1==66){c_2=-1.219166667;}
    else if( a+1==67){c_2=-1.228611111;}
    else if( a+1==68){c_2=-1.237777778;}
    else if( a+1==69){c_2=-1.246666667;}
    else if( a+1==70){c_2=-1.255277778;}
    else if( a+1==71){c_2=-1.263611111;}
    else if( a+1==72){c_2=-1.271388889;}
    else if( a+1==73){c_2=-1.278611111;}
    else if( a+1==74){c_2=-1.285555556;}
    else if( a+1==75){c_2=-1.291944444;}
    else if( a+1==76){c_2=-1.298055556;}
    else if( a+1==77){c_2=-1.303888889;}
    else if( a+1==78){c_2=-1.309166667;}
    else if( a+1==79){c_2=-1.314166667;}
    else if( a+1==80){c_2=-1.318888889;}
    else if( a+1==81){c_2=-1.323333333;}
    else if( a+1==82){c_2=-1.327222222;}
    else if( a+1==83){c_2=-1.330555556;}
    else if( a+1==84){c_2=-1.333333333;}
    else if( a+1==85){c_2=-1.335833333;}
    else if( a+1==86){c_2=-1.337777778;}
    else if( a+1==87){c_2=-1.339444444;}
    else if( a+1==88){c_2=-1.340833333;}
    else if( a+1==89){c_2=-1.341944444;}
    else if( a+1==90){c_2=-1.3425;}
    else if( a+1==91){c_2=-1.342777778;}
    else if( a+1==92){c_2=-1.3425;}
    else if( a+1==93){c_2=-1.341944444;}
    else if( a+1==94){c_2=-1.340833333;}
    else if( a+1==95){c_2=-1.339166667;}
    else if( a+1==96){c_2=-1.34;}
    else if( a+1==97){c_2=-1.334722222;}
    else if( a+1==98){c_2=-1.331944444;}
    else if( a+1==99){c_2=-1.328888889;}
    else if( a+1==100){c_2=-1.325555556;}
    else if( a+1==101){c_2=-1.321666667;}
    else if( a+1==102){c_2=-1.317222222;}
    else if( a+1==103){c_2=-1.3125;}
    else if( a+1==104){c_2=-1.307222222;}
    else if( a+1==105){c_2=-1.301666667;}
    else if( a+1==106){c_2=-1.298333333;}
    else if( a+1==107){c_2=-1.289166667;}
    else if( a+1==108){c_2=-1.2825;}
    else if( a+1==109){c_2=-1.275277778;}
    else if( a+1==110){c_2=-1.267777778;}
    else if( a+1==111){c_2=-1.259722222;}
    else if( a+1==112){c_2=-1.251388889;}
    else if( a+1==113){c_2=-1.242777778;}
    else if( a+1==114){c_2=-1.233888889;}
    else if( a+1==115){c_2=-1.224166667;}
    else if( a+1==116){c_2=-1.214444444;}
    else if( a+1==117){c_2=-1.204166667;}
    else if( a+1==118){c_2=-1.193611111;}
    else if( a+1==119){c_2=-1.1825;}
    else if( a+1==120){c_2=-1.171111111;}
    else if( a+1==121){c_2=-1.159444444;}
    else if( a+1==122){c_2=-1.1475;}
    else if( a+1==123){c_2=-1.135;}
    else if( a+1==124){c_2=-1.122222222;}
    else if( a+1==125){c_2=-1.108888889;}
    else if( a+1==126){c_2=-1.095277778;}
    else if( a+1==127){c_2=-1.081388889;}
    else if( a+1==128){c_2=-1.067222222;}
    else if( a+1==129){c_2=-1.052777778;}
    else if( a+1==130){c_2=-1.038055556;}
    else if( a+1==131){c_2=-1.023055556;}
    else if( a+1==132){c_2=-1.0075;}
    else if( a+1==133){c_2=-0.991666667;}
    else if( a+1==134){c_2=-0.975555556;}
    else if( a+1==135){c_2=-0.959166667;}
    else if( a+1==136){c_2=-0.9425;}
    else if( a+1==137){c_2=-0.925555556;}
    else if( a+1==138){c_2=-0.908333333;}
    else if( a+1==139){c_2=-0.890555556;}
    else if( a+1==140){c_2=-0.8725;}
    else if( a+1==141){c_2=-0.854166667;}
    else if( a+1==142){c_2=-0.835555556;}
    else if( a+1==143){c_2=-0.816944444;}
    else if( a+1==144){c_2=-0.798055556;}
    else if( a+1==145){c_2=-0.778888889;}
    else if( a+1==146){c_2=-0.759444444;}
    else if( a+1==147){c_2=-0.739722222;}
    else if( a+1==148){c_2=-0.72;}
    else if( a+1==149){c_2=-0.7;}
    else if( a+1==150){c_2=-0.679722222;}
    else if( a+1==151){c_2=-0.659166667;}
    else if( a+1==152){c_2=-0.638333333;}
    else if( a+1==153){c_2=-0.6175;}
    else if( a+1==154){c_2=-0.596388889;}
    else if( a+1==155){c_2=-0.575;}
    else if( a+1==156){c_2=-0.553611111;}
    else if( a+1==157){c_2=-0.531944444;}
    else if( a+1==158){c_2=-0.51;}
    else if( a+1==159){c_2=-0.487777778;}
    else if( a+1==160){c_2=-0.465555556;}
    else if( a+1==161){c_2=-0.443055556;}
    else if( a+1==162){c_2=-0.420555556;}
    else if( a+1==163){c_2=-0.398055556;}
    else if( a+1==164){c_2=-0.375277778;}
    else if( a+1==165){c_2=-0.3525;}
    else if( a+1==166){c_2=-0.329444444;}
    else if( a+1==167){c_2=-0.306388889;}
    else if( a+1==168){c_2=-0.283055556;}
    else if( a+1==169){c_2=-0.259722222;}
    else if( a+1==170){c_2=-0.236388889;}
    else if( a+1==171){c_2=-0.213055556;}
    else if( a+1==172){c_2=-0.189444444;}
    else if( a+1==173){c_2=-0.165833333;}
    else if( a+1==174){c_2=-0.142222222;}
    else if( a+1==175){c_2=-0.118611111;}
    else if( a+1==176){c_2=-0.095;}
    else if( a+1==177){c_2=-0.071388889;}
    else if( a+1==178){c_2=-0.0475;}
    else if( a+1==179){c_2=-0.023888889;}
    else if( a+1==180){c_2=0;}
    else if( a+1==181){c_2=0.023888889;}
    else if( a+1==182){c_2=0.0475;}
    else if( a+1==183){c_2=0.071388889;}
    else if( a+1==184){c_2=0.095;}
    else if( a+1==185){c_2=0.118611111;}
    else if( a+1==186){c_2=0.142222222;}
    else if( a+1==187){c_2=0.165833333;}
    else if( a+1==188){c_2=0.189444444;}
    else if( a+1==189){c_2=0.213055556;}
    else if( a+1==190){c_2=0.236388889;}
    else if( a+1==191){c_2=0.259722222;}
    else if( a+1==192){c_2=0.283055556;}
    else if( a+1==193){c_2=0.306388889;}
    else if( a+1==194){c_2=0.329444444;}
    else if( a+1==195){c_2=0.3525;}
    else if( a+1==196){c_2=0.375277778;}
    else if( a+1==197){c_2=0.398055556;}
    else if( a+1==198){c_2=0.420555556;}
    else if( a+1==199){c_2=0.443055556;}
    else if( a+1==200){c_2=0.465555556;}
    else if( a+1==201){c_2=0.487777778;}
    else if( a+1==202){c_2=0.51;}
    else if( a+1==203){c_2=0.531944444;}
    else if( a+1==204){c_2=0.553611111;}
    else if( a+1==205){c_2=0.575;}
    else if( a+1==206){c_2=0.596388889;}
    else if( a+1==207){c_2=0.6175;}
    else if( a+1==208){c_2=0.638333333;}
    else if( a+1==209){c_2=0.659166667;}
    else if( a+1==210){c_2=0.679722222;}
    else if( a+1==211){c_2=0.7;}
    else if( a+1==212){c_2=0.72;}
    else if( a+1==213){c_2=0.739722222;}
    else if( a+1==214){c_2=0.759444444;}
    else if( a+1==215){c_2=0.778888889;}
    else if( a+1==216){c_2=0.798055556;}
    else if( a+1==217){c_2=0.816944444;}
    else if( a+1==218){c_2=0.835555556;}
    else if( a+1==219){c_2=0.854166667;}
    else if( a+1==220){c_2=0.8725;}
    else if( a+1==221){c_2=0.890555556;}
    else if( a+1==222){c_2=0.908333333;}
    else if( a+1==223){c_2=0.925555556;}
    else if( a+1==224){c_2=0.9425;}
    else if( a+1==225){c_2=0.959166667;}
    else if( a+1==226){c_2=0.975555556;}
    else if( a+1==227){c_2=0.991666667;}
    else if( a+1==228){c_2=1.0075;}
    else if( a+1==229){c_2=1.023055556;}
    else if( a+1==230){c_2=1.038055556;}
    else if( a+1==231){c_2=1.052777778;}
    else if( a+1==232){c_2=1.067222222;}
    else if( a+1==233){c_2=1.081388889;}
    else if( a+1==234){c_2=1.095277778;}
    else if( a+1==235){c_2=1.108888889;}
    else if( a+1==236){c_2=1.122222222;}
    else if( a+1==237){c_2=1.135;}
    else if( a+1==238){c_2=1.1475;}
    else if( a+1==239){c_2=1.159444444;}
    else if( a+1==240){c_2=1.171111111;}
    else if( a+1==241){c_2=1.1825;}
    else if( a+1==242){c_2=1.193611111;}
    else if( a+1==243){c_2=1.204166667;}
    else if( a+1==244){c_2=1.214444444;}
    else if( a+1==245){c_2=1.224166667;}
    else if( a+1==246){c_2=1.233888889;}
    else if( a+1==247){c_2=1.242777778;}
    else if( a+1==248){c_2=1.251388889;}
    else if( a+1==249){c_2=1.259722222;}
    else if( a+1==250){c_2=1.267777778;}
    else if( a+1==251){c_2=1.275277778;}
    else if( a+1==252){c_2=1.2825;}
    else if( a+1==253){c_2=1.289166667;}
    else if( a+1==254){c_2=1.298333333;}
    else if( a+1==255){c_2=1.301666667;}
    else if( a+1==256){c_2=1.307222222;}
    else if( a+1==257){c_2=1.3125;}
    else if( a+1==258){c_2=1.317222222;}
    else if( a+1==259){c_2=1.321666667;}
    else if( a+1==260){c_2=1.325555556;}
    else if( a+1==261){c_2=1.328888889;}
    else if( a+1==262){c_2=1.331944444;}
    else if( a+1==263){c_2=1.334722222;}
    else if( a+1==264){c_2=1.339166667;}
    else if( a+1==265){c_2=1.34;}
    else if( a+1==266){c_2=1.340833333;}
    else if( a+1==267){c_2=1.341944444;}
    else if( a+1==268){c_2=1.3425;}
    else if( a+1==269){c_2=1.342777778;}
    else if( a+1==270){c_2=1.3425;}
    else if( a+1==271){c_2=1.341944444;}
    else if( a+1==272){c_2=1.340833333;}
    else if( a+1==273){c_2=1.339444444;}
    else if( a+1==274){c_2=1.337777778;}
    else if( a+1==275){c_2=1.335833333;}
    else if( a+1==276){c_2=1.333333333;}
    else if( a+1==277){c_2=1.330555556;}
    else if( a+1==278){c_2=1.327222222;}
    else if( a+1==279){c_2=1.323333333;}
    else if( a+1==280){c_2=1.318888889;}
    else if( a+1==281){c_2=1.314166667;}
    else if( a+1==282){c_2=1.309166667;}
    else if( a+1==283){c_2=1.303888889;}
    else if( a+1==284){c_2=1.298055556;}
    else if( a+1==285){c_2=1.291944444;}
    else if( a+1==286){c_2=1.285555556;}
    else if( a+1==287){c_2=1.278611111;}
    else if( a+1==288){c_2=1.271388889;}
    else if( a+1==289){c_2=1.263611111;}
    else if( a+1==290){c_2=1.255277778;}
    else if( a+1==291){c_2=1.246666667;}
    else if( a+1==292){c_2=1.237777778;}
    else if( a+1==293){c_2=1.228611111;}
    else if( a+1==294){c_2=1.219166667;}
    else if( a+1==295){c_2=1.209166667;}
    else if( a+1==296){c_2=1.198888889;}
    else if( a+1==297){c_2=1.188333333;}
    else if( a+1==298){c_2=1.177222222;}
    else if( a+1==299){c_2=1.165833333;}
    else if( a+1==300){c_2=1.154166667;}
    else if( a+1==301){c_2=1.142222222;}
    else if( a+1==302){c_2=1.129722222;}
    else if( a+1==303){c_2=1.116944444;}
    else if( a+1==304){c_2=1.103888889;}
    else if( a+1==305){c_2=1.090555556;}
    else if( a+1==306){c_2=1.076944444;}
    else if( a+1==307){c_2=1.062777778;}
    else if( a+1==308){c_2=1.048333333;}
    else if( a+1==309){c_2=1.033611111;}
    else if( a+1==310){c_2=1.018611111;}
    else if( a+1==311){c_2=1.003333333;}
    else if( a+1==312){c_2=0.987777778;}
    else if( a+1==313){c_2=0.971944444;}
    else if( a+1==314){c_2=0.955833333;}
    else if( a+1==315){c_2=0.939444444;}
    else if( a+1==316){c_2=0.922777778;}
    else if( a+1==317){c_2=0.905833333;}
    else if( a+1==318){c_2=0.888611111;}
    else if( a+1==319){c_2=0.871111111;}
    else if( a+1==320){c_2=0.853333333;}
    else if( a+1==321){c_2=0.835277778;}
    else if( a+1==322){c_2=0.816944444;}
    else if( a+1==323){c_2=0.798333333;}
    else if( a+1==324){c_2=0.779722222;}
    else if( a+1==325){c_2=0.760833333;}
    else if( a+1==326){c_2=0.747222222;}
    else if( a+1==327){c_2=0.722222222;}
    else if( a+1==328){c_2=0.7025;}
    else if( a+1==329){c_2=0.682777778;}
    else if( a+1==330){c_2=0.662777778;}
    else if( a+1==331){c_2=0.6425;}
    else if( a+1==332){c_2=0.621944444;}
    else if( a+1==333){c_2=0.601388889;}
    else if( a+1==334){c_2=0.580555556;}
    else if( a+1==335){c_2=0.559722222;}
    else if( a+1==336){c_2=0.538611111;}
    else if( a+1==337){c_2=0.517222222;}
    else if( a+1==338){c_2=0.495833333;}
    else if( a+1==339){c_2=0.474444444;}
    else if( a+1==340){c_2=0.452777778;}
    else if( a+1==341){c_2=0.430833333;}
    else if( a+1==342){c_2=0.408888889;}
    else if( a+1==343){c_2=0.386944444;}
    else if( a+1==344){c_2=0.364722222;}
    else if( a+1==345){c_2=0.3425;}
    else if( a+1==346){c_2=0.32;}
    else if( a+1==347){c_2=0.2975;}
    else if( a+1==348){c_2=0.275;}
    else if( a+1==349){c_2=0.2525;}
    else if( a+1==350){c_2=0.229722222;}
    else if( a+1==351){c_2=0.206944444;}
    else if( a+1==352){c_2=0.184166667;}
    else if( a+1==353){c_2=0.161111111;}
    else if( a+1==354){c_2=0.138333333;}
    else if( a+1==355){c_2=0.115277778;}
    else if( a+1==356){c_2=0.092222222;}
    else if( a+1==357){c_2=0.069166667;}
    else if( a+1==358){c_2=0.046111111;}
    else if( a+1==359){c_2=0.023055556;}
    else if( a+1==360){c_2=0;}
    else if( a+1==361){c_2=-0.023055556;}
    else {c_2=99999999999999;}
    
    
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var tdlc1d1 = ftdlc1d1(intdalil2, dalil2);
    
    var kwq_2 = MOD(kwq_1+tdlc1d1+360,360);
    var kkq_2 = MOD(kkq_1+tdlc1d1+360,360);
    
    
    
    var ftdld2 = function (a,b){
    
    var c_1
    if( a==0){c_1=0;}
    else if( a==1){c_1=0.006666667;}
    else if( a==2){c_1=0.010833333;}
    else if( a==3){c_1=0.020277778;}
    else if( a==4){c_1=0.026944444;}
    else if( a==5){c_1=0.033611111;}
    else if( a==6){c_1=0.040277778;}
    else if( a==7){c_1=0.046666667;}
    else if( a==8){c_1=0.053333333;}
    else if( a==9){c_1=0.06;}
    else if( a==10){c_1=0.066388889;}
    else if( a==11){c_1=0.073055556;}
    else if( a==12){c_1=0.079722222;}
    else if( a==13){c_1=0.086388889;}
    else if( a==14){c_1=0.092777778;}
    else if( a==15){c_1=0.099166667;}
    else if( a==16){c_1=0.105555556;}
    else if( a==17){c_1=0.111944444;}
    else if( a==18){c_1=0.118333333;}
    else if( a==19){c_1=0.124722222;}
    else if( a==20){c_1=0.131111111;}
    else if( a==21){c_1=0.137222222;}
    else if( a==22){c_1=0.140833333;}
    else if( a==23){c_1=0.149722222;}
    else if( a==24){c_1=0.155833333;}
    else if( a==25){c_1=0.161944444;}
    else if( a==26){c_1=0.168055556;}
    else if( a==27){c_1=0.174166667;}
    else if( a==28){c_1=0.18;}
    else if( a==29){c_1=0.186111111;}
    else if( a==30){c_1=0.191944444;}
    else if( a==31){c_1=0.197777778;}
    else if( a==32){c_1=0.203333333;}
    else if( a==33){c_1=0.209166667;}
    else if( a==34){c_1=0.214722222;}
    else if( a==35){c_1=0.220277778;}
    else if( a==36){c_1=0.225555556;}
    else if( a==37){c_1=0.231111111;}
    else if( a==38){c_1=0.236388889;}
    else if( a==39){c_1=0.241666667;}
    else if( a==40){c_1=0.246944444;}
    else if( a==41){c_1=0.252222222;}
    else if( a==42){c_1=0.257222222;}
    else if( a==43){c_1=0.262222222;}
    else if( a==44){c_1=0.266944444;}
    else if( a==45){c_1=0.271388889;}
    else if( a==46){c_1=0.276388889;}
    else if( a==47){c_1=0.280833333;}
    else if( a==48){c_1=0.285555556;}
    else if( a==49){c_1=0.29;}
    else if( a==50){c_1=0.294444444;}
    else if( a==51){c_1=0.298055556;}
    else if( a==52){c_1=0.302777778;}
    else if( a==53){c_1=0.307222222;}
    else if( a==54){c_1=0.311111111;}
    else if( a==55){c_1=0.315;}
    else if( a==56){c_1=0.318611111;}
    else if( a==57){c_1=0.3225;}
    else if( a==58){c_1=0.326388889;}
    else if( a==59){c_1=0.328611111;}
    else if( a==60){c_1=0.333611111;}
    else if( a==61){c_1=0.336944444;}
    else if( a==62){c_1=0.34;}
    else if( a==63){c_1=0.343333333;}
    else if( a==64){c_1=0.346388889;}
    else if( a==65){c_1=0.349166667;}
    else if( a==66){c_1=0.351944444;}
    else if( a==67){c_1=0.354444444;}
    else if( a==68){c_1=0.357222222;}
    else if( a==69){c_1=0.359722222;}
    else if( a==70){c_1=0.362222222;}
    else if( a==71){c_1=0.364444444;}
    else if( a==72){c_1=0.366666667;}
    else if( a==73){c_1=0.368611111;}
    else if( a==74){c_1=0.370833333;}
    else if( a==75){c_1=0.372777778;}
    else if( a==76){c_1=0.374444444;}
    else if( a==77){c_1=0.376111111;}
    else if( a==78){c_1=0.3775;}
    else if( a==79){c_1=0.378888889;}
    else if( a==80){c_1=0.380277778;}
    else if( a==81){c_1=0.381388889;}
    else if( a==82){c_1=0.3825;}
    else if( a==83){c_1=0.383333333;}
    else if( a==84){c_1=0.384166667;}
    else if( a==85){c_1=0.385;}
    else if( a==86){c_1=0.385555556;}
    else if( a==87){c_1=0.386111111;}
    else if( a==88){c_1=0.386388889;}
    else if( a==89){c_1=0.386388889;}
    else if( a==90){c_1=0.386666667;}
    else if( a==91){c_1=0.386666667;}
    else if( a==92){c_1=0.386388889;}
    else if( a==93){c_1=0.386111111;}
    else if( a==94){c_1=0.385833333;}
    else if( a==95){c_1=0.385277778;}
    else if( a==96){c_1=0.384722222;}
    else if( a==97){c_1=0.383888889;}
    else if( a==98){c_1=0.383055556;}
    else if( a==99){c_1=0.382222222;}
    else if( a==100){c_1=0.381388889;}
    else if( a==101){c_1=0.380277778;}
    else if( a==102){c_1=0.378888889;}
    else if( a==103){c_1=0.3775;}
    else if( a==104){c_1=0.376111111;}
    else if( a==105){c_1=0.374444444;}
    else if( a==106){c_1=0.3725;}
    else if( a==107){c_1=0.370555556;}
    else if( a==108){c_1=0.368611111;}
    else if( a==109){c_1=0.366666667;}
    else if( a==110){c_1=0.364444444;}
    else if( a==111){c_1=0.362222222;}
    else if( a==112){c_1=0.359722222;}
    else if( a==113){c_1=0.357222222;}
    else if( a==114){c_1=0.354444444;}
    else if( a==115){c_1=0.351666667;}
    else if( a==116){c_1=0.348888889;}
    else if( a==117){c_1=0.345833333;}
    else if( a==118){c_1=0.342777778;}
    else if( a==119){c_1=0.339722222;}
    else if( a==120){c_1=0.336388889;}
    else if( a==121){c_1=0.333055556;}
    else if( a==122){c_1=0.329444444;}
    else if( a==123){c_1=0.325833333;}
    else if( a==124){c_1=0.322222222;}
    else if( a==125){c_1=0.318333333;}
    else if( a==126){c_1=0.314444444;}
    else if( a==127){c_1=0.310277778;}
    else if( a==128){c_1=0.306111111;}
    else if( a==129){c_1=0.301944444;}
    else if( a==130){c_1=0.297777778;}
    else if( a==131){c_1=0.293333333;}
    else if( a==132){c_1=0.288888889;}
    else if( a==133){c_1=0.284444444;}
    else if( a==134){c_1=0.279722222;}
    else if( a==135){c_1=0.275;}
    else if( a==136){c_1=0.27;}
    else if( a==137){c_1=0.265;}
    else if( a==138){c_1=0.26;}
    else if( a==139){c_1=0.255;}
    else if( a==140){c_1=0.25;}
    else if( a==141){c_1=0.244722222;}
    else if( a==142){c_1=0.239444444;}
    else if( a==143){c_1=0.234166667;}
    else if( a==144){c_1=0.228888889;}
    else if( a==145){c_1=0.223333333;}
    else if( a==146){c_1=0.217777778;}
    else if( a==147){c_1=0.212222222;}
    else if( a==148){c_1=0.206388889;}
    else if( a==149){c_1=0.200555556;}
    else if( a==150){c_1=0.194722222;}
    else if( a==151){c_1=0.188888889;}
    else if( a==152){c_1=0.183055556;}
    else if( a==153){c_1=0.176944444;}
    else if( a==154){c_1=0.170833333;}
    else if( a==155){c_1=0.164722222;}
    else if( a==156){c_1=0.158611111;}
    else if( a==157){c_1=0.1525;}
    else if( a==158){c_1=0.146111111;}
    else if( a==159){c_1=0.139722222;}
    else if( a==160){c_1=0.133333333;}
    else if( a==161){c_1=0.126944444;}
    else if( a==162){c_1=0.120277778;}
    else if( a==163){c_1=0.113888889;}
    else if( a==164){c_1=0.1075;}
    else if( a==165){c_1=0.100833333;}
    else if( a==166){c_1=0.094444444;}
    else if( a==167){c_1=0.087777778;}
    else if( a==168){c_1=0.081111111;}
    else if( a==169){c_1=0.074444444;}
    else if( a==170){c_1=0.067777778;}
    else if( a==171){c_1=0.061111111;}
    else if( a==172){c_1=0.054444444;}
    else if( a==173){c_1=0.0475;}
    else if( a==174){c_1=0.040833333;}
    else if( a==175){c_1=0.033888889;}
    else if( a==176){c_1=0.027222222;}
    else if( a==177){c_1=0.020555556;}
    else if( a==178){c_1=0.013611111;}
    else if( a==179){c_1=0.006944444;}
    else if( a==180){c_1=0;}
    else if( a==181){c_1=-0.006944444;}
    else if( a==182){c_1=-0.013611111;}
    else if( a==183){c_1=-0.020555556;}
    else if( a==184){c_1=-0.027222222;}
    else if( a==185){c_1=-0.033888889;}
    else if( a==186){c_1=-0.040833333;}
    else if( a==187){c_1=-0.0475;}
    else if( a==188){c_1=-0.054444444;}
    else if( a==189){c_1=-0.061111111;}
    else if( a==190){c_1=-0.067777778;}
    else if( a==191){c_1=-0.074444444;}
    else if( a==192){c_1=-0.081111111;}
    else if( a==193){c_1=-0.087777778;}
    else if( a==194){c_1=-0.094444444;}
    else if( a==195){c_1=-0.100833333;}
    else if( a==196){c_1=-0.1075;}
    else if( a==197){c_1=-0.113888889;}
    else if( a==198){c_1=-0.120277778;}
    else if( a==199){c_1=-0.126944444;}
    else if( a==200){c_1=-0.133333333;}
    else if( a==201){c_1=-0.139722222;}
    else if( a==202){c_1=-0.146111111;}
    else if( a==203){c_1=-0.1525;}
    else if( a==204){c_1=-0.158611111;}
    else if( a==205){c_1=-0.164722222;}
    else if( a==206){c_1=-0.170833333;}
    else if( a==207){c_1=-0.176944444;}
    else if( a==208){c_1=-0.183055556;}
    else if( a==209){c_1=-0.188888889;}
    else if( a==210){c_1=-0.194722222;}
    else if( a==211){c_1=-0.200555556;}
    else if( a==212){c_1=-0.206388889;}
    else if( a==213){c_1=-0.212222222;}
    else if( a==214){c_1=-0.217777778;}
    else if( a==215){c_1=-0.223333333;}
    else if( a==216){c_1=-0.228888889;}
    else if( a==217){c_1=-0.234166667;}
    else if( a==218){c_1=-0.239444444;}
    else if( a==219){c_1=-0.244722222;}
    else if( a==220){c_1=-0.25;}
    else if( a==221){c_1=-0.255;}
    else if( a==222){c_1=-0.26;}
    else if( a==223){c_1=-0.265;}
    else if( a==224){c_1=-0.27;}
    else if( a==225){c_1=-0.275;}
    else if( a==226){c_1=-0.279722222;}
    else if( a==227){c_1=-0.284444444;}
    else if( a==228){c_1=-0.288888889;}
    else if( a==229){c_1=-0.293333333;}
    else if( a==230){c_1=-0.297777778;}
    else if( a==231){c_1=-0.301944444;}
    else if( a==232){c_1=-0.306111111;}
    else if( a==233){c_1=-0.310277778;}
    else if( a==234){c_1=-0.314444444;}
    else if( a==235){c_1=-0.318333333;}
    else if( a==236){c_1=-0.322222222;}
    else if( a==237){c_1=-0.325833333;}
    else if( a==238){c_1=-0.329444444;}
    else if( a==239){c_1=-0.333055556;}
    else if( a==240){c_1=-0.336388889;}
    else if( a==241){c_1=-0.339722222;}
    else if( a==242){c_1=-0.342777778;}
    else if( a==243){c_1=-0.345833333;}
    else if( a==244){c_1=-0.348888889;}
    else if( a==245){c_1=-0.351666667;}
    else if( a==246){c_1=-0.354444444;}
    else if( a==247){c_1=-0.357222222;}
    else if( a==248){c_1=-0.359722222;}
    else if( a==249){c_1=-0.362222222;}
    else if( a==250){c_1=-0.364444444;}
    else if( a==251){c_1=-0.366666667;}
    else if( a==252){c_1=-0.368611111;}
    else if( a==253){c_1=-0.370555556;}
    else if( a==254){c_1=-0.3725;}
    else if( a==255){c_1=-0.374444444;}
    else if( a==256){c_1=-0.376111111;}
    else if( a==257){c_1=-0.3775;}
    else if( a==258){c_1=-0.378888889;}
    else if( a==259){c_1=-0.380277778;}
    else if( a==260){c_1=-0.381388889;}
    else if( a==261){c_1=-0.382222222;}
    else if( a==262){c_1=-0.383055556;}
    else if( a==263){c_1=-0.383888889;}
    else if( a==264){c_1=-0.384722222;}
    else if( a==265){c_1=-0.385277778;}
    else if( a==266){c_1=-0.385833333;}
    else if( a==267){c_1=-0.386111111;}
    else if( a==268){c_1=-0.386388889;}
    else if( a==269){c_1=-0.386666667;}
    else if( a==270){c_1=-0.386666667;}
    else if( a==271){c_1=-0.386388889;}
    else if( a==272){c_1=-0.386388889;}
    else if( a==273){c_1=-0.386111111;}
    else if( a==274){c_1=-0.385555556;}
    else if( a==275){c_1=-0.385;}
    else if( a==276){c_1=-0.384166667;}
    else if( a==277){c_1=-0.383333333;}
    else if( a==278){c_1=-0.3825;}
    else if( a==279){c_1=-0.381388889;}
    else if( a==280){c_1=-0.380277778;}
    else if( a==281){c_1=-0.378888889;}
    else if( a==282){c_1=-0.3775;}
    else if( a==283){c_1=-0.376111111;}
    else if( a==284){c_1=-0.374444444;}
    else if( a==285){c_1=-0.372777778;}
    else if( a==286){c_1=-0.370833333;}
    else if( a==287){c_1=-0.368611111;}
    else if( a==288){c_1=-0.366666667;}
    else if( a==289){c_1=-0.364444444;}
    else if( a==290){c_1=-0.362222222;}
    else if( a==291){c_1=-0.359722222;}
    else if( a==292){c_1=-0.357222222;}
    else if( a==293){c_1=-0.354444444;}
    else if( a==294){c_1=-0.351944444;}
    else if( a==295){c_1=-0.349166667;}
    else if( a==296){c_1=-0.346388889;}
    else if( a==297){c_1=-0.343333333;}
    else if( a==298){c_1=-0.34;}
    else if( a==299){c_1=-0.336944444;}
    else if( a==300){c_1=-0.333611111;}
    else if( a==301){c_1=-0.328611111;}
    else if( a==302){c_1=-0.326388889;}
    else if( a==303){c_1=-0.3225;}
    else if( a==304){c_1=-0.318611111;}
    else if( a==305){c_1=-0.315;}
    else if( a==306){c_1=-0.311111111;}
    else if( a==307){c_1=-0.307222222;}
    else if( a==308){c_1=-0.302777778;}
    else if( a==309){c_1=-0.298055556;}
    else if( a==310){c_1=-0.294444444;}
    else if( a==311){c_1=-0.29;}
    else if( a==312){c_1=-0.285555556;}
    else if( a==313){c_1=-0.280833333;}
    else if( a==314){c_1=-0.276388889;}
    else if( a==315){c_1=-0.271388889;}
    else if( a==316){c_1=-0.266944444;}
    else if( a==317){c_1=-0.262222222;}
    else if( a==318){c_1=-0.257222222;}
    else if( a==319){c_1=-0.252222222;}
    else if( a==320){c_1=-0.246944444;}
    else if( a==321){c_1=-0.241666667;}
    else if( a==322){c_1=-0.236388889;}
    else if( a==323){c_1=-0.231111111;}
    else if( a==324){c_1=-0.225555556;}
    else if( a==325){c_1=-0.220277778;}
    else if( a==326){c_1=-0.214722222;}
    else if( a==327){c_1=-0.209166667;}
    else if( a==328){c_1=-0.203333333;}
    else if( a==329){c_1=-0.197777778;}
    else if( a==330){c_1=-0.191944444;}
    else if( a==331){c_1=-0.186111111;}
    else if( a==332){c_1=-0.18;}
    else if( a==333){c_1=-0.174166667;}
    else if( a==334){c_1=-0.168055556;}
    else if( a==335){c_1=-0.161944444;}
    else if( a==336){c_1=-0.155833333;}
    else if( a==337){c_1=-0.149722222;}
    else if( a==338){c_1=-0.140833333;}
    else if( a==339){c_1=-0.137222222;}
    else if( a==340){c_1=-0.131111111;}
    else if( a==341){c_1=-0.124722222;}
    else if( a==342){c_1=-0.118333333;}
    else if( a==343){c_1=-0.111944444;}
    else if( a==344){c_1=-0.105555556;}
    else if( a==345){c_1=-0.099166667;}
    else if( a==346){c_1=-0.092777778;}
    else if( a==347){c_1=-0.086388889;}
    else if( a==348){c_1=-0.079722222;}
    else if( a==349){c_1=-0.073055556;}
    else if( a==350){c_1=-0.066388889;}
    else if( a==351){c_1=-0.06;}
    else if( a==352){c_1=-0.053333333;}
    else if( a==353){c_1=-0.046666667;}
    else if( a==354){c_1=-0.040277778;}
    else if( a==355){c_1=-0.033611111;}
    else if( a==356){c_1=-0.026944444;}
    else if( a==357){c_1=-0.020277778;}
    else if( a==358){c_1=-0.010833333;}
    else if( a==359){c_1=-0.006666667;}
    else if( a==360){c_1=0;}
    else if( a==361){c_1=0.006666667;}
    else {c_1=9999999999;}
    
    var c_2
    if( a+1==0){c_2=0;}
    else if( a+1==1){c_2=0.006666667;}
    else if( a+1==2){c_2=0.010833333;}
    else if( a+1==3){c_2=0.020277778;}
    else if( a+1==4){c_2=0.026944444;}
    else if( a+1==5){c_2=0.033611111;}
    else if( a+1==6){c_2=0.040277778;}
    else if( a+1==7){c_2=0.046666667;}
    else if( a+1==8){c_2=0.053333333;}
    else if( a+1==9){c_2=0.06;}
    else if( a+1==10){c_2=0.066388889;}
    else if( a+1==11){c_2=0.073055556;}
    else if( a+1==12){c_2=0.079722222;}
    else if( a+1==13){c_2=0.086388889;}
    else if( a+1==14){c_2=0.092777778;}
    else if( a+1==15){c_2=0.099166667;}
    else if( a+1==16){c_2=0.105555556;}
    else if( a+1==17){c_2=0.111944444;}
    else if( a+1==18){c_2=0.118333333;}
    else if( a+1==19){c_2=0.124722222;}
    else if( a+1==20){c_2=0.131111111;}
    else if( a+1==21){c_2=0.137222222;}
    else if( a+1==22){c_2=0.140833333;}
    else if( a+1==23){c_2=0.149722222;}
    else if( a+1==24){c_2=0.155833333;}
    else if( a+1==25){c_2=0.161944444;}
    else if( a+1==26){c_2=0.168055556;}
    else if( a+1==27){c_2=0.174166667;}
    else if( a+1==28){c_2=0.18;}
    else if( a+1==29){c_2=0.186111111;}
    else if( a+1==30){c_2=0.191944444;}
    else if( a+1==31){c_2=0.197777778;}
    else if( a+1==32){c_2=0.203333333;}
    else if( a+1==33){c_2=0.209166667;}
    else if( a+1==34){c_2=0.214722222;}
    else if( a+1==35){c_2=0.220277778;}
    else if( a+1==36){c_2=0.225555556;}
    else if( a+1==37){c_2=0.231111111;}
    else if( a+1==38){c_2=0.236388889;}
    else if( a+1==39){c_2=0.241666667;}
    else if( a+1==40){c_2=0.246944444;}
    else if( a+1==41){c_2=0.252222222;}
    else if( a+1==42){c_2=0.257222222;}
    else if( a+1==43){c_2=0.262222222;}
    else if( a+1==44){c_2=0.266944444;}
    else if( a+1==45){c_2=0.271388889;}
    else if( a+1==46){c_2=0.276388889;}
    else if( a+1==47){c_2=0.280833333;}
    else if( a+1==48){c_2=0.285555556;}
    else if( a+1==49){c_2=0.29;}
    else if( a+1==50){c_2=0.294444444;}
    else if( a+1==51){c_2=0.298055556;}
    else if( a+1==52){c_2=0.302777778;}
    else if( a+1==53){c_2=0.307222222;}
    else if( a+1==54){c_2=0.311111111;}
    else if( a+1==55){c_2=0.315;}
    else if( a+1==56){c_2=0.318611111;}
    else if( a+1==57){c_2=0.3225;}
    else if( a+1==58){c_2=0.326388889;}
    else if( a+1==59){c_2=0.328611111;}
    else if( a+1==60){c_2=0.333611111;}
    else if( a+1==61){c_2=0.336944444;}
    else if( a+1==62){c_2=0.34;}
    else if( a+1==63){c_2=0.343333333;}
    else if( a+1==64){c_2=0.346388889;}
    else if( a+1==65){c_2=0.349166667;}
    else if( a+1==66){c_2=0.351944444;}
    else if( a+1==67){c_2=0.354444444;}
    else if( a+1==68){c_2=0.357222222;}
    else if( a+1==69){c_2=0.359722222;}
    else if( a+1==70){c_2=0.362222222;}
    else if( a+1==71){c_2=0.364444444;}
    else if( a+1==72){c_2=0.366666667;}
    else if( a+1==73){c_2=0.368611111;}
    else if( a+1==74){c_2=0.370833333;}
    else if( a+1==75){c_2=0.372777778;}
    else if( a+1==76){c_2=0.374444444;}
    else if( a+1==77){c_2=0.376111111;}
    else if( a+1==78){c_2=0.3775;}
    else if( a+1==79){c_2=0.378888889;}
    else if( a+1==80){c_2=0.380277778;}
    else if( a+1==81){c_2=0.381388889;}
    else if( a+1==82){c_2=0.3825;}
    else if( a+1==83){c_2=0.383333333;}
    else if( a+1==84){c_2=0.384166667;}
    else if( a+1==85){c_2=0.385;}
    else if( a+1==86){c_2=0.385555556;}
    else if( a+1==87){c_2=0.386111111;}
    else if( a+1==88){c_2=0.386388889;}
    else if( a+1==89){c_2=0.386388889;}
    else if( a+1==90){c_2=0.386666667;}
    else if( a+1==91){c_2=0.386666667;}
    else if( a+1==92){c_2=0.386388889;}
    else if( a+1==93){c_2=0.386111111;}
    else if( a+1==94){c_2=0.385833333;}
    else if( a+1==95){c_2=0.385277778;}
    else if( a+1==96){c_2=0.384722222;}
    else if( a+1==97){c_2=0.383888889;}
    else if( a+1==98){c_2=0.383055556;}
    else if( a+1==99){c_2=0.382222222;}
    else if( a+1==100){c_2=0.381388889;}
    else if( a+1==101){c_2=0.380277778;}
    else if( a+1==102){c_2=0.378888889;}
    else if( a+1==103){c_2=0.3775;}
    else if( a+1==104){c_2=0.376111111;}
    else if( a+1==105){c_2=0.374444444;}
    else if( a+1==106){c_2=0.3725;}
    else if( a+1==107){c_2=0.370555556;}
    else if( a+1==108){c_2=0.368611111;}
    else if( a+1==109){c_2=0.366666667;}
    else if( a+1==110){c_2=0.364444444;}
    else if( a+1==111){c_2=0.362222222;}
    else if( a+1==112){c_2=0.359722222;}
    else if( a+1==113){c_2=0.357222222;}
    else if( a+1==114){c_2=0.354444444;}
    else if( a+1==115){c_2=0.351666667;}
    else if( a+1==116){c_2=0.348888889;}
    else if( a+1==117){c_2=0.345833333;}
    else if( a+1==118){c_2=0.342777778;}
    else if( a+1==119){c_2=0.339722222;}
    else if( a+1==120){c_2=0.336388889;}
    else if( a+1==121){c_2=0.333055556;}
    else if( a+1==122){c_2=0.329444444;}
    else if( a+1==123){c_2=0.325833333;}
    else if( a+1==124){c_2=0.322222222;}
    else if( a+1==125){c_2=0.318333333;}
    else if( a+1==126){c_2=0.314444444;}
    else if( a+1==127){c_2=0.310277778;}
    else if( a+1==128){c_2=0.306111111;}
    else if( a+1==129){c_2=0.301944444;}
    else if( a+1==130){c_2=0.297777778;}
    else if( a+1==131){c_2=0.293333333;}
    else if( a+1==132){c_2=0.288888889;}
    else if( a+1==133){c_2=0.284444444;}
    else if( a+1==134){c_2=0.279722222;}
    else if( a+1==135){c_2=0.275;}
    else if( a+1==136){c_2=0.27;}
    else if( a+1==137){c_2=0.265;}
    else if( a+1==138){c_2=0.26;}
    else if( a+1==139){c_2=0.255;}
    else if( a+1==140){c_2=0.25;}
    else if( a+1==141){c_2=0.244722222;}
    else if( a+1==142){c_2=0.239444444;}
    else if( a+1==143){c_2=0.234166667;}
    else if( a+1==144){c_2=0.228888889;}
    else if( a+1==145){c_2=0.223333333;}
    else if( a+1==146){c_2=0.217777778;}
    else if( a+1==147){c_2=0.212222222;}
    else if( a+1==148){c_2=0.206388889;}
    else if( a+1==149){c_2=0.200555556;}
    else if( a+1==150){c_2=0.194722222;}
    else if( a+1==151){c_2=0.188888889;}
    else if( a+1==152){c_2=0.183055556;}
    else if( a+1==153){c_2=0.176944444;}
    else if( a+1==154){c_2=0.170833333;}
    else if( a+1==155){c_2=0.164722222;}
    else if( a+1==156){c_2=0.158611111;}
    else if( a+1==157){c_2=0.1525;}
    else if( a+1==158){c_2=0.146111111;}
    else if( a+1==159){c_2=0.139722222;}
    else if( a+1==160){c_2=0.133333333;}
    else if( a+1==161){c_2=0.126944444;}
    else if( a+1==162){c_2=0.120277778;}
    else if( a+1==163){c_2=0.113888889;}
    else if( a+1==164){c_2=0.1075;}
    else if( a+1==165){c_2=0.100833333;}
    else if( a+1==166){c_2=0.094444444;}
    else if( a+1==167){c_2=0.087777778;}
    else if( a+1==168){c_2=0.081111111;}
    else if( a+1==169){c_2=0.074444444;}
    else if( a+1==170){c_2=0.067777778;}
    else if( a+1==171){c_2=0.061111111;}
    else if( a+1==172){c_2=0.054444444;}
    else if( a+1==173){c_2=0.0475;}
    else if( a+1==174){c_2=0.040833333;}
    else if( a+1==175){c_2=0.033888889;}
    else if( a+1==176){c_2=0.027222222;}
    else if( a+1==177){c_2=0.020555556;}
    else if( a+1==178){c_2=0.013611111;}
    else if( a+1==179){c_2=0.006944444;}
    else if( a+1==180){c_2=0;}
    else if( a+1==181){c_2=-0.006944444;}
    else if( a+1==182){c_2=-0.013611111;}
    else if( a+1==183){c_2=-0.020555556;}
    else if( a+1==184){c_2=-0.027222222;}
    else if( a+1==185){c_2=-0.033888889;}
    else if( a+1==186){c_2=-0.040833333;}
    else if( a+1==187){c_2=-0.0475;}
    else if( a+1==188){c_2=-0.054444444;}
    else if( a+1==189){c_2=-0.061111111;}
    else if( a+1==190){c_2=-0.067777778;}
    else if( a+1==191){c_2=-0.074444444;}
    else if( a+1==192){c_2=-0.081111111;}
    else if( a+1==193){c_2=-0.087777778;}
    else if( a+1==194){c_2=-0.094444444;}
    else if( a+1==195){c_2=-0.100833333;}
    else if( a+1==196){c_2=-0.1075;}
    else if( a+1==197){c_2=-0.113888889;}
    else if( a+1==198){c_2=-0.120277778;}
    else if( a+1==199){c_2=-0.126944444;}
    else if( a+1==200){c_2=-0.133333333;}
    else if( a+1==201){c_2=-0.139722222;}
    else if( a+1==202){c_2=-0.146111111;}
    else if( a+1==203){c_2=-0.1525;}
    else if( a+1==204){c_2=-0.158611111;}
    else if( a+1==205){c_2=-0.164722222;}
    else if( a+1==206){c_2=-0.170833333;}
    else if( a+1==207){c_2=-0.176944444;}
    else if( a+1==208){c_2=-0.183055556;}
    else if( a+1==209){c_2=-0.188888889;}
    else if( a+1==210){c_2=-0.194722222;}
    else if( a+1==211){c_2=-0.200555556;}
    else if( a+1==212){c_2=-0.206388889;}
    else if( a+1==213){c_2=-0.212222222;}
    else if( a+1==214){c_2=-0.217777778;}
    else if( a+1==215){c_2=-0.223333333;}
    else if( a+1==216){c_2=-0.228888889;}
    else if( a+1==217){c_2=-0.234166667;}
    else if( a+1==218){c_2=-0.239444444;}
    else if( a+1==219){c_2=-0.244722222;}
    else if( a+1==220){c_2=-0.25;}
    else if( a+1==221){c_2=-0.255;}
    else if( a+1==222){c_2=-0.26;}
    else if( a+1==223){c_2=-0.265;}
    else if( a+1==224){c_2=-0.27;}
    else if( a+1==225){c_2=-0.275;}
    else if( a+1==226){c_2=-0.279722222;}
    else if( a+1==227){c_2=-0.284444444;}
    else if( a+1==228){c_2=-0.288888889;}
    else if( a+1==229){c_2=-0.293333333;}
    else if( a+1==230){c_2=-0.297777778;}
    else if( a+1==231){c_2=-0.301944444;}
    else if( a+1==232){c_2=-0.306111111;}
    else if( a+1==233){c_2=-0.310277778;}
    else if( a+1==234){c_2=-0.314444444;}
    else if( a+1==235){c_2=-0.318333333;}
    else if( a+1==236){c_2=-0.322222222;}
    else if( a+1==237){c_2=-0.325833333;}
    else if( a+1==238){c_2=-0.329444444;}
    else if( a+1==239){c_2=-0.333055556;}
    else if( a+1==240){c_2=-0.336388889;}
    else if( a+1==241){c_2=-0.339722222;}
    else if( a+1==242){c_2=-0.342777778;}
    else if( a+1==243){c_2=-0.345833333;}
    else if( a+1==244){c_2=-0.348888889;}
    else if( a+1==245){c_2=-0.351666667;}
    else if( a+1==246){c_2=-0.354444444;}
    else if( a+1==247){c_2=-0.357222222;}
    else if( a+1==248){c_2=-0.359722222;}
    else if( a+1==249){c_2=-0.362222222;}
    else if( a+1==250){c_2=-0.364444444;}
    else if( a+1==251){c_2=-0.366666667;}
    else if( a+1==252){c_2=-0.368611111;}
    else if( a+1==253){c_2=-0.370555556;}
    else if( a+1==254){c_2=-0.3725;}
    else if( a+1==255){c_2=-0.374444444;}
    else if( a+1==256){c_2=-0.376111111;}
    else if( a+1==257){c_2=-0.3775;}
    else if( a+1==258){c_2=-0.378888889;}
    else if( a+1==259){c_2=-0.380277778;}
    else if( a+1==260){c_2=-0.381388889;}
    else if( a+1==261){c_2=-0.382222222;}
    else if( a+1==262){c_2=-0.383055556;}
    else if( a+1==263){c_2=-0.383888889;}
    else if( a+1==264){c_2=-0.384722222;}
    else if( a+1==265){c_2=-0.385277778;}
    else if( a+1==266){c_2=-0.385833333;}
    else if( a+1==267){c_2=-0.386111111;}
    else if( a+1==268){c_2=-0.386388889;}
    else if( a+1==269){c_2=-0.386666667;}
    else if( a+1==270){c_2=-0.386666667;}
    else if( a+1==271){c_2=-0.386388889;}
    else if( a+1==272){c_2=-0.386388889;}
    else if( a+1==273){c_2=-0.386111111;}
    else if( a+1==274){c_2=-0.385555556;}
    else if( a+1==275){c_2=-0.385;}
    else if( a+1==276){c_2=-0.384166667;}
    else if( a+1==277){c_2=-0.383333333;}
    else if( a+1==278){c_2=-0.3825;}
    else if( a+1==279){c_2=-0.381388889;}
    else if( a+1==280){c_2=-0.380277778;}
    else if( a+1==281){c_2=-0.378888889;}
    else if( a+1==282){c_2=-0.3775;}
    else if( a+1==283){c_2=-0.376111111;}
    else if( a+1==284){c_2=-0.374444444;}
    else if( a+1==285){c_2=-0.372777778;}
    else if( a+1==286){c_2=-0.370833333;}
    else if( a+1==287){c_2=-0.368611111;}
    else if( a+1==288){c_2=-0.366666667;}
    else if( a+1==289){c_2=-0.364444444;}
    else if( a+1==290){c_2=-0.362222222;}
    else if( a+1==291){c_2=-0.359722222;}
    else if( a+1==292){c_2=-0.357222222;}
    else if( a+1==293){c_2=-0.354444444;}
    else if( a+1==294){c_2=-0.351944444;}
    else if( a+1==295){c_2=-0.349166667;}
    else if( a+1==296){c_2=-0.346388889;}
    else if( a+1==297){c_2=-0.343333333;}
    else if( a+1==298){c_2=-0.34;}
    else if( a+1==299){c_2=-0.336944444;}
    else if( a+1==300){c_2=-0.333611111;}
    else if( a+1==301){c_2=-0.328611111;}
    else if( a+1==302){c_2=-0.326388889;}
    else if( a+1==303){c_2=-0.3225;}
    else if( a+1==304){c_2=-0.318611111;}
    else if( a+1==305){c_2=-0.315;}
    else if( a+1==306){c_2=-0.311111111;}
    else if( a+1==307){c_2=-0.307222222;}
    else if( a+1==308){c_2=-0.302777778;}
    else if( a+1==309){c_2=-0.298055556;}
    else if( a+1==310){c_2=-0.294444444;}
    else if( a+1==311){c_2=-0.29;}
    else if( a+1==312){c_2=-0.285555556;}
    else if( a+1==313){c_2=-0.280833333;}
    else if( a+1==314){c_2=-0.276388889;}
    else if( a+1==315){c_2=-0.271388889;}
    else if( a+1==316){c_2=-0.266944444;}
    else if( a+1==317){c_2=-0.262222222;}
    else if( a+1==318){c_2=-0.257222222;}
    else if( a+1==319){c_2=-0.252222222;}
    else if( a+1==320){c_2=-0.246944444;}
    else if( a+1==321){c_2=-0.241666667;}
    else if( a+1==322){c_2=-0.236388889;}
    else if( a+1==323){c_2=-0.231111111;}
    else if( a+1==324){c_2=-0.225555556;}
    else if( a+1==325){c_2=-0.220277778;}
    else if( a+1==326){c_2=-0.214722222;}
    else if( a+1==327){c_2=-0.209166667;}
    else if( a+1==328){c_2=-0.203333333;}
    else if( a+1==329){c_2=-0.197777778;}
    else if( a+1==330){c_2=-0.191944444;}
    else if( a+1==331){c_2=-0.186111111;}
    else if( a+1==332){c_2=-0.18;}
    else if( a+1==333){c_2=-0.174166667;}
    else if( a+1==334){c_2=-0.168055556;}
    else if( a+1==335){c_2=-0.161944444;}
    else if( a+1==336){c_2=-0.155833333;}
    else if( a+1==337){c_2=-0.149722222;}
    else if( a+1==338){c_2=-0.140833333;}
    else if( a+1==339){c_2=-0.137222222;}
    else if( a+1==340){c_2=-0.131111111;}
    else if( a+1==341){c_2=-0.124722222;}
    else if( a+1==342){c_2=-0.118333333;}
    else if( a+1==343){c_2=-0.111944444;}
    else if( a+1==344){c_2=-0.105555556;}
    else if( a+1==345){c_2=-0.099166667;}
    else if( a+1==346){c_2=-0.092777778;}
    else if( a+1==347){c_2=-0.086388889;}
    else if( a+1==348){c_2=-0.079722222;}
    else if( a+1==349){c_2=-0.073055556;}
    else if( a+1==350){c_2=-0.066388889;}
    else if( a+1==351){c_2=-0.06;}
    else if( a+1==352){c_2=-0.053333333;}
    else if( a+1==353){c_2=-0.046666667;}
    else if( a+1==354){c_2=-0.040277778;}
    else if( a+1==355){c_2=-0.033611111;}
    else if( a+1==356){c_2=-0.026944444;}
    else if( a+1==357){c_2=-0.020277778;}
    else if( a+1==358){c_2=-0.010833333;}
    else if( a+1==359){c_2=-0.006666667;}
    else if( a+1==360){c_2=0;}
    else if( a+1==361){c_2=0.006666667;}
    else {c_2=9999999999;}
    
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var tdld2 = ftdld2(intdalil1, jks);
    var kkq_3 = MOD(kkq_2+tdld2+360,360);
    
    var dalil3 = kkq_3
    var intdalil3 = Math.floor(dalil3);
    
    
    var ftdlc2 = function (a,b){
    
    var c_1
    
    if( a==0){c_1=0;}
    else if( a==1){c_1=-0.069722222;}
    else if( a==2){c_1=-0.206111111;}
    else if( a==3){c_1=-0.308888889;}
    else if( a==4){c_1=-0.411666667;}
    else if( a==5){c_1=-0.514444444;}
    else if( a==6){c_1=-0.616944444;}
    else if( a==7){c_1=-0.719166667;}
    else if( a==8){c_1=-0.821388889;}
    else if( a==9){c_1=-0.923333333;}
    else if( a==10){c_1=-1.025277778;}
    else if( a==11){c_1=-1.126944444;}
    else if( a==12){c_1=-1.228333333;}
    else if( a==13){c_1=-1.329166667;}
    else if( a==14){c_1=-1.429722222;}
    else if( a==15){c_1=-1.53;}
    else if( a==16){c_1=-1.629722222;}
    else if( a==17){c_1=-1.729166667;}
    else if( a==18){c_1=-1.828333333;}
    else if( a==19){c_1=-1.926944444;}
    else if( a==20){c_1=-2.025277778;}
    else if( a==21){c_1=-2.123055556;}
    else if( a==22){c_1=-2.220277778;}
    else if( a==23){c_1=-2.316666667;}
    else if( a==24){c_1=-2.4125;}
    else if( a==25){c_1=-2.507777778;}
    else if( a==26){c_1=-2.602222222;}
    else if( a==27){c_1=-2.696111111;}
    else if( a==28){c_1=-2.789444444;}
    else if( a==29){c_1=-2.882222222;}
    else if( a==30){c_1=-2.974166667;}
    else if( a==31){c_1=-3.065277778;}
    else if( a==32){c_1=-3.155555556;}
    else if( a==33){c_1=-3.245;}
    else if( a==34){c_1=-3.333888889;}
    else if( a==35){c_1=-3.421944444;}
    else if( a==36){c_1=-3.509166667;}
    else if( a==37){c_1=-3.595277778;}
    else if( a==38){c_1=-3.680277778;}
    else if( a==39){c_1=-3.764444444;}
    else if( a==40){c_1=-3.8475;}
    else if( a==41){c_1=-3.929722222;}
    else if( a==42){c_1=-4.010833333;}
    else if( a==43){c_1=-4.091111111;}
    else if( a==44){c_1=-4.170277778;}
    else if( a==45){c_1=-4.242777778;}
    else if( a==46){c_1=-4.325277778;}
    else if( a==47){c_1=-4.401111111;}
    else if( a==48){c_1=-4.475555556;}
    else if( a==49){c_1=-4.548888889;}
    else if( a==50){c_1=-4.621111111;}
    else if( a==51){c_1=-4.691944444;}
    else if( a==52){c_1=-4.761666667;}
    else if( a==53){c_1=-4.830277778;}
    else if( a==54){c_1=-4.8975;}
    else if( a==55){c_1=-4.963333333;}
    else if( a==56){c_1=-5.027777778;}
    else if( a==57){c_1=-5.090833333;}
    else if( a==58){c_1=-5.152777778;}
    else if( a==59){c_1=-5.213333333;}
    else if( a==60){c_1=-5.2725;}
    else if( a==61){c_1=-5.330277778;}
    else if( a==62){c_1=-5.386388889;}
    else if( a==63){c_1=-5.441111111;}
    else if( a==64){c_1=-5.494166667;}
    else if( a==65){c_1=-5.545555556;}
    else if( a==66){c_1=-5.595555556;}
    else if( a==67){c_1=-5.644166667;}
    else if( a==68){c_1=-5.691388889;}
    else if( a==69){c_1=-5.736388889;}
    else if( a==70){c_1=-5.78;}
    else if( a==71){c_1=-5.821944444;}
    else if( a==72){c_1=-5.8625;}
    else if( a==73){c_1=-5.901388889;}
    else if( a==74){c_1=-5.938611111;}
    else if( a==75){c_1=-5.974166667;}
    else if( a==76){c_1=-6.008055556;}
    else if( a==77){c_1=-6.04;}
    else if( a==78){c_1=-6.070277778;}
    else if( a==79){c_1=-6.098888889;}
    else if( a==80){c_1=-6.125833333;}
    else if( a==81){c_1=-6.150833333;}
    else if( a==82){c_1=-6.174166667;}
    else if( a==83){c_1=-6.195555556;}
    else if( a==84){c_1=-6.215;}
    else if( a==85){c_1=-6.232777778;}
    else if( a==86){c_1=-6.248611111;}
    else if( a==87){c_1=-6.262777778;}
    else if( a==88){c_1=-6.275;}
    else if( a==89){c_1=-6.285277778;}
    else if( a==90){c_1=-6.293888889;}
    else if( a==91){c_1=-6.300555556;}
    else if( a==92){c_1=-6.304722222;}
    else if( a==93){c_1=-6.308055556;}
    else if( a==94){c_1=-6.308888889;}
    else if( a==95){c_1=-6.307777778;}
    else if( a==96){c_1=-6.304722222;}
    else if( a==97){c_1=-6.3;}
    else if( a==98){c_1=-6.292777778;}
    else if( a==99){c_1=-6.283888889;}
    else if( a==100){c_1=-6.273333333;}
    else if( a==101){c_1=-6.260555556;}
    else if( a==102){c_1=-6.246944444;}
    else if( a==103){c_1=-6.229166667;}
    else if( a==104){c_1=-6.210555556;}
    else if( a==105){c_1=-6.19;}
    else if( a==106){c_1=-6.1675;}
    else if( a==107){c_1=-6.143055556;}
    else if( a==108){c_1=-6.116666667;}
    else if( a==109){c_1=-6.088055556;}
    else if( a==110){c_1=-6.0575;}
    else if( a==111){c_1=-6.025;}
    else if( a==112){c_1=-5.990833333;}
    else if( a==113){c_1=-5.954444444;}
    else if( a==114){c_1=-5.916388889;}
    else if( a==115){c_1=-5.876388889;}
    else if( a==116){c_1=-5.834444444;}
    else if( a==117){c_1=-5.790555556;}
    else if( a==118){c_1=-5.744722222;}
    else if( a==119){c_1=-5.696666667;}
    else if( a==120){c_1=-5.646666667;}
    else if( a==121){c_1=-5.595;}
    else if( a==122){c_1=-5.541388889;}
    else if( a==123){c_1=-5.486111111;}
    else if( a==124){c_1=-5.428888889;}
    else if( a==125){c_1=-5.37;}
    else if( a==126){c_1=-5.311944444;}
    else if( a==127){c_1=-5.246944444;}
    else if( a==128){c_1=-5.182222222;}
    else if( a==129){c_1=-5.115833333;}
    else if( a==130){c_1=-5.047777778;}
    else if( a==131){c_1=-4.978055556;}
    else if( a==132){c_1=-4.906666667;}
    else if( a==133){c_1=-4.833333333;}
    else if( a==134){c_1=-4.758333333;}
    else if( a==135){c_1=-4.676111111;}
    else if( a==136){c_1=-4.603333333;}
    else if( a==137){c_1=-4.523611111;}
    else if( a==138){c_1=-4.442222222;}
    else if( a==139){c_1=-4.359444444;}
    else if( a==140){c_1=-4.275;}
    else if( a==141){c_1=-4.188888889;}
    else if( a==142){c_1=-4.101388889;}
    else if( a==143){c_1=-4.012222222;}
    else if( a==144){c_1=-3.921944444;}
    else if( a==145){c_1=-3.83;}
    else if( a==146){c_1=-3.736666667;}
    else if( a==147){c_1=-3.641944444;}
    else if( a==148){c_1=-3.546111111;}
    else if( a==149){c_1=-3.448888889;}
    else if( a==150){c_1=-3.350555556;}
    else if( a==151){c_1=-3.250833333;}
    else if( a==152){c_1=-3.15;}
    else if( a==153){c_1=-3.048055556;}
    else if( a==154){c_1=-2.936666667;}
    else if( a==155){c_1=-2.840833333;}
    else if( a==156){c_1=-2.735555556;}
    else if( a==157){c_1=-2.629444444;}
    else if( a==158){c_1=-2.522222222;}
    else if( a==159){c_1=-2.414166667;}
    else if( a==160){c_1=-2.305;}
    else if( a==161){c_1=-2.195;}
    else if( a==162){c_1=-2.084166667;}
    else if( a==163){c_1=-1.972777778;}
    else if( a==164){c_1=-1.860555556;}
    else if( a==165){c_1=-1.747777778;}
    else if( a==166){c_1=-1.634444444;}
    else if( a==167){c_1=-1.520277778;}
    else if( a==168){c_1=-1.405555556;}
    else if( a==169){c_1=-1.290277778;}
    else if( a==170){c_1=-1.173055556;}
    else if( a==171){c_1=-1.058333333;}
    else if( a==172){c_1=-0.941666667;}
    else if( a==173){c_1=-0.824722222;}
    else if( a==174){c_1=-0.7075;}
    else if( a==175){c_1=-0.59;}
    else if( a==176){c_1=-0.472222222;}
    else if( a==177){c_1=-0.354444444;}
    else if( a==178){c_1=-0.236388889;}
    else if( a==179){c_1=-0.118333333;}
    else if( a==180){c_1=0;}
    else if( a==181){c_1=0.118333333;}
    else if( a==182){c_1=0.236388889;}
    else if( a==183){c_1=0.354444444;}
    else if( a==184){c_1=0.472222222;}
    else if( a==185){c_1=0.59;}
    else if( a==186){c_1=0.7075;}
    else if( a==187){c_1=0.824722222;}
    else if( a==188){c_1=0.941666667;}
    else if( a==189){c_1=1.058333333;}
    else if( a==190){c_1=1.173055556;}
    else if( a==191){c_1=1.290277778;}
    else if( a==192){c_1=1.405555556;}
    else if( a==193){c_1=1.520277778;}
    else if( a==194){c_1=1.634444444;}
    else if( a==195){c_1=1.747777778;}
    else if( a==196){c_1=1.860555556;}
    else if( a==197){c_1=1.972777778;}
    else if( a==198){c_1=2.084166667;}
    else if( a==199){c_1=2.195;}
    else if( a==200){c_1=2.305;}
    else if( a==201){c_1=2.414166667;}
    else if( a==202){c_1=2.522222222;}
    else if( a==203){c_1=2.629444444;}
    else if( a==204){c_1=2.735555556;}
    else if( a==205){c_1=2.840833333;}
    else if( a==206){c_1=2.936666667;}
    else if( a==207){c_1=3.048055556;}
    else if( a==208){c_1=3.15;}
    else if( a==209){c_1=3.250833333;}
    else if( a==210){c_1=3.350555556;}
    else if( a==211){c_1=3.448888889;}
    else if( a==212){c_1=3.546111111;}
    else if( a==213){c_1=3.641944444;}
    else if( a==214){c_1=3.736666667;}
    else if( a==215){c_1=3.83;}
    else if( a==216){c_1=3.921944444;}
    else if( a==217){c_1=4.012222222;}
    else if( a==218){c_1=4.101388889;}
    else if( a==219){c_1=4.188888889;}
    else if( a==220){c_1=4.275;}
    else if( a==221){c_1=4.359444444;}
    else if( a==222){c_1=4.442222222;}
    else if( a==223){c_1=4.523611111;}
    else if( a==224){c_1=4.603333333;}
    else if( a==225){c_1=4.676111111;}
    else if( a==226){c_1=4.758333333;}
    else if( a==227){c_1=4.833333333;}
    else if( a==228){c_1=4.906666667;}
    else if( a==229){c_1=4.978055556;}
    else if( a==230){c_1=5.047777778;}
    else if( a==231){c_1=5.115833333;}
    else if( a==232){c_1=5.182222222;}
    else if( a==233){c_1=5.246944444;}
    else if( a==234){c_1=5.311944444;}
    else if( a==235){c_1=5.37;}
    else if( a==236){c_1=5.428888889;}
    else if( a==237){c_1=5.486111111;}
    else if( a==238){c_1=5.541388889;}
    else if( a==239){c_1=5.595;}
    else if( a==240){c_1=5.646666667;}
    else if( a==241){c_1=5.696666667;}
    else if( a==242){c_1=5.744722222;}
    else if( a==243){c_1=5.790555556;}
    else if( a==244){c_1=5.834444444;}
    else if( a==245){c_1=5.876388889;}
    else if( a==246){c_1=5.916388889;}
    else if( a==247){c_1=5.954444444;}
    else if( a==248){c_1=5.990833333;}
    else if( a==249){c_1=6.025;}
    else if( a==250){c_1=6.0575;}
    else if( a==251){c_1=6.088055556;}
    else if( a==252){c_1=6.116666667;}
    else if( a==253){c_1=6.143055556;}
    else if( a==254){c_1=6.1675;}
    else if( a==255){c_1=6.19;}
    else if( a==256){c_1=6.210555556;}
    else if( a==257){c_1=6.229166667;}
    else if( a==258){c_1=6.246944444;}
    else if( a==259){c_1=6.260555556;}
    else if( a==260){c_1=6.273333333;}
    else if( a==261){c_1=6.283888889;}
    else if( a==262){c_1=6.292777778;}
    else if( a==263){c_1=6.3;}
    else if( a==264){c_1=6.300555556;}
    else if( a==265){c_1=6.304722222;}
    else if( a==266){c_1=6.304722222;}
    else if( a==267){c_1=6.307777778;}
    else if( a==268){c_1=6.308055556;}
    else if( a==269){c_1=6.308888889;}
    else if( a==270){c_1=6.293888889;}
    else if( a==271){c_1=6.285277778;}
    else if( a==272){c_1=6.275;}
    else if( a==273){c_1=6.262777778;}
    else if( a==274){c_1=6.248611111;}
    else if( a==275){c_1=6.232777778;}
    else if( a==276){c_1=6.215;}
    else if( a==277){c_1=6.195555556;}
    else if( a==278){c_1=6.174166667;}
    else if( a==279){c_1=6.150833333;}
    else if( a==280){c_1=6.125833333;}
    else if( a==281){c_1=6.098888889;}
    else if( a==282){c_1=6.070277778;}
    else if( a==283){c_1=6.04;}
    else if( a==284){c_1=6.008055556;}
    else if( a==285){c_1=5.974166667;}
    else if( a==286){c_1=5.938611111;}
    else if( a==287){c_1=5.901388889;}
    else if( a==288){c_1=5.8625;}
    else if( a==289){c_1=5.821944444;}
    else if( a==290){c_1=5.78;}
    else if( a==291){c_1=5.736388889;}
    else if( a==292){c_1=5.691388889;}
    else if( a==293){c_1=5.644166667;}
    else if( a==294){c_1=5.595555556;}
    else if( a==295){c_1=5.545555556;}
    else if( a==296){c_1=5.494166667;}
    else if( a==297){c_1=5.441111111;}
    else if( a==298){c_1=5.386388889;}
    else if( a==299){c_1=5.330277778;}
    else if( a==300){c_1=5.2725;}
    else if( a==301){c_1=5.213333333;}
    else if( a==302){c_1=5.152777778;}
    else if( a==303){c_1=5.090833333;}
    else if( a==304){c_1=5.027777778;}
    else if( a==305){c_1=4.963333333;}
    else if( a==306){c_1=4.8975;}
    else if( a==307){c_1=4.830277778;}
    else if( a==308){c_1=4.761666667;}
    else if( a==309){c_1=4.691944444;}
    else if( a==310){c_1=4.621111111;}
    else if( a==311){c_1=4.548888889;}
    else if( a==312){c_1=4.475555556;}
    else if( a==313){c_1=4.401111111;}
    else if( a==314){c_1=4.325277778;}
    else if( a==315){c_1=4.242777778;}
    else if( a==316){c_1=4.170277778;}
    else if( a==317){c_1=4.091111111;}
    else if( a==318){c_1=4.010833333;}
    else if( a==319){c_1=3.929722222;}
    else if( a==320){c_1=3.8475;}
    else if( a==321){c_1=3.764444444;}
    else if( a==322){c_1=3.680277778;}
    else if( a==323){c_1=3.595277778;}
    else if( a==324){c_1=3.509166667;}
    else if( a==325){c_1=3.421944444;}
    else if( a==326){c_1=3.333888889;}
    else if( a==327){c_1=3.245;}
    else if( a==328){c_1=3.155555556;}
    else if( a==329){c_1=3.065277778;}
    else if( a==330){c_1=2.974166667;}
    else if( a==331){c_1=2.882222222;}
    else if( a==332){c_1=2.789444444;}
    else if( a==333){c_1=2.696111111;}
    else if( a==334){c_1=2.602222222;}
    else if( a==335){c_1=2.507777778;}
    else if( a==336){c_1=2.4125;}
    else if( a==337){c_1=2.316666667;}
    else if( a==338){c_1=2.220277778;}
    else if( a==339){c_1=2.123055556;}
    else if( a==340){c_1=2.025277778;}
    else if( a==341){c_1=1.926944444;}
    else if( a==342){c_1=1.828333333;}
    else if( a==343){c_1=1.729166667;}
    else if( a==344){c_1=1.629722222;}
    else if( a==345){c_1=1.53;}
    else if( a==346){c_1=1.429722222;}
    else if( a==347){c_1=1.329166667;}
    else if( a==348){c_1=1.228333333;}
    else if( a==349){c_1=1.126944444;}
    else if( a==350){c_1=1.025277778;}
    else if( a==351){c_1=0.923333333;}
    else if( a==352){c_1=0.821388889;}
    else if( a==353){c_1=0.719166667;}
    else if( a==354){c_1=0.616944444;}
    else if( a==355){c_1=0.514444444;}
    else if( a==356){c_1=0.411666667;}
    else if( a==357){c_1=0.308888889;}
    else if( a==358){c_1=0.206111111;}
    else if( a==359){c_1=0.069722222;}
    else if( a==360){c_1=0;}
    else if( a==361){c_1=-0.069722222;}
    else {c_1=999999999;}
    
    var c_2
    
    if( a+1==0){c_2=0;}
    else if( a+1==1){c_2=-0.069722222;}
    else if( a+1==2){c_2=-0.206111111;}
    else if( a+1==3){c_2=-0.308888889;}
    else if( a+1==4){c_2=-0.411666667;}
    else if( a+1==5){c_2=-0.514444444;}
    else if( a+1==6){c_2=-0.616944444;}
    else if( a+1==7){c_2=-0.719166667;}
    else if( a+1==8){c_2=-0.821388889;}
    else if( a+1==9){c_2=-0.923333333;}
    else if( a+1==10){c_2=-1.025277778;}
    else if( a+1==11){c_2=-1.126944444;}
    else if( a+1==12){c_2=-1.228333333;}
    else if( a+1==13){c_2=-1.329166667;}
    else if( a+1==14){c_2=-1.429722222;}
    else if( a+1==15){c_2=-1.53;}
    else if( a+1==16){c_2=-1.629722222;}
    else if( a+1==17){c_2=-1.729166667;}
    else if( a+1==18){c_2=-1.828333333;}
    else if( a+1==19){c_2=-1.926944444;}
    else if( a+1==20){c_2=-2.025277778;}
    else if( a+1==21){c_2=-2.123055556;}
    else if( a+1==22){c_2=-2.220277778;}
    else if( a+1==23){c_2=-2.316666667;}
    else if( a+1==24){c_2=-2.4125;}
    else if( a+1==25){c_2=-2.507777778;}
    else if( a+1==26){c_2=-2.602222222;}
    else if( a+1==27){c_2=-2.696111111;}
    else if( a+1==28){c_2=-2.789444444;}
    else if( a+1==29){c_2=-2.882222222;}
    else if( a+1==30){c_2=-2.974166667;}
    else if( a+1==31){c_2=-3.065277778;}
    else if( a+1==32){c_2=-3.155555556;}
    else if( a+1==33){c_2=-3.245;}
    else if( a+1==34){c_2=-3.333888889;}
    else if( a+1==35){c_2=-3.421944444;}
    else if( a+1==36){c_2=-3.509166667;}
    else if( a+1==37){c_2=-3.595277778;}
    else if( a+1==38){c_2=-3.680277778;}
    else if( a+1==39){c_2=-3.764444444;}
    else if( a+1==40){c_2=-3.8475;}
    else if( a+1==41){c_2=-3.929722222;}
    else if( a+1==42){c_2=-4.010833333;}
    else if( a+1==43){c_2=-4.091111111;}
    else if( a+1==44){c_2=-4.170277778;}
    else if( a+1==45){c_2=-4.242777778;}
    else if( a+1==46){c_2=-4.325277778;}
    else if( a+1==47){c_2=-4.401111111;}
    else if( a+1==48){c_2=-4.475555556;}
    else if( a+1==49){c_2=-4.548888889;}
    else if( a+1==50){c_2=-4.621111111;}
    else if( a+1==51){c_2=-4.691944444;}
    else if( a+1==52){c_2=-4.761666667;}
    else if( a+1==53){c_2=-4.830277778;}
    else if( a+1==54){c_2=-4.8975;}
    else if( a+1==55){c_2=-4.963333333;}
    else if( a+1==56){c_2=-5.027777778;}
    else if( a+1==57){c_2=-5.090833333;}
    else if( a+1==58){c_2=-5.152777778;}
    else if( a+1==59){c_2=-5.213333333;}
    else if( a+1==60){c_2=-5.2725;}
    else if( a+1==61){c_2=-5.330277778;}
    else if( a+1==62){c_2=-5.386388889;}
    else if( a+1==63){c_2=-5.441111111;}
    else if( a+1==64){c_2=-5.494166667;}
    else if( a+1==65){c_2=-5.545555556;}
    else if( a+1==66){c_2=-5.595555556;}
    else if( a+1==67){c_2=-5.644166667;}
    else if( a+1==68){c_2=-5.691388889;}
    else if( a+1==69){c_2=-5.736388889;}
    else if( a+1==70){c_2=-5.78;}
    else if( a+1==71){c_2=-5.821944444;}
    else if( a+1==72){c_2=-5.8625;}
    else if( a+1==73){c_2=-5.901388889;}
    else if( a+1==74){c_2=-5.938611111;}
    else if( a+1==75){c_2=-5.974166667;}
    else if( a+1==76){c_2=-6.008055556;}
    else if( a+1==77){c_2=-6.04;}
    else if( a+1==78){c_2=-6.070277778;}
    else if( a+1==79){c_2=-6.098888889;}
    else if( a+1==80){c_2=-6.125833333;}
    else if( a+1==81){c_2=-6.150833333;}
    else if( a+1==82){c_2=-6.174166667;}
    else if( a+1==83){c_2=-6.195555556;}
    else if( a+1==84){c_2=-6.215;}
    else if( a+1==85){c_2=-6.232777778;}
    else if( a+1==86){c_2=-6.248611111;}
    else if( a+1==87){c_2=-6.262777778;}
    else if( a+1==88){c_2=-6.275;}
    else if( a+1==89){c_2=-6.285277778;}
    else if( a+1==90){c_2=-6.293888889;}
    else if( a+1==91){c_2=-6.300555556;}
    else if( a+1==92){c_2=-6.304722222;}
    else if( a+1==93){c_2=-6.308055556;}
    else if( a+1==94){c_2=-6.308888889;}
    else if( a+1==95){c_2=-6.307777778;}
    else if( a+1==96){c_2=-6.304722222;}
    else if( a+1==97){c_2=-6.3;}
    else if( a+1==98){c_2=-6.292777778;}
    else if( a+1==99){c_2=-6.283888889;}
    else if( a+1==100){c_2=-6.273333333;}
    else if( a+1==101){c_2=-6.260555556;}
    else if( a+1==102){c_2=-6.246944444;}
    else if( a+1==103){c_2=-6.229166667;}
    else if( a+1==104){c_2=-6.210555556;}
    else if( a+1==105){c_2=-6.19;}
    else if( a+1==106){c_2=-6.1675;}
    else if( a+1==107){c_2=-6.143055556;}
    else if( a+1==108){c_2=-6.116666667;}
    else if( a+1==109){c_2=-6.088055556;}
    else if( a+1==110){c_2=-6.0575;}
    else if( a+1==111){c_2=-6.025;}
    else if( a+1==112){c_2=-5.990833333;}
    else if( a+1==113){c_2=-5.954444444;}
    else if( a+1==114){c_2=-5.916388889;}
    else if( a+1==115){c_2=-5.876388889;}
    else if( a+1==116){c_2=-5.834444444;}
    else if( a+1==117){c_2=-5.790555556;}
    else if( a+1==118){c_2=-5.744722222;}
    else if( a+1==119){c_2=-5.696666667;}
    else if( a+1==120){c_2=-5.646666667;}
    else if( a+1==121){c_2=-5.595;}
    else if( a+1==122){c_2=-5.541388889;}
    else if( a+1==123){c_2=-5.486111111;}
    else if( a+1==124){c_2=-5.428888889;}
    else if( a+1==125){c_2=-5.37;}
    else if( a+1==126){c_2=-5.311944444;}
    else if( a+1==127){c_2=-5.246944444;}
    else if( a+1==128){c_2=-5.182222222;}
    else if( a+1==129){c_2=-5.115833333;}
    else if( a+1==130){c_2=-5.047777778;}
    else if( a+1==131){c_2=-4.978055556;}
    else if( a+1==132){c_2=-4.906666667;}
    else if( a+1==133){c_2=-4.833333333;}
    else if( a+1==134){c_2=-4.758333333;}
    else if( a+1==135){c_2=-4.676111111;}
    else if( a+1==136){c_2=-4.603333333;}
    else if( a+1==137){c_2=-4.523611111;}
    else if( a+1==138){c_2=-4.442222222;}
    else if( a+1==139){c_2=-4.359444444;}
    else if( a+1==140){c_2=-4.275;}
    else if( a+1==141){c_2=-4.188888889;}
    else if( a+1==142){c_2=-4.101388889;}
    else if( a+1==143){c_2=-4.012222222;}
    else if( a+1==144){c_2=-3.921944444;}
    else if( a+1==145){c_2=-3.83;}
    else if( a+1==146){c_2=-3.736666667;}
    else if( a+1==147){c_2=-3.641944444;}
    else if( a+1==148){c_2=-3.546111111;}
    else if( a+1==149){c_2=-3.448888889;}
    else if( a+1==150){c_2=-3.350555556;}
    else if( a+1==151){c_2=-3.250833333;}
    else if( a+1==152){c_2=-3.15;}
    else if( a+1==153){c_2=-3.048055556;}
    else if( a+1==154){c_2=-2.936666667;}
    else if( a+1==155){c_2=-2.840833333;}
    else if( a+1==156){c_2=-2.735555556;}
    else if( a+1==157){c_2=-2.629444444;}
    else if( a+1==158){c_2=-2.522222222;}
    else if( a+1==159){c_2=-2.414166667;}
    else if( a+1==160){c_2=-2.305;}
    else if( a+1==161){c_2=-2.195;}
    else if( a+1==162){c_2=-2.084166667;}
    else if( a+1==163){c_2=-1.972777778;}
    else if( a+1==164){c_2=-1.860555556;}
    else if( a+1==165){c_2=-1.747777778;}
    else if( a+1==166){c_2=-1.634444444;}
    else if( a+1==167){c_2=-1.520277778;}
    else if( a+1==168){c_2=-1.405555556;}
    else if( a+1==169){c_2=-1.290277778;}
    else if( a+1==170){c_2=-1.173055556;}
    else if( a+1==171){c_2=-1.058333333;}
    else if( a+1==172){c_2=-0.941666667;}
    else if( a+1==173){c_2=-0.824722222;}
    else if( a+1==174){c_2=-0.7075;}
    else if( a+1==175){c_2=-0.59;}
    else if( a+1==176){c_2=-0.472222222;}
    else if( a+1==177){c_2=-0.354444444;}
    else if( a+1==178){c_2=-0.236388889;}
    else if( a+1==179){c_2=-0.118333333;}
    else if( a+1==180){c_2=0;}
    else if( a+1==181){c_2=0.118333333;}
    else if( a+1==182){c_2=0.236388889;}
    else if( a+1==183){c_2=0.354444444;}
    else if( a+1==184){c_2=0.472222222;}
    else if( a+1==185){c_2=0.59;}
    else if( a+1==186){c_2=0.7075;}
    else if( a+1==187){c_2=0.824722222;}
    else if( a+1==188){c_2=0.941666667;}
    else if( a+1==189){c_2=1.058333333;}
    else if( a+1==190){c_2=1.173055556;}
    else if( a+1==191){c_2=1.290277778;}
    else if( a+1==192){c_2=1.405555556;}
    else if( a+1==193){c_2=1.520277778;}
    else if( a+1==194){c_2=1.634444444;}
    else if( a+1==195){c_2=1.747777778;}
    else if( a+1==196){c_2=1.860555556;}
    else if( a+1==197){c_2=1.972777778;}
    else if( a+1==198){c_2=2.084166667;}
    else if( a+1==199){c_2=2.195;}
    else if( a+1==200){c_2=2.305;}
    else if( a+1==201){c_2=2.414166667;}
    else if( a+1==202){c_2=2.522222222;}
    else if( a+1==203){c_2=2.629444444;}
    else if( a+1==204){c_2=2.735555556;}
    else if( a+1==205){c_2=2.840833333;}
    else if( a+1==206){c_2=2.936666667;}
    else if( a+1==207){c_2=3.048055556;}
    else if( a+1==208){c_2=3.15;}
    else if( a+1==209){c_2=3.250833333;}
    else if( a+1==210){c_2=3.350555556;}
    else if( a+1==211){c_2=3.448888889;}
    else if( a+1==212){c_2=3.546111111;}
    else if( a+1==213){c_2=3.641944444;}
    else if( a+1==214){c_2=3.736666667;}
    else if( a+1==215){c_2=3.83;}
    else if( a+1==216){c_2=3.921944444;}
    else if( a+1==217){c_2=4.012222222;}
    else if( a+1==218){c_2=4.101388889;}
    else if( a+1==219){c_2=4.188888889;}
    else if( a+1==220){c_2=4.275;}
    else if( a+1==221){c_2=4.359444444;}
    else if( a+1==222){c_2=4.442222222;}
    else if( a+1==223){c_2=4.523611111;}
    else if( a+1==224){c_2=4.603333333;}
    else if( a+1==225){c_2=4.676111111;}
    else if( a+1==226){c_2=4.758333333;}
    else if( a+1==227){c_2=4.833333333;}
    else if( a+1==228){c_2=4.906666667;}
    else if( a+1==229){c_2=4.978055556;}
    else if( a+1==230){c_2=5.047777778;}
    else if( a+1==231){c_2=5.115833333;}
    else if( a+1==232){c_2=5.182222222;}
    else if( a+1==233){c_2=5.246944444;}
    else if( a+1==234){c_2=5.311944444;}
    else if( a+1==235){c_2=5.37;}
    else if( a+1==236){c_2=5.428888889;}
    else if( a+1==237){c_2=5.486111111;}
    else if( a+1==238){c_2=5.541388889;}
    else if( a+1==239){c_2=5.595;}
    else if( a+1==240){c_2=5.646666667;}
    else if( a+1==241){c_2=5.696666667;}
    else if( a+1==242){c_2=5.744722222;}
    else if( a+1==243){c_2=5.790555556;}
    else if( a+1==244){c_2=5.834444444;}
    else if( a+1==245){c_2=5.876388889;}
    else if( a+1==246){c_2=5.916388889;}
    else if( a+1==247){c_2=5.954444444;}
    else if( a+1==248){c_2=5.990833333;}
    else if( a+1==249){c_2=6.025;}
    else if( a+1==250){c_2=6.0575;}
    else if( a+1==251){c_2=6.088055556;}
    else if( a+1==252){c_2=6.116666667;}
    else if( a+1==253){c_2=6.143055556;}
    else if( a+1==254){c_2=6.1675;}
    else if( a+1==255){c_2=6.19;}
    else if( a+1==256){c_2=6.210555556;}
    else if( a+1==257){c_2=6.229166667;}
    else if( a+1==258){c_2=6.246944444;}
    else if( a+1==259){c_2=6.260555556;}
    else if( a+1==260){c_2=6.273333333;}
    else if( a+1==261){c_2=6.283888889;}
    else if( a+1==262){c_2=6.292777778;}
    else if( a+1==263){c_2=6.3;}
    else if( a+1==264){c_2=6.300555556;}
    else if( a+1==265){c_2=6.304722222;}
    else if( a+1==266){c_2=6.304722222;}
    else if( a+1==267){c_2=6.307777778;}
    else if( a+1==268){c_2=6.308055556;}
    else if( a+1==269){c_2=6.308888889;}
    else if( a+1==270){c_2=6.293888889;}
    else if( a+1==271){c_2=6.285277778;}
    else if( a+1==272){c_2=6.275;}
    else if( a+1==273){c_2=6.262777778;}
    else if( a+1==274){c_2=6.248611111;}
    else if( a+1==275){c_2=6.232777778;}
    else if( a+1==276){c_2=6.215;}
    else if( a+1==277){c_2=6.195555556;}
    else if( a+1==278){c_2=6.174166667;}
    else if( a+1==279){c_2=6.150833333;}
    else if( a+1==280){c_2=6.125833333;}
    else if( a+1==281){c_2=6.098888889;}
    else if( a+1==282){c_2=6.070277778;}
    else if( a+1==283){c_2=6.04;}
    else if( a+1==284){c_2=6.008055556;}
    else if( a+1==285){c_2=5.974166667;}
    else if( a+1==286){c_2=5.938611111;}
    else if( a+1==287){c_2=5.901388889;}
    else if( a+1==288){c_2=5.8625;}
    else if( a+1==289){c_2=5.821944444;}
    else if( a+1==290){c_2=5.78;}
    else if( a+1==291){c_2=5.736388889;}
    else if( a+1==292){c_2=5.691388889;}
    else if( a+1==293){c_2=5.644166667;}
    else if( a+1==294){c_2=5.595555556;}
    else if( a+1==295){c_2=5.545555556;}
    else if( a+1==296){c_2=5.494166667;}
    else if( a+1==297){c_2=5.441111111;}
    else if( a+1==298){c_2=5.386388889;}
    else if( a+1==299){c_2=5.330277778;}
    else if( a+1==300){c_2=5.2725;}
    else if( a+1==301){c_2=5.213333333;}
    else if( a+1==302){c_2=5.152777778;}
    else if( a+1==303){c_2=5.090833333;}
    else if( a+1==304){c_2=5.027777778;}
    else if( a+1==305){c_2=4.963333333;}
    else if( a+1==306){c_2=4.8975;}
    else if( a+1==307){c_2=4.830277778;}
    else if( a+1==308){c_2=4.761666667;}
    else if( a+1==309){c_2=4.691944444;}
    else if( a+1==310){c_2=4.621111111;}
    else if( a+1==311){c_2=4.548888889;}
    else if( a+1==312){c_2=4.475555556;}
    else if( a+1==313){c_2=4.401111111;}
    else if( a+1==314){c_2=4.325277778;}
    else if( a+1==315){c_2=4.242777778;}
    else if( a+1==316){c_2=4.170277778;}
    else if( a+1==317){c_2=4.091111111;}
    else if( a+1==318){c_2=4.010833333;}
    else if( a+1==319){c_2=3.929722222;}
    else if( a+1==320){c_2=3.8475;}
    else if( a+1==321){c_2=3.764444444;}
    else if( a+1==322){c_2=3.680277778;}
    else if( a+1==323){c_2=3.595277778;}
    else if( a+1==324){c_2=3.509166667;}
    else if( a+1==325){c_2=3.421944444;}
    else if( a+1==326){c_2=3.333888889;}
    else if( a+1==327){c_2=3.245;}
    else if( a+1==328){c_2=3.155555556;}
    else if( a+1==329){c_2=3.065277778;}
    else if( a+1==330){c_2=2.974166667;}
    else if( a+1==331){c_2=2.882222222;}
    else if( a+1==332){c_2=2.789444444;}
    else if( a+1==333){c_2=2.696111111;}
    else if( a+1==334){c_2=2.602222222;}
    else if( a+1==335){c_2=2.507777778;}
    else if( a+1==336){c_2=2.4125;}
    else if( a+1==337){c_2=2.316666667;}
    else if( a+1==338){c_2=2.220277778;}
    else if( a+1==339){c_2=2.123055556;}
    else if( a+1==340){c_2=2.025277778;}
    else if( a+1==341){c_2=1.926944444;}
    else if( a+1==342){c_2=1.828333333;}
    else if( a+1==343){c_2=1.729166667;}
    else if( a+1==344){c_2=1.629722222;}
    else if( a+1==345){c_2=1.53;}
    else if( a+1==346){c_2=1.429722222;}
    else if( a+1==347){c_2=1.329166667;}
    else if( a+1==348){c_2=1.228333333;}
    else if( a+1==349){c_2=1.126944444;}
    else if( a+1==350){c_2=1.025277778;}
    else if( a+1==351){c_2=0.923333333;}
    else if( a+1==352){c_2=0.821388889;}
    else if( a+1==353){c_2=0.719166667;}
    else if( a+1==354){c_2=0.616944444;}
    else if( a+1==355){c_2=0.514444444;}
    else if( a+1==356){c_2=0.411666667;}
    else if( a+1==357){c_2=0.308888889;}
    else if( a+1==358){c_2=0.206111111;}
    else if( a+1==359){c_2=0.069722222;}
    else if( a+1==360){c_2=0;}
    else if( a+1==361){c_2=-0.069722222;}
    else {c_2=999999999;}
    
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var tdlc2 = ftdlc2(intdalil3, dalil3);
    var kwq_3 = MOD(kwq_2+tdlc2+360,360);
    
    var dalil4 = MOD(kwq_3-thulsyams+360,360);
    var intdalil4 = Math.floor(dalil4);
    
    
    var ftdlc3 = function (a,b){
    
    var c_1
    
    if( a==0){c_1=0;}
    else if( a==1){c_1=0.020555556;}
    else if( a==2){c_1=0.040833333;}
    else if( a==3){c_1=0.061111111;}
    else if( a==4){c_1=0.081388889;}
    else if( a==5){c_1=0.101666667;}
    else if( a==6){c_1=0.121666667;}
    else if( a==7){c_1=0.141666667;}
    else if( a==8){c_1=0.161388889;}
    else if( a==9){c_1=0.181111111;}
    else if( a==10){c_1=0.200277778;}
    else if( a==11){c_1=0.219166667;}
    else if( a==12){c_1=0.237777778;}
    else if( a==13){c_1=0.256111111;}
    else if( a==14){c_1=0.274444444;}
    else if( a==15){c_1=0.2925;}
    else if( a==16){c_1=0.31;}
    else if( a==17){c_1=0.326944444;}
    else if( a==18){c_1=0.343333333;}
    else if( a==19){c_1=0.358888889;}
    else if( a==20){c_1=0.375;}
    else if( a==21){c_1=0.390277778;}
    else if( a==22){c_1=0.405;}
    else if( a==23){c_1=0.419166667;}
    else if( a==24){c_1=0.432777778;}
    else if( a==25){c_1=0.445833333;}
    else if( a==26){c_1=0.458333333;}
    else if( a==27){c_1=0.470277778;}
    else if( a==28){c_1=0.481666667;}
    else if( a==29){c_1=0.4925;}
    else if( a==30){c_1=0.502777778;}
    else if( a==31){c_1=0.512222222;}
    else if( a==32){c_1=0.521111111;}
    else if( a==33){c_1=0.529166667;}
    else if( a==34){c_1=0.536666667;}
    else if( a==35){c_1=0.543333333;}
    else if( a==36){c_1=0.549444444;}
    else if( a==37){c_1=0.555;}
    else if( a==38){c_1=0.559722222;}
    else if( a==39){c_1=0.563611111;}
    else if( a==40){c_1=0.566944444;}
    else if( a==41){c_1=0.569444444;}
    else if( a==42){c_1=0.571388889;}
    else if( a==43){c_1=0.5725;}
    else if( a==44){c_1=0.573055556;}
    else if( a==45){c_1=0.572777778;}
    else if( a==46){c_1=0.571666667;}
    else if( a==47){c_1=0.57;}
    else if( a==48){c_1=0.5675;}
    else if( a==49){c_1=0.564444444;}
    else if( a==50){c_1=0.560833333;}
    else if( a==51){c_1=0.556388889;}
    else if( a==52){c_1=0.551111111;}
    else if( a==53){c_1=0.545277778;}
    else if( a==54){c_1=0.538611111;}
    else if( a==55){c_1=0.531111111;}
    else if( a==56){c_1=0.522777778;}
    else if( a==57){c_1=0.514444444;}
    else if( a==58){c_1=0.505277778;}
    else if( a==59){c_1=0.495555556;}
    else if( a==60){c_1=0.485;}
    else if( a==61){c_1=0.473888889;}
    else if( a==62){c_1=0.462222222;}
    else if( a==63){c_1=0.45;}
    else if( a==64){c_1=0.437222222;}
    else if( a==65){c_1=0.423611111;}
    else if( a==66){c_1=0.409722222;}
    else if( a==67){c_1=0.395277778;}
    else if( a==68){c_1=0.380277778;}
    else if( a==69){c_1=0.365;}
    else if( a==70){c_1=0.349166667;}
    else if( a==71){c_1=0.332777778;}
    else if( a==72){c_1=0.316111111;}
    else if( a==73){c_1=0.298888889;}
    else if( a==74){c_1=0.281388889;}
    else if( a==75){c_1=0.263611111;}
    else if( a==76){c_1=0.245555556;}
    else if( a==77){c_1=0.226944444;}
    else if( a==78){c_1=0.208055556;}
    else if( a==79){c_1=0.188888889;}
    else if( a==80){c_1=0.169444444;}
    else if( a==81){c_1=0.15;}
    else if( a==82){c_1=0.130277778;}
    else if( a==83){c_1=0.110277778;}
    else if( a==84){c_1=0.090277778;}
    else if( a==85){c_1=0.07;}
    else if( a==86){c_1=0.049722222;}
    else if( a==87){c_1=0.029166667;}
    else if( a==88){c_1=0.008611111;}
    else if( a==89){c_1=0.011944444;}
    else if( a==90){c_1=0.0325;}
    else if( a==91){c_1=0.053055556;}
    else if( a==92){c_1=0.073611111;}
    else if( a==93){c_1=0.093888889;}
    else if( a==94){c_1=0.114444444;}
    else if( a==95){c_1=0.134722222;}
    else if( a==96){c_1=0.154722222;}
    else if( a==97){c_1=0.180277778;}
    else if( a==98){c_1=0.194444444;}
    else if( a==99){c_1=0.214166667;}
    else if( a==100){c_1=0.233611111;}
    else if( a==101){c_1=0.252777778;}
    else if( a==102){c_1=0.271666667;}
    else if( a==103){c_1=0.290277778;}
    else if( a==104){c_1=0.308333333;}
    else if( a==105){c_1=0.326111111;}
    else if( a==106){c_1=0.343611111;}
    else if( a==107){c_1=0.360833333;}
    else if( a==108){c_1=0.3775;}
    else if( a==109){c_1=0.393888889;}
    else if( a==110){c_1=0.41;}
    else if( a==111){c_1=0.425555556;}
    else if( a==112){c_1=0.440555556;}
    else if( a==113){c_1=0.455;}
    else if( a==114){c_1=0.468888889;}
    else if( a==115){c_1=0.482222222;}
    else if( a==116){c_1=0.495;}
    else if( a==117){c_1=0.507222222;}
    else if( a==118){c_1=0.518888889;}
    else if( a==119){c_1=0.53;}
    else if( a==120){c_1=0.540555556;}
    else if( a==121){c_1=0.550555556;}
    else if( a==122){c_1=0.559722222;}
    else if( a==123){c_1=0.576388889;}
    else if( a==124){c_1=0.576388889;}
    else if( a==125){c_1=0.583611111;}
    else if( a==126){c_1=0.590277778;}
    else if( a==127){c_1=0.596111111;}
    else if( a==128){c_1=0.601388889;}
    else if( a==129){c_1=0.605833333;}
    else if( a==130){c_1=0.609444444;}
    else if( a==131){c_1=0.6125;}
    else if( a==132){c_1=0.615;}
    else if( a==133){c_1=0.616666667;}
    else if( a==134){c_1=0.6175;}
    else if( a==135){c_1=0.618611111;}
    else if( a==136){c_1=0.617222222;}
    else if( a==137){c_1=0.616111111;}
    else if( a==138){c_1=0.614166667;}
    else if( a==139){c_1=0.611388889;}
    else if( a==140){c_1=0.607777778;}
    else if( a==141){c_1=0.603611111;}
    else if( a==142){c_1=0.598611111;}
    else if( a==143){c_1=0.593055556;}
    else if( a==144){c_1=0.586666667;}
    else if( a==145){c_1=0.579444444;}
    else if( a==146){c_1=0.571666667;}
    else if( a==147){c_1=0.563055556;}
    else if( a==148){c_1=0.553888889;}
    else if( a==149){c_1=0.544166667;}
    else if( a==150){c_1=0.533888889;}
    else if( a==151){c_1=0.525833333;}
    else if( a==152){c_1=0.511388889;}
    else if( a==153){c_1=0.499166667;}
    else if( a==154){c_1=0.486111111;}
    else if( a==155){c_1=0.4725;}
    else if( a==156){c_1=0.458333333;}
    else if( a==157){c_1=0.443611111;}
    else if( a==158){c_1=0.428333333;}
    else if( a==159){c_1=0.4125;}
    else if( a==160){c_1=0.396388889;}
    else if( a==161){c_1=0.379722222;}
    else if( a==162){c_1=0.3625;}
    else if( a==163){c_1=0.345;}
    else if( a==164){c_1=0.326944444;}
    else if( a==165){c_1=0.308333333;}
    else if( a==166){c_1=0.289444444;}
    else if( a==167){c_1=0.270277778;}
    else if( a==168){c_1=0.250833333;}
    else if( a==169){c_1=0.231111111;}
    else if( a==170){c_1=0.211111111;}
    else if( a==171){c_1=0.190833333;}
    else if( a==172){c_1=0.170277778;}
    else if( a==173){c_1=0.149444444;}
    else if( a==174){c_1=0.128333333;}
    else if( a==175){c_1=0.107222222;}
    else if( a==176){c_1=0.085833333;}
    else if( a==177){c_1=0.064444444;}
    else if( a==178){c_1=0.043055556;}
    else if( a==179){c_1=0.021666667;}
    else if( a==180){c_1=0;}
    else if( a==181){c_1=-0.021666667;}
    else if( a==182){c_1=-0.043055556;}
    else if( a==183){c_1=-0.064444444;}
    else if( a==184){c_1=-0.085833333;}
    else if( a==185){c_1=-0.107222222;}
    else if( a==186){c_1=-0.128333333;}
    else if( a==187){c_1=-0.149444444;}
    else if( a==188){c_1=-0.170277778;}
    else if( a==189){c_1=-0.190833333;}
    else if( a==190){c_1=-0.211111111;}
    else if( a==191){c_1=-0.231111111;}
    else if( a==192){c_1=-0.250833333;}
    else if( a==193){c_1=-0.270277778;}
    else if( a==194){c_1=-0.289444444;}
    else if( a==195){c_1=-0.308333333;}
    else if( a==196){c_1=-0.326944444;}
    else if( a==197){c_1=-0.345;}
    else if( a==198){c_1=-0.3625;}
    else if( a==199){c_1=-0.379722222;}
    else if( a==200){c_1=-0.396388889;}
    else if( a==201){c_1=-0.4125;}
    else if( a==202){c_1=-0.428333333;}
    else if( a==203){c_1=-0.443611111;}
    else if( a==204){c_1=-0.458333333;}
    else if( a==205){c_1=-0.4725;}
    else if( a==206){c_1=-0.486111111;}
    else if( a==207){c_1=-0.499166667;}
    else if( a==208){c_1=-0.511388889;}
    else if( a==209){c_1=-0.525833333;}
    else if( a==210){c_1=-0.533888889;}
    else if( a==211){c_1=-0.544166667;}
    else if( a==212){c_1=-0.553888889;}
    else if( a==213){c_1=-0.563055556;}
    else if( a==214){c_1=-0.571666667;}
    else if( a==215){c_1=-0.579444444;}
    else if( a==216){c_1=-0.586666667;}
    else if( a==217){c_1=-0.593055556;}
    else if( a==218){c_1=-0.598611111;}
    else if( a==219){c_1=-0.603611111;}
    else if( a==220){c_1=-0.607777778;}
    else if( a==221){c_1=-0.611388889;}
    else if( a==222){c_1=-0.614166667;}
    else if( a==223){c_1=-0.616111111;}
    else if( a==224){c_1=-0.617222222;}
    else if( a==225){c_1=-0.618611111;}
    else if( a==226){c_1=-0.6175;}
    else if( a==227){c_1=-0.616666667;}
    else if( a==228){c_1=-0.615;}
    else if( a==229){c_1=-0.6125;}
    else if( a==230){c_1=-0.609444444;}
    else if( a==231){c_1=-0.605833333;}
    else if( a==232){c_1=-0.601388889;}
    else if( a==233){c_1=-0.596111111;}
    else if( a==234){c_1=-0.590277778;}
    else if( a==235){c_1=-0.583611111;}
    else if( a==236){c_1=-0.576388889;}
    else if( a==237){c_1=-0.576388889;}
    else if( a==238){c_1=-0.559722222;}
    else if( a==239){c_1=-0.550555556;}
    else if( a==240){c_1=-0.540555556;}
    else if( a==241){c_1=-0.53;}
    else if( a==242){c_1=-0.518888889;}
    else if( a==243){c_1=-0.507222222;}
    else if( a==244){c_1=-0.495;}
    else if( a==245){c_1=-0.482222222;}
    else if( a==246){c_1=-0.468888889;}
    else if( a==247){c_1=-0.455;}
    else if( a==248){c_1=-0.440555556;}
    else if( a==249){c_1=-0.425555556;}
    else if( a==250){c_1=-0.41;}
    else if( a==251){c_1=-0.393888889;}
    else if( a==252){c_1=-0.3775;}
    else if( a==253){c_1=-0.360833333;}
    else if( a==254){c_1=-0.343611111;}
    else if( a==255){c_1=-0.326111111;}
    else if( a==256){c_1=-0.308333333;}
    else if( a==257){c_1=-0.290277778;}
    else if( a==258){c_1=-0.271666667;}
    else if( a==259){c_1=-0.252777778;}
    else if( a==260){c_1=-0.233611111;}
    else if( a==261){c_1=-0.214166667;}
    else if( a==262){c_1=-0.194444444;}
    else if( a==263){c_1=-0.180277778;}
    else if( a==264){c_1=-0.154722222;}
    else if( a==265){c_1=-0.134722222;}
    else if( a==266){c_1=-0.114444444;}
    else if( a==267){c_1=-0.093888889;}
    else if( a==268){c_1=-0.073611111;}
    else if( a==269){c_1=-0.053055556;}
    else if( a==270){c_1=-0.0325;}
    else if( a==271){c_1=-0.011944444;}
    else if( a==272){c_1=-0.008611111;}
    else if( a==273){c_1=-0.029166667;}
    else if( a==274){c_1=-0.049722222;}
    else if( a==275){c_1=-0.07;}
    else if( a==276){c_1=-0.090277778;}
    else if( a==277){c_1=-0.110277778;}
    else if( a==278){c_1=-0.130277778;}
    else if( a==279){c_1=-0.15;}
    else if( a==280){c_1=-0.169444444;}
    else if( a==281){c_1=-0.188888889;}
    else if( a==282){c_1=-0.208055556;}
    else if( a==283){c_1=-0.226944444;}
    else if( a==284){c_1=-0.245555556;}
    else if( a==285){c_1=-0.263611111;}
    else if( a==286){c_1=-0.281388889;}
    else if( a==287){c_1=-0.298888889;}
    else if( a==288){c_1=-0.316111111;}
    else if( a==289){c_1=-0.332777778;}
    else if( a==290){c_1=-0.349166667;}
    else if( a==291){c_1=-0.365;}
    else if( a==292){c_1=-0.380277778;}
    else if( a==293){c_1=-0.395277778;}
    else if( a==294){c_1=-0.409722222;}
    else if( a==295){c_1=-0.423611111;}
    else if( a==296){c_1=-0.437222222;}
    else if( a==297){c_1=-0.45;}
    else if( a==298){c_1=-0.462222222;}
    else if( a==299){c_1=-0.473888889;}
    else if( a==300){c_1=-0.485;}
    else if( a==301){c_1=-0.495555556;}
    else if( a==302){c_1=-0.505277778;}
    else if( a==303){c_1=-0.514444444;}
    else if( a==304){c_1=-0.522777778;}
    else if( a==305){c_1=-0.531111111;}
    else if( a==306){c_1=-0.538611111;}
    else if( a==307){c_1=-0.545277778;}
    else if( a==308){c_1=-0.551111111;}
    else if( a==309){c_1=-0.556388889;}
    else if( a==310){c_1=-0.560833333;}
    else if( a==311){c_1=-0.564444444;}
    else if( a==312){c_1=-0.5675;}
    else if( a==313){c_1=-0.57;}
    else if( a==314){c_1=-0.571666667;}
    else if( a==315){c_1=-0.573055556;}
    else if( a==316){c_1=-0.572777778;}
    else if( a==317){c_1=-0.5725;}
    else if( a==318){c_1=-0.571388889;}
    else if( a==319){c_1=-0.569444444;}
    else if( a==320){c_1=-0.566944444;}
    else if( a==321){c_1=-0.563611111;}
    else if( a==322){c_1=-0.559722222;}
    else if( a==323){c_1=-0.555;}
    else if( a==324){c_1=-0.549444444;}
    else if( a==325){c_1=-0.543333333;}
    else if( a==326){c_1=-0.536666667;}
    else if( a==327){c_1=-0.529166667;}
    else if( a==328){c_1=-0.521111111;}
    else if( a==329){c_1=-0.512222222;}
    else if( a==330){c_1=-0.502777778;}
    else if( a==331){c_1=-0.4925;}
    else if( a==332){c_1=-0.481666667;}
    else if( a==333){c_1=-0.470277778;}
    else if( a==334){c_1=-0.458333333;}
    else if( a==335){c_1=-0.445833333;}
    else if( a==336){c_1=-0.432777778;}
    else if( a==337){c_1=-0.419166667;}
    else if( a==338){c_1=-0.405;}
    else if( a==339){c_1=-0.390277778;}
    else if( a==340){c_1=-0.375;}
    else if( a==341){c_1=-0.358888889;}
    else if( a==342){c_1=-0.343333333;}
    else if( a==343){c_1=-0.326944444;}
    else if( a==344){c_1=-0.31;}
    else if( a==345){c_1=-0.2925;}
    else if( a==346){c_1=-0.274444444;}
    else if( a==347){c_1=-0.256111111;}
    else if( a==348){c_1=-0.237777778;}
    else if( a==349){c_1=-0.219166667;}
    else if( a==350){c_1=-0.200277778;}
    else if( a==351){c_1=-0.181111111;}
    else if( a==352){c_1=-0.161388889;}
    else if( a==353){c_1=-0.141666667;}
    else if( a==354){c_1=-0.121666667;}
    else if( a==355){c_1=-0.101666667;}
    else if( a==356){c_1=-0.081388889;}
    else if( a==357){c_1=-0.061111111;}
    else if( a==358){c_1=-0.040833333;}
    else if( a==359){c_1=-0.020555556;}
    else if( a==360){c_1=0;}
    else if( a==361){c_1=0.020555556;}
    else {c_1=99999999;}
    
    var c_2
    
    if( a+1==0){c_2=0;}
    else if( a+1==1){c_2=0.020555556;}
    else if( a+1==2){c_2=0.040833333;}
    else if( a+1==3){c_2=0.061111111;}
    else if( a+1==4){c_2=0.081388889;}
    else if( a+1==5){c_2=0.101666667;}
    else if( a+1==6){c_2=0.121666667;}
    else if( a+1==7){c_2=0.141666667;}
    else if( a+1==8){c_2=0.161388889;}
    else if( a+1==9){c_2=0.181111111;}
    else if( a+1==10){c_2=0.200277778;}
    else if( a+1==11){c_2=0.219166667;}
    else if( a+1==12){c_2=0.237777778;}
    else if( a+1==13){c_2=0.256111111;}
    else if( a+1==14){c_2=0.274444444;}
    else if( a+1==15){c_2=0.2925;}
    else if( a+1==16){c_2=0.31;}
    else if( a+1==17){c_2=0.326944444;}
    else if( a+1==18){c_2=0.343333333;}
    else if( a+1==19){c_2=0.358888889;}
    else if( a+1==20){c_2=0.375;}
    else if( a+1==21){c_2=0.390277778;}
    else if( a+1==22){c_2=0.405;}
    else if( a+1==23){c_2=0.419166667;}
    else if( a+1==24){c_2=0.432777778;}
    else if( a+1==25){c_2=0.445833333;}
    else if( a+1==26){c_2=0.458333333;}
    else if( a+1==27){c_2=0.470277778;}
    else if( a+1==28){c_2=0.481666667;}
    else if( a+1==29){c_2=0.4925;}
    else if( a+1==30){c_2=0.502777778;}
    else if( a+1==31){c_2=0.512222222;}
    else if( a+1==32){c_2=0.521111111;}
    else if( a+1==33){c_2=0.529166667;}
    else if( a+1==34){c_2=0.536666667;}
    else if( a+1==35){c_2=0.543333333;}
    else if( a+1==36){c_2=0.549444444;}
    else if( a+1==37){c_2=0.555;}
    else if( a+1==38){c_2=0.559722222;}
    else if( a+1==39){c_2=0.563611111;}
    else if( a+1==40){c_2=0.566944444;}
    else if( a+1==41){c_2=0.569444444;}
    else if( a+1==42){c_2=0.571388889;}
    else if( a+1==43){c_2=0.5725;}
    else if( a+1==44){c_2=0.573055556;}
    else if( a+1==45){c_2=0.572777778;}
    else if( a+1==46){c_2=0.571666667;}
    else if( a+1==47){c_2=0.57;}
    else if( a+1==48){c_2=0.5675;}
    else if( a+1==49){c_2=0.564444444;}
    else if( a+1==50){c_2=0.560833333;}
    else if( a+1==51){c_2=0.556388889;}
    else if( a+1==52){c_2=0.551111111;}
    else if( a+1==53){c_2=0.545277778;}
    else if( a+1==54){c_2=0.538611111;}
    else if( a+1==55){c_2=0.531111111;}
    else if( a+1==56){c_2=0.522777778;}
    else if( a+1==57){c_2=0.514444444;}
    else if( a+1==58){c_2=0.505277778;}
    else if( a+1==59){c_2=0.495555556;}
    else if( a+1==60){c_2=0.485;}
    else if( a+1==61){c_2=0.473888889;}
    else if( a+1==62){c_2=0.462222222;}
    else if( a+1==63){c_2=0.45;}
    else if( a+1==64){c_2=0.437222222;}
    else if( a+1==65){c_2=0.423611111;}
    else if( a+1==66){c_2=0.409722222;}
    else if( a+1==67){c_2=0.395277778;}
    else if( a+1==68){c_2=0.380277778;}
    else if( a+1==69){c_2=0.365;}
    else if( a+1==70){c_2=0.349166667;}
    else if( a+1==71){c_2=0.332777778;}
    else if( a+1==72){c_2=0.316111111;}
    else if( a+1==73){c_2=0.298888889;}
    else if( a+1==74){c_2=0.281388889;}
    else if( a+1==75){c_2=0.263611111;}
    else if( a+1==76){c_2=0.245555556;}
    else if( a+1==77){c_2=0.226944444;}
    else if( a+1==78){c_2=0.208055556;}
    else if( a+1==79){c_2=0.188888889;}
    else if( a+1==80){c_2=0.169444444;}
    else if( a+1==81){c_2=0.15;}
    else if( a+1==82){c_2=0.130277778;}
    else if( a+1==83){c_2=0.110277778;}
    else if( a+1==84){c_2=0.090277778;}
    else if( a+1==85){c_2=0.07;}
    else if( a+1==86){c_2=0.049722222;}
    else if( a+1==87){c_2=0.029166667;}
    else if( a+1==88){c_2=0.008611111;}
    else if( a+1==89){c_2=0.011944444;}
    else if( a+1==90){c_2=0.0325;}
    else if( a+1==91){c_2=0.053055556;}
    else if( a+1==92){c_2=0.073611111;}
    else if( a+1==93){c_2=0.093888889;}
    else if( a+1==94){c_2=0.114444444;}
    else if( a+1==95){c_2=0.134722222;}
    else if( a+1==96){c_2=0.154722222;}
    else if( a+1==97){c_2=0.180277778;}
    else if( a+1==98){c_2=0.194444444;}
    else if( a+1==99){c_2=0.214166667;}
    else if( a+1==100){c_2=0.233611111;}
    else if( a+1==101){c_2=0.252777778;}
    else if( a+1==102){c_2=0.271666667;}
    else if( a+1==103){c_2=0.290277778;}
    else if( a+1==104){c_2=0.308333333;}
    else if( a+1==105){c_2=0.326111111;}
    else if( a+1==106){c_2=0.343611111;}
    else if( a+1==107){c_2=0.360833333;}
    else if( a+1==108){c_2=0.3775;}
    else if( a+1==109){c_2=0.393888889;}
    else if( a+1==110){c_2=0.41;}
    else if( a+1==111){c_2=0.425555556;}
    else if( a+1==112){c_2=0.440555556;}
    else if( a+1==113){c_2=0.455;}
    else if( a+1==114){c_2=0.468888889;}
    else if( a+1==115){c_2=0.482222222;}
    else if( a+1==116){c_2=0.495;}
    else if( a+1==117){c_2=0.507222222;}
    else if( a+1==118){c_2=0.518888889;}
    else if( a+1==119){c_2=0.53;}
    else if( a+1==120){c_2=0.540555556;}
    else if( a+1==121){c_2=0.550555556;}
    else if( a+1==122){c_2=0.559722222;}
    else if( a+1==123){c_2=0.576388889;}
    else if( a+1==124){c_2=0.576388889;}
    else if( a+1==125){c_2=0.583611111;}
    else if( a+1==126){c_2=0.590277778;}
    else if( a+1==127){c_2=0.596111111;}
    else if( a+1==128){c_2=0.601388889;}
    else if( a+1==129){c_2=0.605833333;}
    else if( a+1==130){c_2=0.609444444;}
    else if( a+1==131){c_2=0.6125;}
    else if( a+1==132){c_2=0.615;}
    else if( a+1==133){c_2=0.616666667;}
    else if( a+1==134){c_2=0.6175;}
    else if( a+1==135){c_2=0.618611111;}
    else if( a+1==136){c_2=0.617222222;}
    else if( a+1==137){c_2=0.616111111;}
    else if( a+1==138){c_2=0.614166667;}
    else if( a+1==139){c_2=0.611388889;}
    else if( a+1==140){c_2=0.607777778;}
    else if( a+1==141){c_2=0.603611111;}
    else if( a+1==142){c_2=0.598611111;}
    else if( a+1==143){c_2=0.593055556;}
    else if( a+1==144){c_2=0.586666667;}
    else if( a+1==145){c_2=0.579444444;}
    else if( a+1==146){c_2=0.571666667;}
    else if( a+1==147){c_2=0.563055556;}
    else if( a+1==148){c_2=0.553888889;}
    else if( a+1==149){c_2=0.544166667;}
    else if( a+1==150){c_2=0.533888889;}
    else if( a+1==151){c_2=0.525833333;}
    else if( a+1==152){c_2=0.511388889;}
    else if( a+1==153){c_2=0.499166667;}
    else if( a+1==154){c_2=0.486111111;}
    else if( a+1==155){c_2=0.4725;}
    else if( a+1==156){c_2=0.458333333;}
    else if( a+1==157){c_2=0.443611111;}
    else if( a+1==158){c_2=0.428333333;}
    else if( a+1==159){c_2=0.4125;}
    else if( a+1==160){c_2=0.396388889;}
    else if( a+1==161){c_2=0.379722222;}
    else if( a+1==162){c_2=0.3625;}
    else if( a+1==163){c_2=0.345;}
    else if( a+1==164){c_2=0.326944444;}
    else if( a+1==165){c_2=0.308333333;}
    else if( a+1==166){c_2=0.289444444;}
    else if( a+1==167){c_2=0.270277778;}
    else if( a+1==168){c_2=0.250833333;}
    else if( a+1==169){c_2=0.231111111;}
    else if( a+1==170){c_2=0.211111111;}
    else if( a+1==171){c_2=0.190833333;}
    else if( a+1==172){c_2=0.170277778;}
    else if( a+1==173){c_2=0.149444444;}
    else if( a+1==174){c_2=0.128333333;}
    else if( a+1==175){c_2=0.107222222;}
    else if( a+1==176){c_2=0.085833333;}
    else if( a+1==177){c_2=0.064444444;}
    else if( a+1==178){c_2=0.043055556;}
    else if( a+1==179){c_2=0.021666667;}
    else if( a+1==180){c_2=0;}
    else if( a+1==181){c_2=-0.021666667;}
    else if( a+1==182){c_2=-0.043055556;}
    else if( a+1==183){c_2=-0.064444444;}
    else if( a+1==184){c_2=-0.085833333;}
    else if( a+1==185){c_2=-0.107222222;}
    else if( a+1==186){c_2=-0.128333333;}
    else if( a+1==187){c_2=-0.149444444;}
    else if( a+1==188){c_2=-0.170277778;}
    else if( a+1==189){c_2=-0.190833333;}
    else if( a+1==190){c_2=-0.211111111;}
    else if( a+1==191){c_2=-0.231111111;}
    else if( a+1==192){c_2=-0.250833333;}
    else if( a+1==193){c_2=-0.270277778;}
    else if( a+1==194){c_2=-0.289444444;}
    else if( a+1==195){c_2=-0.308333333;}
    else if( a+1==196){c_2=-0.326944444;}
    else if( a+1==197){c_2=-0.345;}
    else if( a+1==198){c_2=-0.3625;}
    else if( a+1==199){c_2=-0.379722222;}
    else if( a+1==200){c_2=-0.396388889;}
    else if( a+1==201){c_2=-0.4125;}
    else if( a+1==202){c_2=-0.428333333;}
    else if( a+1==203){c_2=-0.443611111;}
    else if( a+1==204){c_2=-0.458333333;}
    else if( a+1==205){c_2=-0.4725;}
    else if( a+1==206){c_2=-0.486111111;}
    else if( a+1==207){c_2=-0.499166667;}
    else if( a+1==208){c_2=-0.511388889;}
    else if( a+1==209){c_2=-0.525833333;}
    else if( a+1==210){c_2=-0.533888889;}
    else if( a+1==211){c_2=-0.544166667;}
    else if( a+1==212){c_2=-0.553888889;}
    else if( a+1==213){c_2=-0.563055556;}
    else if( a+1==214){c_2=-0.571666667;}
    else if( a+1==215){c_2=-0.579444444;}
    else if( a+1==216){c_2=-0.586666667;}
    else if( a+1==217){c_2=-0.593055556;}
    else if( a+1==218){c_2=-0.598611111;}
    else if( a+1==219){c_2=-0.603611111;}
    else if( a+1==220){c_2=-0.607777778;}
    else if( a+1==221){c_2=-0.611388889;}
    else if( a+1==222){c_2=-0.614166667;}
    else if( a+1==223){c_2=-0.616111111;}
    else if( a+1==224){c_2=-0.617222222;}
    else if( a+1==225){c_2=-0.618611111;}
    else if( a+1==226){c_2=-0.6175;}
    else if( a+1==227){c_2=-0.616666667;}
    else if( a+1==228){c_2=-0.615;}
    else if( a+1==229){c_2=-0.6125;}
    else if( a+1==230){c_2=-0.609444444;}
    else if( a+1==231){c_2=-0.605833333;}
    else if( a+1==232){c_2=-0.601388889;}
    else if( a+1==233){c_2=-0.596111111;}
    else if( a+1==234){c_2=-0.590277778;}
    else if( a+1==235){c_2=-0.583611111;}
    else if( a+1==236){c_2=-0.576388889;}
    else if( a+1==237){c_2=-0.576388889;}
    else if( a+1==238){c_2=-0.559722222;}
    else if( a+1==239){c_2=-0.550555556;}
    else if( a+1==240){c_2=-0.540555556;}
    else if( a+1==241){c_2=-0.53;}
    else if( a+1==242){c_2=-0.518888889;}
    else if( a+1==243){c_2=-0.507222222;}
    else if( a+1==244){c_2=-0.495;}
    else if( a+1==245){c_2=-0.482222222;}
    else if( a+1==246){c_2=-0.468888889;}
    else if( a+1==247){c_2=-0.455;}
    else if( a+1==248){c_2=-0.440555556;}
    else if( a+1==249){c_2=-0.425555556;}
    else if( a+1==250){c_2=-0.41;}
    else if( a+1==251){c_2=-0.393888889;}
    else if( a+1==252){c_2=-0.3775;}
    else if( a+1==253){c_2=-0.360833333;}
    else if( a+1==254){c_2=-0.343611111;}
    else if( a+1==255){c_2=-0.326111111;}
    else if( a+1==256){c_2=-0.308333333;}
    else if( a+1==257){c_2=-0.290277778;}
    else if( a+1==258){c_2=-0.271666667;}
    else if( a+1==259){c_2=-0.252777778;}
    else if( a+1==260){c_2=-0.233611111;}
    else if( a+1==261){c_2=-0.214166667;}
    else if( a+1==262){c_2=-0.194444444;}
    else if( a+1==263){c_2=-0.180277778;}
    else if( a+1==264){c_2=-0.154722222;}
    else if( a+1==265){c_2=-0.134722222;}
    else if( a+1==266){c_2=-0.114444444;}
    else if( a+1==267){c_2=-0.093888889;}
    else if( a+1==268){c_2=-0.073611111;}
    else if( a+1==269){c_2=-0.053055556;}
    else if( a+1==270){c_2=-0.0325;}
    else if( a+1==271){c_2=-0.011944444;}
    else if( a+1==272){c_2=-0.008611111;}
    else if( a+1==273){c_2=-0.029166667;}
    else if( a+1==274){c_2=-0.049722222;}
    else if( a+1==275){c_2=-0.07;}
    else if( a+1==276){c_2=-0.090277778;}
    else if( a+1==277){c_2=-0.110277778;}
    else if( a+1==278){c_2=-0.130277778;}
    else if( a+1==279){c_2=-0.15;}
    else if( a+1==280){c_2=-0.169444444;}
    else if( a+1==281){c_2=-0.188888889;}
    else if( a+1==282){c_2=-0.208055556;}
    else if( a+1==283){c_2=-0.226944444;}
    else if( a+1==284){c_2=-0.245555556;}
    else if( a+1==285){c_2=-0.263611111;}
    else if( a+1==286){c_2=-0.281388889;}
    else if( a+1==287){c_2=-0.298888889;}
    else if( a+1==288){c_2=-0.316111111;}
    else if( a+1==289){c_2=-0.332777778;}
    else if( a+1==290){c_2=-0.349166667;}
    else if( a+1==291){c_2=-0.365;}
    else if( a+1==292){c_2=-0.380277778;}
    else if( a+1==293){c_2=-0.395277778;}
    else if( a+1==294){c_2=-0.409722222;}
    else if( a+1==295){c_2=-0.423611111;}
    else if( a+1==296){c_2=-0.437222222;}
    else if( a+1==297){c_2=-0.45;}
    else if( a+1==298){c_2=-0.462222222;}
    else if( a+1==299){c_2=-0.473888889;}
    else if( a+1==300){c_2=-0.485;}
    else if( a+1==301){c_2=-0.495555556;}
    else if( a+1==302){c_2=-0.505277778;}
    else if( a+1==303){c_2=-0.514444444;}
    else if( a+1==304){c_2=-0.522777778;}
    else if( a+1==305){c_2=-0.531111111;}
    else if( a+1==306){c_2=-0.538611111;}
    else if( a+1==307){c_2=-0.545277778;}
    else if( a+1==308){c_2=-0.551111111;}
    else if( a+1==309){c_2=-0.556388889;}
    else if( a+1==310){c_2=-0.560833333;}
    else if( a+1==311){c_2=-0.564444444;}
    else if( a+1==312){c_2=-0.5675;}
    else if( a+1==313){c_2=-0.57;}
    else if( a+1==314){c_2=-0.571666667;}
    else if( a+1==315){c_2=-0.573055556;}
    else if( a+1==316){c_2=-0.572777778;}
    else if( a+1==317){c_2=-0.5725;}
    else if( a+1==318){c_2=-0.571388889;}
    else if( a+1==319){c_2=-0.569444444;}
    else if( a+1==320){c_2=-0.566944444;}
    else if( a+1==321){c_2=-0.563611111;}
    else if( a+1==322){c_2=-0.559722222;}
    else if( a+1==323){c_2=-0.555;}
    else if( a+1==324){c_2=-0.549444444;}
    else if( a+1==325){c_2=-0.543333333;}
    else if( a+1==326){c_2=-0.536666667;}
    else if( a+1==327){c_2=-0.529166667;}
    else if( a+1==328){c_2=-0.521111111;}
    else if( a+1==329){c_2=-0.512222222;}
    else if( a+1==330){c_2=-0.502777778;}
    else if( a+1==331){c_2=-0.4925;}
    else if( a+1==332){c_2=-0.481666667;}
    else if( a+1==333){c_2=-0.470277778;}
    else if( a+1==334){c_2=-0.458333333;}
    else if( a+1==335){c_2=-0.445833333;}
    else if( a+1==336){c_2=-0.432777778;}
    else if( a+1==337){c_2=-0.419166667;}
    else if( a+1==338){c_2=-0.405;}
    else if( a+1==339){c_2=-0.390277778;}
    else if( a+1==340){c_2=-0.375;}
    else if( a+1==341){c_2=-0.358888889;}
    else if( a+1==342){c_2=-0.343333333;}
    else if( a+1==343){c_2=-0.326944444;}
    else if( a+1==344){c_2=-0.31;}
    else if( a+1==345){c_2=-0.2925;}
    else if( a+1==346){c_2=-0.274444444;}
    else if( a+1==347){c_2=-0.256111111;}
    else if( a+1==348){c_2=-0.237777778;}
    else if( a+1==349){c_2=-0.219166667;}
    else if( a+1==350){c_2=-0.200277778;}
    else if( a+1==351){c_2=-0.181111111;}
    else if( a+1==352){c_2=-0.161388889;}
    else if( a+1==353){c_2=-0.141666667;}
    else if( a+1==354){c_2=-0.121666667;}
    else if( a+1==355){c_2=-0.101666667;}
    else if( a+1==356){c_2=-0.081388889;}
    else if( a+1==357){c_2=-0.061111111;}
    else if( a+1==358){c_2=-0.040833333;}
    else if( a+1==359){c_2=-0.020555556;}
    else if( a+1==360){c_2=0;}
    else if( a+1==361){c_2=0.020555556;}
    else {c_2=99999999;}
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var tdlc3 = ftdlc3(intdalil4, dalil4);
    var kwq_4 = MOD(kwq_3+tdlc3+360,360);
    
    var ftdle0 = function (a,b){
    
    var c_1
    if( a==0){c_1=0;}
    else if( a==1){c_1=-0.0025;}
    else if( a==2){c_1=-0.005277778;}
    else if( a==3){c_1=-0.007777778;}
    else if( a==4){c_1=-0.010277778;}
    else if( a==5){c_1=-0.012777778;}
    else if( a==6){c_1=-0.015277778;}
    else if( a==7){c_1=-0.017777778;}
    else if( a==8){c_1=-0.020277778;}
    else if( a==9){c_1=-0.022777778;}
    else if( a==10){c_1=-0.025277778;}
    else if( a==11){c_1=-0.027777778;}
    else if( a==12){c_1=-0.030277778;}
    else if( a==13){c_1=-0.032777778;}
    else if( a==14){c_1=-0.035277778;}
    else if( a==15){c_1=-0.037777778;}
    else if( a==16){c_1=-0.040277778;}
    else if( a==17){c_1=-0.0425;}
    else if( a==18){c_1=-0.045;}
    else if( a==19){c_1=-0.0475;}
    else if( a==20){c_1=-0.05;}
    else if( a==21){c_1=-0.052222222;}
    else if( a==22){c_1=-0.054722222;}
    else if( a==23){c_1=-0.057222222;}
    else if( a==24){c_1=-0.059444444;}
    else if( a==25){c_1=-0.061666667;}
    else if( a==26){c_1=-0.063888889;}
    else if( a==27){c_1=-0.066388889;}
    else if( a==28){c_1=-0.068611111;}
    else if( a==29){c_1=-0.070833333;}
    else if( a==30){c_1=-0.073055556;}
    else if( a==31){c_1=-0.075277778;}
    else if( a==32){c_1=-0.0775;}
    else if( a==33){c_1=-0.079722222;}
    else if( a==34){c_1=-0.081666667;}
    else if( a==35){c_1=-0.083888889;}
    else if( a==36){c_1=-0.086111111;}
    else if( a==37){c_1=-0.088055556;}
    else if( a==38){c_1=-0.090277778;}
    else if( a==39){c_1=-0.092222222;}
    else if( a==40){c_1=-0.094166667;}
    else if( a==41){c_1=-0.096111111;}
    else if( a==42){c_1=-0.098055556;}
    else if( a==43){c_1=-0.1;}
    else if( a==44){c_1=-0.101666667;}
    else if( a==45){c_1=-0.103611111;}
    else if( a==46){c_1=-0.105277778;}
    else if( a==47){c_1=-0.107222222;}
    else if( a==48){c_1=-0.108888889;}
    else if( a==49){c_1=-0.110555556;}
    else if( a==50){c_1=-0.112222222;}
    else if( a==51){c_1=-0.113888889;}
    else if( a==52){c_1=-0.115277778;}
    else if( a==53){c_1=-0.116944444;}
    else if( a==54){c_1=-0.118333333;}
    else if( a==55){c_1=-0.12;}
    else if( a==56){c_1=-0.121388889;}
    else if( a==57){c_1=-0.122777778;}
    else if( a==58){c_1=-0.124166667;}
    else if( a==59){c_1=-0.125555556;}
    else if( a==60){c_1=-0.126944444;}
    else if( a==61){c_1=-0.128055556;}
    else if( a==62){c_1=-0.129444444;}
    else if( a==63){c_1=-0.130555556;}
    else if( a==64){c_1=-0.131944444;}
    else if( a==65){c_1=-0.133055556;}
    else if( a==66){c_1=-0.134166667;}
    else if( a==67){c_1=-0.135277778;}
    else if( a==68){c_1=-0.136111111;}
    else if( a==69){c_1=-0.137222222;}
    else if( a==70){c_1=-0.138055556;}
    else if( a==71){c_1=-0.138888889;}
    else if( a==72){c_1=-0.139722222;}
    else if( a==73){c_1=-0.140555556;}
    else if( a==74){c_1=-0.141388889;}
    else if( a==75){c_1=-0.141944444;}
    else if( a==76){c_1=-0.142777778;}
    else if( a==77){c_1=-0.143333333;}
    else if( a==78){c_1=-0.143888889;}
    else if( a==79){c_1=-0.144444444;}
    else if( a==80){c_1=-0.144722222;}
    else if( a==81){c_1=-0.145277778;}
    else if( a==82){c_1=-0.145555556;}
    else if( a==83){c_1=-0.146111111;}
    else if( a==84){c_1=-0.146388889;}
    else if( a==85){c_1=-0.146666667;}
    else if( a==86){c_1=-0.146666667;}
    else if( a==87){c_1=-0.146944444;}
    else if( a==88){c_1=-0.146944444;}
    else if( a==89){c_1=-0.147222222;}
    else if( a==90){c_1=-0.147222222;}
    else if( a==91){c_1=-0.147222222;}
    else if( a==92){c_1=-0.147222222;}
    else if( a==93){c_1=-0.146944444;}
    else if( a==94){c_1=-0.146944444;}
    else if( a==95){c_1=-0.146666667;}
    else if( a==96){c_1=-0.146388889;}
    else if( a==97){c_1=-0.146111111;}
    else if( a==98){c_1=-0.145833333;}
    else if( a==99){c_1=-0.145555556;}
    else if( a==100){c_1=-0.145277778;}
    else if( a==101){c_1=-0.144722222;}
    else if( a==102){c_1=-0.144166667;}
    else if( a==103){c_1=-0.143611111;}
    else if( a==104){c_1=-0.143055556;}
    else if( a==105){c_1=-0.1425;}
    else if( a==106){c_1=-0.141666667;}
    else if( a==107){c_1=-0.141111111;}
    else if( a==108){c_1=-0.140277778;}
    else if( a==109){c_1=-0.139444444;}
    else if( a==110){c_1=-0.138611111;}
    else if( a==111){c_1=-0.137777778;}
    else if( a==112){c_1=-0.136944444;}
    else if( a==113){c_1=-0.135833333;}
    else if( a==114){c_1=-0.135277778;}
    else if( a==115){c_1=-0.133888889;}
    else if( a==116){c_1=-0.132777778;}
    else if( a==117){c_1=-0.131666667;}
    else if( a==118){c_1=-0.130555556;}
    else if( a==119){c_1=-0.129444444;}
    else if( a==120){c_1=-0.128055556;}
    else if( a==121){c_1=-0.126666667;}
    else if( a==122){c_1=-0.125277778;}
    else if( a==123){c_1=-0.123888889;}
    else if( a==124){c_1=-0.1225;}
    else if( a==125){c_1=-0.121111111;}
    else if( a==126){c_1=-0.119444444;}
    else if( a==127){c_1=-0.118055556;}
    else if( a==128){c_1=-0.116388889;}
    else if( a==129){c_1=-0.115;}
    else if( a==130){c_1=-0.113333333;}
    else if( a==131){c_1=-0.111666667;}
    else if( a==132){c_1=-0.11;}
    else if( a==133){c_1=-0.108333333;}
    else if( a==134){c_1=-0.106388889;}
    else if( a==135){c_1=-0.104722222;}
    else if( a==136){c_1=-0.102777778;}
    else if( a==137){c_1=-0.101111111;}
    else if( a==138){c_1=-0.099166667;}
    else if( a==139){c_1=-0.097222222;}
    else if( a==140){c_1=-0.095277778;}
    else if( a==141){c_1=-0.093333333;}
    else if( a==142){c_1=-0.091388889;}
    else if( a==143){c_1=-0.089166667;}
    else if( a==144){c_1=-0.087222222;}
    else if( a==145){c_1=-0.085;}
    else if( a==146){c_1=-0.082777778;}
    else if( a==147){c_1=-0.080833333;}
    else if( a==148){c_1=-0.078611111;}
    else if( a==149){c_1=-0.076388889;}
    else if( a==150){c_1=-0.074166667;}
    else if( a==151){c_1=-0.071944444;}
    else if( a==152){c_1=-0.069722222;}
    else if( a==153){c_1=-0.0675;}
    else if( a==154){c_1=-0.065277778;}
    else if( a==155){c_1=-0.062777778;}
    else if( a==156){c_1=-0.060555556;}
    else if( a==157){c_1=-0.058055556;}
    else if( a==158){c_1=-0.055833333;}
    else if( a==159){c_1=-0.053333333;}
    else if( a==160){c_1=-0.050833333;}
    else if( a==161){c_1=-0.048333333;}
    else if( a==162){c_1=-0.045833333;}
    else if( a==163){c_1=-0.043333333;}
    else if( a==164){c_1=-0.040833333;}
    else if( a==165){c_1=-0.038333333;}
    else if( a==166){c_1=-0.035833333;}
    else if( a==167){c_1=-0.033333333;}
    else if( a==168){c_1=-0.031111111;}
    else if( a==169){c_1=-0.028333333;}
    else if( a==170){c_1=-0.025833333;}
    else if( a==171){c_1=-0.023333333;}
    else if( a==172){c_1=-0.020833333;}
    else if( a==173){c_1=-0.018055556;}
    else if( a==174){c_1=-0.015555556;}
    else if( a==175){c_1=-0.013055556;}
    else if( a==176){c_1=-0.010555556;}
    else if( a==177){c_1=-0.007777778;}
    else if( a==178){c_1=-0.005277778;}
    else if( a==179){c_1=-0.002777778;}
    else if( a==180){c_1=0;}
    else if( a==181){c_1=0.002777778;}
    else if( a==182){c_1=0.005277778;}
    else if( a==183){c_1=0.007777778;}
    else if( a==184){c_1=0.010555556;}
    else if( a==185){c_1=0.013055556;}
    else if( a==186){c_1=0.015555556;}
    else if( a==187){c_1=0.018055556;}
    else if( a==188){c_1=0.020833333;}
    else if( a==189){c_1=0.023333333;}
    else if( a==190){c_1=0.025833333;}
    else if( a==191){c_1=0.028333333;}
    else if( a==192){c_1=0.031111111;}
    else if( a==193){c_1=0.033333333;}
    else if( a==194){c_1=0.035833333;}
    else if( a==195){c_1=0.038333333;}
    else if( a==196){c_1=0.040833333;}
    else if( a==197){c_1=0.043333333;}
    else if( a==198){c_1=0.045833333;}
    else if( a==199){c_1=0.048333333;}
    else if( a==200){c_1=0.050833333;}
    else if( a==201){c_1=0.053333333;}
    else if( a==202){c_1=0.055833333;}
    else if( a==203){c_1=0.058055556;}
    else if( a==204){c_1=0.060555556;}
    else if( a==205){c_1=0.062777778;}
    else if( a==206){c_1=0.065277778;}
    else if( a==207){c_1=0.0675;}
    else if( a==208){c_1=0.069722222;}
    else if( a==209){c_1=0.071944444;}
    else if( a==210){c_1=0.074166667;}
    else if( a==211){c_1=0.076388889;}
    else if( a==212){c_1=0.078611111;}
    else if( a==213){c_1=0.080833333;}
    else if( a==214){c_1=0.082777778;}
    else if( a==215){c_1=0.085;}
    else if( a==216){c_1=0.087222222;}
    else if( a==217){c_1=0.089166667;}
    else if( a==218){c_1=0.091388889;}
    else if( a==219){c_1=0.093333333;}
    else if( a==220){c_1=0.095277778;}
    else if( a==221){c_1=0.097222222;}
    else if( a==222){c_1=0.099166667;}
    else if( a==223){c_1=0.101111111;}
    else if( a==224){c_1=0.102777778;}
    else if( a==225){c_1=0.104722222;}
    else if( a==226){c_1=0.106388889;}
    else if( a==227){c_1=0.108333333;}
    else if( a==228){c_1=0.11;}
    else if( a==229){c_1=0.111666667;}
    else if( a==230){c_1=0.113333333;}
    else if( a==231){c_1=0.115;}
    else if( a==232){c_1=0.116388889;}
    else if( a==233){c_1=0.118055556;}
    else if( a==234){c_1=0.119444444;}
    else if( a==235){c_1=0.121111111;}
    else if( a==236){c_1=0.1225;}
    else if( a==237){c_1=0.123888889;}
    else if( a==238){c_1=0.125277778;}
    else if( a==239){c_1=0.126666667;}
    else if( a==240){c_1=0.128055556;}
    else if( a==241){c_1=0.129444444;}
    else if( a==242){c_1=0.130555556;}
    else if( a==243){c_1=0.131666667;}
    else if( a==244){c_1=0.132777778;}
    else if( a==245){c_1=0.133888889;}
    else if( a==246){c_1=0.135277778;}
    else if( a==247){c_1=0.135833333;}
    else if( a==248){c_1=0.136944444;}
    else if( a==249){c_1=0.137777778;}
    else if( a==250){c_1=0.138611111;}
    else if( a==251){c_1=0.139444444;}
    else if( a==252){c_1=0.140277778;}
    else if( a==253){c_1=0.141111111;}
    else if( a==254){c_1=0.141666667;}
    else if( a==255){c_1=0.1425;}
    else if( a==256){c_1=0.143055556;}
    else if( a==257){c_1=0.143611111;}
    else if( a==258){c_1=0.144166667;}
    else if( a==259){c_1=0.144722222;}
    else if( a==260){c_1=0.145277778;}
    else if( a==261){c_1=0.145555556;}
    else if( a==262){c_1=0.145833333;}
    else if( a==263){c_1=0.146111111;}
    else if( a==264){c_1=0.146388889;}
    else if( a==265){c_1=0.146666667;}
    else if( a==266){c_1=0.146944444;}
    else if( a==267){c_1=0.146944444;}
    else if( a==268){c_1=0.147222222;}
    else if( a==269){c_1=0.147222222;}
    else if( a==270){c_1=0.147222222;}
    else if( a==271){c_1=0.147222222;}
    else if( a==272){c_1=0.146944444;}
    else if( a==273){c_1=0.146944444;}
    else if( a==274){c_1=0.146666667;}
    else if( a==275){c_1=0.146666667;}
    else if( a==276){c_1=0.146388889;}
    else if( a==277){c_1=0.146111111;}
    else if( a==278){c_1=0.145555556;}
    else if( a==279){c_1=0.145277778;}
    else if( a==280){c_1=0.144722222;}
    else if( a==281){c_1=0.144444444;}
    else if( a==282){c_1=0.143888889;}
    else if( a==283){c_1=0.143333333;}
    else if( a==284){c_1=0.142777778;}
    else if( a==285){c_1=0.141944444;}
    else if( a==286){c_1=0.141388889;}
    else if( a==287){c_1=0.140555556;}
    else if( a==288){c_1=0.139722222;}
    else if( a==289){c_1=0.138888889;}
    else if( a==290){c_1=0.138055556;}
    else if( a==291){c_1=0.137222222;}
    else if( a==292){c_1=0.136111111;}
    else if( a==293){c_1=0.135277778;}
    else if( a==294){c_1=0.134166667;}
    else if( a==295){c_1=0.133055556;}
    else if( a==296){c_1=0.131944444;}
    else if( a==297){c_1=0.130555556;}
    else if( a==298){c_1=0.129444444;}
    else if( a==299){c_1=0.128055556;}
    else if( a==300){c_1=0.126944444;}
    else if( a==301){c_1=0.125555556;}
    else if( a==302){c_1=0.124166667;}
    else if( a==303){c_1=0.122777778;}
    else if( a==304){c_1=0.121388889;}
    else if( a==305){c_1=0.12;}
    else if( a==306){c_1=0.118333333;}
    else if( a==307){c_1=0.116944444;}
    else if( a==308){c_1=0.115277778;}
    else if( a==309){c_1=0.113888889;}
    else if( a==310){c_1=0.112222222;}
    else if( a==311){c_1=0.110555556;}
    else if( a==312){c_1=0.108888889;}
    else if( a==313){c_1=0.107222222;}
    else if( a==314){c_1=0.105277778;}
    else if( a==315){c_1=0.103611111;}
    else if( a==316){c_1=0.101666667;}
    else if( a==317){c_1=0.1;}
    else if( a==318){c_1=0.098055556;}
    else if( a==319){c_1=0.096111111;}
    else if( a==320){c_1=0.094166667;}
    else if( a==321){c_1=0.092222222;}
    else if( a==322){c_1=0.090277778;}
    else if( a==323){c_1=0.088055556;}
    else if( a==324){c_1=0.086111111;}
    else if( a==325){c_1=0.083888889;}
    else if( a==326){c_1=0.081666667;}
    else if( a==327){c_1=0.079722222;}
    else if( a==328){c_1=0.0775;}
    else if( a==329){c_1=0.075277778;}
    else if( a==330){c_1=0.073055556;}
    else if( a==331){c_1=0.070833333;}
    else if( a==332){c_1=0.068611111;}
    else if( a==333){c_1=0.066388889;}
    else if( a==334){c_1=0.063888889;}
    else if( a==335){c_1=0.061666667;}
    else if( a==336){c_1=0.059444444;}
    else if( a==337){c_1=0.057222222;}
    else if( a==338){c_1=0.054722222;}
    else if( a==339){c_1=0.052222222;}
    else if( a==340){c_1=0.05;}
    else if( a==341){c_1=0.0475;}
    else if( a==342){c_1=0.045;}
    else if( a==343){c_1=0.0425;}
    else if( a==344){c_1=0.040277778;}
    else if( a==345){c_1=0.037777778;}
    else if( a==346){c_1=0.035277778;}
    else if( a==347){c_1=0.032777778;}
    else if( a==348){c_1=0.030277778;}
    else if( a==349){c_1=0.027777778;}
    else if( a==350){c_1=0.025277778;}
    else if( a==351){c_1=0.022777778;}
    else if( a==352){c_1=0.020277778;}
    else if( a==353){c_1=0.017777778;}
    else if( a==354){c_1=0.015277778;}
    else if( a==355){c_1=0.012777778;}
    else if( a==356){c_1=0.010277778;}
    else if( a==357){c_1=0.007777778;}
    else if( a==358){c_1=0.005277778;}
    else if( a==359){c_1=0.0025;}
    else if( a==360){c_1=0;}
    else if( a==361){c_1=-0.0025;}
    else {c_1=999999;}
        
    var c_2
    if( a+1==0){c_2=0;}
    else if( a+1==1){c_2=-0.0025;}
    else if( a+1==2){c_2=-0.005277778;}
    else if( a+1==3){c_2=-0.007777778;}
    else if( a+1==4){c_2=-0.010277778;}
    else if( a+1==5){c_2=-0.012777778;}
    else if( a+1==6){c_2=-0.015277778;}
    else if( a+1==7){c_2=-0.017777778;}
    else if( a+1==8){c_2=-0.020277778;}
    else if( a+1==9){c_2=-0.022777778;}
    else if( a+1==10){c_2=-0.025277778;}
    else if( a+1==11){c_2=-0.027777778;}
    else if( a+1==12){c_2=-0.030277778;}
    else if( a+1==13){c_2=-0.032777778;}
    else if( a+1==14){c_2=-0.035277778;}
    else if( a+1==15){c_2=-0.037777778;}
    else if( a+1==16){c_2=-0.040277778;}
    else if( a+1==17){c_2=-0.0425;}
    else if( a+1==18){c_2=-0.045;}
    else if( a+1==19){c_2=-0.0475;}
    else if( a+1==20){c_2=-0.05;}
    else if( a+1==21){c_2=-0.052222222;}
    else if( a+1==22){c_2=-0.054722222;}
    else if( a+1==23){c_2=-0.057222222;}
    else if( a+1==24){c_2=-0.059444444;}
    else if( a+1==25){c_2=-0.061666667;}
    else if( a+1==26){c_2=-0.063888889;}
    else if( a+1==27){c_2=-0.066388889;}
    else if( a+1==28){c_2=-0.068611111;}
    else if( a+1==29){c_2=-0.070833333;}
    else if( a+1==30){c_2=-0.073055556;}
    else if( a+1==31){c_2=-0.075277778;}
    else if( a+1==32){c_2=-0.0775;}
    else if( a+1==33){c_2=-0.079722222;}
    else if( a+1==34){c_2=-0.081666667;}
    else if( a+1==35){c_2=-0.083888889;}
    else if( a+1==36){c_2=-0.086111111;}
    else if( a+1==37){c_2=-0.088055556;}
    else if( a+1==38){c_2=-0.090277778;}
    else if( a+1==39){c_2=-0.092222222;}
    else if( a+1==40){c_2=-0.094166667;}
    else if( a+1==41){c_2=-0.096111111;}
    else if( a+1==42){c_2=-0.098055556;}
    else if( a+1==43){c_2=-0.1;}
    else if( a+1==44){c_2=-0.101666667;}
    else if( a+1==45){c_2=-0.103611111;}
    else if( a+1==46){c_2=-0.105277778;}
    else if( a+1==47){c_2=-0.107222222;}
    else if( a+1==48){c_2=-0.108888889;}
    else if( a+1==49){c_2=-0.110555556;}
    else if( a+1==50){c_2=-0.112222222;}
    else if( a+1==51){c_2=-0.113888889;}
    else if( a+1==52){c_2=-0.115277778;}
    else if( a+1==53){c_2=-0.116944444;}
    else if( a+1==54){c_2=-0.118333333;}
    else if( a+1==55){c_2=-0.12;}
    else if( a+1==56){c_2=-0.121388889;}
    else if( a+1==57){c_2=-0.122777778;}
    else if( a+1==58){c_2=-0.124166667;}
    else if( a+1==59){c_2=-0.125555556;}
    else if( a+1==60){c_2=-0.126944444;}
    else if( a+1==61){c_2=-0.128055556;}
    else if( a+1==62){c_2=-0.129444444;}
    else if( a+1==63){c_2=-0.130555556;}
    else if( a+1==64){c_2=-0.131944444;}
    else if( a+1==65){c_2=-0.133055556;}
    else if( a+1==66){c_2=-0.134166667;}
    else if( a+1==67){c_2=-0.135277778;}
    else if( a+1==68){c_2=-0.136111111;}
    else if( a+1==69){c_2=-0.137222222;}
    else if( a+1==70){c_2=-0.138055556;}
    else if( a+1==71){c_2=-0.138888889;}
    else if( a+1==72){c_2=-0.139722222;}
    else if( a+1==73){c_2=-0.140555556;}
    else if( a+1==74){c_2=-0.141388889;}
    else if( a+1==75){c_2=-0.141944444;}
    else if( a+1==76){c_2=-0.142777778;}
    else if( a+1==77){c_2=-0.143333333;}
    else if( a+1==78){c_2=-0.143888889;}
    else if( a+1==79){c_2=-0.144444444;}
    else if( a+1==80){c_2=-0.144722222;}
    else if( a+1==81){c_2=-0.145277778;}
    else if( a+1==82){c_2=-0.145555556;}
    else if( a+1==83){c_2=-0.146111111;}
    else if( a+1==84){c_2=-0.146388889;}
    else if( a+1==85){c_2=-0.146666667;}
    else if( a+1==86){c_2=-0.146666667;}
    else if( a+1==87){c_2=-0.146944444;}
    else if( a+1==88){c_2=-0.146944444;}
    else if( a+1==89){c_2=-0.147222222;}
    else if( a+1==90){c_2=-0.147222222;}
    else if( a+1==91){c_2=-0.147222222;}
    else if( a+1==92){c_2=-0.147222222;}
    else if( a+1==93){c_2=-0.146944444;}
    else if( a+1==94){c_2=-0.146944444;}
    else if( a+1==95){c_2=-0.146666667;}
    else if( a+1==96){c_2=-0.146388889;}
    else if( a+1==97){c_2=-0.146111111;}
    else if( a+1==98){c_2=-0.145833333;}
    else if( a+1==99){c_2=-0.145555556;}
    else if( a+1==100){c_2=-0.145277778;}
    else if( a+1==101){c_2=-0.144722222;}
    else if( a+1==102){c_2=-0.144166667;}
    else if( a+1==103){c_2=-0.143611111;}
    else if( a+1==104){c_2=-0.143055556;}
    else if( a+1==105){c_2=-0.1425;}
    else if( a+1==106){c_2=-0.141666667;}
    else if( a+1==107){c_2=-0.141111111;}
    else if( a+1==108){c_2=-0.140277778;}
    else if( a+1==109){c_2=-0.139444444;}
    else if( a+1==110){c_2=-0.138611111;}
    else if( a+1==111){c_2=-0.137777778;}
    else if( a+1==112){c_2=-0.136944444;}
    else if( a+1==113){c_2=-0.135833333;}
    else if( a+1==114){c_2=-0.135277778;}
    else if( a+1==115){c_2=-0.133888889;}
    else if( a+1==116){c_2=-0.132777778;}
    else if( a+1==117){c_2=-0.131666667;}
    else if( a+1==118){c_2=-0.130555556;}
    else if( a+1==119){c_2=-0.129444444;}
    else if( a+1==120){c_2=-0.128055556;}
    else if( a+1==121){c_2=-0.126666667;}
    else if( a+1==122){c_2=-0.125277778;}
    else if( a+1==123){c_2=-0.123888889;}
    else if( a+1==124){c_2=-0.1225;}
    else if( a+1==125){c_2=-0.121111111;}
    else if( a+1==126){c_2=-0.119444444;}
    else if( a+1==127){c_2=-0.118055556;}
    else if( a+1==128){c_2=-0.116388889;}
    else if( a+1==129){c_2=-0.115;}
    else if( a+1==130){c_2=-0.113333333;}
    else if( a+1==131){c_2=-0.111666667;}
    else if( a+1==132){c_2=-0.11;}
    else if( a+1==133){c_2=-0.108333333;}
    else if( a+1==134){c_2=-0.106388889;}
    else if( a+1==135){c_2=-0.104722222;}
    else if( a+1==136){c_2=-0.102777778;}
    else if( a+1==137){c_2=-0.101111111;}
    else if( a+1==138){c_2=-0.099166667;}
    else if( a+1==139){c_2=-0.097222222;}
    else if( a+1==140){c_2=-0.095277778;}
    else if( a+1==141){c_2=-0.093333333;}
    else if( a+1==142){c_2=-0.091388889;}
    else if( a+1==143){c_2=-0.089166667;}
    else if( a+1==144){c_2=-0.087222222;}
    else if( a+1==145){c_2=-0.085;}
    else if( a+1==146){c_2=-0.082777778;}
    else if( a+1==147){c_2=-0.080833333;}
    else if( a+1==148){c_2=-0.078611111;}
    else if( a+1==149){c_2=-0.076388889;}
    else if( a+1==150){c_2=-0.074166667;}
    else if( a+1==151){c_2=-0.071944444;}
    else if( a+1==152){c_2=-0.069722222;}
    else if( a+1==153){c_2=-0.0675;}
    else if( a+1==154){c_2=-0.065277778;}
    else if( a+1==155){c_2=-0.062777778;}
    else if( a+1==156){c_2=-0.060555556;}
    else if( a+1==157){c_2=-0.058055556;}
    else if( a+1==158){c_2=-0.055833333;}
    else if( a+1==159){c_2=-0.053333333;}
    else if( a+1==160){c_2=-0.050833333;}
    else if( a+1==161){c_2=-0.048333333;}
    else if( a+1==162){c_2=-0.045833333;}
    else if( a+1==163){c_2=-0.043333333;}
    else if( a+1==164){c_2=-0.040833333;}
    else if( a+1==165){c_2=-0.038333333;}
    else if( a+1==166){c_2=-0.035833333;}
    else if( a+1==167){c_2=-0.033333333;}
    else if( a+1==168){c_2=-0.031111111;}
    else if( a+1==169){c_2=-0.028333333;}
    else if( a+1==170){c_2=-0.025833333;}
    else if( a+1==171){c_2=-0.023333333;}
    else if( a+1==172){c_2=-0.020833333;}
    else if( a+1==173){c_2=-0.018055556;}
    else if( a+1==174){c_2=-0.015555556;}
    else if( a+1==175){c_2=-0.013055556;}
    else if( a+1==176){c_2=-0.010555556;}
    else if( a+1==177){c_2=-0.007777778;}
    else if( a+1==178){c_2=-0.005277778;}
    else if( a+1==179){c_2=-0.002777778;}
    else if( a+1==180){c_2=0;}
    else if( a+1==181){c_2=0.002777778;}
    else if( a+1==182){c_2=0.005277778;}
    else if( a+1==183){c_2=0.007777778;}
    else if( a+1==184){c_2=0.010555556;}
    else if( a+1==185){c_2=0.013055556;}
    else if( a+1==186){c_2=0.015555556;}
    else if( a+1==187){c_2=0.018055556;}
    else if( a+1==188){c_2=0.020833333;}
    else if( a+1==189){c_2=0.023333333;}
    else if( a+1==190){c_2=0.025833333;}
    else if( a+1==191){c_2=0.028333333;}
    else if( a+1==192){c_2=0.031111111;}
    else if( a+1==193){c_2=0.033333333;}
    else if( a+1==194){c_2=0.035833333;}
    else if( a+1==195){c_2=0.038333333;}
    else if( a+1==196){c_2=0.040833333;}
    else if( a+1==197){c_2=0.043333333;}
    else if( a+1==198){c_2=0.045833333;}
    else if( a+1==199){c_2=0.048333333;}
    else if( a+1==200){c_2=0.050833333;}
    else if( a+1==201){c_2=0.053333333;}
    else if( a+1==202){c_2=0.055833333;}
    else if( a+1==203){c_2=0.058055556;}
    else if( a+1==204){c_2=0.060555556;}
    else if( a+1==205){c_2=0.062777778;}
    else if( a+1==206){c_2=0.065277778;}
    else if( a+1==207){c_2=0.0675;}
    else if( a+1==208){c_2=0.069722222;}
    else if( a+1==209){c_2=0.071944444;}
    else if( a+1==210){c_2=0.074166667;}
    else if( a+1==211){c_2=0.076388889;}
    else if( a+1==212){c_2=0.078611111;}
    else if( a+1==213){c_2=0.080833333;}
    else if( a+1==214){c_2=0.082777778;}
    else if( a+1==215){c_2=0.085;}
    else if( a+1==216){c_2=0.087222222;}
    else if( a+1==217){c_2=0.089166667;}
    else if( a+1==218){c_2=0.091388889;}
    else if( a+1==219){c_2=0.093333333;}
    else if( a+1==220){c_2=0.095277778;}
    else if( a+1==221){c_2=0.097222222;}
    else if( a+1==222){c_2=0.099166667;}
    else if( a+1==223){c_2=0.101111111;}
    else if( a+1==224){c_2=0.102777778;}
    else if( a+1==225){c_2=0.104722222;}
    else if( a+1==226){c_2=0.106388889;}
    else if( a+1==227){c_2=0.108333333;}
    else if( a+1==228){c_2=0.11;}
    else if( a+1==229){c_2=0.111666667;}
    else if( a+1==230){c_2=0.113333333;}
    else if( a+1==231){c_2=0.115;}
    else if( a+1==232){c_2=0.116388889;}
    else if( a+1==233){c_2=0.118055556;}
    else if( a+1==234){c_2=0.119444444;}
    else if( a+1==235){c_2=0.121111111;}
    else if( a+1==236){c_2=0.1225;}
    else if( a+1==237){c_2=0.123888889;}
    else if( a+1==238){c_2=0.125277778;}
    else if( a+1==239){c_2=0.126666667;}
    else if( a+1==240){c_2=0.128055556;}
    else if( a+1==241){c_2=0.129444444;}
    else if( a+1==242){c_2=0.130555556;}
    else if( a+1==243){c_2=0.131666667;}
    else if( a+1==244){c_2=0.132777778;}
    else if( a+1==245){c_2=0.133888889;}
    else if( a+1==246){c_2=0.135277778;}
    else if( a+1==247){c_2=0.135833333;}
    else if( a+1==248){c_2=0.136944444;}
    else if( a+1==249){c_2=0.137777778;}
    else if( a+1==250){c_2=0.138611111;}
    else if( a+1==251){c_2=0.139444444;}
    else if( a+1==252){c_2=0.140277778;}
    else if( a+1==253){c_2=0.141111111;}
    else if( a+1==254){c_2=0.141666667;}
    else if( a+1==255){c_2=0.1425;}
    else if( a+1==256){c_2=0.143055556;}
    else if( a+1==257){c_2=0.143611111;}
    else if( a+1==258){c_2=0.144166667;}
    else if( a+1==259){c_2=0.144722222;}
    else if( a+1==260){c_2=0.145277778;}
    else if( a+1==261){c_2=0.145555556;}
    else if( a+1==262){c_2=0.145833333;}
    else if( a+1==263){c_2=0.146111111;}
    else if( a+1==264){c_2=0.146388889;}
    else if( a+1==265){c_2=0.146666667;}
    else if( a+1==266){c_2=0.146944444;}
    else if( a+1==267){c_2=0.146944444;}
    else if( a+1==268){c_2=0.147222222;}
    else if( a+1==269){c_2=0.147222222;}
    else if( a+1==270){c_2=0.147222222;}
    else if( a+1==271){c_2=0.147222222;}
    else if( a+1==272){c_2=0.146944444;}
    else if( a+1==273){c_2=0.146944444;}
    else if( a+1==274){c_2=0.146666667;}
    else if( a+1==275){c_2=0.146666667;}
    else if( a+1==276){c_2=0.146388889;}
    else if( a+1==277){c_2=0.146111111;}
    else if( a+1==278){c_2=0.145555556;}
    else if( a+1==279){c_2=0.145277778;}
    else if( a+1==280){c_2=0.144722222;}
    else if( a+1==281){c_2=0.144444444;}
    else if( a+1==282){c_2=0.143888889;}
    else if( a+1==283){c_2=0.143333333;}
    else if( a+1==284){c_2=0.142777778;}
    else if( a+1==285){c_2=0.141944444;}
    else if( a+1==286){c_2=0.141388889;}
    else if( a+1==287){c_2=0.140555556;}
    else if( a+1==288){c_2=0.139722222;}
    else if( a+1==289){c_2=0.138888889;}
    else if( a+1==290){c_2=0.138055556;}
    else if( a+1==291){c_2=0.137222222;}
    else if( a+1==292){c_2=0.136111111;}
    else if( a+1==293){c_2=0.135277778;}
    else if( a+1==294){c_2=0.134166667;}
    else if( a+1==295){c_2=0.133055556;}
    else if( a+1==296){c_2=0.131944444;}
    else if( a+1==297){c_2=0.130555556;}
    else if( a+1==298){c_2=0.129444444;}
    else if( a+1==299){c_2=0.128055556;}
    else if( a+1==300){c_2=0.126944444;}
    else if( a+1==301){c_2=0.125555556;}
    else if( a+1==302){c_2=0.124166667;}
    else if( a+1==303){c_2=0.122777778;}
    else if( a+1==304){c_2=0.121388889;}
    else if( a+1==305){c_2=0.12;}
    else if( a+1==306){c_2=0.118333333;}
    else if( a+1==307){c_2=0.116944444;}
    else if( a+1==308){c_2=0.115277778;}
    else if( a+1==309){c_2=0.113888889;}
    else if( a+1==310){c_2=0.112222222;}
    else if( a+1==311){c_2=0.110555556;}
    else if( a+1==312){c_2=0.108888889;}
    else if( a+1==313){c_2=0.107222222;}
    else if( a+1==314){c_2=0.105277778;}
    else if( a+1==315){c_2=0.103611111;}
    else if( a+1==316){c_2=0.101666667;}
    else if( a+1==317){c_2=0.1;}
    else if( a+1==318){c_2=0.098055556;}
    else if( a+1==319){c_2=0.096111111;}
    else if( a+1==320){c_2=0.094166667;}
    else if( a+1==321){c_2=0.092222222;}
    else if( a+1==322){c_2=0.090277778;}
    else if( a+1==323){c_2=0.088055556;}
    else if( a+1==324){c_2=0.086111111;}
    else if( a+1==325){c_2=0.083888889;}
    else if( a+1==326){c_2=0.081666667;}
    else if( a+1==327){c_2=0.079722222;}
    else if( a+1==328){c_2=0.0775;}
    else if( a+1==329){c_2=0.075277778;}
    else if( a+1==330){c_2=0.073055556;}
    else if( a+1==331){c_2=0.070833333;}
    else if( a+1==332){c_2=0.068611111;}
    else if( a+1==333){c_2=0.066388889;}
    else if( a+1==334){c_2=0.063888889;}
    else if( a+1==335){c_2=0.061666667;}
    else if( a+1==336){c_2=0.059444444;}
    else if( a+1==337){c_2=0.057222222;}
    else if( a+1==338){c_2=0.054722222;}
    else if( a+1==339){c_2=0.052222222;}
    else if( a+1==340){c_2=0.05;}
    else if( a+1==341){c_2=0.0475;}
    else if( a+1==342){c_2=0.045;}
    else if( a+1==343){c_2=0.0425;}
    else if( a+1==344){c_2=0.040277778;}
    else if( a+1==345){c_2=0.037777778;}
    else if( a+1==346){c_2=0.035277778;}
    else if( a+1==347){c_2=0.032777778;}
    else if( a+1==348){c_2=0.030277778;}
    else if( a+1==349){c_2=0.027777778;}
    else if( a+1==350){c_2=0.025277778;}
    else if( a+1==351){c_2=0.022777778;}
    else if( a+1==352){c_2=0.020277778;}
    else if( a+1==353){c_2=0.017777778;}
    else if( a+1==354){c_2=0.015277778;}
    else if( a+1==355){c_2=0.012777778;}
    else if( a+1==356){c_2=0.010277778;}
    else if( a+1==357){c_2=0.007777778;}
    else if( a+1==358){c_2=0.005277778;}
    else if( a+1==359){c_2=0.0025;}
    else if( a+1==360){c_2=0;}
    else if( a+1==361){c_2=-0.0025;}
    else {c_2=999999;}
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var tdle0 = ftdle0(intdalil1, jks);
    var kuq_1 = MOD(juq+tdle0+360,360);
    
    var dalil5 = MOD(kwq_4+kuq_1,360);
    var intdalil5 = Math.floor(dalil5);
        
    
    var ftdlc4 = function (a,b){
    
    var c_1
    if( a==0){c_1=0;}
    else if( a==1){c_1=-0.003888889;}
    else if( a==2){c_1=-0.007777778;}
    else if( a==3){c_1=-0.011666667;}
    else if( a==4){c_1=-0.015555556;}
    else if( a==5){c_1=-0.019444444;}
    else if( a==6){c_1=-0.023333333;}
    else if( a==7){c_1=-0.026944444;}
    else if( a==8){c_1=-0.030833333;}
    else if( a==9){c_1=-0.034444444;}
    else if( a==10){c_1=-0.038333333;}
    else if( a==11){c_1=-0.041944444;}
    else if( a==12){c_1=-0.045555556;}
    else if( a==13){c_1=-0.048888889;}
    else if( a==14){c_1=-0.0525;}
    else if( a==15){c_1=-0.055833333;}
    else if( a==16){c_1=-0.059166667;}
    else if( a==17){c_1=-0.0625;}
    else if( a==18){c_1=-0.065833333;}
    else if( a==19){c_1=-0.068888889;}
    else if( a==20){c_1=-0.071944444;}
    else if( a==21){c_1=-0.074722222;}
    else if( a==22){c_1=-0.077777778;}
    else if( a==23){c_1=-0.080555556;}
    else if( a==24){c_1=-0.083055556;}
    else if( a==25){c_1=-0.085555556;}
    else if( a==26){c_1=-0.088055556;}
    else if( a==27){c_1=-0.090555556;}
    else if( a==28){c_1=-0.092777778;}
    else if( a==29){c_1=-0.094722222;}
    else if( a==30){c_1=-0.096944444;}
    else if( a==31){c_1=-0.098888889;}
    else if( a==32){c_1=-0.100555556;}
    else if( a==33){c_1=-0.102222222;}
    else if( a==34){c_1=-0.103888889;}
    else if( a==35){c_1=-0.105277778;}
    else if( a==36){c_1=-0.106388889;}
    else if( a==37){c_1=-0.1075;}
    else if( a==38){c_1=-0.108611111;}
    else if( a==39){c_1=-0.109444444;}
    else if( a==40){c_1=-0.110277778;}
    else if( a==41){c_1=-0.110833333;}
    else if( a==42){c_1=-0.111388889;}
    else if( a==43){c_1=-0.111666667;}
    else if( a==44){c_1=-0.111944444;}
    else if( a==45){c_1=-0.111944444;}
    else if( a==46){c_1=-0.111944444;}
    else if( a==47){c_1=-0.111666667;}
    else if( a==48){c_1=-0.111388889;}
    else if( a==49){c_1=-0.110833333;}
    else if( a==50){c_1=-0.110277778;}
    else if( a==51){c_1=-0.109444444;}
    else if( a==52){c_1=-0.108611111;}
    else if( a==53){c_1=-0.107777778;}
    else if( a==54){c_1=-0.106666667;}
    else if( a==55){c_1=-0.105277778;}
    else if( a==56){c_1=-0.103888889;}
    else if( a==57){c_1=-0.102222222;}
    else if( a==58){c_1=-0.100833333;}
    else if( a==59){c_1=-0.098888889;}
    else if( a==60){c_1=-0.096944444;}
    else if( a==61){c_1=-0.095;}
    else if( a==62){c_1=-0.092777778;}
    else if( a==63){c_1=-0.090555556;}
    else if( a==64){c_1=-0.088333333;}
    else if( a==65){c_1=-0.085833333;}
    else if( a==66){c_1=-0.083333333;}
    else if( a==67){c_1=-0.080555556;}
    else if( a==68){c_1=-0.077777778;}
    else if( a==69){c_1=-0.075;}
    else if( a==70){c_1=-0.071944444;}
    else if( a==71){c_1=-0.068888889;}
    else if( a==72){c_1=-0.065833333;}
    else if( a==73){c_1=-0.062777778;}
    else if( a==74){c_1=-0.059444444;}
    else if( a==75){c_1=-0.056666667;}
    else if( a==76){c_1=-0.0525;}
    else if( a==77){c_1=-0.049166667;}
    else if( a==78){c_1=-0.045555556;}
    else if( a==79){c_1=-0.041944444;}
    else if( a==80){c_1=-0.035555556;}
    else if( a==81){c_1=-0.034722222;}
    else if( a==82){c_1=-0.030833333;}
    else if( a==83){c_1=-0.027222222;}
    else if( a==84){c_1=-0.023333333;}
    else if( a==85){c_1=-0.019444444;}
    else if( a==86){c_1=-0.015833333;}
    else if( a==87){c_1=-0.011666667;}
    else if( a==88){c_1=-0.007777778;}
    else if( a==89){c_1=-0.003888889;}
    else if( a==90){c_1=0;}
    else if( a==91){c_1=0.003888889;}
    else if( a==92){c_1=0.007777778;}
    else if( a==93){c_1=0.011666667;}
    else if( a==94){c_1=0.015833333;}
    else if( a==95){c_1=0.019444444;}
    else if( a==96){c_1=0.023333333;}
    else if( a==97){c_1=0.027222222;}
    else if( a==98){c_1=0.030833333;}
    else if( a==99){c_1=0.034722222;}
    else if( a==100){c_1=0.035555556;}
    else if( a==101){c_1=0.041944444;}
    else if( a==102){c_1=0.045555556;}
    else if( a==103){c_1=0.049166667;}
    else if( a==104){c_1=0.0525;}
    else if( a==105){c_1=0.056666667;}
    else if( a==106){c_1=0.059444444;}
    else if( a==107){c_1=0.062777778;}
    else if( a==108){c_1=0.065833333;}
    else if( a==109){c_1=0.068888889;}
    else if( a==110){c_1=0.071944444;}
    else if( a==111){c_1=0.075;}
    else if( a==112){c_1=0.077777778;}
    else if( a==113){c_1=0.080555556;}
    else if( a==114){c_1=0.083333333;}
    else if( a==115){c_1=0.085833333;}
    else if( a==116){c_1=0.088333333;}
    else if( a==117){c_1=0.090555556;}
    else if( a==118){c_1=0.092777778;}
    else if( a==119){c_1=0.095;}
    else if( a==120){c_1=0.096944444;}
    else if( a==121){c_1=0.098888889;}
    else if( a==122){c_1=0.100833333;}
    else if( a==123){c_1=0.102222222;}
    else if( a==124){c_1=0.103888889;}
    else if( a==125){c_1=0.105277778;}
    else if( a==126){c_1=0.106666667;}
    else if( a==127){c_1=0.107777778;}
    else if( a==128){c_1=0.108611111;}
    else if( a==129){c_1=0.109444444;}
    else if( a==130){c_1=0.110277778;}
    else if( a==131){c_1=0.110833333;}
    else if( a==132){c_1=0.111388889;}
    else if( a==133){c_1=0.111666667;}
    else if( a==134){c_1=0.111944444;}
    else if( a==135){c_1=0.111944444;}
    else if( a==136){c_1=0.111944444;}
    else if( a==137){c_1=0.111666667;}
    else if( a==138){c_1=0.111388889;}
    else if( a==139){c_1=0.110833333;}
    else if( a==140){c_1=0.110277778;}
    else if( a==141){c_1=0.109444444;}
    else if( a==142){c_1=0.108611111;}
    else if( a==143){c_1=0.1075;}
    else if( a==144){c_1=0.106388889;}
    else if( a==145){c_1=0.105277778;}
    else if( a==146){c_1=0.103888889;}
    else if( a==147){c_1=0.102222222;}
    else if( a==148){c_1=0.100555556;}
    else if( a==149){c_1=0.098888889;}
    else if( a==150){c_1=0.096944444;}
    else if( a==151){c_1=0.094722222;}
    else if( a==152){c_1=0.092777778;}
    else if( a==153){c_1=0.090555556;}
    else if( a==154){c_1=0.088055556;}
    else if( a==155){c_1=0.085555556;}
    else if( a==156){c_1=0.083055556;}
    else if( a==157){c_1=0.080555556;}
    else if( a==158){c_1=0.077777778;}
    else if( a==159){c_1=0.074722222;}
    else if( a==160){c_1=0.071944444;}
    else if( a==161){c_1=0.068888889;}
    else if( a==162){c_1=0.065833333;}
    else if( a==163){c_1=0.0625;}
    else if( a==164){c_1=0.059166667;}
    else if( a==165){c_1=0.055833333;}
    else if( a==166){c_1=0.0525;}
    else if( a==167){c_1=0.048888889;}
    else if( a==168){c_1=0.045555556;}
    else if( a==169){c_1=0.041944444;}
    else if( a==170){c_1=0.038333333;}
    else if( a==171){c_1=0.034444444;}
    else if( a==172){c_1=0.030833333;}
    else if( a==173){c_1=0.026944444;}
    else if( a==174){c_1=0.023333333;}
    else if( a==175){c_1=0.019444444;}
    else if( a==176){c_1=0.015555556;}
    else if( a==177){c_1=0.011666667;}
    else if( a==178){c_1=0.007777778;}
    else if( a==179){c_1=0.003888889;}
    else if( a==180){c_1=0;}
    else if( a==181){c_1=-0.003888889;}
    else if( a==182){c_1=-0.007777778;}
    else if( a==183){c_1=-0.011666667;}
    else if( a==184){c_1=-0.015555556;}
    else if( a==185){c_1=-0.019444444;}
    else if( a==186){c_1=-0.023333333;}
    else if( a==187){c_1=-0.026944444;}
    else if( a==188){c_1=-0.030833333;}
    else if( a==189){c_1=-0.034444444;}
    else if( a==190){c_1=-0.038333333;}
    else if( a==191){c_1=-0.041944444;}
    else if( a==192){c_1=-0.045555556;}
    else if( a==193){c_1=-0.048888889;}
    else if( a==194){c_1=-0.0525;}
    else if( a==195){c_1=-0.055833333;}
    else if( a==196){c_1=-0.059166667;}
    else if( a==197){c_1=-0.0625;}
    else if( a==198){c_1=-0.065833333;}
    else if( a==199){c_1=-0.068888889;}
    else if( a==200){c_1=-0.071944444;}
    else if( a==201){c_1=-0.074722222;}
    else if( a==202){c_1=-0.077777778;}
    else if( a==203){c_1=-0.080555556;}
    else if( a==204){c_1=-0.083055556;}
    else if( a==205){c_1=-0.085555556;}
    else if( a==206){c_1=-0.088055556;}
    else if( a==207){c_1=-0.090555556;}
    else if( a==208){c_1=-0.092777778;}
    else if( a==209){c_1=-0.094722222;}
    else if( a==210){c_1=-0.096944444;}
    else if( a==211){c_1=-0.098888889;}
    else if( a==212){c_1=-0.100555556;}
    else if( a==213){c_1=-0.102222222;}
    else if( a==214){c_1=-0.103888889;}
    else if( a==215){c_1=-0.105277778;}
    else if( a==216){c_1=-0.106388889;}
    else if( a==217){c_1=-0.1075;}
    else if( a==218){c_1=-0.108611111;}
    else if( a==219){c_1=-0.109444444;}
    else if( a==220){c_1=-0.110277778;}
    else if( a==221){c_1=-0.110833333;}
    else if( a==222){c_1=-0.111388889;}
    else if( a==223){c_1=-0.111666667;}
    else if( a==224){c_1=-0.111944444;}
    else if( a==225){c_1=-0.111944444;}
    else if( a==226){c_1=-0.111944444;}
    else if( a==227){c_1=-0.111666667;}
    else if( a==228){c_1=-0.111388889;}
    else if( a==229){c_1=-0.110833333;}
    else if( a==230){c_1=-0.110277778;}
    else if( a==231){c_1=-0.109444444;}
    else if( a==232){c_1=-0.108611111;}
    else if( a==233){c_1=-0.107777778;}
    else if( a==234){c_1=-0.106666667;}
    else if( a==235){c_1=-0.105277778;}
    else if( a==236){c_1=-0.103888889;}
    else if( a==237){c_1=-0.102222222;}
    else if( a==238){c_1=-0.100833333;}
    else if( a==239){c_1=-0.098888889;}
    else if( a==240){c_1=-0.096944444;}
    else if( a==241){c_1=-0.095;}
    else if( a==242){c_1=-0.092777778;}
    else if( a==243){c_1=-0.090555556;}
    else if( a==244){c_1=-0.088333333;}
    else if( a==245){c_1=-0.085833333;}
    else if( a==246){c_1=-0.083333333;}
    else if( a==247){c_1=-0.080555556;}
    else if( a==248){c_1=-0.077777778;}
    else if( a==249){c_1=-0.075;}
    else if( a==250){c_1=-0.071944444;}
    else if( a==251){c_1=-0.068888889;}
    else if( a==252){c_1=-0.065833333;}
    else if( a==253){c_1=-0.062777778;}
    else if( a==254){c_1=-0.059444444;}
    else if( a==255){c_1=-0.056666667;}
    else if( a==256){c_1=-0.0525;}
    else if( a==257){c_1=-0.049166667;}
    else if( a==258){c_1=-0.045555556;}
    else if( a==259){c_1=-0.041944444;}
    else if( a==260){c_1=-0.035555556;}
    else if( a==261){c_1=-0.034722222;}
    else if( a==262){c_1=-0.030833333;}
    else if( a==263){c_1=-0.027222222;}
    else if( a==264){c_1=-0.023333333;}
    else if( a==265){c_1=-0.019444444;}
    else if( a==266){c_1=-0.015833333;}
    else if( a==267){c_1=-0.011666667;}
    else if( a==268){c_1=-0.007777778;}
    else if( a==269){c_1=-0.003888889;}
    else if( a==270){c_1=0;}
    else if( a==271){c_1=0.003888889;}
    else if( a==272){c_1=0.007777778;}
    else if( a==273){c_1=0.011666667;}
    else if( a==274){c_1=0.015833333;}
    else if( a==275){c_1=0.019444444;}
    else if( a==276){c_1=0.023333333;}
    else if( a==277){c_1=0.027222222;}
    else if( a==278){c_1=0.030833333;}
    else if( a==279){c_1=0.034722222;}
    else if( a==280){c_1=0.035555556;}
    else if( a==281){c_1=0.041944444;}
    else if( a==282){c_1=0.045555556;}
    else if( a==283){c_1=0.049166667;}
    else if( a==284){c_1=0.0525;}
    else if( a==285){c_1=0.056666667;}
    else if( a==286){c_1=0.059444444;}
    else if( a==287){c_1=0.062777778;}
    else if( a==288){c_1=0.065833333;}
    else if( a==289){c_1=0.068888889;}
    else if( a==290){c_1=0.071944444;}
    else if( a==291){c_1=0.075;}
    else if( a==292){c_1=0.077777778;}
    else if( a==293){c_1=0.080555556;}
    else if( a==294){c_1=0.083333333;}
    else if( a==295){c_1=0.085833333;}
    else if( a==296){c_1=0.088333333;}
    else if( a==297){c_1=0.090555556;}
    else if( a==298){c_1=0.092777778;}
    else if( a==299){c_1=0.095;}
    else if( a==300){c_1=0.096944444;}
    else if( a==301){c_1=0.098888889;}
    else if( a==302){c_1=0.100833333;}
    else if( a==303){c_1=0.102222222;}
    else if( a==304){c_1=0.103888889;}
    else if( a==305){c_1=0.105277778;}
    else if( a==306){c_1=0.106666667;}
    else if( a==307){c_1=0.107777778;}
    else if( a==308){c_1=0.108611111;}
    else if( a==309){c_1=0.109444444;}
    else if( a==310){c_1=0.110277778;}
    else if( a==311){c_1=0.110833333;}
    else if( a==312){c_1=0.111388889;}
    else if( a==313){c_1=0.111666667;}
    else if( a==314){c_1=0.111944444;}
    else if( a==315){c_1=0.111944444;}
    else if( a==316){c_1=0.111944444;}
    else if( a==317){c_1=0.111666667;}
    else if( a==318){c_1=0.111388889;}
    else if( a==319){c_1=0.110833333;}
    else if( a==320){c_1=0.110277778;}
    else if( a==321){c_1=0.109444444;}
    else if( a==322){c_1=0.108611111;}
    else if( a==323){c_1=0.1075;}
    else if( a==324){c_1=0.106388889;}
    else if( a==325){c_1=0.105277778;}
    else if( a==326){c_1=0.103888889;}
    else if( a==327){c_1=0.102222222;}
    else if( a==328){c_1=0.100555556;}
    else if( a==329){c_1=0.098888889;}
    else if( a==330){c_1=0.096944444;}
    else if( a==331){c_1=0.094722222;}
    else if( a==332){c_1=0.092777778;}
    else if( a==333){c_1=0.090555556;}
    else if( a==334){c_1=0.088055556;}
    else if( a==335){c_1=0.085555556;}
    else if( a==336){c_1=0.083055556;}
    else if( a==337){c_1=0.080555556;}
    else if( a==338){c_1=0.077777778;}
    else if( a==339){c_1=0.074722222;}
    else if( a==340){c_1=0.071944444;}
    else if( a==341){c_1=0.068888889;}
    else if( a==342){c_1=0.065833333;}
    else if( a==343){c_1=0.0625;}
    else if( a==344){c_1=0.059166667;}
    else if( a==345){c_1=0.055833333;}
    else if( a==346){c_1=0.0525;}
    else if( a==347){c_1=0.048888889;}
    else if( a==348){c_1=0.045555556;}
    else if( a==349){c_1=0.041944444;}
    else if( a==350){c_1=0.038333333;}
    else if( a==351){c_1=0.034444444;}
    else if( a==352){c_1=0.030833333;}
    else if( a==353){c_1=0.026944444;}
    else if( a==354){c_1=0.023333333;}
    else if( a==355){c_1=0.019444444;}
    else if( a==356){c_1=0.015555556;}
    else if( a==357){c_1=0.011666667;}
    else if( a==358){c_1=0.007777778;}
    else if( a==359){c_1=0.003888889;}
    else if( a==360){c_1=0;}
    else if( a==361){c_1=-0.003888889;}
    else {c_1=99999999;}
        
        
    var c_2
    if( a+1==0){c_2=0;}
    else if( a+1==1){c_2=-0.003888889;}
    else if( a+1==2){c_2=-0.007777778;}
    else if( a+1==3){c_2=-0.011666667;}
    else if( a+1==4){c_2=-0.015555556;}
    else if( a+1==5){c_2=-0.019444444;}
    else if( a+1==6){c_2=-0.023333333;}
    else if( a+1==7){c_2=-0.026944444;}
    else if( a+1==8){c_2=-0.030833333;}
    else if( a+1==9){c_2=-0.034444444;}
    else if( a+1==10){c_2=-0.038333333;}
    else if( a+1==11){c_2=-0.041944444;}
    else if( a+1==12){c_2=-0.045555556;}
    else if( a+1==13){c_2=-0.048888889;}
    else if( a+1==14){c_2=-0.0525;}
    else if( a+1==15){c_2=-0.055833333;}
    else if( a+1==16){c_2=-0.059166667;}
    else if( a+1==17){c_2=-0.0625;}
    else if( a+1==18){c_2=-0.065833333;}
    else if( a+1==19){c_2=-0.068888889;}
    else if( a+1==20){c_2=-0.071944444;}
    else if( a+1==21){c_2=-0.074722222;}
    else if( a+1==22){c_2=-0.077777778;}
    else if( a+1==23){c_2=-0.080555556;}
    else if( a+1==24){c_2=-0.083055556;}
    else if( a+1==25){c_2=-0.085555556;}
    else if( a+1==26){c_2=-0.088055556;}
    else if( a+1==27){c_2=-0.090555556;}
    else if( a+1==28){c_2=-0.092777778;}
    else if( a+1==29){c_2=-0.094722222;}
    else if( a+1==30){c_2=-0.096944444;}
    else if( a+1==31){c_2=-0.098888889;}
    else if( a+1==32){c_2=-0.100555556;}
    else if( a+1==33){c_2=-0.102222222;}
    else if( a+1==34){c_2=-0.103888889;}
    else if( a+1==35){c_2=-0.105277778;}
    else if( a+1==36){c_2=-0.106388889;}
    else if( a+1==37){c_2=-0.1075;}
    else if( a+1==38){c_2=-0.108611111;}
    else if( a+1==39){c_2=-0.109444444;}
    else if( a+1==40){c_2=-0.110277778;}
    else if( a+1==41){c_2=-0.110833333;}
    else if( a+1==42){c_2=-0.111388889;}
    else if( a+1==43){c_2=-0.111666667;}
    else if( a+1==44){c_2=-0.111944444;}
    else if( a+1==45){c_2=-0.111944444;}
    else if( a+1==46){c_2=-0.111944444;}
    else if( a+1==47){c_2=-0.111666667;}
    else if( a+1==48){c_2=-0.111388889;}
    else if( a+1==49){c_2=-0.110833333;}
    else if( a+1==50){c_2=-0.110277778;}
    else if( a+1==51){c_2=-0.109444444;}
    else if( a+1==52){c_2=-0.108611111;}
    else if( a+1==53){c_2=-0.107777778;}
    else if( a+1==54){c_2=-0.106666667;}
    else if( a+1==55){c_2=-0.105277778;}
    else if( a+1==56){c_2=-0.103888889;}
    else if( a+1==57){c_2=-0.102222222;}
    else if( a+1==58){c_2=-0.100833333;}
    else if( a+1==59){c_2=-0.098888889;}
    else if( a+1==60){c_2=-0.096944444;}
    else if( a+1==61){c_2=-0.095;}
    else if( a+1==62){c_2=-0.092777778;}
    else if( a+1==63){c_2=-0.090555556;}
    else if( a+1==64){c_2=-0.088333333;}
    else if( a+1==65){c_2=-0.085833333;}
    else if( a+1==66){c_2=-0.083333333;}
    else if( a+1==67){c_2=-0.080555556;}
    else if( a+1==68){c_2=-0.077777778;}
    else if( a+1==69){c_2=-0.075;}
    else if( a+1==70){c_2=-0.071944444;}
    else if( a+1==71){c_2=-0.068888889;}
    else if( a+1==72){c_2=-0.065833333;}
    else if( a+1==73){c_2=-0.062777778;}
    else if( a+1==74){c_2=-0.059444444;}
    else if( a+1==75){c_2=-0.056666667;}
    else if( a+1==76){c_2=-0.0525;}
    else if( a+1==77){c_2=-0.049166667;}
    else if( a+1==78){c_2=-0.045555556;}
    else if( a+1==79){c_2=-0.041944444;}
    else if( a+1==80){c_2=-0.035555556;}
    else if( a+1==81){c_2=-0.034722222;}
    else if( a+1==82){c_2=-0.030833333;}
    else if( a+1==83){c_2=-0.027222222;}
    else if( a+1==84){c_2=-0.023333333;}
    else if( a+1==85){c_2=-0.019444444;}
    else if( a+1==86){c_2=-0.015833333;}
    else if( a+1==87){c_2=-0.011666667;}
    else if( a+1==88){c_2=-0.007777778;}
    else if( a+1==89){c_2=-0.003888889;}
    else if( a+1==90){c_2=0;}
    else if( a+1==91){c_2=0.003888889;}
    else if( a+1==92){c_2=0.007777778;}
    else if( a+1==93){c_2=0.011666667;}
    else if( a+1==94){c_2=0.015833333;}
    else if( a+1==95){c_2=0.019444444;}
    else if( a+1==96){c_2=0.023333333;}
    else if( a+1==97){c_2=0.027222222;}
    else if( a+1==98){c_2=0.030833333;}
    else if( a+1==99){c_2=0.034722222;}
    else if( a+1==100){c_2=0.035555556;}
    else if( a+1==101){c_2=0.041944444;}
    else if( a+1==102){c_2=0.045555556;}
    else if( a+1==103){c_2=0.049166667;}
    else if( a+1==104){c_2=0.0525;}
    else if( a+1==105){c_2=0.056666667;}
    else if( a+1==106){c_2=0.059444444;}
    else if( a+1==107){c_2=0.062777778;}
    else if( a+1==108){c_2=0.065833333;}
    else if( a+1==109){c_2=0.068888889;}
    else if( a+1==110){c_2=0.071944444;}
    else if( a+1==111){c_2=0.075;}
    else if( a+1==112){c_2=0.077777778;}
    else if( a+1==113){c_2=0.080555556;}
    else if( a+1==114){c_2=0.083333333;}
    else if( a+1==115){c_2=0.085833333;}
    else if( a+1==116){c_2=0.088333333;}
    else if( a+1==117){c_2=0.090555556;}
    else if( a+1==118){c_2=0.092777778;}
    else if( a+1==119){c_2=0.095;}
    else if( a+1==120){c_2=0.096944444;}
    else if( a+1==121){c_2=0.098888889;}
    else if( a+1==122){c_2=0.100833333;}
    else if( a+1==123){c_2=0.102222222;}
    else if( a+1==124){c_2=0.103888889;}
    else if( a+1==125){c_2=0.105277778;}
    else if( a+1==126){c_2=0.106666667;}
    else if( a+1==127){c_2=0.107777778;}
    else if( a+1==128){c_2=0.108611111;}
    else if( a+1==129){c_2=0.109444444;}
    else if( a+1==130){c_2=0.110277778;}
    else if( a+1==131){c_2=0.110833333;}
    else if( a+1==132){c_2=0.111388889;}
    else if( a+1==133){c_2=0.111666667;}
    else if( a+1==134){c_2=0.111944444;}
    else if( a+1==135){c_2=0.111944444;}
    else if( a+1==136){c_2=0.111944444;}
    else if( a+1==137){c_2=0.111666667;}
    else if( a+1==138){c_2=0.111388889;}
    else if( a+1==139){c_2=0.110833333;}
    else if( a+1==140){c_2=0.110277778;}
    else if( a+1==141){c_2=0.109444444;}
    else if( a+1==142){c_2=0.108611111;}
    else if( a+1==143){c_2=0.1075;}
    else if( a+1==144){c_2=0.106388889;}
    else if( a+1==145){c_2=0.105277778;}
    else if( a+1==146){c_2=0.103888889;}
    else if( a+1==147){c_2=0.102222222;}
    else if( a+1==148){c_2=0.100555556;}
    else if( a+1==149){c_2=0.098888889;}
    else if( a+1==150){c_2=0.096944444;}
    else if( a+1==151){c_2=0.094722222;}
    else if( a+1==152){c_2=0.092777778;}
    else if( a+1==153){c_2=0.090555556;}
    else if( a+1==154){c_2=0.088055556;}
    else if( a+1==155){c_2=0.085555556;}
    else if( a+1==156){c_2=0.083055556;}
    else if( a+1==157){c_2=0.080555556;}
    else if( a+1==158){c_2=0.077777778;}
    else if( a+1==159){c_2=0.074722222;}
    else if( a+1==160){c_2=0.071944444;}
    else if( a+1==161){c_2=0.068888889;}
    else if( a+1==162){c_2=0.065833333;}
    else if( a+1==163){c_2=0.0625;}
    else if( a+1==164){c_2=0.059166667;}
    else if( a+1==165){c_2=0.055833333;}
    else if( a+1==166){c_2=0.0525;}
    else if( a+1==167){c_2=0.048888889;}
    else if( a+1==168){c_2=0.045555556;}
    else if( a+1==169){c_2=0.041944444;}
    else if( a+1==170){c_2=0.038333333;}
    else if( a+1==171){c_2=0.034444444;}
    else if( a+1==172){c_2=0.030833333;}
    else if( a+1==173){c_2=0.026944444;}
    else if( a+1==174){c_2=0.023333333;}
    else if( a+1==175){c_2=0.019444444;}
    else if( a+1==176){c_2=0.015555556;}
    else if( a+1==177){c_2=0.011666667;}
    else if( a+1==178){c_2=0.007777778;}
    else if( a+1==179){c_2=0.003888889;}
    else if( a+1==180){c_2=0;}
    else if( a+1==181){c_2=-0.003888889;}
    else if( a+1==182){c_2=-0.007777778;}
    else if( a+1==183){c_2=-0.011666667;}
    else if( a+1==184){c_2=-0.015555556;}
    else if( a+1==185){c_2=-0.019444444;}
    else if( a+1==186){c_2=-0.023333333;}
    else if( a+1==187){c_2=-0.026944444;}
    else if( a+1==188){c_2=-0.030833333;}
    else if( a+1==189){c_2=-0.034444444;}
    else if( a+1==190){c_2=-0.038333333;}
    else if( a+1==191){c_2=-0.041944444;}
    else if( a+1==192){c_2=-0.045555556;}
    else if( a+1==193){c_2=-0.048888889;}
    else if( a+1==194){c_2=-0.0525;}
    else if( a+1==195){c_2=-0.055833333;}
    else if( a+1==196){c_2=-0.059166667;}
    else if( a+1==197){c_2=-0.0625;}
    else if( a+1==198){c_2=-0.065833333;}
    else if( a+1==199){c_2=-0.068888889;}
    else if( a+1==200){c_2=-0.071944444;}
    else if( a+1==201){c_2=-0.074722222;}
    else if( a+1==202){c_2=-0.077777778;}
    else if( a+1==203){c_2=-0.080555556;}
    else if( a+1==204){c_2=-0.083055556;}
    else if( a+1==205){c_2=-0.085555556;}
    else if( a+1==206){c_2=-0.088055556;}
    else if( a+1==207){c_2=-0.090555556;}
    else if( a+1==208){c_2=-0.092777778;}
    else if( a+1==209){c_2=-0.094722222;}
    else if( a+1==210){c_2=-0.096944444;}
    else if( a+1==211){c_2=-0.098888889;}
    else if( a+1==212){c_2=-0.100555556;}
    else if( a+1==213){c_2=-0.102222222;}
    else if( a+1==214){c_2=-0.103888889;}
    else if( a+1==215){c_2=-0.105277778;}
    else if( a+1==216){c_2=-0.106388889;}
    else if( a+1==217){c_2=-0.1075;}
    else if( a+1==218){c_2=-0.108611111;}
    else if( a+1==219){c_2=-0.109444444;}
    else if( a+1==220){c_2=-0.110277778;}
    else if( a+1==221){c_2=-0.110833333;}
    else if( a+1==222){c_2=-0.111388889;}
    else if( a+1==223){c_2=-0.111666667;}
    else if( a+1==224){c_2=-0.111944444;}
    else if( a+1==225){c_2=-0.111944444;}
    else if( a+1==226){c_2=-0.111944444;}
    else if( a+1==227){c_2=-0.111666667;}
    else if( a+1==228){c_2=-0.111388889;}
    else if( a+1==229){c_2=-0.110833333;}
    else if( a+1==230){c_2=-0.110277778;}
    else if( a+1==231){c_2=-0.109444444;}
    else if( a+1==232){c_2=-0.108611111;}
    else if( a+1==233){c_2=-0.107777778;}
    else if( a+1==234){c_2=-0.106666667;}
    else if( a+1==235){c_2=-0.105277778;}
    else if( a+1==236){c_2=-0.103888889;}
    else if( a+1==237){c_2=-0.102222222;}
    else if( a+1==238){c_2=-0.100833333;}
    else if( a+1==239){c_2=-0.098888889;}
    else if( a+1==240){c_2=-0.096944444;}
    else if( a+1==241){c_2=-0.095;}
    else if( a+1==242){c_2=-0.092777778;}
    else if( a+1==243){c_2=-0.090555556;}
    else if( a+1==244){c_2=-0.088333333;}
    else if( a+1==245){c_2=-0.085833333;}
    else if( a+1==246){c_2=-0.083333333;}
    else if( a+1==247){c_2=-0.080555556;}
    else if( a+1==248){c_2=-0.077777778;}
    else if( a+1==249){c_2=-0.075;}
    else if( a+1==250){c_2=-0.071944444;}
    else if( a+1==251){c_2=-0.068888889;}
    else if( a+1==252){c_2=-0.065833333;}
    else if( a+1==253){c_2=-0.062777778;}
    else if( a+1==254){c_2=-0.059444444;}
    else if( a+1==255){c_2=-0.056666667;}
    else if( a+1==256){c_2=-0.0525;}
    else if( a+1==257){c_2=-0.049166667;}
    else if( a+1==258){c_2=-0.045555556;}
    else if( a+1==259){c_2=-0.041944444;}
    else if( a+1==260){c_2=-0.035555556;}
    else if( a+1==261){c_2=-0.034722222;}
    else if( a+1==262){c_2=-0.030833333;}
    else if( a+1==263){c_2=-0.027222222;}
    else if( a+1==264){c_2=-0.023333333;}
    else if( a+1==265){c_2=-0.019444444;}
    else if( a+1==266){c_2=-0.015833333;}
    else if( a+1==267){c_2=-0.011666667;}
    else if( a+1==268){c_2=-0.007777778;}
    else if( a+1==269){c_2=-0.003888889;}
    else if( a+1==270){c_2=0;}
    else if( a+1==271){c_2=0.003888889;}
    else if( a+1==272){c_2=0.007777778;}
    else if( a+1==273){c_2=0.011666667;}
    else if( a+1==274){c_2=0.015833333;}
    else if( a+1==275){c_2=0.019444444;}
    else if( a+1==276){c_2=0.023333333;}
    else if( a+1==277){c_2=0.027222222;}
    else if( a+1==278){c_2=0.030833333;}
    else if( a+1==279){c_2=0.034722222;}
    else if( a+1==280){c_2=0.035555556;}
    else if( a+1==281){c_2=0.041944444;}
    else if( a+1==282){c_2=0.045555556;}
    else if( a+1==283){c_2=0.049166667;}
    else if( a+1==284){c_2=0.0525;}
    else if( a+1==285){c_2=0.056666667;}
    else if( a+1==286){c_2=0.059444444;}
    else if( a+1==287){c_2=0.062777778;}
    else if( a+1==288){c_2=0.065833333;}
    else if( a+1==289){c_2=0.068888889;}
    else if( a+1==290){c_2=0.071944444;}
    else if( a+1==291){c_2=0.075;}
    else if( a+1==292){c_2=0.077777778;}
    else if( a+1==293){c_2=0.080555556;}
    else if( a+1==294){c_2=0.083333333;}
    else if( a+1==295){c_2=0.085833333;}
    else if( a+1==296){c_2=0.088333333;}
    else if( a+1==297){c_2=0.090555556;}
    else if( a+1==298){c_2=0.092777778;}
    else if( a+1==299){c_2=0.095;}
    else if( a+1==300){c_2=0.096944444;}
    else if( a+1==301){c_2=0.098888889;}
    else if( a+1==302){c_2=0.100833333;}
    else if( a+1==303){c_2=0.102222222;}
    else if( a+1==304){c_2=0.103888889;}
    else if( a+1==305){c_2=0.105277778;}
    else if( a+1==306){c_2=0.106666667;}
    else if( a+1==307){c_2=0.107777778;}
    else if( a+1==308){c_2=0.108611111;}
    else if( a+1==309){c_2=0.109444444;}
    else if( a+1==310){c_2=0.110277778;}
    else if( a+1==311){c_2=0.110833333;}
    else if( a+1==312){c_2=0.111388889;}
    else if( a+1==313){c_2=0.111666667;}
    else if( a+1==314){c_2=0.111944444;}
    else if( a+1==315){c_2=0.111944444;}
    else if( a+1==316){c_2=0.111944444;}
    else if( a+1==317){c_2=0.111666667;}
    else if( a+1==318){c_2=0.111388889;}
    else if( a+1==319){c_2=0.110833333;}
    else if( a+1==320){c_2=0.110277778;}
    else if( a+1==321){c_2=0.109444444;}
    else if( a+1==322){c_2=0.108611111;}
    else if( a+1==323){c_2=0.1075;}
    else if( a+1==324){c_2=0.106388889;}
    else if( a+1==325){c_2=0.105277778;}
    else if( a+1==326){c_2=0.103888889;}
    else if( a+1==327){c_2=0.102222222;}
    else if( a+1==328){c_2=0.100555556;}
    else if( a+1==329){c_2=0.098888889;}
    else if( a+1==330){c_2=0.096944444;}
    else if( a+1==331){c_2=0.094722222;}
    else if( a+1==332){c_2=0.092777778;}
    else if( a+1==333){c_2=0.090555556;}
    else if( a+1==334){c_2=0.088055556;}
    else if( a+1==335){c_2=0.085555556;}
    else if( a+1==336){c_2=0.083055556;}
    else if( a+1==337){c_2=0.080555556;}
    else if( a+1==338){c_2=0.077777778;}
    else if( a+1==339){c_2=0.074722222;}
    else if( a+1==340){c_2=0.071944444;}
    else if( a+1==341){c_2=0.068888889;}
    else if( a+1==342){c_2=0.065833333;}
    else if( a+1==343){c_2=0.0625;}
    else if( a+1==344){c_2=0.059166667;}
    else if( a+1==345){c_2=0.055833333;}
    else if( a+1==346){c_2=0.0525;}
    else if( a+1==347){c_2=0.048888889;}
    else if( a+1==348){c_2=0.045555556;}
    else if( a+1==349){c_2=0.041944444;}
    else if( a+1==350){c_2=0.038333333;}
    else if( a+1==351){c_2=0.034444444;}
    else if( a+1==352){c_2=0.030833333;}
    else if( a+1==353){c_2=0.026944444;}
    else if( a+1==354){c_2=0.023333333;}
    else if( a+1==355){c_2=0.019444444;}
    else if( a+1==356){c_2=0.015555556;}
    else if( a+1==357){c_2=0.011666667;}
    else if( a+1==358){c_2=0.007777778;}
    else if( a+1==359){c_2=0.003888889;}
    else if( a+1==360){c_2=0;}
    else if( a+1==361){c_2=-0.003888889;}
    else {c_2=99999999;}
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var tdlc4 = ftdlc4(intdalil5, dalil5);
    var thulqomar = MOD(kwq_4+tdlc4+360,360);
        
        
    var bm
    
    if ((MOD(thulqomar-thulsyams+360,360))>180){
        bm = (MOD(thulqomar-thulsyams+360,360))-360;
        }else{
        bm = (MOD(thulqomar-thulsyams+360,360));
        }
        
        
    //sabaq
    var fsbq1 = function (a,b){
    var c_1
    if( a==0){c_1=0.492861111;}
    else if( a==1){c_1=0.492861111;}
    else if( a==2){c_1=0.492888889;}
    else if( a==3){c_1=0.492916667;}
    else if( a==4){c_1=0.492972222;}
    else if( a==5){c_1=0.493027778;}
    else if( a==6){c_1=0.493111111;}
    else if( a==7){c_1=0.493194444;}
    else if( a==8){c_1=0.493305556;}
    else if( a==9){c_1=0.493416667;}
    else if( a==10){c_1=0.493555556;}
    else if( a==11){c_1=0.493694444;}
    else if( a==12){c_1=0.493861111;}
    else if( a==13){c_1=0.494027778;}
    else if( a==14){c_1=0.494222222;}
    else if( a==15){c_1=0.494416667;}
    else if( a==16){c_1=0.494638889;}
    else if( a==17){c_1=0.494861111;}
    else if( a==18){c_1=0.495111111;}
    else if( a==19){c_1=0.495361111;}
    else if( a==20){c_1=0.495611111;}
    else if( a==21){c_1=0.495888889;}
    else if( a==22){c_1=0.496194444;}
    else if( a==23){c_1=0.4965;}
    else if( a==24){c_1=0.496833333;}
    else if( a==25){c_1=0.497194444;}
    else if( a==26){c_1=0.497555556;}
    else if( a==27){c_1=0.497916667;}
    else if( a==28){c_1=0.498305556;}
    else if( a==29){c_1=0.498694444;}
    else if( a==30){c_1=0.499083333;}
    else if( a==31){c_1=0.4995;}
    else if( a==32){c_1=0.499944444;}
    else if( a==33){c_1=0.500388889;}
    else if( a==34){c_1=0.500861111;}
    else if( a==35){c_1=0.501333333;}
    else if( a==36){c_1=0.501833333;}
    else if( a==37){c_1=0.502333333;}
    else if( a==38){c_1=0.502833333;}
    else if( a==39){c_1=0.503361111;}
    else if( a==40){c_1=0.503888889;}
    else if( a==41){c_1=0.504444444;}
    else if( a==42){c_1=0.505;}
    else if( a==43){c_1=0.505583333;}
    else if( a==44){c_1=0.506166667;}
    else if( a==45){c_1=0.506777778;}
    else if( a==46){c_1=0.507388889;}
    else if( a==47){c_1=0.508027778;}
    else if( a==48){c_1=0.508666667;}
    else if( a==49){c_1=0.509305556;}
    else if( a==50){c_1=0.509972222;}
    else if( a==51){c_1=0.510638889;}
    else if( a==52){c_1=0.511333333;}
    else if( a==53){c_1=0.512027778;}
    else if( a==54){c_1=0.51275;}
    else if( a==55){c_1=0.513472222;}
    else if( a==56){c_1=0.514194444;}
    else if( a==57){c_1=0.514944444;}
    else if( a==58){c_1=0.515694444;}
    else if( a==59){c_1=0.516472222;}
    else if( a==60){c_1=0.51725;}
    else if( a==61){c_1=0.518055556;}
    else if( a==62){c_1=0.518861111;}
    else if( a==63){c_1=0.519666667;}
    else if( a==64){c_1=0.5205;}
    else if( a==65){c_1=0.521333333;}
    else if( a==66){c_1=0.522166667;}
    else if( a==67){c_1=0.523027778;}
    else if( a==68){c_1=0.523888889;}
    else if( a==69){c_1=0.52475;}
    else if( a==70){c_1=0.525611111;}
    else if( a==71){c_1=0.5265;}
    else if( a==72){c_1=0.527388889;}
    else if( a==73){c_1=0.528305556;}
    else if( a==74){c_1=0.529222222;}
    else if( a==75){c_1=0.530166667;}
    else if( a==76){c_1=0.531111111;}
    else if( a==77){c_1=0.532055556;}
    else if( a==78){c_1=0.533;}
    else if( a==79){c_1=0.533972222;}
    else if( a==80){c_1=0.534916667;}
    else if( a==81){c_1=0.535888889;}
    else if( a==82){c_1=0.536861111;}
    else if( a==83){c_1=0.537861111;}
    else if( a==84){c_1=0.538861111;}
    else if( a==85){c_1=0.539861111;}
    else if( a==86){c_1=0.540861111;}
    else if( a==87){c_1=0.541861111;}
    else if( a==88){c_1=0.542888889;}
    else if( a==89){c_1=0.543916667;}
    else if( a==90){c_1=0.544944444;}
    else if( a==91){c_1=0.545972222;}
    else if( a==92){c_1=0.547;}
    else if( a==93){c_1=0.548055556;}
    else if( a==94){c_1=0.549083333;}
    else if( a==95){c_1=0.550138889;}
    else if( a==96){c_1=0.551194444;}
    else if( a==97){c_1=0.55225;}
    else if( a==98){c_1=0.553305556;}
    else if( a==99){c_1=0.554388889;}
    else if( a==100){c_1=0.555444444;}
    else if( a==101){c_1=0.556527778;}
    else if( a==102){c_1=0.557583333;}
    else if( a==103){c_1=0.558638889;}
    else if( a==104){c_1=0.556944444;}
    else if( a==105){c_1=0.560777778;}
    else if( a==106){c_1=0.561861111;}
    else if( a==107){c_1=0.562916667;}
    else if( a==108){c_1=0.564;}
    else if( a==109){c_1=0.565055556;}
    else if( a==110){c_1=0.566138889;}
    else if( a==111){c_1=0.567194444;}
    else if( a==112){c_1=0.56825;}
    else if( a==113){c_1=0.569333333;}
    else if( a==114){c_1=0.570388889;}
    else if( a==115){c_1=0.571444444;}
    else if( a==116){c_1=0.5725;}
    else if( a==117){c_1=0.573555556;}
    else if( a==118){c_1=0.574583333;}
    else if( a==119){c_1=0.575611111;}
    else if( a==120){c_1=0.576638889;}
    else if( a==121){c_1=0.577666667;}
    else if( a==122){c_1=0.578666667;}
    else if( a==123){c_1=0.579694444;}
    else if( a==124){c_1=0.580694444;}
    else if( a==125){c_1=0.581694444;}
    else if( a==126){c_1=0.582694444;}
    else if( a==127){c_1=0.583666667;}
    else if( a==128){c_1=0.584638889;}
    else if( a==129){c_1=0.585611111;}
    else if( a==130){c_1=0.586583333;}
    else if( a==131){c_1=0.587527778;}
    else if( a==132){c_1=0.588472222;}
    else if( a==133){c_1=0.589388889;}
    else if( a==134){c_1=0.590305556;}
    else if( a==135){c_1=0.591194444;}
    else if( a==136){c_1=0.592083333;}
    else if( a==137){c_1=0.592972222;}
    else if( a==138){c_1=0.593833333;}
    else if( a==139){c_1=0.594694444;}
    else if( a==140){c_1=0.595527778;}
    else if( a==141){c_1=0.596333333;}
    else if( a==142){c_1=0.597138889;}
    else if( a==143){c_1=0.597916667;}
    else if( a==144){c_1=0.598694444;}
    else if( a==145){c_1=0.599444444;}
    else if( a==146){c_1=0.600194444;}
    else if( a==147){c_1=0.600916667;}
    else if( a==148){c_1=0.601638889;}
    else if( a==149){c_1=0.602333333;}
    else if( a==150){c_1=0.603027778;}
    else if( a==151){c_1=0.603694444;}
    else if( a==152){c_1=0.604333333;}
    else if( a==153){c_1=0.604944444;}
    else if( a==154){c_1=0.605555556;}
    else if( a==155){c_1=0.606138889;}
    else if( a==156){c_1=0.606694444;}
    else if( a==157){c_1=0.607222222;}
    else if( a==158){c_1=0.607722222;}
    else if( a==159){c_1=0.608222222;}
    else if( a==160){c_1=0.608694444;}
    else if( a==161){c_1=0.609138889;}
    else if( a==162){c_1=0.609583333;}
    else if( a==163){c_1=0.61;}
    else if( a==164){c_1=0.610388889;}
    else if( a==165){c_1=0.61075;}
    else if( a==166){c_1=0.611111111;}
    else if( a==167){c_1=0.611444444;}
    else if( a==168){c_1=0.61175;}
    else if( a==169){c_1=0.612027778;}
    else if( a==170){c_1=0.612277778;}
    else if( a==171){c_1=0.6125;}
    else if( a==172){c_1=0.612694444;}
    else if( a==173){c_1=0.612861111;}
    else if( a==174){c_1=0.613027778;}
    else if( a==175){c_1=0.613166667;}
    else if( a==176){c_1=0.613277778;}
    else if( a==177){c_1=0.613361111;}
    else if( a==178){c_1=0.613416667;}
    else if( a==179){c_1=0.613444444;}
    else if( a==180){c_1=0.613472222;}
    else if( a==181){c_1=0.613444444;}
    else if( a==182){c_1=0.613416667;}
    else if( a==183){c_1=0.613361111;}
    else if( a==184){c_1=0.613277778;}
    else if( a==185){c_1=0.613166667;}
    else if( a==186){c_1=0.613027778;}
    else if( a==187){c_1=0.612861111;}
    else if( a==188){c_1=0.612694444;}
    else if( a==189){c_1=0.6125;}
    else if( a==190){c_1=0.612277778;}
    else if( a==191){c_1=0.612027778;}
    else if( a==192){c_1=0.61175;}
    else if( a==193){c_1=0.611444444;}
    else if( a==194){c_1=0.611111111;}
    else if( a==195){c_1=0.61075;}
    else if( a==196){c_1=0.610388889;}
    else if( a==197){c_1=0.61;}
    else if( a==198){c_1=0.609583333;}
    else if( a==199){c_1=0.609138889;}
    else if( a==200){c_1=0.608694444;}
    else if( a==201){c_1=0.608222222;}
    else if( a==202){c_1=0.607722222;}
    else if( a==203){c_1=0.607222222;}
    else if( a==204){c_1=0.606694444;}
    else if( a==205){c_1=0.606138889;}
    else if( a==206){c_1=0.605555556;}
    else if( a==207){c_1=0.604944444;}
    else if( a==208){c_1=0.604333333;}
    else if( a==209){c_1=0.603694444;}
    else if( a==210){c_1=0.603027778;}
    else if( a==211){c_1=0.602333333;}
    else if( a==212){c_1=0.601638889;}
    else if( a==213){c_1=0.600916667;}
    else if( a==214){c_1=0.600194444;}
    else if( a==215){c_1=0.599444444;}
    else if( a==216){c_1=0.598694444;}
    else if( a==217){c_1=0.597916667;}
    else if( a==218){c_1=0.597138889;}
    else if( a==219){c_1=0.596333333;}
    else if( a==220){c_1=0.595527778;}
    else if( a==221){c_1=0.594694444;}
    else if( a==222){c_1=0.593833333;}
    else if( a==223){c_1=0.592972222;}
    else if( a==224){c_1=0.592083333;}
    else if( a==225){c_1=0.591194444;}
    else if( a==226){c_1=0.590305556;}
    else if( a==227){c_1=0.589388889;}
    else if( a==228){c_1=0.588472222;}
    else if( a==229){c_1=0.587527778;}
    else if( a==230){c_1=0.586583333;}
    else if( a==231){c_1=0.585611111;}
    else if( a==232){c_1=0.584638889;}
    else if( a==233){c_1=0.583666667;}
    else if( a==234){c_1=0.582694444;}
    else if( a==235){c_1=0.581694444;}
    else if( a==236){c_1=0.580694444;}
    else if( a==237){c_1=0.579694444;}
    else if( a==238){c_1=0.578666667;}
    else if( a==239){c_1=0.577666667;}
    else if( a==240){c_1=0.576638889;}
    else if( a==241){c_1=0.575611111;}
    else if( a==242){c_1=0.574583333;}
    else if( a==243){c_1=0.573555556;}
    else if( a==244){c_1=0.5725;}
    else if( a==245){c_1=0.571444444;}
    else if( a==246){c_1=0.570388889;}
    else if( a==247){c_1=0.569333333;}
    else if( a==248){c_1=0.56825;}
    else if( a==249){c_1=0.567194444;}
    else if( a==250){c_1=0.566138889;}
    else if( a==251){c_1=0.565055556;}
    else if( a==252){c_1=0.564;}
    else if( a==253){c_1=0.562916667;}
    else if( a==254){c_1=0.561861111;}
    else if( a==255){c_1=0.560777778;}
    else if( a==256){c_1=0.556944444;}
    else if( a==257){c_1=0.558638889;}
    else if( a==258){c_1=0.557583333;}
    else if( a==259){c_1=0.556527778;}
    else if( a==260){c_1=0.555444444;}
    else if( a==261){c_1=0.554388889;}
    else if( a==262){c_1=0.553305556;}
    else if( a==263){c_1=0.55225;}
    else if( a==264){c_1=0.551194444;}
    else if( a==265){c_1=0.550138889;}
    else if( a==266){c_1=0.549083333;}
    else if( a==267){c_1=0.548055556;}
    else if( a==268){c_1=0.547;}
    else if( a==269){c_1=0.545972222;}
    else if( a==270){c_1=0.544944444;}
    else if( a==271){c_1=0.543916667;}
    else if( a==272){c_1=0.542888889;}
    else if( a==273){c_1=0.541861111;}
    else if( a==274){c_1=0.540861111;}
    else if( a==275){c_1=0.539861111;}
    else if( a==276){c_1=0.538861111;}
    else if( a==277){c_1=0.537861111;}
    else if( a==278){c_1=0.536861111;}
    else if( a==279){c_1=0.535888889;}
    else if( a==280){c_1=0.534916667;}
    else if( a==281){c_1=0.533972222;}
    else if( a==282){c_1=0.533;}
    else if( a==283){c_1=0.532055556;}
    else if( a==284){c_1=0.531111111;}
    else if( a==285){c_1=0.530166667;}
    else if( a==286){c_1=0.529222222;}
    else if( a==287){c_1=0.528305556;}
    else if( a==288){c_1=0.527388889;}
    else if( a==289){c_1=0.5265;}
    else if( a==290){c_1=0.525611111;}
    else if( a==291){c_1=0.52475;}
    else if( a==292){c_1=0.523888889;}
    else if( a==293){c_1=0.523027778;}
    else if( a==294){c_1=0.522166667;}
    else if( a==295){c_1=0.521333333;}
    else if( a==296){c_1=0.5205;}
    else if( a==297){c_1=0.519666667;}
    else if( a==298){c_1=0.518861111;}
    else if( a==299){c_1=0.518055556;}
    else if( a==300){c_1=0.51725;}
    else if( a==301){c_1=0.516472222;}
    else if( a==302){c_1=0.515694444;}
    else if( a==303){c_1=0.514944444;}
    else if( a==304){c_1=0.514194444;}
    else if( a==305){c_1=0.513472222;}
    else if( a==306){c_1=0.51275;}
    else if( a==307){c_1=0.512027778;}
    else if( a==308){c_1=0.511333333;}
    else if( a==309){c_1=0.510638889;}
    else if( a==310){c_1=0.509972222;}
    else if( a==311){c_1=0.509305556;}
    else if( a==312){c_1=0.508666667;}
    else if( a==313){c_1=0.508027778;}
    else if( a==314){c_1=0.507388889;}
    else if( a==315){c_1=0.506777778;}
    else if( a==316){c_1=0.506166667;}
    else if( a==317){c_1=0.505583333;}
    else if( a==318){c_1=0.505;}
    else if( a==319){c_1=0.504444444;}
    else if( a==320){c_1=0.503888889;}
    else if( a==321){c_1=0.503361111;}
    else if( a==322){c_1=0.502833333;}
    else if( a==323){c_1=0.502333333;}
    else if( a==324){c_1=0.501833333;}
    else if( a==325){c_1=0.501333333;}
    else if( a==326){c_1=0.500861111;}
    else if( a==327){c_1=0.500388889;}
    else if( a==328){c_1=0.499944444;}
    else if( a==329){c_1=0.4995;}
    else if( a==330){c_1=0.499083333;}
    else if( a==331){c_1=0.498694444;}
    else if( a==332){c_1=0.498305556;}
    else if( a==333){c_1=0.497916667;}
    else if( a==334){c_1=0.497555556;}
    else if( a==335){c_1=0.497194444;}
    else if( a==336){c_1=0.496833333;}
    else if( a==337){c_1=0.4965;}
    else if( a==338){c_1=0.496194444;}
    else if( a==339){c_1=0.495888889;}
    else if( a==340){c_1=0.495611111;}
    else if( a==341){c_1=0.495361111;}
    else if( a==342){c_1=0.495111111;}
    else if( a==343){c_1=0.494861111;}
    else if( a==344){c_1=0.494638889;}
    else if( a==345){c_1=0.494416667;}
    else if( a==346){c_1=0.494222222;}
    else if( a==347){c_1=0.494027778;}
    else if( a==348){c_1=0.493861111;}
    else if( a==349){c_1=0.493694444;}
    else if( a==350){c_1=0.493555556;}
    else if( a==351){c_1=0.493416667;}
    else if( a==352){c_1=0.493305556;}
    else if( a==353){c_1=0.493194444;}
    else if( a==354){c_1=0.493111111;}
    else if( a==355){c_1=0.493027778;}
    else if( a==356){c_1=0.492972222;}
    else if( a==357){c_1=0.492916667;}
    else if( a==358){c_1=0.492888889;}
    else if( a==359){c_1=0.492861111;}
    else if( a==360){c_1=0.492861111;}
    else {c_1=9999999.9999;}
    
    
    var c_2
    if( a+1==0){c_2=0;}
    else if( a+1==0){c_2=0.492861111;}
    else if( a+1==1){c_2=0.492861111;}
    else if( a+1==2){c_2=0.492888889;}
    else if( a+1==3){c_2=0.492916667;}
    else if( a+1==4){c_2=0.492972222;}
    else if( a+1==5){c_2=0.493027778;}
    else if( a+1==6){c_2=0.493111111;}
    else if( a+1==7){c_2=0.493194444;}
    else if( a+1==8){c_2=0.493305556;}
    else if( a+1==9){c_2=0.493416667;}
    else if( a+1==10){c_2=0.493555556;}
    else if( a+1==11){c_2=0.493694444;}
    else if( a+1==12){c_2=0.493861111;}
    else if( a+1==13){c_2=0.494027778;}
    else if( a+1==14){c_2=0.494222222;}
    else if( a+1==15){c_2=0.494416667;}
    else if( a+1==16){c_2=0.494638889;}
    else if( a+1==17){c_2=0.494861111;}
    else if( a+1==18){c_2=0.495111111;}
    else if( a+1==19){c_2=0.495361111;}
    else if( a+1==20){c_2=0.495611111;}
    else if( a+1==21){c_2=0.495888889;}
    else if( a+1==22){c_2=0.496194444;}
    else if( a+1==23){c_2=0.4965;}
    else if( a+1==24){c_2=0.496833333;}
    else if( a+1==25){c_2=0.497194444;}
    else if( a+1==26){c_2=0.497555556;}
    else if( a+1==27){c_2=0.497916667;}
    else if( a+1==28){c_2=0.498305556;}
    else if( a+1==29){c_2=0.498694444;}
    else if( a+1==30){c_2=0.499083333;}
    else if( a+1==31){c_2=0.4995;}
    else if( a+1==32){c_2=0.499944444;}
    else if( a+1==33){c_2=0.500388889;}
    else if( a+1==34){c_2=0.500861111;}
    else if( a+1==35){c_2=0.501333333;}
    else if( a+1==36){c_2=0.501833333;}
    else if( a+1==37){c_2=0.502333333;}
    else if( a+1==38){c_2=0.502833333;}
    else if( a+1==39){c_2=0.503361111;}
    else if( a+1==40){c_2=0.503888889;}
    else if( a+1==41){c_2=0.504444444;}
    else if( a+1==42){c_2=0.505;}
    else if( a+1==43){c_2=0.505583333;}
    else if( a+1==44){c_2=0.506166667;}
    else if( a+1==45){c_2=0.506777778;}
    else if( a+1==46){c_2=0.507388889;}
    else if( a+1==47){c_2=0.508027778;}
    else if( a+1==48){c_2=0.508666667;}
    else if( a+1==49){c_2=0.509305556;}
    else if( a+1==50){c_2=0.509972222;}
    else if( a+1==51){c_2=0.510638889;}
    else if( a+1==52){c_2=0.511333333;}
    else if( a+1==53){c_2=0.512027778;}
    else if( a+1==54){c_2=0.51275;}
    else if( a+1==55){c_2=0.513472222;}
    else if( a+1==56){c_2=0.514194444;}
    else if( a+1==57){c_2=0.514944444;}
    else if( a+1==58){c_2=0.515694444;}
    else if( a+1==59){c_2=0.516472222;}
    else if( a+1==60){c_2=0.51725;}
    else if( a+1==61){c_2=0.518055556;}
    else if( a+1==62){c_2=0.518861111;}
    else if( a+1==63){c_2=0.519666667;}
    else if( a+1==64){c_2=0.5205;}
    else if( a+1==65){c_2=0.521333333;}
    else if( a+1==66){c_2=0.522166667;}
    else if( a+1==67){c_2=0.523027778;}
    else if( a+1==68){c_2=0.523888889;}
    else if( a+1==69){c_2=0.52475;}
    else if( a+1==70){c_2=0.525611111;}
    else if( a+1==71){c_2=0.5265;}
    else if( a+1==72){c_2=0.527388889;}
    else if( a+1==73){c_2=0.528305556;}
    else if( a+1==74){c_2=0.529222222;}
    else if( a+1==75){c_2=0.530166667;}
    else if( a+1==76){c_2=0.531111111;}
    else if( a+1==77){c_2=0.532055556;}
    else if( a+1==78){c_2=0.533;}
    else if( a+1==79){c_2=0.533972222;}
    else if( a+1==80){c_2=0.534916667;}
    else if( a+1==81){c_2=0.535888889;}
    else if( a+1==82){c_2=0.536861111;}
    else if( a+1==83){c_2=0.537861111;}
    else if( a+1==84){c_2=0.538861111;}
    else if( a+1==85){c_2=0.539861111;}
    else if( a+1==86){c_2=0.540861111;}
    else if( a+1==87){c_2=0.541861111;}
    else if( a+1==88){c_2=0.542888889;}
    else if( a+1==89){c_2=0.543916667;}
    else if( a+1==90){c_2=0.544944444;}
    else if( a+1==91){c_2=0.545972222;}
    else if( a+1==92){c_2=0.547;}
    else if( a+1==93){c_2=0.548055556;}
    else if( a+1==94){c_2=0.549083333;}
    else if( a+1==95){c_2=0.550138889;}
    else if( a+1==96){c_2=0.551194444;}
    else if( a+1==97){c_2=0.55225;}
    else if( a+1==98){c_2=0.553305556;}
    else if( a+1==99){c_2=0.554388889;}
    else if( a+1==100){c_2=0.555444444;}
    else if( a+1==101){c_2=0.556527778;}
    else if( a+1==102){c_2=0.557583333;}
    else if( a+1==103){c_2=0.558638889;}
    else if( a+1==104){c_2=0.556944444;}
    else if( a+1==105){c_2=0.560777778;}
    else if( a+1==106){c_2=0.561861111;}
    else if( a+1==107){c_2=0.562916667;}
    else if( a+1==108){c_2=0.564;}
    else if( a+1==109){c_2=0.565055556;}
    else if( a+1==110){c_2=0.566138889;}
    else if( a+1==111){c_2=0.567194444;}
    else if( a+1==112){c_2=0.56825;}
    else if( a+1==113){c_2=0.569333333;}
    else if( a+1==114){c_2=0.570388889;}
    else if( a+1==115){c_2=0.571444444;}
    else if( a+1==116){c_2=0.5725;}
    else if( a+1==117){c_2=0.573555556;}
    else if( a+1==118){c_2=0.574583333;}
    else if( a+1==119){c_2=0.575611111;}
    else if( a+1==120){c_2=0.576638889;}
    else if( a+1==121){c_2=0.577666667;}
    else if( a+1==122){c_2=0.578666667;}
    else if( a+1==123){c_2=0.579694444;}
    else if( a+1==124){c_2=0.580694444;}
    else if( a+1==125){c_2=0.581694444;}
    else if( a+1==126){c_2=0.582694444;}
    else if( a+1==127){c_2=0.583666667;}
    else if( a+1==128){c_2=0.584638889;}
    else if( a+1==129){c_2=0.585611111;}
    else if( a+1==130){c_2=0.586583333;}
    else if( a+1==131){c_2=0.587527778;}
    else if( a+1==132){c_2=0.588472222;}
    else if( a+1==133){c_2=0.589388889;}
    else if( a+1==134){c_2=0.590305556;}
    else if( a+1==135){c_2=0.591194444;}
    else if( a+1==136){c_2=0.592083333;}
    else if( a+1==137){c_2=0.592972222;}
    else if( a+1==138){c_2=0.593833333;}
    else if( a+1==139){c_2=0.594694444;}
    else if( a+1==140){c_2=0.595527778;}
    else if( a+1==141){c_2=0.596333333;}
    else if( a+1==142){c_2=0.597138889;}
    else if( a+1==143){c_2=0.597916667;}
    else if( a+1==144){c_2=0.598694444;}
    else if( a+1==145){c_2=0.599444444;}
    else if( a+1==146){c_2=0.600194444;}
    else if( a+1==147){c_2=0.600916667;}
    else if( a+1==148){c_2=0.601638889;}
    else if( a+1==149){c_2=0.602333333;}
    else if( a+1==150){c_2=0.603027778;}
    else if( a+1==151){c_2=0.603694444;}
    else if( a+1==152){c_2=0.604333333;}
    else if( a+1==153){c_2=0.604944444;}
    else if( a+1==154){c_2=0.605555556;}
    else if( a+1==155){c_2=0.606138889;}
    else if( a+1==156){c_2=0.606694444;}
    else if( a+1==157){c_2=0.607222222;}
    else if( a+1==158){c_2=0.607722222;}
    else if( a+1==159){c_2=0.608222222;}
    else if( a+1==160){c_2=0.608694444;}
    else if( a+1==161){c_2=0.609138889;}
    else if( a+1==162){c_2=0.609583333;}
    else if( a+1==163){c_2=0.61;}
    else if( a+1==164){c_2=0.610388889;}
    else if( a+1==165){c_2=0.61075;}
    else if( a+1==166){c_2=0.611111111;}
    else if( a+1==167){c_2=0.611444444;}
    else if( a+1==168){c_2=0.61175;}
    else if( a+1==169){c_2=0.612027778;}
    else if( a+1==170){c_2=0.612277778;}
    else if( a+1==171){c_2=0.6125;}
    else if( a+1==172){c_2=0.612694444;}
    else if( a+1==173){c_2=0.612861111;}
    else if( a+1==174){c_2=0.613027778;}
    else if( a+1==175){c_2=0.613166667;}
    else if( a+1==176){c_2=0.613277778;}
    else if( a+1==177){c_2=0.613361111;}
    else if( a+1==178){c_2=0.613416667;}
    else if( a+1==179){c_2=0.613444444;}
    else if( a+1==180){c_2=0.613472222;}
    else if( a+1==181){c_2=0.613444444;}
    else if( a+1==182){c_2=0.613416667;}
    else if( a+1==183){c_2=0.613361111;}
    else if( a+1==184){c_2=0.613277778;}
    else if( a+1==185){c_2=0.613166667;}
    else if( a+1==186){c_2=0.613027778;}
    else if( a+1==187){c_2=0.612861111;}
    else if( a+1==188){c_2=0.612694444;}
    else if( a+1==189){c_2=0.6125;}
    else if( a+1==190){c_2=0.612277778;}
    else if( a+1==191){c_2=0.612027778;}
    else if( a+1==192){c_2=0.61175;}
    else if( a+1==193){c_2=0.611444444;}
    else if( a+1==194){c_2=0.611111111;}
    else if( a+1==195){c_2=0.61075;}
    else if( a+1==196){c_2=0.610388889;}
    else if( a+1==197){c_2=0.61;}
    else if( a+1==198){c_2=0.609583333;}
    else if( a+1==199){c_2=0.609138889;}
    else if( a+1==200){c_2=0.608694444;}
    else if( a+1==201){c_2=0.608222222;}
    else if( a+1==202){c_2=0.607722222;}
    else if( a+1==203){c_2=0.607222222;}
    else if( a+1==204){c_2=0.606694444;}
    else if( a+1==205){c_2=0.606138889;}
    else if( a+1==206){c_2=0.605555556;}
    else if( a+1==207){c_2=0.604944444;}
    else if( a+1==208){c_2=0.604333333;}
    else if( a+1==209){c_2=0.603694444;}
    else if( a+1==210){c_2=0.603027778;}
    else if( a+1==211){c_2=0.602333333;}
    else if( a+1==212){c_2=0.601638889;}
    else if( a+1==213){c_2=0.600916667;}
    else if( a+1==214){c_2=0.600194444;}
    else if( a+1==215){c_2=0.599444444;}
    else if( a+1==216){c_2=0.598694444;}
    else if( a+1==217){c_2=0.597916667;}
    else if( a+1==218){c_2=0.597138889;}
    else if( a+1==219){c_2=0.596333333;}
    else if( a+1==220){c_2=0.595527778;}
    else if( a+1==221){c_2=0.594694444;}
    else if( a+1==222){c_2=0.593833333;}
    else if( a+1==223){c_2=0.592972222;}
    else if( a+1==224){c_2=0.592083333;}
    else if( a+1==225){c_2=0.591194444;}
    else if( a+1==226){c_2=0.590305556;}
    else if( a+1==227){c_2=0.589388889;}
    else if( a+1==228){c_2=0.588472222;}
    else if( a+1==229){c_2=0.587527778;}
    else if( a+1==230){c_2=0.586583333;}
    else if( a+1==231){c_2=0.585611111;}
    else if( a+1==232){c_2=0.584638889;}
    else if( a+1==233){c_2=0.583666667;}
    else if( a+1==234){c_2=0.582694444;}
    else if( a+1==235){c_2=0.581694444;}
    else if( a+1==236){c_2=0.580694444;}
    else if( a+1==237){c_2=0.579694444;}
    else if( a+1==238){c_2=0.578666667;}
    else if( a+1==239){c_2=0.577666667;}
    else if( a+1==240){c_2=0.576638889;}
    else if( a+1==241){c_2=0.575611111;}
    else if( a+1==242){c_2=0.574583333;}
    else if( a+1==243){c_2=0.573555556;}
    else if( a+1==244){c_2=0.5725;}
    else if( a+1==245){c_2=0.571444444;}
    else if( a+1==246){c_2=0.570388889;}
    else if( a+1==247){c_2=0.569333333;}
    else if( a+1==248){c_2=0.56825;}
    else if( a+1==249){c_2=0.567194444;}
    else if( a+1==250){c_2=0.566138889;}
    else if( a+1==251){c_2=0.565055556;}
    else if( a+1==252){c_2=0.564;}
    else if( a+1==253){c_2=0.562916667;}
    else if( a+1==254){c_2=0.561861111;}
    else if( a+1==255){c_2=0.560777778;}
    else if( a+1==256){c_2=0.556944444;}
    else if( a+1==257){c_2=0.558638889;}
    else if( a+1==258){c_2=0.557583333;}
    else if( a+1==259){c_2=0.556527778;}
    else if( a+1==260){c_2=0.555444444;}
    else if( a+1==261){c_2=0.554388889;}
    else if( a+1==262){c_2=0.553305556;}
    else if( a+1==263){c_2=0.55225;}
    else if( a+1==264){c_2=0.551194444;}
    else if( a+1==265){c_2=0.550138889;}
    else if( a+1==266){c_2=0.549083333;}
    else if( a+1==267){c_2=0.548055556;}
    else if( a+1==268){c_2=0.547;}
    else if( a+1==269){c_2=0.545972222;}
    else if( a+1==270){c_2=0.544944444;}
    else if( a+1==271){c_2=0.543916667;}
    else if( a+1==272){c_2=0.542888889;}
    else if( a+1==273){c_2=0.541861111;}
    else if( a+1==274){c_2=0.540861111;}
    else if( a+1==275){c_2=0.539861111;}
    else if( a+1==276){c_2=0.538861111;}
    else if( a+1==277){c_2=0.537861111;}
    else if( a+1==278){c_2=0.536861111;}
    else if( a+1==279){c_2=0.535888889;}
    else if( a+1==280){c_2=0.534916667;}
    else if( a+1==281){c_2=0.533972222;}
    else if( a+1==282){c_2=0.533;}
    else if( a+1==283){c_2=0.532055556;}
    else if( a+1==284){c_2=0.531111111;}
    else if( a+1==285){c_2=0.530166667;}
    else if( a+1==286){c_2=0.529222222;}
    else if( a+1==287){c_2=0.528305556;}
    else if( a+1==288){c_2=0.527388889;}
    else if( a+1==289){c_2=0.5265;}
    else if( a+1==290){c_2=0.525611111;}
    else if( a+1==291){c_2=0.52475;}
    else if( a+1==292){c_2=0.523888889;}
    else if( a+1==293){c_2=0.523027778;}
    else if( a+1==294){c_2=0.522166667;}
    else if( a+1==295){c_2=0.521333333;}
    else if( a+1==296){c_2=0.5205;}
    else if( a+1==297){c_2=0.519666667;}
    else if( a+1==298){c_2=0.518861111;}
    else if( a+1==299){c_2=0.518055556;}
    else if( a+1==300){c_2=0.51725;}
    else if( a+1==301){c_2=0.516472222;}
    else if( a+1==302){c_2=0.515694444;}
    else if( a+1==303){c_2=0.514944444;}
    else if( a+1==304){c_2=0.514194444;}
    else if( a+1==305){c_2=0.513472222;}
    else if( a+1==306){c_2=0.51275;}
    else if( a+1==307){c_2=0.512027778;}
    else if( a+1==308){c_2=0.511333333;}
    else if( a+1==309){c_2=0.510638889;}
    else if( a+1==310){c_2=0.509972222;}
    else if( a+1==311){c_2=0.509305556;}
    else if( a+1==312){c_2=0.508666667;}
    else if( a+1==313){c_2=0.508027778;}
    else if( a+1==314){c_2=0.507388889;}
    else if( a+1==315){c_2=0.506777778;}
    else if( a+1==316){c_2=0.506166667;}
    else if( a+1==317){c_2=0.505583333;}
    else if( a+1==318){c_2=0.505;}
    else if( a+1==319){c_2=0.504444444;}
    else if( a+1==320){c_2=0.503888889;}
    else if( a+1==321){c_2=0.503361111;}
    else if( a+1==322){c_2=0.502833333;}
    else if( a+1==323){c_2=0.502333333;}
    else if( a+1==324){c_2=0.501833333;}
    else if( a+1==325){c_2=0.501333333;}
    else if( a+1==326){c_2=0.500861111;}
    else if( a+1==327){c_2=0.500388889;}
    else if( a+1==328){c_2=0.499944444;}
    else if( a+1==329){c_2=0.4995;}
    else if( a+1==330){c_2=0.499083333;}
    else if( a+1==331){c_2=0.498694444;}
    else if( a+1==332){c_2=0.498305556;}
    else if( a+1==333){c_2=0.497916667;}
    else if( a+1==334){c_2=0.497555556;}
    else if( a+1==335){c_2=0.497194444;}
    else if( a+1==336){c_2=0.496833333;}
    else if( a+1==337){c_2=0.4965;}
    else if( a+1==338){c_2=0.496194444;}
    else if( a+1==339){c_2=0.495888889;}
    else if( a+1==340){c_2=0.495611111;}
    else if( a+1==341){c_2=0.495361111;}
    else if( a+1==342){c_2=0.495111111;}
    else if( a+1==343){c_2=0.494861111;}
    else if( a+1==344){c_2=0.494638889;}
    else if( a+1==345){c_2=0.494416667;}
    else if( a+1==346){c_2=0.494222222;}
    else if( a+1==347){c_2=0.494027778;}
    else if( a+1==348){c_2=0.493861111;}
    else if( a+1==349){c_2=0.493694444;}
    else if( a+1==350){c_2=0.493555556;}
    else if( a+1==351){c_2=0.493416667;}
    else if( a+1==352){c_2=0.493305556;}
    else if( a+1==353){c_2=0.493194444;}
    else if( a+1==354){c_2=0.493111111;}
    else if( a+1==355){c_2=0.493027778;}
    else if( a+1==356){c_2=0.492972222;}
    else if( a+1==357){c_2=0.492916667;}
    else if( a+1==358){c_2=0.492888889;}
    else if( a+1==359){c_2=0.492861111;}
    else if( a+1==360){c_2=0.492861111;}
    else {c_2=9999999.9999;}
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var sabaq1 = fsbq1(intdalil3, dalil3);
    
    var fsbq2 = function (a,b){
    var c_1
    
    if( a ==0){c_1=-0.011444444;}
    else if( a ==1){c_1=-0.011444444;}
    else if( a ==2){c_1=-0.011444444;}
    else if( a ==3){c_1=-0.011416667;}
    else if( a ==4){c_1=-0.011416667;}
    else if( a ==5){c_1=-0.011388889;}
    else if( a ==6){c_1=-0.011388889;}
    else if( a ==7){c_1=-0.011361111;}
    else if( a ==8){c_1=-0.011333333;}
    else if( a ==9){c_1=-0.011305556;}
    else if( a ==10){c_1=-0.011277778;}
    else if( a ==11){c_1=-0.01125;}
    else if( a ==12){c_1=-0.011222222;}
    else if( a ==13){c_1=-0.011194444;}
    else if( a ==14){c_1=-0.011138889;}
    else if( a ==15){c_1=-0.011111111;}
    else if( a ==16){c_1=-0.011055556;}
    else if( a ==17){c_1=-0.011;}
    else if( a ==18){c_1=-0.010916667;}
    else if( a ==19){c_1=-0.010861111;}
    else if( a ==20){c_1=-0.010777778;}
    else if( a ==21){c_1=-0.010722222;}
    else if( a ==22){c_1=-0.010638889;}
    else if( a ==23){c_1=-0.010583333;}
    else if( a ==24){c_1=-0.0105;}
    else if( a ==25){c_1=-0.010416667;}
    else if( a ==26){c_1=-0.010333333;}
    else if( a ==27){c_1=-0.01025;}
    else if( a ==28){c_1=-0.010166667;}
    else if( a ==29){c_1=-0.010083333;}
    else if( a ==30){c_1=-0.009972222;}
    else if( a ==31){c_1=-0.009888889;}
    else if( a ==32){c_1=-0.009777778;}
    else if( a ==33){c_1=-0.009666667;}
    else if( a ==34){c_1=-0.009555556;}
    else if( a ==35){c_1=-0.009444444;}
    else if( a ==36){c_1=-0.009333333;}
    else if( a ==37){c_1=-0.009222222;}
    else if( a ==38){c_1=-0.009111111;}
    else if( a ==39){c_1=-0.009;}
    else if( a ==40){c_1=-0.008861111;}
    else if( a ==41){c_1=-0.00875;}
    else if( a ==42){c_1=-0.008611111;}
    else if( a ==43){c_1=-0.0085;}
    else if( a ==44){c_1=-0.008361111;}
    else if( a ==45){c_1=-0.008222222;}
    else if( a ==46){c_1=-0.008083333;}
    else if( a ==47){c_1=-0.007944444;}
    else if( a ==48){c_1=-0.007805556;}
    else if( a ==49){c_1=-0.007638889;}
    else if( a ==50){c_1=-0.0075;}
    else if( a ==51){c_1=-0.007333333;}
    else if( a ==52){c_1=-0.007194444;}
    else if( a ==53){c_1=-0.007027778;}
    else if( a ==54){c_1=-0.006888889;}
    else if( a ==55){c_1=-0.006722222;}
    else if( a ==56){c_1=-0.006555556;}
    else if( a ==57){c_1=-0.006388889;}
    else if( a ==58){c_1=-0.006222222;}
    else if( a ==59){c_1=-0.006055556;}
    else if( a ==60){c_1=-0.005888889;}
    else if( a ==61){c_1=-0.005722222;}
    else if( a ==62){c_1=-0.005555556;}
    else if( a ==63){c_1=-0.005361111;}
    else if( a ==64){c_1=-0.005194444;}
    else if( a ==65){c_1=-0.005;}
    else if( a ==66){c_1=-0.004833333;}
    else if( a ==67){c_1=-0.004638889;}
    else if( a ==68){c_1=-0.004444444;}
    else if( a ==69){c_1=-0.004277778;}
    else if( a ==70){c_1=-0.004027778;}
    else if( a ==71){c_1=-0.003916667;}
    else if( a ==72){c_1=-0.003722222;}
    else if( a ==73){c_1=-0.003527778;}
    else if( a ==74){c_1=-0.003333333;}
    else if( a ==75){c_1=-0.003138889;}
    else if( a ==76){c_1=-0.002972222;}
    else if( a ==77){c_1=-0.002777778;}
    else if( a ==78){c_1=-0.002583333;}
    else if( a ==79){c_1=-0.002388889;}
    else if( a ==80){c_1=-0.002194444;}
    else if( a ==81){c_1=-0.002;}
    else if( a ==82){c_1=-0.001777778;}
    else if( a ==83){c_1=-0.001583333;}
    else if( a ==84){c_1=-0.001361111;}
    else if( a ==85){c_1=-0.001166667;}
    else if( a ==86){c_1=-0.000972222;}
    else if( a ==87){c_1=-0.00075;}
    else if( a ==88){c_1=-0.000555556;}
    else if( a ==89){c_1=-0.000361111;}
    else if( a ==90){c_1=-0.000166667;}
    else if( a ==91){c_1=2.77778E-05;}
    else if( a ==92){c_1=0.00025;}
    else if( a ==93){c_1=0.000444444;}
    else if( a ==94){c_1=0.000666667;}
    else if( a ==95){c_1=0.000861111;}
    else if( a ==96){c_1=0.001055556;}
    else if( a ==97){c_1=0.001277778;}
    else if( a ==98){c_1=0.001472222;}
    else if( a ==99){c_1=0.001666667;}
    else if( a ==100){c_1=0.001861111;}
    else if( a ==101){c_1=0.002083333;}
    else if( a ==102){c_1=0.002277778;}
    else if( a ==103){c_1=0.002472222;}
    else if( a ==104){c_1=0.002694444;}
    else if( a ==105){c_1=0.002888889;}
    else if( a ==106){c_1=0.003083333;}
    else if( a ==107){c_1=0.003277778;}
    else if( a ==108){c_1=0.003472222;}
    else if( a ==109){c_1=0.003666667;}
    else if( a ==110){c_1=0.003833333;}
    else if( a ==111){c_1=0.004027778;}
    else if( a ==112){c_1=0.004222222;}
    else if( a ==113){c_1=0.004416667;}
    else if( a ==114){c_1=0.004611111;}
    else if( a ==115){c_1=0.004805556;}
    else if( a ==116){c_1=0.004972222;}
    else if( a ==117){c_1=0.005166667;}
    else if( a ==118){c_1=0.005361111;}
    else if( a ==119){c_1=0.005555556;}
    else if( a ==120){c_1=0.005722222;}
    else if( a ==121){c_1=0.005916667;}
    else if( a ==122){c_1=0.006083333;}
    else if( a ==123){c_1=0.006277778;}
    else if( a ==124){c_1=0.006444444;}
    else if( a ==125){c_1=0.006611111;}
    else if( a ==126){c_1=0.006777778;}
    else if( a ==127){c_1=0.006944444;}
    else if( a ==128){c_1=0.007111111;}
    else if( a ==129){c_1=0.007277778;}
    else if( a ==130){c_1=0.007444444;}
    else if( a ==131){c_1=0.007611111;}
    else if( a ==132){c_1=0.00775;}
    else if( a ==133){c_1=0.007916667;}
    else if( a ==134){c_1=0.008055556;}
    else if( a ==135){c_1=0.008222222;}
    else if( a ==136){c_1=0.008361111;}
    else if( a ==137){c_1=0.0085;}
    else if( a ==138){c_1=0.008666667;}
    else if( a ==139){c_1=0.008805556;}
    else if( a ==140){c_1=0.008944444;}
    else if( a ==141){c_1=0.009055556;}
    else if( a ==142){c_1=0.009194444;}
    else if( a ==143){c_1=0.009305556;}
    else if( a ==144){c_1=0.009444444;}
    else if( a ==145){c_1=0.009555556;}
    else if( a ==146){c_1=0.009694444;}
    else if( a ==147){c_1=0.009805556;}
    else if( a ==148){c_1=0.009916667;}
    else if( a ==149){c_1=0.010027778;}
    else if( a ==150){c_1=0.010138889;}
    else if( a ==151){c_1=0.01025;}
    else if( a ==152){c_1=0.010333333;}
    else if( a ==153){c_1=0.010444444;}
    else if( a ==154){c_1=0.010555556;}
    else if( a ==155){c_1=0.010638889;}
    else if( a ==156){c_1=0.010722222;}
    else if( a ==157){c_1=0.010805556;}
    else if( a ==158){c_1=0.010888889;}
    else if( a ==159){c_1=0.010972222;}
    else if( a ==160){c_1=0.011055556;}
    else if( a ==161){c_1=0.011111111;}
    else if( a ==162){c_1=0.011194444;}
    else if( a ==163){c_1=0.01125;}
    else if( a ==164){c_1=0.011305556;}
    else if( a ==165){c_1=0.011361111;}
    else if( a ==166){c_1=0.011388889;}
    else if( a ==167){c_1=0.011472222;}
    else if( a ==168){c_1=0.011527778;}
    else if( a ==169){c_1=0.011583333;}
    else if( a ==170){c_1=0.011611111;}
    else if( a ==171){c_1=0.011638889;}
    else if( a ==172){c_1=0.011666667;}
    else if( a ==173){c_1=0.011694444;}
    else if( a ==174){c_1=0.011694444;}
    else if( a ==175){c_1=0.011722222;}
    else if( a ==176){c_1=0.011722222;}
    else if( a ==177){c_1=0.01175;}
    else if( a ==178){c_1=0.01175;}
    else if( a ==179){c_1=0.011777778;}
    else if( a ==180){c_1=0.011777778;}
    else if( a ==181){c_1=0.011777778;}
    else if( a ==182){c_1=0.01175;}
    else if( a ==183){c_1=0.01175;}
    else if( a ==184){c_1=0.011722222;}
    else if( a ==185){c_1=0.011722222;}
    else if( a ==186){c_1=0.011694444;}
    else if( a ==187){c_1=0.011694444;}
    else if( a ==188){c_1=0.011666667;}
    else if( a ==189){c_1=0.011638889;}
    else if( a ==190){c_1=0.011611111;}
    else if( a ==191){c_1=0.011583333;}
    else if( a ==192){c_1=0.011527778;}
    else if( a ==193){c_1=0.011472222;}
    else if( a ==194){c_1=0.011388889;}
    else if( a ==195){c_1=0.011361111;}
    else if( a ==196){c_1=0.011305556;}
    else if( a ==197){c_1=0.01125;}
    else if( a ==198){c_1=0.011194444;}
    else if( a ==199){c_1=0.011111111;}
    else if( a ==200){c_1=0.011055556;}
    else if( a ==201){c_1=0.010972222;}
    else if( a ==202){c_1=0.010888889;}
    else if( a ==203){c_1=0.010805556;}
    else if( a ==204){c_1=0.010722222;}
    else if( a ==205){c_1=0.010638889;}
    else if( a ==206){c_1=0.010555556;}
    else if( a ==207){c_1=0.010444444;}
    else if( a ==208){c_1=0.010333333;}
    else if( a ==209){c_1=0.01025;}
    else if( a ==210){c_1=0.010138889;}
    else if( a ==211){c_1=0.010027778;}
    else if( a ==212){c_1=0.009916667;}
    else if( a ==213){c_1=0.009805556;}
    else if( a ==214){c_1=0.009694444;}
    else if( a ==215){c_1=0.009555556;}
    else if( a ==216){c_1=0.009444444;}
    else if( a ==217){c_1=0.009305556;}
    else if( a ==218){c_1=0.009194444;}
    else if( a ==219){c_1=0.009055556;}
    else if( a ==220){c_1=0.008944444;}
    else if( a ==221){c_1=0.008805556;}
    else if( a ==222){c_1=0.008666667;}
    else if( a ==223){c_1=0.0085;}
    else if( a ==224){c_1=0.008361111;}
    else if( a ==225){c_1=0.008222222;}
    else if( a ==226){c_1=0.008055556;}
    else if( a ==227){c_1=0.007916667;}
    else if( a ==228){c_1=0.00775;}
    else if( a ==229){c_1=0.007611111;}
    else if( a ==230){c_1=0.007444444;}
    else if( a ==231){c_1=0.007277778;}
    else if( a ==232){c_1=0.007111111;}
    else if( a ==233){c_1=0.006944444;}
    else if( a ==234){c_1=0.006777778;}
    else if( a ==235){c_1=0.006611111;}
    else if( a ==236){c_1=0.006444444;}
    else if( a ==237){c_1=0.006277778;}
    else if( a ==238){c_1=0.006083333;}
    else if( a ==239){c_1=0.005916667;}
    else if( a ==240){c_1=0.005722222;}
    else if( a ==241){c_1=0.005555556;}
    else if( a ==242){c_1=0.005361111;}
    else if( a ==243){c_1=0.005166667;}
    else if( a ==244){c_1=0.004972222;}
    else if( a ==245){c_1=0.004805556;}
    else if( a ==246){c_1=0.004611111;}
    else if( a ==247){c_1=0.004416667;}
    else if( a ==248){c_1=0.004222222;}
    else if( a ==249){c_1=0.004027778;}
    else if( a ==250){c_1=0.003833333;}
    else if( a ==251){c_1=0.003666667;}
    else if( a ==252){c_1=0.003472222;}
    else if( a ==253){c_1=0.003277778;}
    else if( a ==254){c_1=0.003083333;}
    else if( a ==255){c_1=0.002888889;}
    else if( a ==256){c_1=0.002694444;}
    else if( a ==257){c_1=0.002472222;}
    else if( a ==258){c_1=0.002277778;}
    else if( a ==259){c_1=0.002083333;}
    else if( a ==260){c_1=0.001861111;}
    else if( a ==261){c_1=0.001666667;}
    else if( a ==262){c_1=0.001472222;}
    else if( a ==263){c_1=0.001277778;}
    else if( a ==264){c_1=0.001055556;}
    else if( a ==265){c_1=0.000861111;}
    else if( a ==266){c_1=0.000666667;}
    else if( a ==267){c_1=0.000444444;}
    else if( a ==268){c_1=0.00025;}
    else if( a ==269){c_1=2.77778E-05;}
    else if( a ==270){c_1=-0.000166667;}
    else if( a ==271){c_1=-0.000361111;}
    else if( a ==272){c_1=-0.000555556;}
    else if( a ==273){c_1=-0.00075;}
    else if( a ==274){c_1=-0.000972222;}
    else if( a ==275){c_1=-0.001166667;}
    else if( a ==276){c_1=-0.001361111;}
    else if( a ==277){c_1=-0.001583333;}
    else if( a ==278){c_1=-0.001777778;}
    else if( a ==279){c_1=-0.002;}
    else if( a ==280){c_1=-0.002194444;}
    else if( a ==281){c_1=-0.002388889;}
    else if( a ==282){c_1=-0.002583333;}
    else if( a ==283){c_1=-0.002777778;}
    else if( a ==284){c_1=-0.002972222;}
    else if( a ==285){c_1=-0.003138889;}
    else if( a ==286){c_1=-0.003333333;}
    else if( a ==287){c_1=-0.003527778;}
    else if( a ==288){c_1=-0.003722222;}
    else if( a ==289){c_1=-0.003916667;}
    else if( a ==290){c_1=-0.004027778;}
    else if( a ==291){c_1=-0.004277778;}
    else if( a ==292){c_1=-0.004444444;}
    else if( a ==293){c_1=-0.004638889;}
    else if( a ==294){c_1=-0.004833333;}
    else if( a ==295){c_1=-0.005;}
    else if( a ==296){c_1=-0.005194444;}
    else if( a ==297){c_1=-0.005361111;}
    else if( a ==298){c_1=-0.005555556;}
    else if( a ==299){c_1=-0.005722222;}
    else if( a ==300){c_1=-0.005888889;}
    else if( a ==301){c_1=-0.006055556;}
    else if( a ==302){c_1=-0.006222222;}
    else if( a ==303){c_1=-0.006388889;}
    else if( a ==304){c_1=-0.006555556;}
    else if( a ==305){c_1=-0.006722222;}
    else if( a ==306){c_1=-0.006888889;}
    else if( a ==307){c_1=-0.007027778;}
    else if( a ==308){c_1=-0.007194444;}
    else if( a ==309){c_1=-0.007333333;}
    else if( a ==310){c_1=-0.0075;}
    else if( a ==311){c_1=-0.007638889;}
    else if( a ==312){c_1=-0.007805556;}
    else if( a ==313){c_1=-0.007944444;}
    else if( a ==314){c_1=-0.008083333;}
    else if( a ==315){c_1=-0.008222222;}
    else if( a ==316){c_1=-0.008361111;}
    else if( a ==317){c_1=-0.0085;}
    else if( a ==318){c_1=-0.008611111;}
    else if( a ==319){c_1=-0.00875;}
    else if( a ==320){c_1=-0.008861111;}
    else if( a ==321){c_1=-0.009;}
    else if( a ==322){c_1=-0.009111111;}
    else if( a ==323){c_1=-0.009222222;}
    else if( a ==324){c_1=-0.009333333;}
    else if( a ==325){c_1=-0.009444444;}
    else if( a ==326){c_1=-0.009555556;}
    else if( a ==327){c_1=-0.009666667;}
    else if( a ==328){c_1=-0.009777778;}
    else if( a ==329){c_1=-0.009888889;}
    else if( a ==330){c_1=-0.009972222;}
    else if( a ==331){c_1=-0.010083333;}
    else if( a ==332){c_1=-0.010166667;}
    else if( a ==333){c_1=-0.01025;}
    else if( a ==334){c_1=-0.010333333;}
    else if( a ==335){c_1=-0.010416667;}
    else if( a ==336){c_1=-0.0105;}
    else if( a ==337){c_1=-0.010583333;}
    else if( a ==338){c_1=-0.010638889;}
    else if( a ==339){c_1=-0.010722222;}
    else if( a ==340){c_1=-0.010777778;}
    else if( a ==341){c_1=-0.010861111;}
    else if( a ==342){c_1=-0.010916667;}
    else if( a ==343){c_1=-0.011;}
    else if( a ==344){c_1=-0.011055556;}
    else if( a ==345){c_1=-0.011111111;}
    else if( a ==346){c_1=-0.011138889;}
    else if( a ==347){c_1=-0.011194444;}
    else if( a ==348){c_1=-0.011222222;}
    else if( a ==349){c_1=-0.01125;}
    else if( a ==350){c_1=-0.011277778;}
    else if( a ==351){c_1=-0.011305556;}
    else if( a ==352){c_1=-0.011333333;}
    else if( a ==353){c_1=-0.011361111;}
    else if( a ==354){c_1=-0.011388889;}
    else if( a ==355){c_1=-0.011388889;}
    else if( a ==356){c_1=-0.011416667;}
    else if( a ==357){c_1=-0.011416667;}
    else if( a ==358){c_1=-0.011444444;}
    else if( a ==359){c_1=-0.011444444;}
    else if( a ==360){c_1=-0.011444444;}
    else {c_1=99999999;}
    
    var c_2
    
    if( a+1 ==0){c_2=-0.011444444;}
    else if( a+1 ==1){c_2=-0.011444444;}
    else if( a+1 ==2){c_2=-0.011444444;}
    else if( a+1 ==3){c_2=-0.011416667;}
    else if( a+1 ==4){c_2=-0.011416667;}
    else if( a+1 ==5){c_2=-0.011388889;}
    else if( a+1 ==6){c_2=-0.011388889;}
    else if( a+1 ==7){c_2=-0.011361111;}
    else if( a+1 ==8){c_2=-0.011333333;}
    else if( a+1 ==9){c_2=-0.011305556;}
    else if( a+1 ==10){c_2=-0.011277778;}
    else if( a+1 ==11){c_2=-0.01125;}
    else if( a+1 ==12){c_2=-0.011222222;}
    else if( a+1 ==13){c_2=-0.011194444;}
    else if( a+1 ==14){c_2=-0.011138889;}
    else if( a+1 ==15){c_2=-0.011111111;}
    else if( a+1 ==16){c_2=-0.011055556;}
    else if( a+1 ==17){c_2=-0.011;}
    else if( a+1 ==18){c_2=-0.010916667;}
    else if( a+1 ==19){c_2=-0.010861111;}
    else if( a+1 ==20){c_2=-0.010777778;}
    else if( a+1 ==21){c_2=-0.010722222;}
    else if( a+1 ==22){c_2=-0.010638889;}
    else if( a+1 ==23){c_2=-0.010583333;}
    else if( a+1 ==24){c_2=-0.0105;}
    else if( a+1 ==25){c_2=-0.010416667;}
    else if( a+1 ==26){c_2=-0.010333333;}
    else if( a+1 ==27){c_2=-0.01025;}
    else if( a+1 ==28){c_2=-0.010166667;}
    else if( a+1 ==29){c_2=-0.010083333;}
    else if( a+1 ==30){c_2=-0.009972222;}
    else if( a+1 ==31){c_2=-0.009888889;}
    else if( a+1 ==32){c_2=-0.009777778;}
    else if( a+1 ==33){c_2=-0.009666667;}
    else if( a+1 ==34){c_2=-0.009555556;}
    else if( a+1 ==35){c_2=-0.009444444;}
    else if( a+1 ==36){c_2=-0.009333333;}
    else if( a+1 ==37){c_2=-0.009222222;}
    else if( a+1 ==38){c_2=-0.009111111;}
    else if( a+1 ==39){c_2=-0.009;}
    else if( a+1 ==40){c_2=-0.008861111;}
    else if( a+1 ==41){c_2=-0.00875;}
    else if( a+1 ==42){c_2=-0.008611111;}
    else if( a+1 ==43){c_2=-0.0085;}
    else if( a+1 ==44){c_2=-0.008361111;}
    else if( a+1 ==45){c_2=-0.008222222;}
    else if( a+1 ==46){c_2=-0.008083333;}
    else if( a+1 ==47){c_2=-0.007944444;}
    else if( a+1 ==48){c_2=-0.007805556;}
    else if( a+1 ==49){c_2=-0.007638889;}
    else if( a+1 ==50){c_2=-0.0075;}
    else if( a+1 ==51){c_2=-0.007333333;}
    else if( a+1 ==52){c_2=-0.007194444;}
    else if( a+1 ==53){c_2=-0.007027778;}
    else if( a+1 ==54){c_2=-0.006888889;}
    else if( a+1 ==55){c_2=-0.006722222;}
    else if( a+1 ==56){c_2=-0.006555556;}
    else if( a+1 ==57){c_2=-0.006388889;}
    else if( a+1 ==58){c_2=-0.006222222;}
    else if( a+1 ==59){c_2=-0.006055556;}
    else if( a+1 ==60){c_2=-0.005888889;}
    else if( a+1 ==61){c_2=-0.005722222;}
    else if( a+1 ==62){c_2=-0.005555556;}
    else if( a+1 ==63){c_2=-0.005361111;}
    else if( a+1 ==64){c_2=-0.005194444;}
    else if( a+1 ==65){c_2=-0.005;}
    else if( a+1 ==66){c_2=-0.004833333;}
    else if( a+1 ==67){c_2=-0.004638889;}
    else if( a+1 ==68){c_2=-0.004444444;}
    else if( a+1 ==69){c_2=-0.004277778;}
    else if( a+1 ==70){c_2=-0.004027778;}
    else if( a+1 ==71){c_2=-0.003916667;}
    else if( a+1 ==72){c_2=-0.003722222;}
    else if( a+1 ==73){c_2=-0.003527778;}
    else if( a+1 ==74){c_2=-0.003333333;}
    else if( a+1 ==75){c_2=-0.003138889;}
    else if( a+1 ==76){c_2=-0.002972222;}
    else if( a+1 ==77){c_2=-0.002777778;}
    else if( a+1 ==78){c_2=-0.002583333;}
    else if( a+1 ==79){c_2=-0.002388889;}
    else if( a+1 ==80){c_2=-0.002194444;}
    else if( a+1 ==81){c_2=-0.002;}
    else if( a+1 ==82){c_2=-0.001777778;}
    else if( a+1 ==83){c_2=-0.001583333;}
    else if( a+1 ==84){c_2=-0.001361111;}
    else if( a+1 ==85){c_2=-0.001166667;}
    else if( a+1 ==86){c_2=-0.000972222;}
    else if( a+1 ==87){c_2=-0.00075;}
    else if( a+1 ==88){c_2=-0.000555556;}
    else if( a+1 ==89){c_2=-0.000361111;}
    else if( a+1 ==90){c_2=-0.000166667;}
    else if( a+1 ==91){c_2=2.77778E-05;}
    else if( a+1 ==92){c_2=0.00025;}
    else if( a+1 ==93){c_2=0.000444444;}
    else if( a+1 ==94){c_2=0.000666667;}
    else if( a+1 ==95){c_2=0.000861111;}
    else if( a+1 ==96){c_2=0.001055556;}
    else if( a+1 ==97){c_2=0.001277778;}
    else if( a+1 ==98){c_2=0.001472222;}
    else if( a+1 ==99){c_2=0.001666667;}
    else if( a+1 ==100){c_2=0.001861111;}
    else if( a+1 ==101){c_2=0.002083333;}
    else if( a+1 ==102){c_2=0.002277778;}
    else if( a+1 ==103){c_2=0.002472222;}
    else if( a+1 ==104){c_2=0.002694444;}
    else if( a+1 ==105){c_2=0.002888889;}
    else if( a+1 ==106){c_2=0.003083333;}
    else if( a+1 ==107){c_2=0.003277778;}
    else if( a+1 ==108){c_2=0.003472222;}
    else if( a+1 ==109){c_2=0.003666667;}
    else if( a+1 ==110){c_2=0.003833333;}
    else if( a+1 ==111){c_2=0.004027778;}
    else if( a+1 ==112){c_2=0.004222222;}
    else if( a+1 ==113){c_2=0.004416667;}
    else if( a+1 ==114){c_2=0.004611111;}
    else if( a+1 ==115){c_2=0.004805556;}
    else if( a+1 ==116){c_2=0.004972222;}
    else if( a+1 ==117){c_2=0.005166667;}
    else if( a+1 ==118){c_2=0.005361111;}
    else if( a+1 ==119){c_2=0.005555556;}
    else if( a+1 ==120){c_2=0.005722222;}
    else if( a+1 ==121){c_2=0.005916667;}
    else if( a+1 ==122){c_2=0.006083333;}
    else if( a+1 ==123){c_2=0.006277778;}
    else if( a+1 ==124){c_2=0.006444444;}
    else if( a+1 ==125){c_2=0.006611111;}
    else if( a+1 ==126){c_2=0.006777778;}
    else if( a+1 ==127){c_2=0.006944444;}
    else if( a+1 ==128){c_2=0.007111111;}
    else if( a+1 ==129){c_2=0.007277778;}
    else if( a+1 ==130){c_2=0.007444444;}
    else if( a+1 ==131){c_2=0.007611111;}
    else if( a+1 ==132){c_2=0.00775;}
    else if( a+1 ==133){c_2=0.007916667;}
    else if( a+1 ==134){c_2=0.008055556;}
    else if( a+1 ==135){c_2=0.008222222;}
    else if( a+1 ==136){c_2=0.008361111;}
    else if( a+1 ==137){c_2=0.0085;}
    else if( a+1 ==138){c_2=0.008666667;}
    else if( a+1 ==139){c_2=0.008805556;}
    else if( a+1 ==140){c_2=0.008944444;}
    else if( a+1 ==141){c_2=0.009055556;}
    else if( a+1 ==142){c_2=0.009194444;}
    else if( a+1 ==143){c_2=0.009305556;}
    else if( a+1 ==144){c_2=0.009444444;}
    else if( a+1 ==145){c_2=0.009555556;}
    else if( a+1 ==146){c_2=0.009694444;}
    else if( a+1 ==147){c_2=0.009805556;}
    else if( a+1 ==148){c_2=0.009916667;}
    else if( a+1 ==149){c_2=0.010027778;}
    else if( a+1 ==150){c_2=0.010138889;}
    else if( a+1 ==151){c_2=0.01025;}
    else if( a+1 ==152){c_2=0.010333333;}
    else if( a+1 ==153){c_2=0.010444444;}
    else if( a+1 ==154){c_2=0.010555556;}
    else if( a+1 ==155){c_2=0.010638889;}
    else if( a+1 ==156){c_2=0.010722222;}
    else if( a+1 ==157){c_2=0.010805556;}
    else if( a+1 ==158){c_2=0.010888889;}
    else if( a+1 ==159){c_2=0.010972222;}
    else if( a+1 ==160){c_2=0.011055556;}
    else if( a+1 ==161){c_2=0.011111111;}
    else if( a+1 ==162){c_2=0.011194444;}
    else if( a+1 ==163){c_2=0.01125;}
    else if( a+1 ==164){c_2=0.011305556;}
    else if( a+1 ==165){c_2=0.011361111;}
    else if( a+1 ==166){c_2=0.011388889;}
    else if( a+1 ==167){c_2=0.011472222;}
    else if( a+1 ==168){c_2=0.011527778;}
    else if( a+1 ==169){c_2=0.011583333;}
    else if( a+1 ==170){c_2=0.011611111;}
    else if( a+1 ==171){c_2=0.011638889;}
    else if( a+1 ==172){c_2=0.011666667;}
    else if( a+1 ==173){c_2=0.011694444;}
    else if( a+1 ==174){c_2=0.011694444;}
    else if( a+1 ==175){c_2=0.011722222;}
    else if( a+1 ==176){c_2=0.011722222;}
    else if( a+1 ==177){c_2=0.01175;}
    else if( a+1 ==178){c_2=0.01175;}
    else if( a+1 ==179){c_2=0.011777778;}
    else if( a+1 ==180){c_2=0.011777778;}
    else if( a+1 ==181){c_2=0.011777778;}
    else if( a+1 ==182){c_2=0.01175;}
    else if( a+1 ==183){c_2=0.01175;}
    else if( a+1 ==184){c_2=0.011722222;}
    else if( a+1 ==185){c_2=0.011722222;}
    else if( a+1 ==186){c_2=0.011694444;}
    else if( a+1 ==187){c_2=0.011694444;}
    else if( a+1 ==188){c_2=0.011666667;}
    else if( a+1 ==189){c_2=0.011638889;}
    else if( a+1 ==190){c_2=0.011611111;}
    else if( a+1 ==191){c_2=0.011583333;}
    else if( a+1 ==192){c_2=0.011527778;}
    else if( a+1 ==193){c_2=0.011472222;}
    else if( a+1 ==194){c_2=0.011388889;}
    else if( a+1 ==195){c_2=0.011361111;}
    else if( a+1 ==196){c_2=0.011305556;}
    else if( a+1 ==197){c_2=0.01125;}
    else if( a+1 ==198){c_2=0.011194444;}
    else if( a+1 ==199){c_2=0.011111111;}
    else if( a+1 ==200){c_2=0.011055556;}
    else if( a+1 ==201){c_2=0.010972222;}
    else if( a+1 ==202){c_2=0.010888889;}
    else if( a+1 ==203){c_2=0.010805556;}
    else if( a+1 ==204){c_2=0.010722222;}
    else if( a+1 ==205){c_2=0.010638889;}
    else if( a+1 ==206){c_2=0.010555556;}
    else if( a+1 ==207){c_2=0.010444444;}
    else if( a+1 ==208){c_2=0.010333333;}
    else if( a+1 ==209){c_2=0.01025;}
    else if( a+1 ==210){c_2=0.010138889;}
    else if( a+1 ==211){c_2=0.010027778;}
    else if( a+1 ==212){c_2=0.009916667;}
    else if( a+1 ==213){c_2=0.009805556;}
    else if( a+1 ==214){c_2=0.009694444;}
    else if( a+1 ==215){c_2=0.009555556;}
    else if( a+1 ==216){c_2=0.009444444;}
    else if( a+1 ==217){c_2=0.009305556;}
    else if( a+1 ==218){c_2=0.009194444;}
    else if( a+1 ==219){c_2=0.009055556;}
    else if( a+1 ==220){c_2=0.008944444;}
    else if( a+1 ==221){c_2=0.008805556;}
    else if( a+1 ==222){c_2=0.008666667;}
    else if( a+1 ==223){c_2=0.0085;}
    else if( a+1 ==224){c_2=0.008361111;}
    else if( a+1 ==225){c_2=0.008222222;}
    else if( a+1 ==226){c_2=0.008055556;}
    else if( a+1 ==227){c_2=0.007916667;}
    else if( a+1 ==228){c_2=0.00775;}
    else if( a+1 ==229){c_2=0.007611111;}
    else if( a+1 ==230){c_2=0.007444444;}
    else if( a+1 ==231){c_2=0.007277778;}
    else if( a+1 ==232){c_2=0.007111111;}
    else if( a+1 ==233){c_2=0.006944444;}
    else if( a+1 ==234){c_2=0.006777778;}
    else if( a+1 ==235){c_2=0.006611111;}
    else if( a+1 ==236){c_2=0.006444444;}
    else if( a+1 ==237){c_2=0.006277778;}
    else if( a+1 ==238){c_2=0.006083333;}
    else if( a+1 ==239){c_2=0.005916667;}
    else if( a+1 ==240){c_2=0.005722222;}
    else if( a+1 ==241){c_2=0.005555556;}
    else if( a+1 ==242){c_2=0.005361111;}
    else if( a+1 ==243){c_2=0.005166667;}
    else if( a+1 ==244){c_2=0.004972222;}
    else if( a+1 ==245){c_2=0.004805556;}
    else if( a+1 ==246){c_2=0.004611111;}
    else if( a+1 ==247){c_2=0.004416667;}
    else if( a+1 ==248){c_2=0.004222222;}
    else if( a+1 ==249){c_2=0.004027778;}
    else if( a+1 ==250){c_2=0.003833333;}
    else if( a+1 ==251){c_2=0.003666667;}
    else if( a+1 ==252){c_2=0.003472222;}
    else if( a+1 ==253){c_2=0.003277778;}
    else if( a+1 ==254){c_2=0.003083333;}
    else if( a+1 ==255){c_2=0.002888889;}
    else if( a+1 ==256){c_2=0.002694444;}
    else if( a+1 ==257){c_2=0.002472222;}
    else if( a+1 ==258){c_2=0.002277778;}
    else if( a+1 ==259){c_2=0.002083333;}
    else if( a+1 ==260){c_2=0.001861111;}
    else if( a+1 ==261){c_2=0.001666667;}
    else if( a+1 ==262){c_2=0.001472222;}
    else if( a+1 ==263){c_2=0.001277778;}
    else if( a+1 ==264){c_2=0.001055556;}
    else if( a+1 ==265){c_2=0.000861111;}
    else if( a+1 ==266){c_2=0.000666667;}
    else if( a+1 ==267){c_2=0.000444444;}
    else if( a+1 ==268){c_2=0.00025;}
    else if( a+1 ==269){c_2=2.77778E-05;}
    else if( a+1 ==270){c_2=-0.000166667;}
    else if( a+1 ==271){c_2=-0.000361111;}
    else if( a+1 ==272){c_2=-0.000555556;}
    else if( a+1 ==273){c_2=-0.00075;}
    else if( a+1 ==274){c_2=-0.000972222;}
    else if( a+1 ==275){c_2=-0.001166667;}
    else if( a+1 ==276){c_2=-0.001361111;}
    else if( a+1 ==277){c_2=-0.001583333;}
    else if( a+1 ==278){c_2=-0.001777778;}
    else if( a+1 ==279){c_2=-0.002;}
    else if( a+1 ==280){c_2=-0.002194444;}
    else if( a+1 ==281){c_2=-0.002388889;}
    else if( a+1 ==282){c_2=-0.002583333;}
    else if( a+1 ==283){c_2=-0.002777778;}
    else if( a+1 ==284){c_2=-0.002972222;}
    else if( a+1 ==285){c_2=-0.003138889;}
    else if( a+1 ==286){c_2=-0.003333333;}
    else if( a+1 ==287){c_2=-0.003527778;}
    else if( a+1 ==288){c_2=-0.003722222;}
    else if( a+1 ==289){c_2=-0.003916667;}
    else if( a+1 ==290){c_2=-0.004027778;}
    else if( a+1 ==291){c_2=-0.004277778;}
    else if( a+1 ==292){c_2=-0.004444444;}
    else if( a+1 ==293){c_2=-0.004638889;}
    else if( a+1 ==294){c_2=-0.004833333;}
    else if( a+1 ==295){c_2=-0.005;}
    else if( a+1 ==296){c_2=-0.005194444;}
    else if( a+1 ==297){c_2=-0.005361111;}
    else if( a+1 ==298){c_2=-0.005555556;}
    else if( a+1 ==299){c_2=-0.005722222;}
    else if( a+1 ==300){c_2=-0.005888889;}
    else if( a+1 ==301){c_2=-0.006055556;}
    else if( a+1 ==302){c_2=-0.006222222;}
    else if( a+1 ==303){c_2=-0.006388889;}
    else if( a+1 ==304){c_2=-0.006555556;}
    else if( a+1 ==305){c_2=-0.006722222;}
    else if( a+1 ==306){c_2=-0.006888889;}
    else if( a+1 ==307){c_2=-0.007027778;}
    else if( a+1 ==308){c_2=-0.007194444;}
    else if( a+1 ==309){c_2=-0.007333333;}
    else if( a+1 ==310){c_2=-0.0075;}
    else if( a+1 ==311){c_2=-0.007638889;}
    else if( a+1 ==312){c_2=-0.007805556;}
    else if( a+1 ==313){c_2=-0.007944444;}
    else if( a+1 ==314){c_2=-0.008083333;}
    else if( a+1 ==315){c_2=-0.008222222;}
    else if( a+1 ==316){c_2=-0.008361111;}
    else if( a+1 ==317){c_2=-0.0085;}
    else if( a+1 ==318){c_2=-0.008611111;}
    else if( a+1 ==319){c_2=-0.00875;}
    else if( a+1 ==320){c_2=-0.008861111;}
    else if( a+1 ==321){c_2=-0.009;}
    else if( a+1 ==322){c_2=-0.009111111;}
    else if( a+1 ==323){c_2=-0.009222222;}
    else if( a+1 ==324){c_2=-0.009333333;}
    else if( a+1 ==325){c_2=-0.009444444;}
    else if( a+1 ==326){c_2=-0.009555556;}
    else if( a+1 ==327){c_2=-0.009666667;}
    else if( a+1 ==328){c_2=-0.009777778;}
    else if( a+1 ==329){c_2=-0.009888889;}
    else if( a+1 ==330){c_2=-0.009972222;}
    else if( a+1 ==331){c_2=-0.010083333;}
    else if( a+1 ==332){c_2=-0.010166667;}
    else if( a+1 ==333){c_2=-0.01025;}
    else if( a+1 ==334){c_2=-0.010333333;}
    else if( a+1 ==335){c_2=-0.010416667;}
    else if( a+1 ==336){c_2=-0.0105;}
    else if( a+1 ==337){c_2=-0.010583333;}
    else if( a+1 ==338){c_2=-0.010638889;}
    else if( a+1 ==339){c_2=-0.010722222;}
    else if( a+1 ==340){c_2=-0.010777778;}
    else if( a+1 ==341){c_2=-0.010861111;}
    else if( a+1 ==342){c_2=-0.010916667;}
    else if( a+1 ==343){c_2=-0.011;}
    else if( a+1 ==344){c_2=-0.011055556;}
    else if( a+1 ==345){c_2=-0.011111111;}
    else if( a+1 ==346){c_2=-0.011138889;}
    else if( a+1 ==347){c_2=-0.011194444;}
    else if( a+1 ==348){c_2=-0.011222222;}
    else if( a+1 ==349){c_2=-0.01125;}
    else if( a+1 ==350){c_2=-0.011277778;}
    else if( a+1 ==351){c_2=-0.011305556;}
    else if( a+1 ==352){c_2=-0.011333333;}
    else if( a+1 ==353){c_2=-0.011361111;}
    else if( a+1 ==354){c_2=-0.011388889;}
    else if( a+1 ==355){c_2=-0.011388889;}
    else if( a+1 ==356){c_2=-0.011416667;}
    else if( a+1 ==357){c_2=-0.011416667;}
    else if( a+1 ==358){c_2=-0.011444444;}
    else if( a+1 ==359){c_2=-0.011444444;}
    else if( a+1 ==360){c_2=-0.011444444;}
    else {c_2=99999999;}
    
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var sabaq2 = fsbq2(intdalil2, dalil2);
        
    var fsbq3 = function (a,b){
    var c_1
    
    if( a==0){c_1=0.010972222;}
    else if( a==1){c_1=0.010972222;}
    else if( a==2){c_1=0.010944444;}
    else if( a==3){c_1=0.010916667;}
    else if( a==4){c_1=0.010861111;}
    else if( a==5){c_1=0.010805556;}
    else if( a==6){c_1=0.010722222;}
    else if( a==7){c_1=0.010638889;}
    else if( a==8){c_1=0.010527778;}
    else if( a==9){c_1=0.010416667;}
    else if( a==10){c_1=0.010277778;}
    else if( a==11){c_1=0.010138889;}
    else if( a==12){c_1=0.009972222;}
    else if( a==13){c_1=0.009805556;}
    else if( a==14){c_1=0.009611111;}
    else if( a==15){c_1=0.009416667;}
    else if( a==16){c_1=0.009222222;}
    else if( a==17){c_1=0.009;}
    else if( a==18){c_1=0.008777778;}
    else if( a==19){c_1=0.008555556;}
    else if( a==20){c_1=0.008305556;}
    else if( a==21){c_1=0.008055556;}
    else if( a==22){c_1=0.007777778;}
    else if( a==23){c_1=0.0075;}
    else if( a==24){c_1=0.007194444;}
    else if( a==25){c_1=0.006888889;}
    else if( a==26){c_1=0.006583333;}
    else if( a==27){c_1=0.006277778;}
    else if( a==28){c_1=0.005944444;}
    else if( a==29){c_1=0.005611111;}
    else if( a==30){c_1=0.005277778;}
    else if( a==31){c_1=0.004944444;}
    else if( a==32){c_1=0.004583333;}
    else if( a==33){c_1=0.004222222;}
    else if( a==34){c_1=0.003861111;}
    else if( a==35){c_1=0.0035;}
    else if( a==36){c_1=0.003138889;}
    else if( a==37){c_1=0.00275;}
    else if( a==38){c_1=0.002388889;}
    else if( a==39){c_1=0.002;}
    else if( a==40){c_1=0.001611111;}
    else if( a==41){c_1=0.001222222;}
    else if( a==42){c_1=0.000833333;}
    else if( a==43){c_1=0.000472222;}
    else if( a==44){c_1=8.33333E-05;}
    else if( a==45){c_1=-0.000305556;}
    else if( a==46){c_1=-0.000694444;}
    else if( a==47){c_1=-0.001055556;}
    else if( a==48){c_1=-0.001444444;}
    else if( a==49){c_1=-0.001833333;}
    else if( a==50){c_1=-0.002222222;}
    else if( a==51){c_1=-0.002583333;}
    else if( a==52){c_1=-0.002972222;}
    else if( a==53){c_1=-0.003333333;}
    else if( a==54){c_1=-0.003694444;}
    else if( a==55){c_1=-0.004055556;}
    else if( a==56){c_1=-0.004388889;}
    else if( a==57){c_1=-0.00475;}
    else if( a==58){c_1=-0.005083333;}
    else if( a==59){c_1=-0.005416667;}
    else if( a==60){c_1=-0.00575;}
    else if( a==61){c_1=-0.006055556;}
    else if( a==62){c_1=-0.006388889;}
    else if( a==63){c_1=-0.006722222;}
    else if( a==64){c_1=-0.007;}
    else if( a==65){c_1=-0.007305556;}
    else if( a==66){c_1=-0.007583333;}
    else if( a==67){c_1=-0.007861111;}
    else if( a==68){c_1=-0.008111111;}
    else if( a==69){c_1=-0.008361111;}
    else if( a==70){c_1=-0.008398148;}
    else if( a==71){c_1=-0.008805556;}
    else if( a==72){c_1=-0.009027778;}
    else if( a==73){c_1=-0.00925;}
    else if( a==74){c_1=-0.009472222;}
    else if( a==75){c_1=-0.009666667;}
    else if( a==76){c_1=-0.009833333;}
    else if( a==77){c_1=-0.01;}
    else if( a==78){c_1=-0.010166667;}
    else if( a==79){c_1=-0.010305556;}
    else if( a==80){c_1=-0.010444444;}
    else if( a==81){c_1=-0.010555556;}
    else if( a==82){c_1=-0.010611111;}
    else if( a==83){c_1=-0.01075;}
    else if( a==84){c_1=-0.010833333;}
    else if( a==85){c_1=-0.010888889;}
    else if( a==86){c_1=-0.010944444;}
    else if( a==87){c_1=-0.010972222;}
    else if( a==88){c_1=-0.011;}
    else if( a==89){c_1=-0.011;}
    else if( a==90){c_1=-0.011027778;}
    else if( a==91){c_1=-0.011;}
    else if( a==92){c_1=-0.010972222;}
    else if( a==93){c_1=-0.010944444;}
    else if( a==94){c_1=-0.010888889;}
    else if( a==95){c_1=-0.010833333;}
    else if( a==96){c_1=-0.01075;}
    else if( a==97){c_1=-0.010666667;}
    else if( a==98){c_1=-0.010555556;}
    else if( a==99){c_1=-0.010444444;}
    else if( a==100){c_1=-0.010333333;}
    else if( a==101){c_1=-0.010194444;}
    else if( a==102){c_1=-0.010055556;}
    else if( a==103){c_1=-0.009888889;}
    else if( a==104){c_1=-0.009694444;}
    else if( a==105){c_1=-0.0095;}
    else if( a==106){c_1=-0.009305556;}
    else if( a==107){c_1=-0.009111111;}
    else if( a==108){c_1=-0.008888889;}
    else if( a==109){c_1=-0.008666667;}
    else if( a==110){c_1=-0.008416667;}
    else if( a==111){c_1=-0.008166667;}
    else if( a==112){c_1=-0.007916667;}
    else if( a==113){c_1=-0.007638889;}
    else if( a==114){c_1=-0.007361111;}
    else if( a==115){c_1=-0.007083333;}
    else if( a==116){c_1=-0.006777778;}
    else if( a==117){c_1=-0.006472222;}
    else if( a==118){c_1=-0.006138889;}
    else if( a==119){c_1=-0.005805556;}
    else if( a==120){c_1=-0.005472222;}
    else if( a==121){c_1=-0.005138889;}
    else if( a==122){c_1=-0.004777778;}
    else if( a==123){c_1=-0.004444444;}
    else if( a==124){c_1=-0.004083333;}
    else if( a==125){c_1=-0.003722222;}
    else if( a==126){c_1=-0.003361111;}
    else if( a==127){c_1=-0.003;}
    else if( a==128){c_1=-0.002611111;}
    else if( a==129){c_1=-0.00225;}
    else if( a==130){c_1=-0.001861111;}
    else if( a==131){c_1=-0.001472222;}
    else if( a==132){c_1=-0.001083333;}
    else if( a==133){c_1=-0.000694444;}
    else if( a==134){c_1=-0.000305556;}
    else if( a==135){c_1=8.33333E-05;}
    else if( a==136){c_1=0.000472222;}
    else if( a==137){c_1=0.000861111;}
    else if( a==138){c_1=0.00125;}
    else if( a==139){c_1=0.001638889;}
    else if( a==140){c_1=0.002027778;}
    else if( a==141){c_1=0.002416667;}
    else if( a==142){c_1=0.002777778;}
    else if( a==143){c_1=0.003166667;}
    else if( a==144){c_1=0.003555556;}
    else if( a==145){c_1=0.003944444;}
    else if( a==146){c_1=0.004305556;}
    else if( a==147){c_1=0.004666667;}
    else if( a==148){c_1=0.005027778;}
    else if( a==149){c_1=0.005388889;}
    else if( a==150){c_1=0.00575;}
    else if( a==151){c_1=0.006083333;}
    else if( a==152){c_1=0.006416667;}
    else if( a==153){c_1=0.00675;}
    else if( a==154){c_1=0.007083333;}
    else if( a==155){c_1=0.007388889;}
    else if( a==156){c_1=0.007694444;}
    else if( a==157){c_1=0.007972222;}
    else if( a==158){c_1=0.00825;}
    else if( a==159){c_1=0.008527778;}
    else if( a==160){c_1=0.008805556;}
    else if( a==161){c_1=0.009055556;}
    else if( a==162){c_1=0.009305556;}
    else if( a==163){c_1=0.009527778;}
    else if( a==164){c_1=0.00975;}
    else if( a==165){c_1=0.009972222;}
    else if( a==166){c_1=0.010166667;}
    else if( a==167){c_1=0.010361111;}
    else if( a==168){c_1=0.010527778;}
    else if( a==169){c_1=0.010694444;}
    else if( a==170){c_1=0.010805556;}
    else if( a==171){c_1=0.010972222;}
    else if( a==172){c_1=0.011083333;}
    else if( a==173){c_1=0.011194444;}
    else if( a==174){c_1=0.011277778;}
    else if( a==175){c_1=0.011361111;}
    else if( a==176){c_1=0.011416667;}
    else if( a==177){c_1=0.011472222;}
    else if( a==178){c_1=0.0115;}
    else if( a==179){c_1=0.011527778;}
    else if( a==180){c_1=0.011527778;}
    else if( a==181){c_1=0.011527778;}
    else if( a==182){c_1=0.0115;}
    else if( a==183){c_1=0.011472222;}
    else if( a==184){c_1=0.011416667;}
    else if( a==185){c_1=0.011361111;}
    else if( a==186){c_1=0.011277778;}
    else if( a==187){c_1=0.011194444;}
    else if( a==188){c_1=0.011083333;}
    else if( a==189){c_1=0.010972222;}
    else if( a==190){c_1=0.010805556;}
    else if( a==191){c_1=0.010694444;}
    else if( a==192){c_1=0.010527778;}
    else if( a==193){c_1=0.010361111;}
    else if( a==194){c_1=0.010166667;}
    else if( a==195){c_1=0.009972222;}
    else if( a==196){c_1=0.00975;}
    else if( a==197){c_1=0.009527778;}
    else if( a==198){c_1=0.009305556;}
    else if( a==199){c_1=0.009055556;}
    else if( a==200){c_1=0.008805556;}
    else if( a==201){c_1=0.008527778;}
    else if( a==202){c_1=0.00825;}
    else if( a==203){c_1=0.007972222;}
    else if( a==204){c_1=0.007694444;}
    else if( a==205){c_1=0.007388889;}
    else if( a==206){c_1=0.007083333;}
    else if( a==207){c_1=0.00675;}
    else if( a==208){c_1=0.006416667;}
    else if( a==209){c_1=0.006083333;}
    else if( a==210){c_1=0.00575;}
    else if( a==211){c_1=0.005388889;}
    else if( a==212){c_1=0.005027778;}
    else if( a==213){c_1=0.004666667;}
    else if( a==214){c_1=0.004305556;}
    else if( a==215){c_1=0.003944444;}
    else if( a==216){c_1=0.003555556;}
    else if( a==217){c_1=0.003166667;}
    else if( a==218){c_1=0.002777778;}
    else if( a==219){c_1=0.002416667;}
    else if( a==220){c_1=0.002027778;}
    else if( a==221){c_1=0.001638889;}
    else if( a==222){c_1=0.00125;}
    else if( a==223){c_1=0.000861111;}
    else if( a==224){c_1=0.000472222;}
    else if( a==225){c_1=8.33333E-05;}
    else if( a==226){c_1=-0.000305556;}
    else if( a==227){c_1=-0.000694444;}
    else if( a==228){c_1=-0.001083333;}
    else if( a==229){c_1=-0.001472222;}
    else if( a==230){c_1=-0.001861111;}
    else if( a==231){c_1=-0.00225;}
    else if( a==232){c_1=-0.002611111;}
    else if( a==233){c_1=-0.003;}
    else if( a==234){c_1=-0.003361111;}
    else if( a==235){c_1=-0.003722222;}
    else if( a==236){c_1=-0.004083333;}
    else if( a==237){c_1=-0.004444444;}
    else if( a==238){c_1=-0.004777778;}
    else if( a==239){c_1=-0.005138889;}
    else if( a==240){c_1=-0.005472222;}
    else if( a==241){c_1=-0.005805556;}
    else if( a==242){c_1=-0.006138889;}
    else if( a==243){c_1=-0.006472222;}
    else if( a==244){c_1=-0.006777778;}
    else if( a==245){c_1=-0.007083333;}
    else if( a==246){c_1=-0.007361111;}
    else if( a==247){c_1=-0.007638889;}
    else if( a==248){c_1=-0.007916667;}
    else if( a==249){c_1=-0.008166667;}
    else if( a==250){c_1=-0.008416667;}
    else if( a==251){c_1=-0.008666667;}
    else if( a==252){c_1=-0.008888889;}
    else if( a==253){c_1=-0.009111111;}
    else if( a==254){c_1=-0.009305556;}
    else if( a==255){c_1=-0.0095;}
    else if( a==256){c_1=-0.009694444;}
    else if( a==257){c_1=-0.009888889;}
    else if( a==258){c_1=-0.010055556;}
    else if( a==259){c_1=-0.010194444;}
    else if( a==260){c_1=-0.010333333;}
    else if( a==261){c_1=-0.010444444;}
    else if( a==262){c_1=-0.010555556;}
    else if( a==263){c_1=-0.010666667;}
    else if( a==264){c_1=-0.01075;}
    else if( a==265){c_1=-0.010833333;}
    else if( a==266){c_1=-0.010888889;}
    else if( a==267){c_1=-0.010944444;}
    else if( a==268){c_1=-0.010972222;}
    else if( a==269){c_1=-0.011;}
    else if( a==270){c_1=-0.011027778;}
    else if( a==271){c_1=-0.011;}
    else if( a==272){c_1=-0.011;}
    else if( a==273){c_1=-0.010972222;}
    else if( a==274){c_1=-0.010944444;}
    else if( a==275){c_1=-0.010888889;}
    else if( a==276){c_1=-0.010833333;}
    else if( a==277){c_1=-0.01075;}
    else if( a==278){c_1=-0.010611111;}
    else if( a==279){c_1=-0.010555556;}
    else if( a==280){c_1=-0.010444444;}
    else if( a==281){c_1=-0.010305556;}
    else if( a==282){c_1=-0.010166667;}
    else if( a==283){c_1=-0.01;}
    else if( a==284){c_1=-0.009833333;}
    else if( a==285){c_1=-0.009666667;}
    else if( a==286){c_1=-0.009472222;}
    else if( a==287){c_1=-0.00925;}
    else if( a==288){c_1=-0.009027778;}
    else if( a==289){c_1=-0.008805556;}
    else if( a==290){c_1=-0.008398148;}
    else if( a==291){c_1=-0.008361111;}
    else if( a==292){c_1=-0.008111111;}
    else if( a==293){c_1=-0.007861111;}
    else if( a==294){c_1=-0.007583333;}
    else if( a==295){c_1=-0.007305556;}
    else if( a==296){c_1=-0.007;}
    else if( a==297){c_1=-0.006722222;}
    else if( a==298){c_1=-0.006388889;}
    else if( a==299){c_1=-0.006055556;}
    else if( a==300){c_1=-0.00575;}
    else if( a==301){c_1=-0.005416667;}
    else if( a==302){c_1=-0.005083333;}
    else if( a==303){c_1=-0.00475;}
    else if( a==304){c_1=-0.004388889;}
    else if( a==305){c_1=-0.004055556;}
    else if( a==306){c_1=-0.003694444;}
    else if( a==307){c_1=-0.003333333;}
    else if( a==308){c_1=-0.002972222;}
    else if( a==309){c_1=-0.002583333;}
    else if( a==310){c_1=-0.002222222;}
    else if( a==311){c_1=-0.001833333;}
    else if( a==312){c_1=-0.001444444;}
    else if( a==313){c_1=-0.001055556;}
    else if( a==314){c_1=-0.000694444;}
    else if( a==315){c_1=-0.000305556;}
    else if( a==316){c_1=8.33333E-05;}
    else if( a==317){c_1=0.000472222;}
    else if( a==318){c_1=0.000833333;}
    else if( a==319){c_1=0.001222222;}
    else if( a==320){c_1=0.001611111;}
    else if( a==321){c_1=0.002;}
    else if( a==322){c_1=0.002388889;}
    else if( a==323){c_1=0.00275;}
    else if( a==324){c_1=0.003138889;}
    else if( a==325){c_1=0.0035;}
    else if( a==326){c_1=0.003861111;}
    else if( a==327){c_1=0.004222222;}
    else if( a==328){c_1=0.004583333;}
    else if( a==329){c_1=0.004944444;}
    else if( a==330){c_1=0.005277778;}
    else if( a==331){c_1=0.005611111;}
    else if( a==332){c_1=0.005944444;}
    else if( a==333){c_1=0.006277778;}
    else if( a==334){c_1=0.006583333;}
    else if( a==335){c_1=0.006888889;}
    else if( a==336){c_1=0.007194444;}
    else if( a==337){c_1=0.0075;}
    else if( a==338){c_1=0.007777778;}
    else if( a==339){c_1=0.008055556;}
    else if( a==340){c_1=0.008305556;}
    else if( a==341){c_1=0.008555556;}
    else if( a==342){c_1=0.008777778;}
    else if( a==343){c_1=0.009;}
    else if( a==344){c_1=0.009222222;}
    else if( a==345){c_1=0.009416667;}
    else if( a==346){c_1=0.009611111;}
    else if( a==347){c_1=0.009805556;}
    else if( a==348){c_1=0.009972222;}
    else if( a==349){c_1=0.010138889;}
    else if( a==350){c_1=0.010277778;}
    else if( a==351){c_1=0.010416667;}
    else if( a==352){c_1=0.010527778;}
    else if( a==353){c_1=0.010638889;}
    else if( a==354){c_1=0.010722222;}
    else if( a==355){c_1=0.010805556;}
    else if( a==356){c_1=0.010861111;}
    else if( a==357){c_1=0.010916667;}
    else if( a==358){c_1=0.010944444;}
    else if( a==359){c_1=0.010972222;}
    else if( a==360){c_1=0.010972222;}
    else {c_1=99999999;}
    
    var c_2
    
    if( a+1==0){c_2=0.010972222;}
    else if( a+1==1){c_2=0.010972222;}
    else if( a+1==2){c_2=0.010944444;}
    else if( a+1==3){c_2=0.010916667;}
    else if( a+1==4){c_2=0.010861111;}
    else if( a+1==5){c_2=0.010805556;}
    else if( a+1==6){c_2=0.010722222;}
    else if( a+1==7){c_2=0.010638889;}
    else if( a+1==8){c_2=0.010527778;}
    else if( a+1==9){c_2=0.010416667;}
    else if( a+1==10){c_2=0.010277778;}
    else if( a+1==11){c_2=0.010138889;}
    else if( a+1==12){c_2=0.009972222;}
    else if( a+1==13){c_2=0.009805556;}
    else if( a+1==14){c_2=0.009611111;}
    else if( a+1==15){c_2=0.009416667;}
    else if( a+1==16){c_2=0.009222222;}
    else if( a+1==17){c_2=0.009;}
    else if( a+1==18){c_2=0.008777778;}
    else if( a+1==19){c_2=0.008555556;}
    else if( a+1==20){c_2=0.008305556;}
    else if( a+1==21){c_2=0.008055556;}
    else if( a+1==22){c_2=0.007777778;}
    else if( a+1==23){c_2=0.0075;}
    else if( a+1==24){c_2=0.007194444;}
    else if( a+1==25){c_2=0.006888889;}
    else if( a+1==26){c_2=0.006583333;}
    else if( a+1==27){c_2=0.006277778;}
    else if( a+1==28){c_2=0.005944444;}
    else if( a+1==29){c_2=0.005611111;}
    else if( a+1==30){c_2=0.005277778;}
    else if( a+1==31){c_2=0.004944444;}
    else if( a+1==32){c_2=0.004583333;}
    else if( a+1==33){c_2=0.004222222;}
    else if( a+1==34){c_2=0.003861111;}
    else if( a+1==35){c_2=0.0035;}
    else if( a+1==36){c_2=0.003138889;}
    else if( a+1==37){c_2=0.00275;}
    else if( a+1==38){c_2=0.002388889;}
    else if( a+1==39){c_2=0.002;}
    else if( a+1==40){c_2=0.001611111;}
    else if( a+1==41){c_2=0.001222222;}
    else if( a+1==42){c_2=0.000833333;}
    else if( a+1==43){c_2=0.000472222;}
    else if( a+1==44){c_2=8.33333E-05;}
    else if( a+1==45){c_2=-0.000305556;}
    else if( a+1==46){c_2=-0.000694444;}
    else if( a+1==47){c_2=-0.001055556;}
    else if( a+1==48){c_2=-0.001444444;}
    else if( a+1==49){c_2=-0.001833333;}
    else if( a+1==50){c_2=-0.002222222;}
    else if( a+1==51){c_2=-0.002583333;}
    else if( a+1==52){c_2=-0.002972222;}
    else if( a+1==53){c_2=-0.003333333;}
    else if( a+1==54){c_2=-0.003694444;}
    else if( a+1==55){c_2=-0.004055556;}
    else if( a+1==56){c_2=-0.004388889;}
    else if( a+1==57){c_2=-0.00475;}
    else if( a+1==58){c_2=-0.005083333;}
    else if( a+1==59){c_2=-0.005416667;}
    else if( a+1==60){c_2=-0.00575;}
    else if( a+1==61){c_2=-0.006055556;}
    else if( a+1==62){c_2=-0.006388889;}
    else if( a+1==63){c_2=-0.006722222;}
    else if( a+1==64){c_2=-0.007;}
    else if( a+1==65){c_2=-0.007305556;}
    else if( a+1==66){c_2=-0.007583333;}
    else if( a+1==67){c_2=-0.007861111;}
    else if( a+1==68){c_2=-0.008111111;}
    else if( a+1==69){c_2=-0.008361111;}
    else if( a+1==70){c_2=-0.008398148;}
    else if( a+1==71){c_2=-0.008805556;}
    else if( a+1==72){c_2=-0.009027778;}
    else if( a+1==73){c_2=-0.00925;}
    else if( a+1==74){c_2=-0.009472222;}
    else if( a+1==75){c_2=-0.009666667;}
    else if( a+1==76){c_2=-0.009833333;}
    else if( a+1==77){c_2=-0.01;}
    else if( a+1==78){c_2=-0.010166667;}
    else if( a+1==79){c_2=-0.010305556;}
    else if( a+1==80){c_2=-0.010444444;}
    else if( a+1==81){c_2=-0.010555556;}
    else if( a+1==82){c_2=-0.010611111;}
    else if( a+1==83){c_2=-0.01075;}
    else if( a+1==84){c_2=-0.010833333;}
    else if( a+1==85){c_2=-0.010888889;}
    else if( a+1==86){c_2=-0.010944444;}
    else if( a+1==87){c_2=-0.010972222;}
    else if( a+1==88){c_2=-0.011;}
    else if( a+1==89){c_2=-0.011;}
    else if( a+1==90){c_2=-0.011027778;}
    else if( a+1==91){c_2=-0.011;}
    else if( a+1==92){c_2=-0.010972222;}
    else if( a+1==93){c_2=-0.010944444;}
    else if( a+1==94){c_2=-0.010888889;}
    else if( a+1==95){c_2=-0.010833333;}
    else if( a+1==96){c_2=-0.01075;}
    else if( a+1==97){c_2=-0.010666667;}
    else if( a+1==98){c_2=-0.010555556;}
    else if( a+1==99){c_2=-0.010444444;}
    else if( a+1==100){c_2=-0.010333333;}
    else if( a+1==101){c_2=-0.010194444;}
    else if( a+1==102){c_2=-0.010055556;}
    else if( a+1==103){c_2=-0.009888889;}
    else if( a+1==104){c_2=-0.009694444;}
    else if( a+1==105){c_2=-0.0095;}
    else if( a+1==106){c_2=-0.009305556;}
    else if( a+1==107){c_2=-0.009111111;}
    else if( a+1==108){c_2=-0.008888889;}
    else if( a+1==109){c_2=-0.008666667;}
    else if( a+1==110){c_2=-0.008416667;}
    else if( a+1==111){c_2=-0.008166667;}
    else if( a+1==112){c_2=-0.007916667;}
    else if( a+1==113){c_2=-0.007638889;}
    else if( a+1==114){c_2=-0.007361111;}
    else if( a+1==115){c_2=-0.007083333;}
    else if( a+1==116){c_2=-0.006777778;}
    else if( a+1==117){c_2=-0.006472222;}
    else if( a+1==118){c_2=-0.006138889;}
    else if( a+1==119){c_2=-0.005805556;}
    else if( a+1==120){c_2=-0.005472222;}
    else if( a+1==121){c_2=-0.005138889;}
    else if( a+1==122){c_2=-0.004777778;}
    else if( a+1==123){c_2=-0.004444444;}
    else if( a+1==124){c_2=-0.004083333;}
    else if( a+1==125){c_2=-0.003722222;}
    else if( a+1==126){c_2=-0.003361111;}
    else if( a+1==127){c_2=-0.003;}
    else if( a+1==128){c_2=-0.002611111;}
    else if( a+1==129){c_2=-0.00225;}
    else if( a+1==130){c_2=-0.001861111;}
    else if( a+1==131){c_2=-0.001472222;}
    else if( a+1==132){c_2=-0.001083333;}
    else if( a+1==133){c_2=-0.000694444;}
    else if( a+1==134){c_2=-0.000305556;}
    else if( a+1==135){c_2=8.33333E-05;}
    else if( a+1==136){c_2=0.000472222;}
    else if( a+1==137){c_2=0.000861111;}
    else if( a+1==138){c_2=0.00125;}
    else if( a+1==139){c_2=0.001638889;}
    else if( a+1==140){c_2=0.002027778;}
    else if( a+1==141){c_2=0.002416667;}
    else if( a+1==142){c_2=0.002777778;}
    else if( a+1==143){c_2=0.003166667;}
    else if( a+1==144){c_2=0.003555556;}
    else if( a+1==145){c_2=0.003944444;}
    else if( a+1==146){c_2=0.004305556;}
    else if( a+1==147){c_2=0.004666667;}
    else if( a+1==148){c_2=0.005027778;}
    else if( a+1==149){c_2=0.005388889;}
    else if( a+1==150){c_2=0.00575;}
    else if( a+1==151){c_2=0.006083333;}
    else if( a+1==152){c_2=0.006416667;}
    else if( a+1==153){c_2=0.00675;}
    else if( a+1==154){c_2=0.007083333;}
    else if( a+1==155){c_2=0.007388889;}
    else if( a+1==156){c_2=0.007694444;}
    else if( a+1==157){c_2=0.007972222;}
    else if( a+1==158){c_2=0.00825;}
    else if( a+1==159){c_2=0.008527778;}
    else if( a+1==160){c_2=0.008805556;}
    else if( a+1==161){c_2=0.009055556;}
    else if( a+1==162){c_2=0.009305556;}
    else if( a+1==163){c_2=0.009527778;}
    else if( a+1==164){c_2=0.00975;}
    else if( a+1==165){c_2=0.009972222;}
    else if( a+1==166){c_2=0.010166667;}
    else if( a+1==167){c_2=0.010361111;}
    else if( a+1==168){c_2=0.010527778;}
    else if( a+1==169){c_2=0.010694444;}
    else if( a+1==170){c_2=0.010805556;}
    else if( a+1==171){c_2=0.010972222;}
    else if( a+1==172){c_2=0.011083333;}
    else if( a+1==173){c_2=0.011194444;}
    else if( a+1==174){c_2=0.011277778;}
    else if( a+1==175){c_2=0.011361111;}
    else if( a+1==176){c_2=0.011416667;}
    else if( a+1==177){c_2=0.011472222;}
    else if( a+1==178){c_2=0.0115;}
    else if( a+1==179){c_2=0.011527778;}
    else if( a+1==180){c_2=0.011527778;}
    else if( a+1==181){c_2=0.011527778;}
    else if( a+1==182){c_2=0.0115;}
    else if( a+1==183){c_2=0.011472222;}
    else if( a+1==184){c_2=0.011416667;}
    else if( a+1==185){c_2=0.011361111;}
    else if( a+1==186){c_2=0.011277778;}
    else if( a+1==187){c_2=0.011194444;}
    else if( a+1==188){c_2=0.011083333;}
    else if( a+1==189){c_2=0.010972222;}
    else if( a+1==190){c_2=0.010805556;}
    else if( a+1==191){c_2=0.010694444;}
    else if( a+1==192){c_2=0.010527778;}
    else if( a+1==193){c_2=0.010361111;}
    else if( a+1==194){c_2=0.010166667;}
    else if( a+1==195){c_2=0.009972222;}
    else if( a+1==196){c_2=0.00975;}
    else if( a+1==197){c_2=0.009527778;}
    else if( a+1==198){c_2=0.009305556;}
    else if( a+1==199){c_2=0.009055556;}
    else if( a+1==200){c_2=0.008805556;}
    else if( a+1==201){c_2=0.008527778;}
    else if( a+1==202){c_2=0.00825;}
    else if( a+1==203){c_2=0.007972222;}
    else if( a+1==204){c_2=0.007694444;}
    else if( a+1==205){c_2=0.007388889;}
    else if( a+1==206){c_2=0.007083333;}
    else if( a+1==207){c_2=0.00675;}
    else if( a+1==208){c_2=0.006416667;}
    else if( a+1==209){c_2=0.006083333;}
    else if( a+1==210){c_2=0.00575;}
    else if( a+1==211){c_2=0.005388889;}
    else if( a+1==212){c_2=0.005027778;}
    else if( a+1==213){c_2=0.004666667;}
    else if( a+1==214){c_2=0.004305556;}
    else if( a+1==215){c_2=0.003944444;}
    else if( a+1==216){c_2=0.003555556;}
    else if( a+1==217){c_2=0.003166667;}
    else if( a+1==218){c_2=0.002777778;}
    else if( a+1==219){c_2=0.002416667;}
    else if( a+1==220){c_2=0.002027778;}
    else if( a+1==221){c_2=0.001638889;}
    else if( a+1==222){c_2=0.00125;}
    else if( a+1==223){c_2=0.000861111;}
    else if( a+1==224){c_2=0.000472222;}
    else if( a+1==225){c_2=8.33333E-05;}
    else if( a+1==226){c_2=-0.000305556;}
    else if( a+1==227){c_2=-0.000694444;}
    else if( a+1==228){c_2=-0.001083333;}
    else if( a+1==229){c_2=-0.001472222;}
    else if( a+1==230){c_2=-0.001861111;}
    else if( a+1==231){c_2=-0.00225;}
    else if( a+1==232){c_2=-0.002611111;}
    else if( a+1==233){c_2=-0.003;}
    else if( a+1==234){c_2=-0.003361111;}
    else if( a+1==235){c_2=-0.003722222;}
    else if( a+1==236){c_2=-0.004083333;}
    else if( a+1==237){c_2=-0.004444444;}
    else if( a+1==238){c_2=-0.004777778;}
    else if( a+1==239){c_2=-0.005138889;}
    else if( a+1==240){c_2=-0.005472222;}
    else if( a+1==241){c_2=-0.005805556;}
    else if( a+1==242){c_2=-0.006138889;}
    else if( a+1==243){c_2=-0.006472222;}
    else if( a+1==244){c_2=-0.006777778;}
    else if( a+1==245){c_2=-0.007083333;}
    else if( a+1==246){c_2=-0.007361111;}
    else if( a+1==247){c_2=-0.007638889;}
    else if( a+1==248){c_2=-0.007916667;}
    else if( a+1==249){c_2=-0.008166667;}
    else if( a+1==250){c_2=-0.008416667;}
    else if( a+1==251){c_2=-0.008666667;}
    else if( a+1==252){c_2=-0.008888889;}
    else if( a+1==253){c_2=-0.009111111;}
    else if( a+1==254){c_2=-0.009305556;}
    else if( a+1==255){c_2=-0.0095;}
    else if( a+1==256){c_2=-0.009694444;}
    else if( a+1==257){c_2=-0.009888889;}
    else if( a+1==258){c_2=-0.010055556;}
    else if( a+1==259){c_2=-0.010194444;}
    else if( a+1==260){c_2=-0.010333333;}
    else if( a+1==261){c_2=-0.010444444;}
    else if( a+1==262){c_2=-0.010555556;}
    else if( a+1==263){c_2=-0.010666667;}
    else if( a+1==264){c_2=-0.01075;}
    else if( a+1==265){c_2=-0.010833333;}
    else if( a+1==266){c_2=-0.010888889;}
    else if( a+1==267){c_2=-0.010944444;}
    else if( a+1==268){c_2=-0.010972222;}
    else if( a+1==269){c_2=-0.011;}
    else if( a+1==270){c_2=-0.011027778;}
    else if( a+1==271){c_2=-0.011;}
    else if( a+1==272){c_2=-0.011;}
    else if( a+1==273){c_2=-0.010972222;}
    else if( a+1==274){c_2=-0.010944444;}
    else if( a+1==275){c_2=-0.010888889;}
    else if( a+1==276){c_2=-0.010833333;}
    else if( a+1==277){c_2=-0.01075;}
    else if( a+1==278){c_2=-0.010611111;}
    else if( a+1==279){c_2=-0.010555556;}
    else if( a+1==280){c_2=-0.010444444;}
    else if( a+1==281){c_2=-0.010305556;}
    else if( a+1==282){c_2=-0.010166667;}
    else if( a+1==283){c_2=-0.01;}
    else if( a+1==284){c_2=-0.009833333;}
    else if( a+1==285){c_2=-0.009666667;}
    else if( a+1==286){c_2=-0.009472222;}
    else if( a+1==287){c_2=-0.00925;}
    else if( a+1==288){c_2=-0.009027778;}
    else if( a+1==289){c_2=-0.008805556;}
    else if( a+1==290){c_2=-0.008398148;}
    else if( a+1==291){c_2=-0.008361111;}
    else if( a+1==292){c_2=-0.008111111;}
    else if( a+1==293){c_2=-0.007861111;}
    else if( a+1==294){c_2=-0.007583333;}
    else if( a+1==295){c_2=-0.007305556;}
    else if( a+1==296){c_2=-0.007;}
    else if( a+1==297){c_2=-0.006722222;}
    else if( a+1==298){c_2=-0.006388889;}
    else if( a+1==299){c_2=-0.006055556;}
    else if( a+1==300){c_2=-0.00575;}
    else if( a+1==301){c_2=-0.005416667;}
    else if( a+1==302){c_2=-0.005083333;}
    else if( a+1==303){c_2=-0.00475;}
    else if( a+1==304){c_2=-0.004388889;}
    else if( a+1==305){c_2=-0.004055556;}
    else if( a+1==306){c_2=-0.003694444;}
    else if( a+1==307){c_2=-0.003333333;}
    else if( a+1==308){c_2=-0.002972222;}
    else if( a+1==309){c_2=-0.002583333;}
    else if( a+1==310){c_2=-0.002222222;}
    else if( a+1==311){c_2=-0.001833333;}
    else if( a+1==312){c_2=-0.001444444;}
    else if( a+1==313){c_2=-0.001055556;}
    else if( a+1==314){c_2=-0.000694444;}
    else if( a+1==315){c_2=-0.000305556;}
    else if( a+1==316){c_2=8.33333E-05;}
    else if( a+1==317){c_2=0.000472222;}
    else if( a+1==318){c_2=0.000833333;}
    else if( a+1==319){c_2=0.001222222;}
    else if( a+1==320){c_2=0.001611111;}
    else if( a+1==321){c_2=0.002;}
    else if( a+1==322){c_2=0.002388889;}
    else if( a+1==323){c_2=0.00275;}
    else if( a+1==324){c_2=0.003138889;}
    else if( a+1==325){c_2=0.0035;}
    else if( a+1==326){c_2=0.003861111;}
    else if( a+1==327){c_2=0.004222222;}
    else if( a+1==328){c_2=0.004583333;}
    else if( a+1==329){c_2=0.004944444;}
    else if( a+1==330){c_2=0.005277778;}
    else if( a+1==331){c_2=0.005611111;}
    else if( a+1==332){c_2=0.005944444;}
    else if( a+1==333){c_2=0.006277778;}
    else if( a+1==334){c_2=0.006583333;}
    else if( a+1==335){c_2=0.006888889;}
    else if( a+1==336){c_2=0.007194444;}
    else if( a+1==337){c_2=0.0075;}
    else if( a+1==338){c_2=0.007777778;}
    else if( a+1==339){c_2=0.008055556;}
    else if( a+1==340){c_2=0.008305556;}
    else if( a+1==341){c_2=0.008555556;}
    else if( a+1==342){c_2=0.008777778;}
    else if( a+1==343){c_2=0.009;}
    else if( a+1==344){c_2=0.009222222;}
    else if( a+1==345){c_2=0.009416667;}
    else if( a+1==346){c_2=0.009611111;}
    else if( a+1==347){c_2=0.009805556;}
    else if( a+1==348){c_2=0.009972222;}
    else if( a+1==349){c_2=0.010138889;}
    else if( a+1==350){c_2=0.010277778;}
    else if( a+1==351){c_2=0.010416667;}
    else if( a+1==352){c_2=0.010527778;}
    else if( a+1==353){c_2=0.010638889;}
    else if( a+1==354){c_2=0.010722222;}
    else if( a+1==355){c_2=0.010805556;}
    else if( a+1==356){c_2=0.010861111;}
    else if( a+1==357){c_2=0.010916667;}
    else if( a+1==358){c_2=0.010944444;}
    else if( a+1==359){c_2=0.010972222;}
    else if( a+1==360){c_2=0.010972222;}
    else {c_2=99999999;}
        
    var hasil = (c_1)+(c_2-c_1)*(b-a);
    
    return hasil ;
    };
    
    var intbm = Math.floor(bm);
    var sabaq3 = fsbq3(Math.abs(intbm), Math.abs(bm));
    
    var fsbqsam = function (a,b){
    var c_1
    if(a ==0){c_1=0.039722222;}
    else if( a ==5){c_1=0.039722222;}
    else if( a ==10){c_1=0.03975;}
    else if( a ==15){c_1=0.03975;}
    else if( a ==20){c_1=0.039805556;}
    else if( a ==25){c_1=0.039833333;}
    else if( a ==30){c_1=0.039888889;}
    else if( a ==35){c_1=0.039944444;}
    else if( a ==40){c_1=0.040027778;}
    else if( a ==45){c_1=0.040111111;}
    else if( a ==50){c_1=0.040194444;}
    else if( a ==55){c_1=0.040277778;}
    else if( a ==60){c_1=0.040388889;}
    else if( a ==65){c_1=0.040472222;}
    else if( a ==70){c_1=0.040583333;}
    else if( a ==75){c_1=0.040694444;}
    else if( a ==80){c_1=0.040712963;}
    else if( a ==85){c_1=0.040944444;}
    else if( a ==90){c_1=0.041055556;}
    else if( a ==95){c_1=0.041166667;}
    else if( a ==100){c_1=0.041277778;}
    else if( a ==105){c_1=0.041388889;}
    else if( a ==110){c_1=0.0415;}
    else if( a ==115){c_1=0.041611111;}
    else if( a ==120){c_1=0.041722222;}
    else if( a ==125){c_1=0.041833333;}
    else if( a ==130){c_1=0.041944444;}
    else if( a ==135){c_1=0.042055556;}
    else if( a ==140){c_1=0.042138889;}
    else if( a ==145){c_1=0.042222222;}
    else if( a ==150){c_1=0.042305556;}
    else if( a ==155){c_1=0.042361111;}
    else if( a ==160){c_1=0.042416667;}
    else if( a ==165){c_1=0.042444444;}
    else if( a ==170){c_1=0.042472222;}
    else if( a ==175){c_1=0.042472222;}
    else if( a ==180){c_1=0.0425;}
    else if( a ==185){c_1=0.042472222;}
    else if( a ==190){c_1=0.042472222;}
    else if( a ==195){c_1=0.042444444;}
    else if( a ==200){c_1=0.042416667;}
    else if( a ==205){c_1=0.042361111;}
    else if( a ==210){c_1=0.042305556;}
    else if( a ==215){c_1=0.042222222;}
    else if( a ==220){c_1=0.042138889;}
    else if( a ==225){c_1=0.042055556;}
    else if( a ==230){c_1=0.041944444;}
    else if( a ==235){c_1=0.041833333;}
    else if( a ==240){c_1=0.041722222;}
    else if( a ==245){c_1=0.041611111;}
    else if( a ==250){c_1=0.0415;}
    else if( a ==255){c_1=0.041388889;}
    else if( a ==260){c_1=0.041277778;}
    else if( a ==265){c_1=0.041166667;}
    else if( a ==270){c_1=0.041055556;}
    else if( a ==275){c_1=0.040944444;}
    else if( a ==280){c_1=0.040712963;}
    else if( a ==285){c_1=0.040694444;}
    else if( a ==290){c_1=0.040583333;}
    else if( a ==295){c_1=0.040472222;}
    else if( a ==300){c_1=0.040388889;}
    else if( a ==305){c_1=0.040277778;}
    else if( a ==310){c_1=0.040194444;}
    else if( a ==315){c_1=0.040111111;}
    else if( a ==320){c_1=0.040027778;}
    else if( a ==325){c_1=0.039944444;}
    else if( a ==330){c_1=0.039888889;}
    else if( a ==335){c_1=0.039833333;}
    else if( a ==340){c_1=0.039805556;}
    else if( a ==345){c_1=0.03975;}
    else if( a ==350){c_1=0.03975;}
    else if( a ==355){c_1=0.039722222;}
    else if( a ==360){c_1=0.039722222;}
    else {c_1=99999999999999999;}
    
    var c_2
    if( a+5 ==0){c_2=0.039722222;}
    else if( a+5 ==5){c_2=0.039722222;}
    else if( a+5 ==10){c_2=0.03975;}
    else if( a+5 ==15){c_2=0.03975;}
    else if( a+5 ==20){c_2=0.039805556;}
    else if( a+5 ==25){c_2=0.039833333;}
    else if( a+5 ==30){c_2=0.039888889;}
    else if( a+5 ==35){c_2=0.039944444;}
    else if( a+5 ==40){c_2=0.040027778;}
    else if( a+5 ==45){c_2=0.040111111;}
    else if( a+5 ==50){c_2=0.040194444;}
    else if( a+5 ==55){c_2=0.040277778;}
    else if( a+5 ==60){c_2=0.040388889;}
    else if( a+5 ==65){c_2=0.040472222;}
    else if( a+5 ==70){c_2=0.040583333;}
    else if( a+5 ==75){c_2=0.040694444;}
    else if( a+5 ==80){c_2=0.040712963;}
    else if( a+5 ==85){c_2=0.040944444;}
    else if( a+5 ==90){c_2=0.041055556;}
    else if( a+5 ==95){c_2=0.041166667;}
    else if( a+5 ==100){c_2=0.041277778;}
    else if( a+5 ==105){c_2=0.041388889;}
    else if( a+5 ==110){c_2=0.0415;}
    else if( a+5 ==115){c_2=0.041611111;}
    else if( a+5 ==120){c_2=0.041722222;}
    else if( a+5 ==125){c_2=0.041833333;}
    else if( a+5 ==130){c_2=0.041944444;}
    else if( a+5 ==135){c_2=0.042055556;}
    else if( a+5 ==140){c_2=0.042138889;}
    else if( a+5 ==145){c_2=0.042222222;}
    else if( a+5 ==150){c_2=0.042305556;}
    else if( a+5 ==155){c_2=0.042361111;}
    else if( a+5 ==160){c_2=0.042416667;}
    else if( a+5 ==165){c_2=0.042444444;}
    else if( a+5 ==170){c_2=0.042472222;}
    else if( a+5 ==175){c_2=0.042472222;}
    else if( a+5 ==180){c_2=0.0425;}
    else if( a+5 ==185){c_2=0.042472222;}
    else if( a+5 ==190){c_2=0.042472222;}
    else if( a+5 ==195){c_2=0.042444444;}
    else if( a+5 ==200){c_2=0.042416667;}
    else if( a+5 ==205){c_2=0.042361111;}
    else if( a+5 ==210){c_2=0.042305556;}
    else if( a+5 ==215){c_2=0.042222222;}
    else if( a+5 ==220){c_2=0.042138889;}
    else if( a+5 ==225){c_2=0.042055556;}
    else if( a+5 ==230){c_2=0.041944444;}
    else if( a+5 ==235){c_2=0.041833333;}
    else if( a+5 ==240){c_2=0.041722222;}
    else if( a+5 ==245){c_2=0.041611111;}
    else if( a+5 ==250){c_2=0.0415;}
    else if( a+5 ==255){c_2=0.041388889;}
    else if( a+5 ==260){c_2=0.041277778;}
    else if( a+5 ==265){c_2=0.041166667;}
    else if( a+5 ==270){c_2=0.041055556;}
    else if( a+5 ==275){c_2=0.040944444;}
    else if( a+5 ==280){c_2=0.040712963;}
    else if( a+5 ==285){c_2=0.040694444;}
    else if( a+5 ==290){c_2=0.040583333;}
    else if( a+5 ==295){c_2=0.040472222;}
    else if( a+5 ==300){c_2=0.040388889;}
    else if( a+5 ==305){c_2=0.040277778;}
    else if( a+5 ==310){c_2=0.040194444;}
    else if( a+5 ==315){c_2=0.040111111;}
    else if( a+5 ==320){c_2=0.040027778;}
    else if( a+5 ==325){c_2=0.039944444;}
    else if( a+5 ==330){c_2=0.039888889;}
    else if( a+5 ==335){c_2=0.039833333;}
    else if( a+5 ==340){c_2=0.039805556;}
    else if( a+5 ==345){c_2=0.03975;}
    else if( a+5 ==350){c_2=0.03975;}
    else if( a+5 ==355){c_2=0.039722222;}
    else if( a+5 ==360){c_2=0.039722222;}
    else {c_2=99999999999999999;}
    
    var hasil = (c_1)+(c_2-c_1)*(b-a)/5;
    
    return hasil ;
    };
    
    var dalil1 = jks;
    var varsabaqsam = 5*Math.floor(dalil1/5);
    var sabaqsam = fsbqsam(varsabaqsam, dalil1);
    var sabaqmuaddal = sabaq1+sabaq2+sabaq3-sabaqsam;
    var buduilaijtima1 = bm/sabaqmuaddal;
    
    //proses pengulangan takdil
    var korews = buduilaijtima1*0.041068636*-1;
    var koreks = buduilaijtima1*0.04106656*-1;
    var korewq = buduilaijtima1*0.549016531*-1;
    var korekq = buduilaijtima1*0.544374542*-1;
    var koreuq = buduilaijtima1*0.002206462*-1;
    
    var jws2 = MOD(jws+korews+360,360);
    var jks2 = MOD(jks+koreks+360,360);
    var jwq2 = MOD(jwq+korewq+360,360);
    var jkq2 = MOD(jkq+korekq+360,360);
    var juq2 = MOD(juq+koreuq+360,360);
    
    var dalil11= jks2;
    var intdalil11 = Math.floor(dalil11);
    var tdla01= ftdla0(intdalil11,dalil11);
    var thulsyams2 =jws2+tdla01;
    var tdlc0d01 = ftdlc0d0(intdalil11,dalil11);
    
    var kwq1_1 = MOD(jwq2+tdlc0d01+360,360);
    var kkq1_1 = MOD(jkq2+tdlc0d01+360,360);
    
    var dalil21 =MOD(2*(jwq2-thulsyams2)-jkq2+360,360);
    var intdalil21 = Math.floor(dalil21);
    
    var tdlc1d11 = ftdlc1d1(intdalil21, dalil21);
    
    var kwq1_2 = MOD(kwq1_1+tdlc1d11+360,360);
    var kkq1_2 = MOD(kkq1_1+tdlc1d11+360,360);
    
    var tdld21 = ftdld2(intdalil11, dalil11);
    var kkq1_3 = MOD(kkq1_2+tdld21+360,360);
    var dalil31 = kkq1_3;
    var intdalil31 = Math.floor(dalil31);
    
    var tdlc21 = ftdlc2(intdalil31, dalil31);
    var kwq1_3 = MOD(kwq1_2+tdlc21+360,360);
    
    var dalil41 = MOD(kwq1_3-thulsyams2+360,360);
    var intdalil41 = Math.floor(dalil41);
    
    var tdlc31 = ftdlc3(intdalil41, dalil41);
    var kwq1_4 = MOD(kwq1_3+tdlc31+360,360);
    
    var tdle01 = ftdle0(intdalil11, dalil11);
    var kuq1_1 = MOD(juq2+tdle01+360,360);
    
    var dalil51 = MOD(kwq1_4+kuq1_1,360);
    var intdalil51 = Math.floor(dalil51);
        
    var tdlc41 = ftdlc4(intdalil51, dalil51);
    var thulqomar2 = MOD(kwq1_4+tdlc41+360,360);
     
    var bm2
    
    if ((MOD(thulqomar2-thulsyams2+360,360))>180){
        bm2 = (MOD(thulqomar2-thulsyams2+360,360))-360;
        }else{
        bm2 = (MOD(thulqomar2-thulsyams2+360,360));
        }
        
    var sabaq11 = fsbq1(intdalil31, dalil31);
    var sabaq21 = fsbq2(intdalil21, dalil21);
    var intbm2 = Math.floor(bm2);
    var sabaq31 = fsbq3(Math.abs(intbm2), Math.abs(bm2));
    var varsabaqsam1 = 5*Math.floor(dalil11/5);
    var sabaqsam1 = fsbqsam(varsabaqsam1, dalil11);
    var sabaqmuaddal1 = sabaq11+sabaq21+sabaq31-sabaqsam1;
    var buduilaijtima12 = bm2/sabaqmuaddal1;
    
    //proses pengulangan takdil2
    var kore2ws = buduilaijtima12*0.041068636*-1;
    var kore2ks = buduilaijtima12*0.04106656*-1;
    var kore2wq = buduilaijtima12*0.549016531*-1;
    var kore2kq = buduilaijtima12*0.544374542*-1;
    var kore2uq = buduilaijtima12*0.002206462*-1;
    
    var jws22 = MOD(jws2+kore2ws+360,360);
    var jks22 = MOD(jks2+kore2ks+360,360);
    var jwq22 = MOD(jwq2+kore2wq+360,360);
    var jkq22 = MOD(jkq2+kore2kq+360,360);
    var juq22 = MOD(juq2+kore2uq+360,360);
    
    var dalil111= jks22;
    var intdalil111 = Math.floor(dalil111);
    var tdla011= ftdla0(intdalil111,dalil111);
    var thulsyams3 =jws22+tdla011;
    var tdlc0d011 = ftdlc0d0(intdalil111,dalil111);
    
    var kwq11_1 = MOD(jwq22+tdlc0d011+360,360);
    var kkq11_1 = MOD(jkq22+tdlc0d011+360,360);
    
    var dalil211 =MOD(2*(jwq22-thulsyams3)-jkq22+360,360);
    var intdalil211 = Math.floor(dalil211);
    
    var tdlc1d111 = ftdlc1d1(intdalil211, dalil211);
    
    var kwq11_2 = MOD(kwq11_1+tdlc1d111+360,360);
    var kkq11_2 = MOD(kkq11_1+tdlc1d111+360,360);
    
    var tdld211 = ftdld2(intdalil111, dalil111);
    var kkq11_3 = MOD(kkq11_2+tdld211+360,360);
    var dalil311 = kkq11_3;
    var intdalil311 = Math.floor(dalil311);
    
    var tdlc211 = ftdlc2(intdalil311, dalil311);
    var kwq11_3 = MOD(kwq11_2+tdlc211+360,360);
    
    var dalil411 = MOD(kwq11_3-thulsyams3+360,360);
    var intdalil411 = Math.floor(dalil411);
    
    var tdlc311 = ftdlc3(intdalil411, dalil411);
    var kwq11_4 = MOD(kwq11_3+tdlc311+360,360);
    
    var tdle011 = ftdle0(intdalil111, dalil111);
    var kuq11_1 = MOD(juq22+tdle011+360,360);
    
    var dalil511 = MOD(kwq11_4+kuq11_1,360);
    var intdalil511 = Math.floor(dalil511);
        
    var tdlc411 = ftdlc4(intdalil511, dalil511);
    var thulqomar3 = MOD(kwq11_4+tdlc411+360,360);
        
    var bm3
    
    if ((MOD(thulqomar3-thulsyams3+360,360))>180){
        bm3 = (MOD(thulqomar3-thulsyams3+360,360))-360;
        }else{
        bm3 = (MOD(thulqomar3-thulsyams3+360,360));
        }
        
    var sabaq111 = fsbq1(intdalil311, dalil311);
    var sabaq211 = fsbq2(intdalil211, dalil211);
    var intbm3 = Math.floor(bm3);
    var sabaq311 = fsbq3(Math.abs(intbm3), Math.abs(bm3));
    var varsabaqsam11 = 5*Math.floor(dalil111/5);
    var sabaqsam11 = fsbqsam(varsabaqsam11, dalil111);
    var sabaqmuaddal11 = sabaq111+sabaq211+sabaq311-sabaqsam11;
    var buduilaijtima13 = bm3/sabaqmuaddal11;
    
    //selanjutnya
    
    var saatijtimahakikiistiwa = MOD(mag-buduilaijtima1-buduilaijtima12-buduilaijtima13+24,12);
    var tafawutwib =(105-nbujur)/15+tafawut/60;
    var saatijtimahakikiwib =MOD(12+mag-buduilaijtima1-buduilaijtima12-buduilaijtima13+tafawutwib+24,24);
    var buduijtima1
    if(saatijtimahakikiwib>mag+tafawutwib+12 && saatijtimahakikiwib<24){
    buduijtima1 = 1;
    }else{
    buduijtima1 = 0;
    } 
    var harikeijtima = Math.floor((buduilaijtima1+buduilaijtima12+buduilaijtima13)/24)+buduijtima1;
    
    var hariijtima
    if(((jtgl-harikeijtima+7)%7)==0){
    hariijtima = 7;
    }else{
    hariijtima = (jtgl-harikeijtima+7)%7;
    }
    
    var hariijtima2
    if ( hariijtima==7){
    hariijtima2=0;
    }else{
    hariijtima2=hariijtima;
    }
    
    //ijtimak
    var jmlthnmajm =thnmajm*10631/30;
    var jmlthnmbs
    if (thnmbs==0){jmlthnmbs=0;}
    else if(thnmbs==1){	jmlthnmbs=354;}
    else if( thnmbs==2){	jmlthnmbs=709;}
    else if( thnmbs==3){	jmlthnmbs=1063;}
    else if( thnmbs==4){	jmlthnmbs=1417;}
    else if( thnmbs==5){	jmlthnmbs=1772;}
    else if( thnmbs==6){	jmlthnmbs=2126;}
    else if( thnmbs==7){	jmlthnmbs=2481;}
    else if( thnmbs==8){	jmlthnmbs=2835;}
    else if( thnmbs==9){	jmlthnmbs=3189;}
    else if( thnmbs==10){	jmlthnmbs=3544;}
    else if( thnmbs==11){	jmlthnmbs=3898;}
    else if( thnmbs==12){	jmlthnmbs=4252;}
    else if( thnmbs==13){	jmlthnmbs=4607;}
    else if( thnmbs==14){	jmlthnmbs=4961;}
    else if( thnmbs==15){	jmlthnmbs=5316;}
    else if( thnmbs==16){	jmlthnmbs=5670;}
    else if( thnmbs==17){	jmlthnmbs=6024;}
    else if( thnmbs==18){	jmlthnmbs=6379;}
    else if( thnmbs==19){	jmlthnmbs=6733;}
    else if( thnmbs==20){	jmlthnmbs=7087;}
    else if( thnmbs==21){	jmlthnmbs=7442;}
    else if( thnmbs==22){	jmlthnmbs=7796;}
    else if( thnmbs==23){	jmlthnmbs=8150;}
    else if( thnmbs==24){	jmlthnmbs=8505;}
    else if( thnmbs==25){	jmlthnmbs=8859;}
    else if( thnmbs==26){	jmlthnmbs=9214;}
    else if( thnmbs==27){	jmlthnmbs=9568;}
    else if( thnmbs==28){	jmlthnmbs=9922;}
    else if( thnmbs==29){	jmlthnmbs=10277;}
    else if( thnmbs==30){	jmlthnmbs=10631;}
    else {
    jmlthnmbs=999999999;}
    
    var jmlblntam =Math.floor((blntam+1)*29.5);
    
    var jmltmbhhr
    
    if ((blntam+1)==12){
        
        if(thnmbs==2||thnmbs==5||thnmbs==7||thnmbs==10||thnmbs==13||thnmbs==15||thnmbs==18||thnmbs==21||thnmbs==24||thnmbs==26||thnmbs==29){
        jmltmbhhr=1;
        }else{
        jmltmbhhr=0;
        }
    
    }else{
        jmltmbhhr=0;
    }
    
    var jmltotal=jmlblntam+jmlthnmajm+jmlthnmbs+jmltmbhhr+227029;
    
    var teskoreksi = jmltotal%7;
    var teskoreksi1 = (jmltotal+1)%7;
    var teskoreksi2 = (jmltotal+2)%7;
    var teskoreksi3 = (jmltotal+3)%7;
    var teskoreksi4 = (jmltotal-1)%7;
    var teskoreksi5 = (jmltotal-2)%7;
    var teskoreksi6 = (jmltotal-3)%7;
    
    var jumlahhasilkoreksi
    if ((jmltotal%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal;}
    else if (((jmltotal+1)%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal+1;}
    else if (((jmltotal+2)%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal+2;}
    else if (((jmltotal+3)%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal+3;}
    else if (((jmltotal-1)%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal-1;}
    else if (((jmltotal-2)%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal-2;}
    else if (((jmltotal-3)%7)==hariijtima2){
    jumlahhasilkoreksi=jmltotal-3;}
    else{jumlahhasilkoreksi=9999999999;}
    
    var totalharitahunkabisattam = Math.floor(jumlahhasilkoreksi/1461)*1461;
    var tahunkabisattam =4*totalharitahunkabisattam/1461;
    var sisa1 = jumlahhasilkoreksi-totalharitahunkabisattam;
    var tambahantahuntam =Math.floor(sisa1/365);
    var jumlahharitahunberjalan =sisa1-tambahantahuntam*365;
    var logikatahunkabisat1 
    if (sisa1==0){
    logikatahunkabisat1=tahunkabisattam+tambahantahuntam;
    }else{
    logikatahunkabisat1=tahunkabisattam+tambahantahuntam+1;
    }
    
    var logikatahunkabisat2
    if (logikatahunkabisat1/400==Math.floor(logikatahunkabisat1/400)){
    logikatahunkabisat2=366;
    }else if (logikatahunkabisat1/100==Math.floor(logikatahunkabisat1/100)){
    logikatahunkabisat2=366;
    }else if (logikatahunkabisat1/4==Math.floor(logikatahunkabisat1/4)){
    logikatahunkabisat2=366;
    }else{
    logikatahunkabisat2=365;
    }
    
    var tahunberjalan
    if (sisa1==logikatahunkabisat2){
    
    if (sisa1==0){
    tahunberjalan=tahunkabisattam+tambahantahuntam-1;
    }else{
    tahunberjalan=tahunkabisattam+tambahantahuntam;
    }
    
    }else{
    
    if (sisa1==0){
    tahunberjalan=tahunkabisattam+tambahantahuntam;
    }else{
    tahunberjalan=tahunkabisattam+tambahantahuntam+1;
    }
    }
    
    var dateFromDay = function (year, day){
    var date = new Date(year,0);
    return new Date(date.setDate(day));
    }
    
    var bulantanggal = dateFromDay(tahunberjalan,jumlahharitahunberjalan); 
    var tanggal = bulantanggal.getDate();
    var bulann =bulantanggal.getMonth()+1;
    
    var namabulanmas
    if (bulann==1){
    namabulanmas="Januari";
    }else if(bulann==2){
    namabulanmas="Februari";
    }else if(bulann==3){
    namabulanmas="Maret";
    }else if(bulann==4){
    namabulanmas="April";
    }else if(bulann==5){
    namabulanmas="Mei";
    }else if(bulann==6){
    namabulanmas="Juni";
    }else if(bulann==7){
    namabulanmas="Juli";
    }else if(bulann==8){
    namabulanmas="Agustus";
    }else if(bulann==9){
    namabulanmas="September";
    }else if(bulann==10){
    namabulanmas="Oktober";
    }else if(bulann==11){
    namabulanmas="November";
    }else if(bulann==12){
    namabulanmas="Desember";
    }else{
    namabulanmas="Error"
    }
    
    var harimalam = (jtgl+1)%7;
    
    var harimalam2
    if(harimalam==0){
    harimalam2="Sabtu";
    }else if(harimalam==1){
    harimalam2="Ahad";
    }else if(harimalam==2){
    harimalam2="Senin";
    }else if(harimalam==3){
    harimalam2="Selasa";
    }else if(harimalam==4){
    harimalam2="Rabu";
    }else if(harimalam==5){
    harimalam2="Kamis";
    }else if(harimalam==6){
    harimalam2="Jumat";
    }else if(harimalam==7){
    harimalam2="Sabtu";
    }else{
    harimalam2="Error";
    }
    
    var hariijtima3
    if(hariijtima2==0){
    hariijtima3="Sabtu";
    }else if(hariijtima2==1){
    hariijtima3="Ahad";
    }else if(hariijtima2==2){
    hariijtima3="Senin";
    }else if(hariijtima2==3){
    hariijtima3="Selasa";
    }else if(hariijtima2==4){
    hariijtima3="Rabu";
    }else if(hariijtima2==5){
    hariijtima3="Kamis";
    }else if(hariijtima2==6){
    hariijtima3="Jumat";
    }else if(hariijtima2==7){
    hariijtima3="Sabtu";
    }else{
    hariijtima3="Error";
    }
    
    var nilaipasaran =(jumlahhasilkoreksi+1)%5;
    
    var namapasaran
    
    if(nilaipasaran==0){
    namapasaran="Kliwon";
    }else if(nilaipasaran==1){
    namapasaran="Legi";
    }else if(nilaipasaran==2){
    namapasaran="Pahing";
    }else if(nilaipasaran==3){
    namapasaran="Pon";
    }else if(nilaipasaran==4){
    namapasaran="Wage";
    }else if(nilaipasaran==5){
    namapasaran="Kliwon";
    }else{
    namapasaran="Error";
    }
    
    //hisab haiah
    var melawal = 180/Math.PI*(Math.asin(Math.sin(Math.PI/180*(thulsyams))
    *Math.sin(Math.PI/180*(23+26/60+40/3600))));
    var nisfuqousinnahar =180/Math.PI*(Math.acos(-1*(Math.tan(
    Math.PI/180*(nlin))*Math.tan(Math.PI/180*(melawal))
    -Math.sin(Math.PI/180*(-1-13/60))/
    Math.cos(Math.PI/180*(nlin))/Math.cos(Math.PI/180*(melawal)))));
    var matholifalakiyahsyams 
    if(thulsyams<180){
    matholifalakiyahsyams = 180-(180/Math.PI*(Math.asin(Math.cos(Math.PI/180*(thulsyams))/Math.cos(Math.PI/180*(melawal)))));
    }else{
    matholifalakiyahsyams =(360+(180/Math.PI*(Math.asin
    (Math.cos(Math.PI/180*(thulsyams))/
    Math.cos(Math.PI/180*(melawal))))))%360;
    }
    
    var meltsani =180/Math.PI*(Math.atan(Math.sin(Math.PI/180*(thulqomar))*Math.tan(Math.PI/180*(23+26/60+40/3600))))
    var ardhulqomar =180/Math.PI*(Math.asin(Math.sin(Math.PI/180*(dalil5))*Math.sin(Math.PI/180*(5))));
    var ardhulmuaddal =ardhulqomar+meltsani;
    var budulqomar1 =180/Math.PI*(Math.asin(Math.cos(Math.PI/180*(23+26/60+40/3600))*Math.sin(Math.PI/180*(ardhulmuaddal))/Math.cos(Math.PI/180*(meltsani))));
    var melawalqomar =180/Math.PI*(Math.asin(Math.sin(Math.PI/180*(thulqomar))*Math.sin(Math.PI/180*(23+26/60+40/3600))));
    var budulqomar2
    if(Math.sign(budulqomar1)!=Math.sign(melawalqomar)){
    budulqomar2 = (Math.abs(budulqomar1)+Math.abs(melawalqomar))/2;
    }else{
    budulqomar2 = (budulqomar1+melawalqomar)/2;
    }
    var nisfuqousinnaharqomar =180/Math.PI*(Math.acos(-1*(Math.tan(Math.PI/180*(nlin))*Math.tan(Math.PI/180*(budulqomar1))-Math.sin(Math.PI/180*(-1-13/60))/Math.cos(Math.PI/180*(nlin))/Math.cos(Math.PI/180*(budulqomar1)))));
    
    var takdilmatholiqomar 
    if(Math.abs(Math.cos(Math.PI/180*(thulqomar))/Math.cos(Math.PI/180*(budulqomar2)))>1){
    takdilmatholiqomar = 180/Math.PI*(Math.asin(Math.cos(Math.PI/180*(budulqomar2))/Math.cos(Math.PI/180*(thulqomar))));
    }else{
    takdilmatholiqomar = 180/Math.PI*(Math.asin(Math.cos(Math.PI/180*(thulqomar))/Math.cos(Math.PI/180*(budulqomar2))));
    }
    
    var matholifalakiyahqomar 
    if (thulqomar<180){
    matholifalakiyahqomar = 180-takdilmatholiqomar;
    }else{
    matholifalakiyahqomar = (360+takdilmatholiqomar)%360;
    }
    
    var matholighurubqomar =(nisfuqousinnaharqomar+matholifalakiyahqomar)%360;
    var matholighurubsyams =(nisfuqousinnahar+matholifalakiyahsyams)%360;
    
    var qousulmuksi = matholighurubqomar-matholighurubsyams;
    var fadludair =(nisfuqousinnaharqomar-qousulmuksi+360)%360;
    var irtifahilal =180/Math.PI*(Math.asin(Math.sin(Math.PI/180*(nlin))*Math.sin(Math.PI/180*(budulqomar1))+Math.cos(Math.PI/180*(nlin))*Math.cos(Math.PI/180*(budulqomar1))*Math.cos(Math.PI/180*(fadludair))));
    var muksuhilal =((qousulmuksi+irtifahilal)/2)/15;
    
    var simtuirtifa 
    if(budulqomar1<0){
    simtuirtifa = (180/Math.PI*(Math.acos(Math.sin(Math.PI/180*(fadludair))
    *Math.cos(Math.PI/180*(budulqomar1))/Math.cos(Math.PI/180*(irtifahilal)))))*-1;
    }else{
    simtuirtifa = 180/Math.PI*(Math.acos(Math.sin(Math.PI/180*(fadludair))
    *Math.cos(Math.PI/180*(budulqomar1))/
    Math.cos(Math.PI/180*(irtifahilal))));
    }
    
    var siatulmaghribsyams =180/Math.PI*(Math.asin(Math.sin(Math.PI/180
    *(melawal))/Math.cos(Math.PI/180*(nlin))));
    
    var budusimti =simtuirtifa-siatulmaghribsyams;
    
    var siatulmaghribqomar =180/Math.PI*(Math.asin(Math.sin(Math.PI/180*
    (budulqomar1))/Math.cos(Math.PI/180*(nlin))));
    
    var nurulhilal =Math.abs(bm/15)+Math.abs(ardhulqomar/60);
    
    var JI1 = saatijtimahakikiistiwa;
    
    if(JI1>0){
     var JIdr = Math.floor(JI1);
     var JImn = Math.floor((JI1-JIdr)*60);
     var JIdt1 = (((JI1-JIdr)*60)-JImn)*60;
     JIdt = JIdt1.toFixed(2);
    }else{
     var JIdr = Math.ceil(JI1);
     var JImn = Math.abs(Math.ceil((JI1-JIdr)*60));
     var JIdt1 = (((Math.abs(JI1-JIdr))*60)-JImn)*60;
     JIdt = JIdt1.toFixed(2);
    }
    
    var JW1 = saatijtimahakikiwib;
    if(JW1>0){
     var JWdr = Math.floor(JW1);
     var JWmn = Math.floor((JW1-JWdr)*60);
     var JWdt1 = (((JW1-JWdr)*60)-JWmn)*60;
     JWdt = JWdt1.toFixed(2);
    }else{
     var JWdr = Math.ceil(JW1);
     var JWmn = Math.abs(Math.ceil((JW1-JWdr)*60));
     var JWdt1 = (((Math.abs(JW1-JWdr))*60)-JWmn)*60;
     JWdt = JWdt1.toFixed(2);
    }
    var mag1 = mag;
    
    if(mag1>0){
     var magdr = Math.floor(mag1);
     var magmn = Math.floor((mag1-magdr)*60);
     var magdt1 = (((mag1-magdr)*60)-magmn)*60;
     magdt = magdt1.toFixed(2);
    }else{
     var magdr = Math.ceil(mag1);
     var magmn = Math.abs(Math.ceil((mag1-magdr)*60));
     var magdt1 = (((Math.abs(mag1-magdr))*60)-magmn)*60;
     magdt = magdt1.toFixed(2);
    }
    
    var IH1 = irtifahilal;
    
    if(IH1>0){
     var IHdr = Math.floor(IH1);
     var IHmn = Math.floor((IH1-IHdr)*60);
     var IHdt1 = (((IH1-IHdr)*60)-IHmn)*60;
     IHdt = IHdt1.toFixed(2);
    }else{
     var IHdr = Math.ceil(IH1);
     var IHmn = Math.abs(Math.ceil((IH1-IHdr)*60));
     var IHdt1 = (((Math.abs(IH1-IHdr))*60)-IHmn)*60;
     IHdt = IHdt1.toFixed(2);
    }
    var MH1 = muksuhilal;
    
    if(MH1>0){
     var MHdr = Math.floor(MH1);
     var MHmn = Math.floor((MH1-MHdr)*60);
     var MHdt1 = (((MH1-MHdr)*60)-MHmn)*60;
     MHdt = MHdt1.toFixed(2);
    }else{
     var MHdr = Math.ceil(MH1);
     var MHmn = Math.abs(Math.ceil((MH1-MHdr)*60));
     var MHdt1 = (((Math.abs(MH1-MHdr))*60)-MHmn)*60;
     MHdt = MHdt1.toFixed(2);
    }
    
    var BD1 = budusimti;
    
    if(BD1>0){
     var BDdr = Math.floor(BD1);
     var BDmn = Math.floor((BD1-BDdr)*60);
     var BDdt1 = (((BD1-BDdr)*60)-BDmn)*60;
     BDdt = BDdt1.toFixed(2);
    }else{
     var BDdr = Math.ceil(BD1);
     var BDmn = Math.abs(Math.ceil((BD1-BDdr)*60));
     var BDdt1 = (((Math.abs(BD1-BDdr))*60)-BDmn)*60;
     BDdt = BDdt1.toFixed(2);
    }
    
    var arahbeda
    if(budusimti<0){
    arahbeda = "Selatan Matahari";
    }else if(budusimti==0){
    arahbeda = "Tepat Arah Matahari Terbenam";
    }else{
    arahbeda = "Utara Matahari";
    }
    
    var NH = nurulhilal.toFixed(2);
    
    var KeH
    if(budusimti>0.5){
    KeH = "Miring ke Utara";
    }else if(budusimti<(-0.5)){
    KeH = "Miring ke Selatan";
    }else{
    KeH = "Terlentang";
    }
    
    var SMG1 = siatulmaghribqomar;
    
    if(SMG1>0){
     var SMGdr = Math.floor(SMG1);
     var SMGmn = Math.floor((SMG1-SMGdr)*60);
     var SMGdt1 = (((SMG1-SMGdr)*60)-SMGmn)*60;
     SMGdt = SMGdt1.toFixed(2);
    }else{
     var SMGdr = Math.ceil(SMG1);
     var SMGmn = Math.abs(Math.ceil((SMG1-SMGdr)*60));
     var SMGdt1 = (((Math.abs(SMG1-SMGdr))*60)-SMGmn)*60;
     SMGdt = SMGdt1.toFixed(2);
    }
    
    var arahSMG
    if (SMG1<0){
    arahSMG = "Selatan Titik Barat";
    }else if(SMG1==0){
    arahSMG = "Tepat di Arah Barat";
    }else{
    arahSMG = "Utara Titik Barat";
    }
    
    var SMGS1 = siatulmaghribsyams;
    
    if(SMGS1>0){
     var SMGSdr = Math.floor(SMGS1);
     var SMGSmn = Math.floor((SMGS1-SMGSdr)*60);
     var SMGSdt1 = (((SMGS1-SMGSdr)*60)-SMGSmn)*60;
     SMGSdt = SMGSdt1.toFixed(2);
    }else{
     var SMGSdr = Math.ceil(SMGS1);
     var SMGSmn = Math.abs(Math.ceil((SMGS1-SMGSdr)*60));
     var SMGSdt1 = (((Math.abs(SMGS1-SMGSdr))*60)-SMGSmn)*60;
     SMGSdt = SMGSdt1.toFixed(2);
    }
    
    var arahSMGS
    if (SMGS1<0){
    arahSMGS = "Selatan Titik Barat";
    }else if(SMGS1==0){
    arahSMGS = "Tepat di Arah Barat";
    }else{
    arahSMGS = "Utara Titik Barat";
    }
    
    var HT1 = mag+muksuhilal;
    
    if(HT1>0){
     var HTdr = Math.floor(HT1);
     var HTmn = Math.floor((HT1-HTdr)*60);
     var HTdt1 = (((HT1-HTdr)*60)-HTmn)*60;
     HTdt = HTdt1.toFixed(2);
    }else{
     var HTdr = Math.ceil(HT1);
     var HTmn = Math.abs(Math.ceil((HT1-HTdr)*60));
     var HTdt1 = (((Math.abs(HT1-HTdr))*60)-HTmn)*60;
     HTdt = HTdt1.toFixed(2);
    }
     
    //mencari sbmd
    //var sbmd = nbujur-39.82620278;
    
    //loggika sbmd
    var sbmd1
    if (nbujur >0) {
        sbmd1 = Math.abs(nbujur-39.82620278);
    } else if (nbujur <0 && nbujur > -140.1737972) {
        sbmd1 = Math.abs(nbujur)+39.82620278;
    } else if (nbujur <0 && nbujur < -140.1737972) {
        sbmd1 = 360-39.82620278+nbujur;
    } else {
     sbmd1 = 0.0;
    
    }
    
    
    //nilai masing-masing
    var tanlm = Math.tan (21.42250278*Math.PI/180);
    var coslt = Math.cos (nlin*Math.PI/180);
    var sinsbmd = Math.sin (sbmd1*Math.PI/180);
    var sinlt = Math.sin (nlin*Math.PI/180);
    var tansbmd = Math.tan (sbmd1*Math.PI/180);
    //mencari arah
    var arah = Math.atan(tanlm*coslt/sinsbmd-sinlt/tansbmd)*180/Math.PI;
    var arahcot = Math.atan(1/(tanlm*coslt/sinsbmd-sinlt/tansbmd))*180/Math.PI;
    //var azimut = 360-arahcot;
    
    //logika azimuth
    var azimut1
    if (arahcot>0 && nbujur>39.82620278){
     azimut1 = 360-arahcot ;
    } else if (arahcot>0 && nbujur<39.82620278){
     azimut1 = arahcot ;
    } else if (arahcot<0 && nbujur>39.82620278){
     azimut1 = 180-arahcot ;
    } else if (arahcot<0 && nbujur<39.82620278){
     azimut1 = 180+arahcot ;
    } 
    
    
    //memecah dms
    if (arahcot>0){
     var arahdr = Math.floor(arah);
     var arahmn = Math.floor((arah-arahdr)*60);
     var arahdt1 = (((arah-arahdr)*60)-arahmn)*60;
     arahdt = arahdt1.toFixed(2);
     var azimutdr = Math.floor(azimut1);
     var azimutmn = Math.floor((azimut1-azimutdr)*60);
     var azimutdt1 = (((azimut1-azimutdr)*60)-azimutmn)*60;
     azimutdt = azimutdt1.toFixed(2);
     var arahcotdr = Math.floor(arahcot);
     var arahcotmn = Math.floor((arahcot-arahcotdr)*60);
     var arahcotdt1 = (((arahcot-arahcotdr)*60)-arahcotmn)*60;
     arahcotdt = arahcotdt1.toFixed(2);
    } else {
     var arahdr = Math.ceil(arah);
     var arahmn = Math.abs(Math.ceil((arah-arahdr)*60));
     var arahdt1 = (((Math.abs(arah-arahdr))*60)-arahmn)*60;
     arahdt = arahdt1.toFixed(2);
     var azimutdr = Math.ceil(azimut1);
     var azimutmn = Math.abs(Math.ceil((azimut1-azimutdr)*60));
     var azimutdt1 = (((Math.abs(azimut1-azimutdr))*60)-azimutmn)*60;
     azimutdt = azimutdt1.toFixed(2);
     var arahcotdr = Math.ceil(arahcot);
     var arahcotmn = Math.abs(Math.ceil((arahcot-arahcotdr)*60));
     var arahcotdt1 = (((Math.abs(arahcot-arahcotdr))*60)-arahcotmn)*60;
     arahcotdt = arahcotdt1.toFixed(2);
    }
    
    
    // //menampilkan arah
    // var hasil0a = document.getElementById("container0a");
    // var hasil0 = document.getElementById("container0");
    // var hasil1 = document.getElementById("container1");
    // var hasil2 = document.getElementById("container2");
    // var hasil3 = document.getElementById("container3");
    // var hasil4 = document.getElementById("container4");
    // var hasil5 = document.getElementById("container5");
    // var hasil6 = document.getElementById("container6");
    // var hasil7 = document.getElementById("container7");
    // var hasil8 = document.getElementById("container8");
    // var hasil9 = document.getElementById("container9");
    // var hasil10 = document.getElementById("container10");
    // var hasil11 = document.getElementById("container11");
    // var hasil12 = document.getElementById("container12");
    // var hasil13 = document.getElementById("container13");
    // var hasil14 = document.getElementById("container14");
    // var hasil15 = document.getElementById("container15");
    // var hasil16 = document.getElementById("container16");
    // var hasil17 = document.getElementById("container17");
    // var hasil18 = document.getElementById("container18");
    // var hasil19 = document.getElementById("container19");
    // var hasil20 = document.getElementById("container20");
    
    // hasil0a.innerHTML = "Hisab Awal Bulan "+namabulan+" "+nthn+" H.";
    // hasil0.innerHTML = "Ijtima' Jatuh Pada &nbsp&nbsp :"; 
    // hasil1.innerHTML = "Hari &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: " +hariijtima3 +" "+namapasaran+", "+tanggal+" "+namabulanmas+" "+tahunberjalan;
    // hasil2.innerHTML = "Jam&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: " + JIdr+" : "+JImn+" : "+JIdt+" Istiwa' atau "+JWdr+" : "+JWmn+" : "+JWdt+" WIB";
    // hasil3.innerHTML = "Kondisi Matahari dan Hilal Malam "+harimalam2+" : ";
    // hasil4.innerHTML = "Maghrib&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: "+magdr+" : "+magmn+" : "+magdt+" WIB";
    // hasil5.innerHTML = "Matahari Terbenam &nbsp: "+SMGSdr+"&deg "+SMGSmn+"' "+SMGSdt+"'' "+arahSMGS;
    // hasil6.innerHTML = "Tinggi Hilal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: " + IHdr +"&deg "+IHmn+"' "+IHdt+"'' ";
    // hasil7.innerHTML = "Lama Hilal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: " + MHdr +" Jam "+MHmn+" Menit "+MHdt+" Detik";
    // hasil8.innerHTML = "Letak Hilal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: "+BDdr+"&deg "+BDmn+"' "+BDdt+"'' "+arahbeda ;
    // hasil9.innerHTML = "Nurul Hilal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: "+ NH +" Jari";
    // hasil10.innerHTML = "Keadaan Hilal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: " + KeH;
    // hasil11.innerHTML = "Hilal Terbenam&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: "+SMGdr+"&deg "+SMGmn+"' "+SMGdt+"'' "+arahSMG; ;
    // hasil12.innerHTML = "Jam Hilal Terbenam : " + HTdr+" : "+HTmn +" : "+HTdt+" WIB";
    // }

    document.querySelector("#hasil").innerHTML = `
    <div class="row">
        <div class="col-full">
            <h3 style="margin-bottom: 0">Hisab Awal Bulan ${namabulan+" "+nthn} H.</h3>
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
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${hariijtima3+" "+namapasaran+", "+tanggal+" "+namabulanmas+" "+tahunberjalan}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Jam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${JIdr+":"+JImn+":"+JIdt+" Istiwa' atau "+JWdr+":"+JWmn+":"+JWdt+" WIB"}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-full">
            <h3 style="margin-top: 3rem">Kondisi Matahari dan Hilal pada Malam ${harimalam2}</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Maghrib</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${magdr+":"+magmn+":"+magdt+" WIB"}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Matahari Terbenam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${SMGSdr+"&deg "+SMGSmn+"' "+SMGSdt+"'' "+arahSMGS}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Tinggi Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${IHdr +"&deg "+IHmn+"' "+IHdt+"'' "}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Lama Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${MHdr +" Jam "+MHmn+" Menit "+MHdt+" Detik"}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Letak Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${BDdr+"&deg "+BDmn+"' "+BDdt+"'' "+arahbeda}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Nurul Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${NH +" Jari"}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Keadaan Hilal</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${KeH}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Hilal Terbenam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${SMGdr+"&deg "+SMGmn+"' "+SMGdt+"'' "+arahSMG}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">Jam Hilal Terbenam</p>
        </div>
        <div class="col-8">
            <p class="lead" style="color: #000; margin-bottom: 0.5rem">: ${HTdr+":"+HTmn +":"+HTdt+" WIB"}</p>
        </div>
    </div>
    `
});

reset.addEventListener("click", ()=>{
    document.querySelector("#hasil").innerHTML      = "";
    document.querySelector("#lintangDerajat").value = "";
    document.querySelector("#lintangMenit").value   = "";
    document.querySelector("#lintangDetik").value   = "";
    document.querySelector("#bujurDerajat").value   = "";
    document.querySelector("#bujurMenit").value     = "";
    document.querySelector("#bujurDetik").value     = "";
    document.querySelector("#tahun").value          = "";
});