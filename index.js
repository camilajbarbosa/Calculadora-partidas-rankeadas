let vitorias = 10
let derrotas = 5

function saldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas;
}

function determinaNivel(vitorias){
    if(vitorias <= 10){
    return "Ferro"
    }else if(vitorias <= 20){
    return "Bronze"
    }else if(vitorias <= 50){
    return "Prata"
    }else if(vitorias <= 80){
    return "Ouro"
    }else if(vitorias <= 90){
    return "Diamante"
    }else if(vitorias <= 100){
    return "Lendário"
    }else{
    return "Imortal"
    }
}

let saldo = saldoRankeadas(vitorias, derrotas);

let nivel = determinaNivel(vitorias);

console.log(`O Herói tem saldo de ${saldo} e está no nível ${nivel}`);


