let valueToDoInputText = document.getElementById('valorToDoInput');
let btnSalvar = document.getElementById('btnSalvar');
let addChk = document.getElementById('addChk');
let divBotstrap1 = document.createElement('div');
divBotstrap1.classList.add('col-md-12');
divBotstrap1.classList.add('text-center');
let checkClick = document.querySelector('.form-check-input');

function addCheck(){

    //componente checkbox
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.classList.add('form-check-input');
    
    //componente label
    let label = document.createElement('label');
    label.classList.add('lbl');
    label.style.paddingLeft = '9px';
    label.innerText = valueToDoInputText.value;

    //quebra de linha
    let br = document.createElement('br');
    
    //adicionando elementos no HTML
    addChk.appendChild(divBotstrap1);
    divBotstrap1.appendChild(check);
    divBotstrap1.appendChild(label);
    divBotstrap1.appendChild(br);
}

var g = document.querySelector('input');
for (var i = 0, len = g.children.length; i < len; i++)
{
    (function(index){
        g.children[i].onclick = function(){
              alert(index)  ;
        }    
    })(i);
}



function risca(num){
    
}
btnSalvar.addEventListener('click', addCheck);