/*1) Faça um algoritimo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média nonor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 80;
const nota2 = 70;
const nota3 = 70;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A média do aluno é " + media);

if (media < 50) {
    console.log("Reprovado");
} else if (media >= 50 && media <= 70) {
    console.log("Recuperação")
} else {
    console.log("Parabéns Aprovado")
}
