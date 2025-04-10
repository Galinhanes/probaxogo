var personaxe = document.getElementById("personaxe");
var personaxepaso1=document.getElementById("personaxepaso1");
var personaxeneutral=document.getElementById("personaxeneutral");
var personaxepaso2=document.getElementById("personaxepaso2");
var personaxemorto=document.getElementById("personaxemorto");
var proxectil=document.getElementById("proxectil");
var morriches=document.getElementById("morriches");
var victoria=document.getElementById("victoria")
var obxeto1=document.getElementById("obxeto1");
var obxeto2=document.getElementById("obxeto2");
var obxeto3=document.getElementById("obxeto3");
var obxeto4=document.getElementById("obxeto4");
var obxeto5=document.getElementById("obxeto5");
var obxeto6=document.getElementById("obxeto6");
var dereita = document.getElementById("dereita");
var abaixo = document.getElementById("abaixo");
var esquerda = document.getElementById("esquerda");
var arriba= document.getElementById("arriba");
var skin=document.getElementById("skin");
var reset=document.getElementById("reset");
var lume=document.getElementById("lume");
var voar=document.getElementById("voar");
var inimigo1=document.getElementById("inimigo1");
var inimigo2=document.getElementById("inimigo2");
var inimigo3=document.getElementById("inimigo3");
var inimigo4=document.getElementById("inimigo4");
var inimigo5=document.getElementById("inimigo5");
var maxiaportal=document.getElementById("maxiaportal");
var personaxevoador=document.getElementById("personaxevoador");
var voadorqeimado=document.getElementById("voadorqueimado");
var tentaculosqueimados1=document.getElementById("tentaculosqueimados1");
var tentaculosqueimados2=document.getElementById("tentaculosqueimados2");
var tentaculosqueimados3=document.getElementById("tentaculosqueimados3");
var tentaculosqueimados4=document.getElementById("tentaculosqueimados4");
var posicion0 = 0 + "%";
var posicion1 = 10 + "%";
var posicion2 = 20 + "%";
var posicion3 = 30 + "%";
var posicion4 = 40 + "%";
var posicion5 = 50 + "%";
var posicion6 = 60 + "%";
var posicion7 = 70 + "%";
var posicion8 = 80 + "%";
var posicion9 = 90 + "%";
var sondispararlume=document.getElementById("dispararlume");
var sonqueimar=document.getElementById("queimar");
var sonpasoarea=document.getElementById("pasoarea");
var sonportal=document.getElementById("portal");
var sonpasoauga=document.getElementById("pasosauga");
var soncaida=document.getElementById("caida");
var sonrecoller=document.getElementById("recoller");
var sonmortebyinimigo=document.getElementById("mortebyinimigo");


var clickCount = 0;
var clickCount2 = 0;
var clickCount3 =0;
var clickCount4 =0;
var clickCount5=0;
var clickCountVoar=3;

function finpartida(){
    morriches.style.display=("block");
    personaxe.style.display=("none");
}
//obstáculos
dereita.addEventListener('click',function(){
    obstaculosdereita()
})
function obstaculosdereita(){
    if(clickCount==2 && clickCount2==1){clickCount--}
    if(clickCount==7 && clickCount2==2){clickCount--}
    if(clickCount==4 && clickCount2==4){clickCount--}
    if(clickCount==0 && clickCount2==5){clickCount--}
    if(clickCount==6 && clickCount2==5){clickCount--}
    
}
esquerda.addEventListener('click',function(){
    obstaculosesquerda()
})
function obstaculosesquerda(){
    if(clickCount==4 && clickCount2==1){clickCount++}
    if(clickCount==9 && clickCount2==2){clickCount++}
    if(clickCount==6 && clickCount2==4){clickCount++}
    if(clickCount==2 && clickCount2==5){clickCount++}
    if(clickCount==8 && clickCount2==5){clickCount++}
}
abaixo.addEventListener('click',function(){
    obstaculoabaixo()
})

