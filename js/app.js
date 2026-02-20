const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = '<p>Valor 01 ou Valor 02 inválido. Digite um número.</p>'

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `   
        <h2>Total da Compra</h2>
        <ul>
            <li>O valor total da sua compra será de <span>R$ ${v1 * v2.toFixed(2)}</span> </li>
        </ul>
        `
    };

};

function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    const desconto = (v1 * v2)/100

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = '<p>Valor 01 ou Valor 02 inválido. Digite um número.</p>'

    } else {

        resultado.style.display = 'flex';

        
        resultado.innerHTML = ` 
            <h2>Desconto</h2>  
            <ul>    
                <li>Foi aplicado um desconto de ${v2}% sobre uma compra de R$ ${v1.toFixed(2)}. </li>
                <li>O valor do desconto será de <span>R$ ${desconto.toFixed(2)}</span> </li>
                <li>E o valor total da compra com o desconto é <span>R$ ${v1 - desconto.toFixed(2)}</span> </li>
            </ul>
        `
    };

};

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    const acrescimo = (v1 * v2)/100

    

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = '<p>Valor 01 ou Valor 02 inválido. Digite um número.</p>'

    } else {

        resultado.style.display = 'flex';

        
        resultado.innerHTML = `
            <h2>Juros</h2>    
            <ul> 
                <li>O acréscimo será de ${v2}% sobre o valor de R$${v1.toFixed(2)} = <span>R$ ${acrescimo.toFixed(2)}</span> </li>
                <li>O valor total com o acréscimo é <span>R$ ${v1 + acrescimo.toFixed(2)}</span> </li>
            </ul>
        `
    };

};

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = '<p>Valor 01 ou Valor 02 inválido. Digite um número.</p>'

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Comissão</h2>   
            <ul>   
                <li>A sua comissão de ${v2}% sobre uma venda de R$ ${v1.toFixed(2)} </li>
                <li>A comissão será de <span>R$ ${((v1 * v2)/100).toFixed(2)}</span> </li>
            </ul>
        `
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if(isNaN(v1)  || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = '<p>Valor 01 ou Valor 02 inválido. Digite um número.</p>'

    } else {

        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Lucro</h2>
            <ul> 
                <li>O preço da venda foi R$ ${v1.toFixed(2)}</li>
                <li>O seu custo foi de R$ ${v2.toFixed(2)}</li>     
                <li>O seu lucro será de <span>R$ ${(v1 - v2).toFixed(2)}</span> </li>
            </ul>
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