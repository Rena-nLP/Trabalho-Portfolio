// Quando o usuário clicar no botão "Somar", este código vai rodar.
document.getElementById("btnSomar").addEventListener("click", function () {

  // 1) Pega o que o usuário digitou nos dois campos.
  //    O ".value" devolve um texto, por isso usamos Number() para virar número.
  const idade1 = Number(document.getElementById("idade1").value);
  const idade2 = Number(document.getElementById("idade2").value);

  // 2) Soma as duas idades.
  const total = idade1 + idade2;

  // 3) Mostra o resultado dentro do parágrafo com id="resultado".
  document.getElementById("resultado").textContent =
    "A soma das idades é: " + total;

});
