// 1. Soma dos números de 1 a 13
function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }

    document.getElementById('somaResultado').textContent = `O valor da soma é: ${SOMA}`;
}

// 2. Verificação de número na sequência de Fibonacci
function fibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        [a, b] = [b, a + b];
    }
    return a;
}

function isFibonacci(num) {
    if (num < 0) return false;
    return fibonacci(num) === num;
}

function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numeroFibonacci').value, 10);
    if (isFibonacci(numero)) {
        document.getElementById('fibonacciResultado').textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        document.getElementById('fibonacciResultado').textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

// 3. Análise de Faturamento Diário
async function analisarFaturamento() {
    try {
        // Fazer o fetch do JSON (substitua a URL pelo endereço correto)
        const response = await fetch('./dados.json');
        const faturamentoDiario = await response.json();

        // Filtrar dias com faturamento maior que 0
        const faturamentoValido = faturamentoDiario
            .filter(item => item.valor > 0)
            .map(item => item.valor);

        // Menor faturamento
        const menorFaturamento = Math.min(...faturamentoValido);

        // Maior faturamento
        const maiorFaturamento = Math.max(...faturamentoValido);

        // Média mensal
        const mediaMensal = faturamentoValido.reduce((acc, val) => acc + val, 0) / faturamentoValido.length;

        // Dias acima da média
        const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaMensal).length;

        const resultado = `
            Menor faturamento: R$${menorFaturamento.toFixed(2)}<br>
            Maior faturamento: R$${maiorFaturamento.toFixed(2)}<br>
            Dias com faturamento acima da média: ${diasAcimaDaMedia} dias
        `;
        document.getElementById('faturamentoResultado').innerHTML = resultado;
    } catch (error) {
        document.getElementById('faturamentoResultado').innerHTML = 'Erro ao carregar os dados: ' + error.message;
    }
}

// 4. Percentual de Faturamento por Estado
function calcularPercentual() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    let resultado = '';
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
    }

    document.getElementById('percentualResultado').innerHTML = resultado;
}

// 5. Inversão de String
function inverterString() {
    const str = document.getElementById('stringInput').value;
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }

    document.getElementById('stringResultado').textContent = `String invertida: ${invertida}`;
}