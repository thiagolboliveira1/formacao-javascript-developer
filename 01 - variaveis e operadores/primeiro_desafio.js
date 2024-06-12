/*Faça um programa para calcular o c=valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.*/


const precoEtanol = 4.39;
const precoGasolina = 6.29;
const combustivelPorKm = 12;
const distanciaViagem = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaViagem / combustivelPorKm;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
   
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


