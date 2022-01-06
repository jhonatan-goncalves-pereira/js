function calculaIdade(anos){
    return `Daqui a ${anos},  ${this.nome} terá ${this.idade+anos} anos de idade.`;
}

const pessoa1 = {
    nome:'Jhonatan',
    idade:18
}
const pessoa2 = {
    nome:'Jhonn',
    idade:19
}
const pessoa3 = {
    nome:'Jhon',
    idade:20
}

console.log(calculaIdade.call(pessoa3,30));