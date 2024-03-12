function confirmarAt01(){
    var mat = document.getElementById('matriculaId').value;
    var value = document.getElementById('mensalidadeId').valueAsNumber;

    if(isNaN(value)){
        alert('Insira um valor válido');
        return;
    }
    document.getElementById('msgMatricula').textContent = `O aluno ${mat} paga mesalmente R$${value}\n`
}   

function confirmarAt02(){
    var cod = document.getElementById('codeId').value;
    var age = document.getElementById('ageId').valueAsNumber;
    var height = document.getElementById('heightId').valueAsNumber;
    var weight = document.getElementById('weightId').valueAsNumber;

    if(isNaN(age) || isNaN(weight) || isNaN(height)){
        alert('Insira um valor válido');
        return;
    }

    document.getElementById('msgInput').textContent = `O CÓDIGO: ${cod} IDADE: ${age} ALTURA: ${height} PESO: ${weight}`
}