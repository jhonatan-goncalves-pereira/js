function soma(num1,num2){
    
    let soma = parseInt(num2)+parseInt(num1);
    let saoIguais= '';
    let resultado1condi;
    let resultado2condi;

    num1===num2?saoIguais = '':saoIguais = 'não';

    if(soma>10 || soma>20){
        resultado1condi= 'maior';
        //if ternário
        soma>20?(resultado2condi='maior'):(resultado2condi = 'menor');
    }else{
        resultado1condi = resultado2condi ='menor';
    }
    
    
document.write (`Os números ${num1} e ${num2} ${saoIguais} são iguais. Sua soma é ${soma}, que é ${resultado1condi} que 10 e ${resultado2condi} que 20.`);
   
}

soma(prompt('primeiro número'),prompt('segundo número'));