function obstaculoabaixo(){
    if(clickCount==3 && clickCount2==0){clickCount2--}
    if(clickCount==8 && clickCount2==1){clickCount2--}
    if(clickCount==5 && clickCount2==3){clickCount2--}
    if(clickCount==1 && clickCount2==4){clickCount2--}
    if(clickCount==7 && clickCount2==4){clickCount2--}
        
}
arriba.addEventListener('click',function(){
    obstaculoarriba()
})
function obstaculoarriba(){
    if(clickCount==3 && clickCount2==2){clickCount2++}
    if(clickCount==8 && clickCount2==3){clickCount2++}
    if(clickCount==5 && clickCount2==5){clickCount2++}
    if(clickCount==1 && clickCount2==6){clickCount2++}
    if(clickCount==7 && clickCount2==6){clickCount2++}
}
//programar pasos na auga
dereita.addEventListener("click",function(){
    if(personaxe.classList.contains("apatita")){
    sonpasos()}
})
esquerda.addEventListener("click",function(){
    if(personaxe.classList.contains("apatita")){
        sonpasos()}
})
arriba.addEventListener("click",function(){
    if(personaxe.classList.contains("apatita")){
        sonpasos()}
})
abaixo.addEventListener("click",function(){
    if(personaxe.classList.contains("apatita")){
        sonpasos()}
})
function sonpasos(){
    if(clickCount==3 && clickCount2==2){sonpasoauga.play()}
    else if(clickCount==2 && clickCount2==3){sonpasoauga.play()}
    else if(clickCount==3 && clickCount2==3){sonpasoauga.play()}
    else if(clickCount==2 && clickCount2==4){sonpasoauga.play()}
    else if(clickCount==3 && clickCount2==4){sonpasoauga.play()}
    else if(clickCount==7 && clickCount2==1){sonpasoauga.play()}
    else if(clickCount==6 && clickCount2==2){sonpasoauga.play()}
    else if(clickCount==7 && clickCount2==2){sonpasoauga.play()}
    else if(clickCount==6 && clickCount2==3){sonpasoauga.play()}
    else if(clickCount==7 && clickCount2==3){sonpasoauga.play()}
    else if(clickCount==1 && clickCount2==6){sonpasoauga.play()}
    else if(clickCount==2 && clickCount2==6){sonpasoauga.play()}
    else if(clickCount==3 && clickCount2==6){sonpasoauga.play()}
    else if(clickCount==1 && clickCount2==7){sonpasoauga.play()}
    else if(clickCount==2 && clickCount2==7){sonpasoauga.play()}
    else if(clickCount==3 && clickCount2==7){sonpasoauga.play()}
    else if(clickCount==2 && clickCount2==8){sonpasoauga.play()}
    else if(clickCount==7 && clickCount2==7){sonpasoauga.play()}
    else if(clickCount==8 && clickCount2==7){sonpasoauga.play()}
    else if(clickCount==7 && clickCount2==8){sonpasoauga.play()}
    else if(clickCount==8 && clickCount2==8){sonpasoauga.play()}
    else if(clickCount==9 && clickCount2==8){sonpasoauga.play()}
    else if(clickCount==8 && clickCount2==9){sonpasoauga.play()}
   
    else{sonpasoarea.volume=1;sonpasoarea.play()}


}
//programar movemento
dereita.addEventListener('click',function(){
    andardereita()
})

 function andardereita() {
    personaxe.style.rotate=("0deg")
    clickCount++;
    
    if (clickCount == 0 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion0) } else if
        (clickCount == 1 && personaxe.classList.contains("vivo") ) { personaxe.style.left = (posicion1) }
    else if (clickCount == 2 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion2) }
    else if (clickCount == 3 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion3)}
    else if (clickCount == 4 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion4) }
    else if (clickCount == 5 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion5) }
    else if (clickCount == 6 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion6) }
    else if (clickCount == 7 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion7) }
    else if (clickCount == 8 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion8) }
    else if (clickCount == 9 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion9) }
    else if (clickCount == 10 && personaxe.classList.contains("vivo")) { clickCount = 9 }
    
    
}
esquerda.addEventListener('click',function(){
    andaresquerda()
})

 function andaresquerda() {
    personaxe.style.rotate=("180deg")
    clickCount--;
    
    if (clickCount == 0 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion0) } else if
        (clickCount == 1 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion1) }
    else if (clickCount == 2 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion2) }
    else if (clickCount == 3 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion3) }
    else if (clickCount == 4 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion4) }
    else if (clickCount == 5 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion5) }
    else if (clickCount == 6 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion6) }
    else if (clickCount == 7 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion7) }
    else if (clickCount == 8 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion8) }
    else if (clickCount == 9 && personaxe.classList.contains("vivo")) { personaxe.style.left = (posicion9) }
    else if (clickCount == -1 && personaxe.classList.contains("vivo")) { clickCount = 0 }
}
abaixo.addEventListener('click',function(){
    andarabaixo()
})

function andarabaixo() {
    personaxe.style.rotate=("90deg")
    clickCount2++;
    
    if (clickCount2 == 0 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion0) }
    else if (clickCount2 == 1 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion1) }
    else if (clickCount2 == 2 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion2) }
    else if (clickCount2 == 3 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion3) }
    else if (clickCount2 == 4 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion4) }
    else if (clickCount2 == 5 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion5) }
    else if (clickCount2 == 6 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion6) }
    else if (clickCount2 == 7 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion7) }
    else if (clickCount2 == 8 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion8) }
    else if (clickCount2 == 9 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion9) }
    else if (clickCount2 == 10 && personaxe.classList.contains("vivo")) { clickCount2 = 9 }
}

arriba.addEventListener('click', function () {
    andararriba()
})
function andararriba() {
    personaxe.style.rotate=("-90deg")
    clickCount2--;
    
    if (clickCount2 == 0 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion0) }
    else if (clickCount2 == 1 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion1) }
    else if (clickCount2 == 2 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion2) }
    else if (clickCount2 == 3 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion3) }
    else if (clickCount2 == 4 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion4) }
    else if (clickCount2 == 5 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion5) }
    else if (clickCount2 == 6 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion6) }
    else if (clickCount2 == 7 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion7) }
    else if (clickCount2 == 8 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion8) }
    else if (clickCount2 == 9 && personaxe.classList.contains("vivo")) { personaxe.style.top = (posicion9) }
    else if (clickCount2 == -1 && personaxe.classList.contains("vivo")) { clickCount2 = 0 }
}

//programar caer
dereita.addEventListener("click",function(){
    caer()
})
dereita.addEventListener("click",function(){
    caer()
})
dereita.addEventListener("click",function(){
    caer()
})
dereita.addEventListener("click",function(){
    caer()
})
personaxe.addEventListener("transitionend",function(){
    caer()
})
function caer(){
    if(personaxe.classList.contains("apatita")&& clickCount==5 && clickCount2==8){personaxe.classList.remove("vivo");soncaida.play(); personaxepaso1.style.scale=("0.5");personaxeneutral.style.scale=("0.5");personaxepaso2.style.scale=("0.5"); setTimeout(finpartida, 1000, this.style)}
    if(personaxe.classList.contains("apatita")&& clickCount==4 && clickCount2==9){personaxe.classList.remove("vivo");soncaida.play(); personaxepaso1.style.scale=("0.5");personaxeneutral.style.scale=("0.5");personaxepaso2.style.scale=("0.5");setTimeout(finpartida, 1000, this.style)}
    if(personaxe.classList.contains("apatita")&& clickCount==5 && clickCount2==9){personaxe.classList.remove("vivo");soncaida.play(); personaxepaso1.style.scale=("0.5");personaxeneutral.style.scale=("0.5");personaxepaso2.style.scale=("0.5");setTimeout(finpartida, 1000, this.style)}
}

//programar puntuación

var puntuacion=document.getElementById("puntuacion")
function sumarpuntuación1(){
    puntuacion.innerHTML++;
}
esquerda.addEventListener("click",function(){recollerxema()})
dereita.addEventListener("click",function(){recollerxema()})
abaixo.addEventListener("click",function(){recollerxema()})
arriba.addEventListener("click",function(){recollerxema()})

