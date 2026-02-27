function resposta1() {
  let y = prompt("Quer fazer algo hoje a noite? (sim/não)");

  if (y == "sim") {
    document.write("<p>Que legal! Vamos fazer algo juntos!</p>");
  } else if (y == "não") {
    document.write("<p>Entendo, talvez outra hora então.</p>");
  } else {
    document.write("<p>Resposta inválida. Por favor, responda com 'sim' ou 'não'.</p>");
  }
}

function resposta2() {
    let z = prompt("Qual a sua cor favorita?");
    
    if (z.toLowerCase() == "roxo") {
        document.write("<p>Ótima escolha! Roxo é uma cor linda, eu adoro ela!</p>");
    } else {
        document.write(`<p>${z} é uma cor interessante, mas eu prefiro roxo!</p>`);
    }
};