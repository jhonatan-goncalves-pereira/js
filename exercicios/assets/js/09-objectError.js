function validar(arr,num){
    try {

		if(!arr && !num) throw new ReferenceError('Envie os parâmetros!');

        if (typeof arr !== 'object') throw new TypeError('Envie um elemento do tipo Array!');
    
        if (typeof num !== 'number') throw new TypeError('Envie um elemento do tipo Number!');
    
        if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

        return arr;
    } catch (e) {
        
        if(e instanceof ReferenceError){
            console.log('Erro de ReferenceError');
            console.log(e.stack);
        }else if(e instanceof TypeError){
            console.log('Erro de TypeError');
            console.log(e.stack);
        }else if(e instanceof RangeError){
            console.log('Erro de RangeError');
            console.log(e.stack);
        }else{
            console.log('Erro inesperado'+e);
            console.log(e.stack);
        }
    
    }

}
//console.log(validar()) referenceError
//console.log(validar(1,1)) //typeError
//console.log(validar([1,21,2],1)) //rangeError
//console.log(validar([1],1)) sucesso