function recollerxema(){
        if(clickCount==2 && clickCount2==2 && obxeto1.classList.contains("senrecoller")){sumarpuntuación1()}
        if(clickCount==8 && clickCount2==1 && obxeto2.classList.contains("senrecoller")){sumarpuntuación1()}
if(clickCount==5 && clickCount2==5 && obxeto3.classList.contains("senrecoller")){sumarpuntuación1()}
if(clickCount==1 && clickCount2==9 && obxeto4.classList.contains("senrecoller")){sumarpuntuación1()}
if(clickCount==9 && clickCount2==7 && obxeto5.classList.contains("senrecoller")){sumarpuntuación1()}
if(clickCount==3 && clickCount2==6 && obxeto6.classList.contains("senrecoller")){sumarpuntuación1()}}



//programar victoria
function activarportal(){
    if(maxiaportal.classList.contains("portalinactivo")){
    maxiaportal.style.opacity=("100%");
    maxiaportal.classList.remove("portalinactivo");
    maxiaportal.classList.add("portalactivo");
   sonportal.play()}

}

function victoriacartel(){
    victoria.style.display=("block");
  
}

esquerda.addEventListener("click",function(){executarvictoria()})
dereita.addEventListener("click",function(){executarvictoria()})
abaixo.addEventListener("click",function(){executarvictoria()})
arriba.addEventListener("click",function(){executarvictoria()})

function executarvictoria(){
    if(puntuacion.innerHTML==6){setTimeout(activarportal, 500, this.style);}
  
  }

esquerda.addEventListener("click",function(){entrarportal()})
dereita.addEventListener("click",function(){entrarportal()})
abaixo.addEventListener("click",function(){entrarportal()})
arriba.addEventListener("click",function(){entrarportal()})

function entrarportal(){
    if(clickCount==5 && clickCount2==1 && maxiaportal.classList.contains("portalactivo")){personaxe.classList.remove("vivo"); setTimeout(victoriacartel, 1000, this.style)}
  }




//programar interaccions con elementos tesos

esquerda.addEventListener("click",function(){interactuarconestaticos()})
dereita.addEventListener("click",function(){interactuarconestaticos()})
abaixo.addEventListener("click",function(){interactuarconestaticos()})
arriba.addEventListener("click",function(){interactuarconestaticos()})

