const form = document.getElementById("form-atividade");
let linhas = '';
const nomes = [];
const telefones = [];



form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)){
        alert(`O Nome: ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(parseInt(inputTelefone.value));
    
        let linha= '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
       
    inputNome.value = '';
    inputTelefone.value = '';  
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



