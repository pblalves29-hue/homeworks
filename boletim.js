let alunoNotas = [4, 7, 8, 7, 9]; 
 
let somaArray = 0;
function somaMedia(){
    for (let i = 0; i < alunoNotas.length; i++){
        console.log(alunoNotas[i]);
        somaArray += alunoNotas[i];
        
    }
}

let mediaTotal = 0;

function calculoMedia(){
    mediaTotal = (somaArray / alunoNotas.length);
    if (mediaTotal >= 7){
        console.log(`Sua média final é: ${mediaTotal} - Aprovado`);
    }
    else {
        console.log(`Sua média final é: ${mediaTotal} - Reprovado`);
    }
}

let contador = 0;

function quantMedia(){
    for(let i = 0; i < alunoNotas.length; i++){
        if (alunoNotas[i] >= mediaTotal){
            contador ++;
        } 
    }
}

let maiorNota = alunoNotas[0];
let menorNota = alunoNotas[0];

function maiorMenor(){
    for(let i = 0; i < alunoNotas.length; i++){
        if (alunoNotas[i] > maiorNota){
            maiorNota = alunoNotas[i];
        }
        if(alunoNotas[i] < menorNota){
            menorNota = alunoNotas[i];
        }
    }
}


somaMedia();
console.log(somaArray);
calculoMedia();
quantMedia();
console.log(`O aluno ficou com ${contador} notas acima da média.`);
maiorMenor();
console.log(maiorNota);
console.log(menorNota);