function interactuarconestaticos(){
 if(clickCount==2 && clickCount2==2 && obxeto1.classList.contains("senrecoller")){sonrecoller.play(); obxeto1.style.opacity=("0%");obxeto1.classList.remove("senrecoller")}
if(clickCount==8 && clickCount2==1  && obxeto2.classList.contains("senrecoller")){sonrecoller.play(); obxeto2.style.opacity=("0%");obxeto2.classList.remove("senrecoller")}
if(clickCount==5 && clickCount2==5  && obxeto3.classList.contains("senrecoller")){sonrecoller.play(); obxeto3.style.opacity=("0%");obxeto3.classList.remove("senrecoller")}
if(clickCount==1 && clickCount2==9  && obxeto4.classList.contains("senrecoller")){sonrecoller.play(); obxeto4.style.opacity=("0%");obxeto4.classList.remove("senrecoller")}
if(clickCount==9 && clickCount2==7  && obxeto5.classList.contains("senrecoller")){sonrecoller.play(); obxeto5.style.opacity=("0%");obxeto5.classList.remove("senrecoller")}
if(clickCount==3 && clickCount2==6  && obxeto6.classList.contains("senrecoller")){sonrecoller.play(); obxeto6.style.opacity=("0%");obxeto6.classList.remove("senrecoller")}
if(clickCount==3 && clickCount2==3 &&inimigo1.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(clickCount==7 && clickCount2==2  && inimigo2.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(clickCount==2 && clickCount2==7  && inimigo3.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(clickCount==8 && clickCount2==8 && inimigo4.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
}

//programar contoneo personaxe


function paso1(){
    personaxepaso1.style.opacity=("100%");
    personaxeneutral.style.opacity=("0%");
    personaxepaso2.style.opacity=("0%")
}
function pasoneutral(){
    personaxepaso1.style.opacity=("0%");
    personaxeneutral.style.opacity=("100%");
    personaxepaso2.style.opacity=("0%")
}
function paso2(){
    personaxepaso1.style.opacity=("0%");
    personaxeneutral.style.opacity=("0%");
    personaxepaso2.style.opacity=("100%")
}

dereita.addEventListener('click',function(){
    pasoeixox()
})
esquerda.addEventListener('click',function(){
    pasoeixox()
})
function pasoeixox(){
   if(clickCount%2!==0){setTimeout(paso1, 20, this.style);
    setTimeout(pasoneutral, 100, this.style);
    setTimeout(paso2, 200, this.style);}if(clickCount%2===0){setTimeout(paso2, 20, this.style);
        setTimeout(pasoneutral, 100, this.style);
        setTimeout(paso1, 200, this.style);}

}
arriba.addEventListener('click',function(){
    pasoeixoy()
})
abaixo.addEventListener('click',function(){
    pasoeixoy()
})
 

function pasoeixoy(){
    if(clickCount2%2!==0){setTimeout(paso1, 20, this.style);
        setTimeout(pasoneutral, 100, this.style);
        setTimeout(paso2, 200, this.style);}if(clickCount2%2===0){setTimeout(paso2, 20, this.style);
            setTimeout(pasoneutral, 100, this.style);
            setTimeout(paso1, 200, this.style);}
 
 }
 


//programar inimigo movil

function posicion1inimigo5(){
    inimigo5.style.left=("40%");
   inimigo5.classList.add("posicion1");
   inimigo5.classList.remove("posicion2");
   inimigo5.classList.remove("posicion3");

}
function posicion2inimigo5(){
    inimigo5.style.left=("50%");
    inimigo5.classList.remove("posicion1");
    inimigo5.classList.add("posicion2");
    inimigo5.classList.remove("posicion3");
}
function posicion3inimigo5(){
    inimigo5.style.left=("60%");
    inimigo5.classList.remove("posicion1");
    inimigo5.classList.remove("posicion2");
    inimigo5.classList.add("posicion3");
}
function patroninimigo5(){
    posicion1inimigo5();
        setTimeout(posicion2inimigo5, 2000, this.style);
        setTimeout(posicion3inimigo5, 3000, this.style);
        setTimeout(posicion2inimigo5, 4000, this.style);
        setTimeout(posicion1inimigo5, 5000, this.style);
        setTimeout(posicion2inimigo5, 6000, this.style);
        setTimeout(posicion3inimigo5, 7000, this.style);
        setTimeout(posicion2inimigo5, 8000, this.style);
        setTimeout(posicion1inimigo5, 10000, this.style);
        setTimeout(posicion2inimigo5, 11000, this.style);
        setTimeout(posicion3inimigo5, 13000, this.style);
        setTimeout(posicion2inimigo5, 14000, this.style);
        setTimeout(posicion1inimigo5, 15000, this.style);
        setTimeout(posicion2inimigo5, 16000, this.style);
        setTimeout(posicion3inimigo5, 19000, this.style);
        setTimeout(posicion2inimigo5, 20000, this.style);
        setTimeout(posicion1inimigo5, 21000, this.style);
        setTimeout(posicion2inimigo5, 23000, this.style);
        setTimeout(posicion3inimigo5, 25000, this.style);
        setTimeout(posicion2inimigo5, 26000, this.style);
}
personaxe.addEventListener('transitionstart',function(){
    if(clickCount==1 && clickCount2==0)
    {patroninimigo5();  setTimeout(patroninimigo5, 27000, this.style);setTimeout(patroninimigo5, 55000, this.style)}
       
    
})
//engadir clases de posicion ó personaxe
dereita.addEventListener('click',function(){
    interactuarinimigomovil1()
})
esquerda.addEventListener('click',function(){
    interactuarinimigomovil1()
})
arriba.addEventListener('click',function(){
    interactuarinimigomovil1()
})
abaixo.addEventListener('click',function(){
    interactuarinimigomovil1()
})

function interactuarinimigomovil1(){
    if(clickCount==4 && clickCount2==6){personaxe.classList.add("posicion1")}
    else{personaxe.classList.remove("posicion1")}
}

dereita.addEventListener('click',function(){
    interactuarinimigomovil2()
})
esquerda.addEventListener('click',function(){
    interactuarinimigomovil2()
})
arriba.addEventListener('click',function(){
    interactuarinimigomovil2()
})
abaixo.addEventListener('click',function(){
    interactuarinimigomovil2()
})

function interactuarinimigomovil2(){
    if(clickCount==5 && clickCount2==6){personaxe.classList.add("posicion2")}
    else{personaxe.classList.remove("posicion2")}
}
dereita.addEventListener('click',function(){
    interactuarinimigomovil3()
})
esquerda.addEventListener('click',function(){
    interactuarinimigomovil3()
})
arriba.addEventListener('click',function(){
    interactuarinimigomovil3()
})
abaixo.addEventListener('click',function(){
    interactuarinimigomovil3()
})


function interactuarinimigomovil3(){
    if(clickCount==6 && clickCount2==6){personaxe.classList.add("posicion3")}
    else{personaxe.classList.remove("posicion3")}
}


//determinar a igualdade de clases entre personaxe e inimigo
inimigo5.addEventListener("transitionend",function(){
if(personaxe.classList.contains("posicion1")&&inimigo5.classList.contains("posicion1")&& inimigo5.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(personaxe.classList.contains("posicion2")&&inimigo5.classList.contains("posicion2")&& inimigo5.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(personaxe.classList.contains("posicion3")&&inimigo5.classList.contains("posicion3")&& inimigo5.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
})
dereita.addEventListener('click',function(){
    morrercontrainimigomovil()
})
esquerda.addEventListener('click',function(){
    morrercontrainimigomovil()
})
arriba.addEventListener('click',function(){
    morrercontrainimigomovil()
})
abaixo.addEventListener('click',function(){
    morrercontrainimigomovil()
})
function morrercontrainimigomovil(){
if(personaxe.classList.contains("posicion1")&&inimigo5.classList.contains("posicion1")&& inimigo5.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(personaxe.classList.contains("posicion2")&&inimigo5.classList.contains("posicion2")&& inimigo5.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
if(personaxe.classList.contains("posicion3")&&inimigo5.classList.contains("posicion3")&& inimigo5.classList.contains("vivo")){sonmortebyinimigo.play(); personaxe.classList.remove("vivo"); personaxemorto.style.opacity=("100%");setTimeout(finpartida, 1500, this.style)}
}


//programar proxectil
//obstáculos proxectil
dereita.addEventListener('click',function(){
    obstaculosdereitaprox()
})
function obstaculosdereitaprox(){
    if(clickCount4==2 && clickCount5==1){clickCount4--}
    if(clickCount4==7 && clickCount5==2){clickCount4--}
    if(clickCount4==4 && clickCount5==4){clickCount4--}
    if(clickCount4==0 && clickCount5==5){clickCount4--}
    if(clickCount4==6 && clickCount5==5){clickCount4--}
    
}
esquerda.addEventListener('click',function(){
    obstaculosesquerdaprox()
})
function obstaculosesquerdaprox(){
    if(clickCount4==4 && clickCount5==1){clickCount4++}
    if(clickCount4==9 && clickCount5==2){clickCount4++}
    if(clickCount4==6 && clickCount5==4){clickCount4++}
    if(clickCount4==2 && clickCount5==5){clickCount4++}
    if(clickCount4==8 && clickCount5==5){clickCount4++}
}
abaixo.addEventListener('click',function(){
    obstaculoabaixoprox()
})

function obstaculoabaixoprox(){
    if(clickCount4==3 && clickCount5==0){clickCount5--}
    if(clickCount4==8 && clickCount5==1){clickCount5--}
    if(clickCount4==5 && clickCount5==3){clickCount5--}
    if(clickCount4==1 && clickCount5==4){clickCount5--}
    if(clickCount4==7 && clickCount5==4){clickCount5--}
        
}
arriba.addEventListener('click',function(){
    obstaculoarribaprox()
})
function obstaculoarribaprox(){
    if(clickCount4==3 && clickCount5==2){clickCount5++}
    if(clickCount4==8 && clickCount5==3){clickCount5++}
    if(clickCount4==5 && clickCount5==5){clickCount5++}
    if(clickCount4==1 && clickCount5==6){clickCount5++}
    if(clickCount4==7 && clickCount5==6){clickCount5++}
}
//programar movemento proxectil

dereita.addEventListener('click',function(){
    moverproxectildereita()
})

 function moverproxectildereita() {
    proxectil.classList.remove("proxectilesquerda");
    proxectil.classList.add("proxectildereita");
    proxectil.classList.remove('proxectilabaixo');
    proxectil.classList.remove('proxectilarriba');
    clickCount4++;
    if (clickCount4 == 0) { proxectil.style.left = (posicion0) } else if
        (clickCount4 == 1) { proxectil.style.left = (posicion1) }
    else if (clickCount4 == 2) { proxectil.style.left = (posicion2) }
    else if (clickCount4 == 3) { proxectil.style.left = (posicion3)}
    else if (clickCount4 == 4) { proxectil.style.left = (posicion4) }
    else if (clickCount4 == 5) { proxectil.style.left = (posicion5) }
    else if (clickCount4 == 6) { proxectil.style.left = (posicion6) }
    else if (clickCount4 == 7) { proxectil.style.left = (posicion7) }
    else if (clickCount4 == 8) { proxectil.style.left = (posicion8) }
    else if (clickCount4 == 9) { proxectil.style.left = (posicion9) }
    else if (clickCount4 == 10) { clickCount4 = 9 }
}
esquerda.addEventListener('click',function(){
    moverproxectilesquerda()
})
 function moverproxectilesquerda() {
    proxectil.classList.add("proxectilesquerda");
    proxectil.classList.remove("proxectildereita");
    proxectil.classList.remove('proxectilabaixo');
    proxectil.classList.remove('proxectilarriba');
    clickCount4--;
    if (clickCount4 == 0) { proxectil.style.left = (posicion0) } else if
        (clickCount4 == 1) { proxectil.style.left = (posicion1) }
    else if (clickCount4 == 2) { proxectil.style.left = (posicion2) }
    else if (clickCount4 == 3) { proxectil.style.left = (posicion3) }
    else if (clickCount4 == 4) { proxectil.style.left = (posicion4) }
    else if (clickCount4 == 5) { proxectil.style.left = (posicion5) }
    else if (clickCount4 == 6) { proxectil.style.left = (posicion6) }
    else if (clickCount4 == 7) { proxectil.style.left = (posicion7) }
    else if (clickCount4 == 8) { proxectil.style.left = (posicion8) }
    else if (clickCount4 == 9) { proxectil.style.left = (posicion9) }
    else if (clickCount4 == -1) { clickCount4 = 0 }
}

abaixo.addEventListener('click',function(){
    moverproxectilabaixo()
})

function moverproxectilabaixo() {
    proxectil.classList.remove("proxectilesquerda");
    proxectil.classList.remove("proxectildereita");
    proxectil.classList.add('proxectilabaixo');
    proxectil.classList.remove('proxectilarriba');
    clickCount5++;
    if (clickCount5 == 0) { proxectil.style.top = (posicion0) }
    else if (clickCount5 == 1) { proxectil.style.top = (posicion1) }
    else if (clickCount5 == 2) { proxectil.style.top = (posicion2) }
    else if (clickCount5 == 3) { proxectil.style.top = (posicion3) }
    else if (clickCount5 == 4) { proxectil.style.top = (posicion4) }
    else if (clickCount5 == 5) { proxectil.style.top = (posicion5) }
    else if (clickCount5 == 6) { proxectil.style.top = (posicion6) }
    else if (clickCount5 == 7) { proxectil.style.top = (posicion7) }
    else if (clickCount5 == 8) { proxectil.style.top = (posicion8) }
    else if (clickCount5 == 9) { proxectil.style.top = (posicion9) }
    else if (clickCount5 == 10) { clickCount5 = 9 }
}

arriba.addEventListener('click',function(){
    moverproxectilarriba()
})
 function moverproxectilarriba() {
    proxectil.classList.remove("proxectilesquerda");
    proxectil.classList.remove("proxectildereita");
    proxectil.classList.remove('proxectilabaixo');
    proxectil.classList.add('proxectilarriba');
    clickCount5--;
    if (clickCount5 == 0) { proxectil.style.top = (posicion0) }
    else if (clickCount5 == 1) { proxectil.style.top = (posicion1) }
    else if (clickCount5 == 2) { proxectil.style.top = (posicion2) }
    else if (clickCount5 == 3) { proxectil.style.top = (posicion3) }
    else if (clickCount5 == 4) { proxectil.style.top = (posicion4) }
    else if (clickCount5 == 5) { proxectil.style.top = (posicion5) }
    else if (clickCount5 == 6) { proxectil.style.top = (posicion6) }
    else if (clickCount5 == 7) { proxectil.style.top = (posicion7) }
    else if (clickCount5 == 8) { proxectil.style.top = (posicion8) }
    else if (clickCount5 == 9) { proxectil.style.top = (posicion9) }
    else if (clickCount5 == -1) { clickCount5 = 0 }
}
//disparo obstáculos
lume.addEventListener('click',function(){
    disparoobstaculosdereita()
})
function disparoobstaculosdereita(){
    if(proxectil.classList.contains('proxectildereita') && clickCount4==2 && clickCount5==1){clickCount4--}
    if(proxectil.classList.contains('proxectildereita') && clickCount4==7 && clickCount5==2){clickCount4--}
    if(proxectil.classList.contains('proxectildereita') && clickCount4==4 && clickCount5==4){clickCount4--}
    if(proxectil.classList.contains('proxectildereita') && clickCount4==0 && clickCount5==5){clickCount4--;clickCount4--;clickCount4--;clickCount4--;}
    if(proxectil.classList.contains('proxectildereita') && clickCount4==6 && clickCount5==5){clickCount4--}
    
}
lume.addEventListener('click',function(){
    disparoobstaculosesquerda()
})
function disparoobstaculosesquerda(){
    if(proxectil.classList.contains('proxectilesquerda') && clickCount4==4 && clickCount5==1){clickCount4++}
    if(proxectil.classList.contains('proxectilesquerda') && clickCount4==9 && clickCount5==2){clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++;clickCount4++}
    if(proxectil.classList.contains('proxectilesquerda') && clickCount4==6 && clickCount5==4){clickCount4++}
    if(proxectil.classList.contains('proxectilesquerda') && clickCount4==2 && clickCount5==5){clickCount4++}
    if(proxectil.classList.contains('proxectilesquerda') && clickCount4==8 && clickCount5==5){clickCount4++}
}
lume.addEventListener('click',function(){
    disparoobstaculoabaixo()
})

function disparoobstaculoabaixo(){
    if(proxectil.classList.contains('proxectilabaixo') && clickCount4==3 && clickCount5==0){clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;clickCount5--;}
    if(proxectil.classList.contains('proxectilabaixo') && clickCount4==8 && clickCount5==1){clickCount5--}
    if(proxectil.classList.contains('proxectilabaixo') && clickCount4==5 && clickCount5==3){clickCount5--}
    if(proxectil.classList.contains('proxectilabaixo') && clickCount4==1 && clickCount5==4){clickCount5--}
    if(proxectil.classList.contains('proxectilabaixo') && clickCount4==7 && clickCount5==4){clickCount5--}
        
}
lume.addEventListener('click',function(){
    disparoobstaculoarriba()
})
function disparoobstaculoarriba(){
    if(proxectil.classList.contains('proxectilarriba') && clickCount4==3 && clickCount5==2){clickCount5++}
    if(proxectil.classList.contains('proxectilarriba') && clickCount4==8 && clickCount5==3){clickCount5++}
    if(proxectil.classList.contains('proxectilarriba') && clickCount4==5 && clickCount5==5){clickCount5++}
    if(proxectil.classList.contains('proxectilarriba') && clickCount4==1 && clickCount5==6){clickCount5++}
    if(proxectil.classList.contains('proxectilarriba') && clickCount4==7 && clickCount5==6){clickCount5++}
}
//disparo

function desapariciondisparo(){
    proxectil.classList.remove("proxectilvisible");
    proxectil.classList.add("proxectilinvisible");
}
function finproxectil(){
    proxectil.style.display=("none");
}
lume.addEventListener('click',function(){
    disparodereita()
})
function disparodereita(){
    if( proxectil.classList.contains('proxectildereita')){
    clickCount4++;
    lume.style.backgroundColor=("red");
    }
    if(proxectil.classList.contains("proxectilinvisible")){sondispararlume.play()}
    if (clickCount4 == 0) { proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion0); setTimeout(finproxectil, 1000, this.style) } else if
    (clickCount4 == 1) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion1) ; setTimeout(finproxectil, 1000, this.style)}
else if (clickCount4 == 2) {proxectil.classList.remove("proxectilinvisible"); proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion2); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 3) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion3); setTimeout(finproxectil, 1000, this.style)}
else if (clickCount4 == 4) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion4); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 5) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion5); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 6) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion6); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 7) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion7); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 8) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion8); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 9) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion9); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 10) { clickCount4 = 9 }
}
lume.addEventListener('click',function(){
    disparoesquerda()
})
function disparoesquerda(){
    if( proxectil.classList.contains('proxectilesquerda')){
    clickCount4--;
    indicadorlume.style.backgroundColor=("red");
    }
    if(proxectil.classList.contains("proxectilinvisible")){sondispararlume.play()}
    if (clickCount4 == 0) { proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion0); setTimeout(finproxectil, 1000, this.style) } else if
    (clickCount4 == 1) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion1) ; setTimeout(finproxectil, 1000, this.style)}
