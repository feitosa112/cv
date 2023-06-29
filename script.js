$(document.createElement('div')).appendTo('body').addClass('naslov');
$(document.createElement('h1')).appendTo('.naslov').addClass('ime');
$('.ime').text('Kuzmanovic Sinisa');

/*KREIRANJE NASLOVA-IMENA */



$('#jezici').hide();
$('.podaci1').hide();
$('#obrazovanje').hide();


$(document.createElement('div')).appendTo('body').addClass('wrapp');

$(document.createElement('div')).appendTo('.wrapp').addClass('lijevi');
$(document.createElement('div')).appendTo('.wrapp').addClass('srednji');
$(document.createElement('div')).appendTo('.wrapp').addClass('desni');


$('#pocetna1').appendTo('.lijevi')


$(document.createElement('div')).appendTo('.srednji').addClass('info');
$('.info').attr('id','osnovne_info');

$(document.createElement('p')).appendTo('.info').addClass('lista').attr('id','osnovneInformacije');
$('#osnovneInformacije').text('OSNOVNE INFORMACIJE');
$('#osnovneInformacije').click(function(){
    $('#pocetna1').hide();
    $('#obrazovanje').hide();
    $('#jezici').hide();
    $('.podaci1').appendTo('.lijevi').slideDown('slow');
    
})


$(document.createElement('p')).appendTo('.info').addClass('lista').attr('id','obrazovanje1');
$('#obrazovanje1').text('OBRAZOVANJE');
$('#obrazovanje1').click(function(){
    $('#pocetna1').hide();
    $('.podaci1').hide();
    $('#jezici').hide();
    $('#obrazovanje').appendTo('.lijevi').slideDown('slow');
    
})

$(document.createElement('p')).appendTo('.info').addClass('lista').attr('id','jezici1');
$('#jezici1').text('JEZICI');
$('#jezici1').click(function(){
    $('#pocetna1').hide();
    $('.podaci1').hide();
    $('#obrazovanje').hide();
    $('#jezici').appendTo('.lijevi').fadeIn('slow');

})


$(document.createElement('p')).appendTo('.info').addClass('lista').attr('id','pocetna');
$('#pocetna').text('VRATI NA POCETNU');
$('#pocetna').click(function(){
   location = "index.html"
})






/*ZAVRSEN SREDNJI STUPAC */


/*POCINJE DESNI*/

$('#wrapp1').appendTo('.desni');

var current=document.getElementById('current');
var slike=document.getElementsByClassName('second');

for(var i=0;i<slike.length;i++){
    slike[i].addEventListener('click',display);
}
function display(){
    var sl=this.getAttribute('src');
    current.setAttribute('src',sl);
}

/* U nastavku je animacija teksta u uvodu */

var ime=document.getElementById('uvod').innerHTML;
    var ime1=ime.split('');
    var g=document.getElementById('g');
    var q;
    function start(){
        if(ime1.length>0){
            g.innerHTML+=ime1.shift();
            q=setTimeout(start,50);
        }
    }start();

    var ime3=document.getElementById('uvod2').innerHTML;
    var ime4=ime3.split('');
    var d=document.getElementById('d');
    var w;
    function start1(){
        if(ime4.length>0){
            d.innerHTML+=ime4.shift();
            w=setTimeout(start1,50);


        }
    }        setInterval("start1()",10000)


/* funkcija za vrijeme,sat */

    function vreme(){
        time = new Date()
        cas=time.getHours()
        minuti=time.getMinutes()
        sekunde=time.getSeconds()
        temp = "" + ((cas>12)?cas-12:cas)
        temp += ((minuti<10)?":0":":")+minuti
        temp += ((sekunde<10)?":0":":")+sekunde
        temp += ((cas>=12)?" P.M.":" A.M.")
        document.vremeForma.cifre.value=temp
        setTimeout("vreme()",1000);
    }


