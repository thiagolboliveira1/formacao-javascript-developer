/*Faça um programa para calcular o c=valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.*/



const precoCombustivel = 6.29;
const combustivelPorKm = 12;
const distanciaViagem = 1750;

const litrosConsumidos = distanciaViagem / combustivelPorKm;

const valorGasto = litrosConsumidos * combustivelPorKm


console.log(valorGasto.toFixed(2));