else if (clickCount4 == 2) {proxectil.classList.remove("proxectilinvisible"); proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion2); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 3) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion3); setTimeout(finproxectil, 1000, this.style)}
else if (clickCount4 == 4) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion4); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 5) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion5); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 6) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion6); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 7) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion7); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 8) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion8); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == 9) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.left = (posicion9); setTimeout(finproxectil, 1000, this.style) }
else if (clickCount4 == -1) { clickCount4 = 0 }
}
lume.addEventListener('click',function(){
    disparoarriba()
})
function disparoarriba(){
    if( proxectil.classList.contains('proxectilarriba')){
    clickCount5--;
    indicadorlume.style.backgroundColor=("red");
    }
    if(proxectil.classList.contains("proxectilinvisible")){sondispararlume.play()}
    if (clickCount5 == 0) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion0); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 1) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion1); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 2) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion2); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 3) { proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible");proxectil.style.top = (posicion3); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 4) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion4); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 5) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion5); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 6) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion6); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 7) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion7); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 8) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion8); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 9) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion9); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == -1) { clickCount5 = 0 }
}
lume.addEventListener('click',function(){
    disparoabaixo()
})
function disparoabaixo(){
    if( proxectil.classList.contains('proxectilabaixo')){
    clickCount5++;
    indicadorlume.style.backgroundColor=("red");
    }
    if(proxectil.classList.contains("proxectilinvisible")){sondispararlume.play()}
    if (clickCount5 == 0) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion0); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 1) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion1); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 2) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion2); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 3) { proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible");proxectil.style.top = (posicion3); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 4) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion4); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 5) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion5); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 6) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion6); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 7) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion7); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 8) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion8); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 9) {proxectil.classList.remove("proxectilinvisible");proxectil.classList.add("proxectilvisible"); proxectil.style.top = (posicion9); setTimeout(finproxectil, 1000, this.style) }
    else if (clickCount5 == 10) { clickCount5 = 9 }
}

