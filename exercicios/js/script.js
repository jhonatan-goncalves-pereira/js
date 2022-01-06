let valorEscrever = document.getElementById('elementToAlter');
let buttonIncrement = document.getElementById('buttonIncrement');
let buttonDecrement =document.getElementById('buttonDecrement')
let numberInit = document.getElementById('numberInit');
let numberEnd = document.getElementById('numberEnd');
let valorInit = 0;
    function iniciaContagem(){
        valorEscrever.innerHTML = numberInit.value;
        valorInit = numberInit.value;
        verifySeNegativa();
    }
    function increment(){
            if (valorInit<numberEnd.value){
                valorInit = parseInt(valorInit) + 1;
                valorEscrever.innerHTML = valorInit;   
            }
            verifySeNegativa();
        
    }
    function decrement(){
        if (valorInit >numberInit.value){
            valorInit = valorInit-1
            valorEscrever.innerHTML = valorInit;
            verifySeNegativa();
        }
    }
    function verifySeNegativa(){
        if (valorInit<0){
            valorEscrever.style.color = 'red'
        }
        if(valorInit>=0){
            valorEscrever.style.color = 'white';
        }
    }
numberInit.addEventListener('mouseout',iniciaContagem);
numberInit.addEventListener('click',iniciaContagem);
buttonIncrement.addEventListener('click',increment)
buttonDecrement.addEventListener('click',decrement)