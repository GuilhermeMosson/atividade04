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

    document.getElementById('msgInput').textContent = `O CÓDIGO: ${cod} IDADE: ${age} anos; ALTURA: ${height}m PESO: ${weight} Kg`
}

function calcularSoma(){
    var num01 = document.getElementById('num01').valueAsNumber;
    var num02 = document.getElementById('num02').valueAsNumber;
    var resulSoma = document.getElementById('resulSoma');

    resulSoma.textContent = `Soma: ${num01 + num02}`
}

function calcularMult(){
    var num01 = document.getElementById('num01').valueAsNumber;
    var num02 = document.getElementById('num02').valueAsNumber;
    var resulMult = document.getElementById('resulMult');

    resulMult.textContent = `Multiplicação: ${num01 * num02}`
}

function contarAt04(){
    var num = document.getElementById('numeroAt4').valueAsNumber;
    var resul = document.getElementById('resAt4');


    if(num < -99 || num > 99){
        alert('INSIRA UM NÚMERO DE -99 À 99');
        return;
    }

    for(var cont = num; cont <= 100; cont++);{
        resul = resul + num + "-";
        console.log(resul);
    }
}

function calcularCircunferencia(){
    var raio = document.getElementById('raio').valueAsNumber;
    var circun = document.getElementById('cincunResu');
    var resu = 2 * 3.14159 * raio; 

    circun.textContent = `${resu}`;
}