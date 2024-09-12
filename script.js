const number = parseInt(prompt("Digite o número para a tabuada:"));
let multiplicationTable = "";
for (let i = 1; i <= 20; i++) {
  multiplicationTable += `${number} x ${i} = ${number * i}\n`;
}
alert(multiplicationTable)
