(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');

        }, false);
        });
    }, false);
})();

function validaAutor (nome) {
    if(!isNaN(nome) || nome.length < 2 || nome == "") { 
        // alert("Nome inválido!")     
        $('#nomeAutor').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#nomeAutor').css({border: 'green 2px solid'});
        return true;
    }  
}

function validaGenero (genero) {
    if(!isNaN(genero) || genero.length < 2 || genero == "") { 
        // alert("Gênero literário inválido!")     
        $('#genero').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#genero').css({border: 'green 2px solid'});
        return true;
    }  
}

function validaEditora (editora) {
    if(editora.length < 2 || editora == "") { 
        // alert("Editora inválido!")     
        $('#editora').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#editora').css({border: 'green 2px solid'});
        return true;
    }  
}

function validaEdicao (edicao) {
    if(edicao[0] < 1 || edicao == "" || edicao[0].isNaN(edicao)) { 
        // alert("Editora inválido!")     
        $('#edicao').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#edicao').css({border: 'green 2px solid'});
        return true;
    }  
}

function validaTituloLivro (tituloLivro) {
    if(tituloLivro.length < 2 || tituloLivro == "") { 
        // alert("Título inválido!")     
        $('#tituloLivro').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#tituloLivro').css({border: 'green 2px solid'});
        return true;
    }  
}

function validaNrPaginas (numero) {
    if(numero.length > 5 || numero == "" || isNaN(numero)) { 
        // alert("Número de páginas inválido!")     
        $('#numeroPaginas').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#numeroPaginas').css({border: 'green 2px solid'});
        return true;
    }  
}

function validaISBN (numero) { //identificador único de livros, padrão internacional, composto de 13 dígitos, números, desde 2007. Antes de 2007 o padrão era de 10 dígitos, todos números
    if(numero.length < 10 || numero.length > 13 || numero == "" || isNaN(numero)) { 
        // alert("ISBN inválido!")     
        $('#isbn').css({border: 'red 1px solid'});
        return false;
    } else {
        $('#isbn').css({border: 'green 2px solid'});
        return true;
    }  
}

// function valida() {
//     if (validaNome() && validaEmail()) {
//         $("form").submit();
//     }
// }