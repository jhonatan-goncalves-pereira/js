let txtInputFrase = document.getElementById('valueFrase');
let txtRed = document.querySelector('redPalindromo');
let txtGreen = document.querySelector('greenPalindromo');
let txtArePalindromo = document.getElementById('valuePalindromo');
let btnVerificaPalindromo = document.getElementById('btnVerifica');


function vefificaPalindromo(){
    //pegando os caracteres para verificar se é ou não é uma palíndromo
    let caracteres = String (txtInputFrase.value).split(''); ;
    //removendo os espaços
    let letrasToPalindromoJuntas = String (txtInputFrase.value).replace(/\s/g,'');
    //separando(split()), revertendo(reverse()) e juntando(join())
    let letrasPalindromoJuntas = letrasToPalindromoJuntas.split('').reverse().join('');
    
    // o split() separa a string conforme o parâmetro passado, 
    // string vazia separa todos os caracteres, 
    // se a string for um espaço ele separa com base nisso.

    //junta conforme o parâmentro passado da mesma maneira que o split
    if(letrasPalindromoJuntas == letrasToPalindromoJuntas)
    {
        txtArePalindromo.style.color = 'green';
        txtArePalindromo.style.textAlign = 'right'
    }else{
        txtArePalindromo.style.color = 'red';
        txtArePalindromo.style.textAlign = 'left'
    }

}
function addTxt (){
    txtArePalindromo.value = String(txtInputFrase.value).toUpperCase();
    txtInputFrase.value = String(txtInputFrase.value).toUpperCase();
    txtArePalindromo.style.color = 'black'
}
txtInputFrase.addEventListener("keyup",addTxt);
btnVerificaPalindromo.addEventListener("click",vefificaPalindromo);