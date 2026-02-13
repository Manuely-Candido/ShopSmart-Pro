const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        alert('Valor 01 ou Valor02 inválido. Digite um número.');

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `   
        <h1>Total da Compra</h1>
        <li>O valor total da sua compra será de:  = <span>${v1 * v2}</span> </li>
        `
    };

};

function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    const desconto = (v1 * v2)/100

    

    if(isNaN(v1)  || isNaN(v2)) {
        alert('Valor 01 ou Valor02 inválido. Digite um número.');

    } else {

        resultado.style.display = 'flex';

        
        resultado.innerHTML = `       
            <li>O desconto será de ${v1} % ${v2} = <span>${desconto}</span> </li>
            <li>O valor total com o desconto é: <span>${v1 - desconto}
        `
    };

};

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    const acrescimo = (v1 * v2)/100

    

    if(isNaN(v1)  || isNaN(v2)) {
        alert('Valor 01 ou Valor02 inválido. Digite um número.');

    } else {

        resultado.style.display = 'flex';

        
        resultado.innerHTML = `    
            <li>O acréscimo será de ${v1} % ${v2} = <span>${acrescimo}</span> </li>
            <li>O valor total com o acréscimo é: <span>${v1 + acrescimo}
        `
    };

};

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        alert('Valor 01 ou Valor02 inválido. Digite um número.');

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `        
            <li>A sua comissão será de ${v2} % ${v1} = <span>${(v1 * v2)/100}</span> </li>
        `
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        alert('Valor 01 ou Valor02 inválido. Digite um número.');

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `      
            <li>O seu lucro será de ${v1} % ${v2} = <span>${(v1 - v2)}</span> </li>
        `
    };

};

function limpar(){
    // Oculta a área de resultado sem removê-la
    resultado.style.display = 'none';

    // Limpa o valor digitado no primeiro input
    input01.value='';

    // Limpa o valor digitado no primeiro input
    input02.value='';

    // Devolve o foco para o primeiro campo, melhorando a experiência do usuário
    input01.focus();
};