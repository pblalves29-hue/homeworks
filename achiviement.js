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

somaMedia();
console.log(somaArray);
calculoMedia();

let contador = 0;
let mediaClasse = 7;

function maiorMenor(){
    for(let i = 0; i < alunoNotas.length; i++){
        if (alunoNotas[i] >= mediaClasse){
            contador ++;
        } 
    }
}

maiorMenor();
console.log(`O aluno ficou com ${contador} notas acima da média.`);