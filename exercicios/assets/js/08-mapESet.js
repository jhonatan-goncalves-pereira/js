//coleções do JS - 
//Map
function getAdmins(map){
    let admins = [];
    //for of para a coleção map
    for ([key, value] of map) {
        if(value==='Admin'){
            admins.push(key);
        }
    }
    return admins;
}
//criando mapa
const map = new Map();
map.set('Jhonatan','Admin');
map.set('Jhon','Admin');
map.set('Jhonatan','Admin');
//Valores repetidos não são adicionados
map.set('Emerson','User ');

console.log(getAdmins(map));


//-------------------------------------------------------------------
//coleções JS 
// SET
const myArray = [30,30,40,5,223,2049,3034,5];
function valoresUnicos(arr){
    const mySet = new Set(arr);
    //no SET valores repetidos não são adicionados
    return  [...mySet];
}
console.log(valoresUnicos(myArray))