//engadir clases ó proxectil cando estea na posición dos inimigos estáticos
function desintegrarInimigo1(){
    inimigo1.style.opacity=("0%")
}
function desintegrarInimigo2(){
    inimigo2.style.opacity=("0%")
}
function desintegrarInimigo3(){
    inimigo3.style.opacity=("0%")
}
function desintegrarInimigo4(){
    inimigo4.style.opacity=("0%")
}
lume.addEventListener('click',function(){
    acertarinimigosestaticos()
})
function acertarinimigosestaticos(){
    if(clickCount4==3 && clickCount5==3){proxectil.classList.add("dianainimigo1")}
    if(clickCount4==7 && clickCount5==2){proxectil.classList.add("dianainimigo2")}
    if(clickCount4==2 && clickCount5==7){proxectil.classList.add("dianainimigo3")}
    if(clickCount4==8 && clickCount5==8){proxectil.classList.add("dianainimigo4")}
}
lume.addEventListener('click',function(){
    matarinimigosestaticos()
})
function matarinimigosestaticos(){
  if(proxectil.classList.contains("dianainimigo1")  && inimigo1.classList.contains("vivo")){tentaculosqueimados1.style.opacity=("100%");sonqueimar.play(); setTimeout(desintegrarInimigo1, 1000, this.style);inimigo1.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo2")  && inimigo2.classList.contains("vivo")){tentaculosqueimados2.style.opacity=("100%");sonqueimar.play(); setTimeout(desintegrarInimigo2, 1000, this.style);inimigo2.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo3")  && inimigo3.classList.contains("vivo")){tentaculosqueimados3.style.opacity=("100%");sonqueimar.play(); setTimeout(desintegrarInimigo3, 1000, this.style);inimigo3.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo4")  && inimigo4.classList.contains("vivo")){tentaculosqueimados4.style.opacity=("100%");sonqueimar.play(); setTimeout(desintegrarInimigo4, 1000, this.style);inimigo4.classList.remove("vivo")}
}
//comparar clases do proxectil cando acada a do inimigo móvil
function desintegrarInimigo5(){
    inimigo5.style.opacity=("0%")
}
function precisionInimigo5a(){
    proxectil.classList.remove("dianainimigo5a");
}
function precisionInimigo5b(){
    proxectil.classList.remove("dianainimigo5b");
}function precisionInimigo5c(){
    proxectil.classList.remove("dianainimigo5c");
}
lume.addEventListener('click',function(){
    acertarinimigomovil()
})
function acertarinimigomovil(){
    if(clickCount4==4 && clickCount5==6){proxectil.classList.add("dianainimigo5a"); setTimeout(precisionInimigo5a, 1000, this.style)}
    if(clickCount4==5 && clickCount5==6){proxectil.classList.add("dianainimigo5b"); setTimeout(precisionInimigo5b, 1000, this.style)}
    if(clickCount4==6 && clickCount5==6){proxectil.classList.add("dianainimigo5c"); setTimeout(precisionInimigo5c, 1000, this.style)}}
