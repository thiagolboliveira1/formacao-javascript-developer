/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

<<<<<<< HEAD
const altura = 1.85;
const peso = 89;
=======
const altura = 1.80;
const peso = 75;
>>>>>>> 77e8eeb3cfa4192f0c83fe0bcafe36fd037e6000
const imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

if (imc < 18.5) {
console.log('Abaixo do peso');
<<<<<<< HEAD
}else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
}if (imc >= 30 && imc < 40) {
    console.log('Obeso');
}else if (imc >= 40){
=======
}else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
}else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso');
}if (imc >= 30 && imc <= 40) {
    console.log('Obeso');
}else if (imc >= 40{
>>>>>>> 77e8eeb3cfa4192f0c83fe0bcafe36fd037e6000
    console.log('Obesidade Grave');
}