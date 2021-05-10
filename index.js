

var dados = [] 

function ApagaRegistro(id) {
  let _confirm = confirm("Deseja excluir este registro?")
  if (_confirm) {
    for(let i = 0; i < dados.length; i++){
      if (dados[i].ID == id) {
        dados.splice(i, 1) //--------------------funcao que apaga um ou mais elementos
      }
    }
    PopulaTabela()
  }
}


function EditaRegistro(id) {
  $("#modalRegistro").modal("show")

  dados.forEach(function (item) {
    if (item.ID == id) {
      $("#txtNome").val(item.Nome)
      $("#txtE-mail").val(item.Email)
      $("#txtTelefone").val(item.Telefone)
      $("#txtCpfcnpj").val(item.Cpfcnpj)
    }
  })
}

function PopulaTabela() {
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
      <td><button type="button" class="btn btn-primary" onclick="javascript:EditaRegistro(${item.ID});" ><i class="fa fa-edit"></button></td>
      <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});" ><i class="fa fa-trash"></button></td>
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