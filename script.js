let btnClear = document.querySelector('.btn2');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click',function() {
  inputs.forEach(input => input.value=' ');
    });


    function uppercase() {
      nome = document.querySelector('#nome');
      nome.value = nome.value.toUpperCase();
      cidade = document.querySelector('#cidade');
      cidade.value =cidade.value.toUpperCase();
    }
