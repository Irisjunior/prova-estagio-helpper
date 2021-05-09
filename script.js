let btnClear = document.querySelector(".btn2");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", function () {
  inputs.forEach((input) => (input.value = " "));
});

function uppercase() {
  nome = document.querySelector("#nome");
  nome.value = nome.value.toUpperCase();
  cidade = document.querySelector("#cidade");
  cidade.value = cidade.value.toUpperCase();
}

function save() {
  let arrayPessoas = [];
  if (JSON.parse(localStorage.getItem("pessoas")) != null) {
    arrayPessoas.push(JSON.parse(localStorage.getItem("pessoas")));
  }

  let nome = document.getElementById("nome").value;
  let cpfcnpj = document.getElementById("cpfcnpj").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;
  let cep = document.getElementById("cep").value;
  let logradouro = document.getElementById("logradouro").value;
  let numero = document.getElementById("numero").value;
  let bairro = document.getElementById("bairro").value;
  let estado = document.getElementById("estado").value;

  var pessoa = {
    nome: nome,
    cpfcnpj: cpfcnpj,
    telefone: telefone,
    email: email,
    cep: cep,
    logradouro: logradouro,
    numero: numero,
    bairro: bairro,
    estado: estado,
  };

  console.log(pessoa);

  arrayPessoas.push(pessoa);
  var pessoaJson = JSON.stringify(arrayPessoas);
  localStorage.setItem("pessoas", pessoaJson);

  alert("Salvo com Sucesso");

  const lnome = $("td[nome=nome]").val();
  const lemail = $("input[lemail=email]").val();
}
// Criando objeto com dados dos inputs
const dataObj = { nome, qtd };

let btn = document.querySelector(".btn");

function getLocalStorage() {
  btn.addEventListener("click", () => {
    console.log(localStorage.getItem("pessoas.nome"));
  });
}
