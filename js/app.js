const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.innerHTML = `Valor01 ou Valor02 inválido. Digite um número.`

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `   
        <h2>Total da Compra</h2>
        <li>O valor total da sua compra será de <span>R$${v1 * v2.toFixed(2)}</span> </li>
        `
    };

};

function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    const desconto = (v1 * v2)/100

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`

    } else {

        resultado.style.display = 'flex';

        
        resultado.innerHTML = ` 
            <h2>Desconto</h2>      
            <li>O desconto será de ${v2}% R$${v1.toFixed(2)} = <span>R$${desconto.toFixed(2)}</span> </li>
            <li>O valor total com o desconto é <span>R$${v1 - desconto.toFixed(2)}</span> </li>
        `
    };

};

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    const acrescimo = (v1 * v2)/100

    

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`

    } else {

        resultado.style.display = 'flex';

        
        resultado.innerHTML = `
            <h2>Juros</h2>    
            <li>O acréscimo será de ${v2}% sobre o valor de R$${v1.toFixed(2)} = <span>R$${acrescimo.toFixed(2)}</span> </li>
            <li>O valor total com o acréscimo é <span>R$${v1 + acrescimo.toFixed(2)}</span> </li>
        `
    };

};

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Comissão</h2>        
            <li>A sua comissão de ${v2}% sobre uma venda de R$${v1.toFixed(2)} </li>
            <li>A comissão será de <span>R$${((v1 * v2)/100).toFixed(2)}</span> </li>
        `
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Lucro</h2>
            <li>O preço da venda foi R$${v1.toFixed(2)}</li>
            <li>O seu custo foi de R$${v2.toFixed(2)}</li>     
            <li>O seu lucro será de <span>R$${(v1 - v2).toFixed(2)}</span> </li>
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