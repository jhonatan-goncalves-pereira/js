function trocaParesENulos(lista){
    for (let i = 0; i< lista.length; i++){
        if(lista.length == 0 ){
            console.log('-1');
        }else if(lista[i]%2==0){
            lista[i] = 0;
        }
        console.log(lista[i]);
    }
}
trocaParesENulos([1,3,4,6,80,33,23,90]);