function buscarCEP() {
    let inputCep = document.querySelector("input[name=cep]");
    let cep = inputCep.value.replace("-", ""); // código omitido
    let url = "http://viacep.com.br/ws/" + cep + "/json";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if ((xhr.status = 200))
                //console.log(xhr.responseText);
                preencheCampos(JSON.parse(xhr.responseText)); // código omitido
        }
    };
    xhr.send();
}

function preencheCampos(json) {
    document.querySelector("input[name=endereco]").value = json.logradouro;
    document.querySelector("input[name=bairro]").value = json.bairro;
    document.querySelector("input[name=complemento]").value = json.complemento;
    document.querySelector("input[name=cidade]").value = json.localidade;
    document.querySelector("input[name=estado]").value = json.uf;
}

document.addEventListener(
    "keypress",
    function (e) {
        if (e.which == 13) {
            buscarCEP();
        }
    },
    false
);