lume.addEventListener('click',function(){
    matarinimigomovil()
})
function matarinimigomovil(){
  if(proxectil.classList.contains("dianainimigo5a")&& proxectil.classList.contains("proxectilvisible") && inimigo5.classList.contains("posicion1") && inimigo5.classList.contains("vivo")){voadorqeimado.style.opacity=("100%");sonqueimar.play();setTimeout(desintegrarInimigo5, 1000, this.style);inimigo5.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo5b") && proxectil.classList.contains("proxectilvisible") && inimigo5.classList.contains("posicion2") && inimigo5.classList.contains("vivo")){voadorqeimado.style.opacity=("100%");sonqueimar.play();setTimeout(desintegrarInimigo5, 1000, this.style);inimigo5.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo5c") && proxectil.classList.contains("proxectilvisible") && inimigo5.classList.contains("posicion3") && inimigo5.classList.contains("vivo")){voadorqeimado.style.opacity=("100%");sonqueimar.play();setTimeout(desintegrarInimigo5, 1000, this.style);inimigo5.classList.remove("vivo")}
}
inimigo5.addEventListener("transitionend",function(){
if(proxectil.classList.contains("dianainimigo5a") &&  proxectil.classList.contains("proxectilvisible") && inimigo5.classList.contains("posicion1") && inimigo5.classList.contains("vivo")){voadorqeimado.style.opacity=("100%");sonqueimar.play();setTimeout(desintegrarInimigo5, 1000, this.style);inimigo5.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo5b") &&  proxectil.classList.contains("proxectilvisible") && inimigo5.classList.contains("posicion2") && inimigo5.classList.contains("vivo")){voadorqeimado.style.opacity=("100%");sonqueimar.play();setTimeout(desintegrarInimigo5, 1000, this.style);inimigo5.classList.remove("vivo")}
  if(proxectil.classList.contains("dianainimigo5c") &&  proxectil.classList.contains("proxectilvisible") && inimigo5.classList.contains("posicion3") && inimigo5.classList.contains("vivo")){voadorqeimado.style.opacity=("100%");sonqueimar.play();setTimeout(desintegrarInimigo5, 1000, this.style);inimigo5.classList.remove("vivo")}

})

//programar voar
function finavoar(){
    personaxevoador.style.opacity=("0%");
    personaxe.classList.add("apatita")
}
function avoar(){
    clickCountVoar--;
    if(clickCountVoar>=0){
    personaxevoador.style.opacity=("100%");
    personaxe.classList.remove("apatita");
    setTimeout(finavoar, 1000, this.style)}
}
function contarvoos(){
    if(clickCountVoar==2){voar.style.backgroundColor=("yellow")}
    else if(clickCountVoar==1){voar.style.backgroundColor=("orange")}
    else if(clickCountVoar==0){voar.style.backgroundColor=("red")}
}
voar.addEventListener('click',function(){
    avoar();
    contarvoos()
})

//programar teclado

document.addEventListener('keydown', function(event) {
   
    if (event.key === 'q' || event.key === 'Q') {
     
        avoar();contarvoos()
    }
    if (event.key === 'w' || event.key === 'W') {
         disparoobstaculoabaixo();disparoobstaculoarriba();disparoobstaculosdereita();disparoobstaculosesquerda();
        disparoabaixo();disparoarriba();disparoesquerda();disparodereita();acertarinimigosestaticos();matarinimigosestaticos();
        acertarinimigomovil();matarinimigomovil();
    }
    if (event.key === 'e' || event.key === 'E') {
     
        cambiarskin();
    }
    if (event.key === 'r' || event.key === 'R') {
     
        resetearnivel();
        
    }
    if (event.key==='ArrowUp'){
        obstaculoarriba();obstaculoarribaprox();caer();
        andararriba();recollerxema();executarvictoria();entrarportal();interactuarconestaticos();pasoeixoy();
        interactuarinimigomovil1();interactuarinimigomovil2();interactuarinimigomovil3();morrercontrainimigomovil();
        moverproxectilarriba();
    }
    if (event.key==='ArrowUp'){if(personaxe.classList.contains("apatita")){
        sonpasos()}}
    if (event.key==='ArrowDown'){
        obstaculoabaixo();obstaculoabaixoprox();caer();
        andarabaixo();recollerxema();executarvictoria();entrarportal();interactuarconestaticos();pasoeixoy();
        interactuarinimigomovil1();interactuarinimigomovil2();interactuarinimigomovil3();morrercontrainimigomovil();
        moverproxectilabaixo();
    }
    if (event.key==='ArrowDown'){if(personaxe.classList.contains("apatita")){
        sonpasos()}}
    if (event.key==='ArrowLeft'){
        obstaculosesquerda();obstaculosesquerdaprox();caer();
        andaresquerda();recollerxema();executarvictoria();entrarportal();interactuarconestaticos();pasoeixox();
        interactuarinimigomovil1();interactuarinimigomovil2();interactuarinimigomovil3();morrercontrainimigomovil();
       moverproxectilesquerda();
    }
    if (event.key==='ArrowLeft'){if(personaxe.classList.contains("apatita")){
        sonpasos()}}
    if (event.key==='ArrowRight'){
        obstaculosdereita();obstaculosdereitaprox();caer();
        andardereita();recollerxema();executarvictoria();entrarportal();interactuarconestaticos();pasoeixox();
        interactuarinimigomovil1();interactuarinimigomovil2();interactuarinimigomovil3();morrercontrainimigomovil();
        moverproxectildereita();
    }
    if (event.key==='ArrowRight'){if(personaxe.classList.contains("apatita")){
        sonpasos()}}

});
//programar botons especiais
 skin.addEventListener('click',function(){
    cambiarskin()
 })
function cambiarskin(){
   clickCount3 ++;
   if(clickCount3==1){personaxe.classList.remove("colorbasico");personaxe.classList.add("color1")}
   if(clickCount3==2){personaxe.classList.remove("color1");personaxe.classList.add("color2")}
   if(clickCount3==3){personaxe.classList.remove("color2");personaxe.classList.add("color3")}
   if(clickCount3==4){personaxe.classList.remove("color3");personaxe.classList.add("color4")}
   if(clickCount3==5){personaxe.classList.remove("color4");personaxe.classList.add("color5")}
   if(clickCount3==6){personaxe.classList.remove("color5");personaxe.classList.add("color6")}
   if(clickCount3==7){personaxe.classList.remove("color6");personaxe.classList.add("color7")}
   if(clickCount3==8){personaxe.classList.remove("color7");personaxe.classList.add("color8")}
   if(clickCount3==9){personaxe.classList.remove("color8");personaxe.classList.add("color9")}
   if(clickCount3==10){personaxe.classList.remove("color9");personaxe.classList.add("colorbásico");clickCount3=0}
   
}
 reset.addEventListener('click',function(){
    resetearnivel();
   
 })
function resetearnivel(){
   clickCount=0;
   clickCount2=0;
   clickCount4=0;
   clickCount5=0;
   clickCountVoar=3;
   personaxe.style.top=(posicion0);
   personaxe.style.left=(posicion0);
   personaxe.style.opacity=("100%");
   personaxe.style.display=("block");
   personaxe.style.rotate=("0deg");
   personaxe.classList.remove("posicion1");
   personaxe.classList.remove("posicion2");
   personaxe.classList.remove("posicion3");
   proxectil.style.top=(posicion0);
   proxectil.style.left=(posicion0);
   proxectil.classList.remove("dianainimigo1");
   inimigo1.classList.add("vivo");
   inimigo1.style.opacity=("100%");
   proxectil.classList.remove("dianainimigo2");
   inimigo2.classList.add("vivo");
   inimigo2.style.opacity=("100%");
   proxectil.classList.remove("dianainimigo3");
   inimigo3.classList.add("vivo");
   inimigo3.style.opacity=("100%");
   proxectil.classList.remove("dianainimigo4");
   inimigo4.classList.add("vivo");
   inimigo4.style.opacity=("100%");
   inimigo5.classList.add("vivo");
   inimigo5.style.opacity=("100%");
   voadorqeimado.style.opacity=("0%");
   tentaculosqueimados1.style.opacity=("0%");
   tentaculosqueimados2.style.opacity=("0%");
   tentaculosqueimados3.style.opacity=("0%");
   tentaculosqueimados4.style.opacity=("0%");
   proxectil.classList.add("proxectilinvisible");
   proxectil.classList.remove("proxectilvisible");
   proxectil.style.display=("block");
   proxectil.classList.remove("proxectilesquerda");
    proxectil.classList.add("proxectildereita");
    proxectil.classList.remove('proxectilabaixo');
    proxectil.classList.remove('proxectilarriba');
   obxeto1.style.opacity=("100%");
   obxeto2.style.opacity=("100%");
   obxeto3.style.opacity=("100%");
   obxeto4.style.opacity=("100%");
   obxeto5.style.opacity=("100%");
   obxeto6.style.opacity=("100%");
   morriches.style.display=("none");
   obxeto1.classList.add("senrecoller");
   obxeto2.classList.add("senrecoller");
   obxeto3.classList.add("senrecoller");
   obxeto4.classList.add("senrecoller");
   obxeto5.classList.add("senrecoller");
   obxeto6.classList.add("senrecoller");
   puntuacion.innerHTML=0;
   maxiaportal.style.opacity=("0%");
   maxiaportal.classList.remove("portalactivo");
   maxiaportal.classList.add("portalinactivo");
   victoria.style.display=("none");
   personaxepaso1.style.scale=("1");
   personaxeneutral.style.scale=("1");
   personaxepaso2.style.scale=("1");
   personaxemorto.style.opacity=("0%");
   personaxe.classList.add("vivo");
   lume.style.backgroundColor=("green");
   voar.style.backgroundColor=("green")
  

}

