alert("olaaa")

var dados = [] 

function PopulaTabela(dados) {
  if (Array.isArray(dados)) {

    $("#tblDados tbody").html("")

    dados.forEach(function (item) {

      $("#tblDados tbody").append(`<tr>

      <td>${item.ID}</td>
      <td>${item.Nome}</td>
      <td>${item.Email}</td>
      <td>${item.Telefone}</td>
      <td>${item.Cpfcnpj}</td>
      <td>${item.Cidade}</td>
      <td>${item.Bairro}</td>
      <td>${item.Estado}</td>
      <td>${item.Rua}</td>
      <td>${item.Numero}</td>
      <td>${item.Logradouro}</td>
      </tr>`)
    })
  }
}


$(function () {
  dados = JSON.parse(localStorage.getItem("__dados__"))
  if (dados) {
    PopulaTabela()
  }
})