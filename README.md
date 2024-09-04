# Teste Target - Resolução de Problemas

Este projeto contém a resolução de uma série de problemas de programação utilizando HTML, CSS e JavaScript. Os problemas abordam tópicos como cálculo de soma, verificação de número na sequência de Fibonacci, análise de faturamento diário, cálculo percentual por estado, e inversão de strings.

## Visão Geral

O projeto é dividido em cinco seções principais, cada uma representando a solução de um problema específico:

1. **Cálculo da Soma de 1 a 13**: Um simples cálculo iterativo para somar os números de 1 a 13.
2. **Verificação de Número na Sequência de Fibonacci**: Verifica se um número pertence à sequência de Fibonacci.
3. **Análise de Faturamento Diário**: Analisa um JSON contendo o faturamento diário e retorna informações como o menor, o maior e a quantidade de dias acima da média.
4. **Cálculo Percentual de Faturamento por Estado**: Calcula a porcentagem do faturamento de cada estado baseado em dados fornecidos.
5. **Inversão de String**: Inverte os caracteres de uma string fornecida.

## Como Executar

### Requisitos

- Um navegador moderno (Chrome, Firefox, Edge, etc.)
- Um servidor local (opcional, caso o JSON seja carregado externamente)

### Instruções

1. **Clone o repositório** para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd seu-repositorio
    ```

3. **Abra o arquivo `index.html`** no seu navegador.

4. **Interaja com as funcionalidades** descritas abaixo.

### Arquivos

- `index.html`: Contém a estrutura HTML da página e links para os arquivos CSS e JS.
- `styles.css`: Arquivo CSS que estiliza a página, incluindo botões, inputs e layout geral.
- `teste.js`: Arquivo JavaScript que implementa a lógica dos cinco problemas.

## Funcionalidades

### 1. Soma dos números de 1 a 13

Ao clicar no botão "Calcular Soma", o programa soma os números de 1 a 13 e exibe o resultado.

### 2. Verificação de número na sequência de Fibonacci

O usuário insere um número no campo de input e clica no botão "Verificar Fibonacci". O programa verifica se o número pertence à sequência de Fibonacci e exibe uma mensagem correspondente.

### 3. Análise de Faturamento Diário

Ao clicar no botão "Analisar Faturamento", o programa realiza uma requisição `fetch` para um arquivo JSON contendo o faturamento diário. Ele calcula e exibe:
- O menor valor de faturamento.
- O maior valor de faturamento.
- A quantidade de dias com faturamento acima da média.

**Nota:** Certifique-se de que o JSON esteja disponível na URL correta ou ajuste o caminho no código.

### 4. Cálculo Percentual de Faturamento por Estado

Ao clicar no botão "Calcular Percentual", o programa calcula o percentual de representação do faturamento de cada estado (SP, RJ, MG, ES, Outros) com base nos valores fornecidos no código.

### 5. Inversão de String

O usuário insere uma string no campo de input e clica no botão "Inverter String". O programa inverte os caracteres da string e exibe o resultado.

## Personalização

- **Estilo**: O arquivo `styles.css` pode ser modificado para personalizar o design da página.
- **Lógica**: O arquivo `teste.js` pode ser ajustado para modificar a lógica dos problemas ou para adicionar novas funcionalidades.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
