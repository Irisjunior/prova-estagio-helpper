

var dados = [] 

function PopulaTabela(dados) {
  if (Array.isArray(dados)) {

    localStorage.setItem("__dados__",JSON.stringify(dados))

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
      <td><button type="button" class="btn btn-primary"><i class="fa fa-edit"></button></td>
      <td><button type="button" class="btn btn-danger"><i class="fa fa-trash"></button></td>
      </tr>`)
    })
  }
}


$(function () {
  dados = JSON.parse(localStorage.getItem("__dados__"))
  if (dados) {
    PopulaTabela()
  }
  $("#btnSalvar").click(function () {
    let Nome = $("#txtNome").val()
    let Email = $("#txtE-mail").val()
    let Telefone = $("#txtTelefone").val()
    let Cpfcnpj = $("#txtCpfcnpj").val()

    let registro = {}

    registro.nome = Nome
    registro.email = Email
    registro.telefone = Telefone
    registro.cpfcnpj = Cpfcnpj

    registro.ID = (dados.length+1)

    dados.push(registro)

    alert("Salvo com sucesso!")

    $("#modalRegistro").modal("hide")

    $("#txtNome").val("")
    $("#txtE-mail").val("")
    $("#txtTelefone").val("")
    $("#txtCpfcnpj").val("")

    PopulaTabela()
  })
})