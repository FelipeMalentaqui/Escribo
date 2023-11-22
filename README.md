# Escribo
<h3>Instruções para Executar e Usar o Código.</h3>

Este projeto contém um conjunto de funções em JavaScript que podem ser executadas localmente em um ambiente Node.js. Abaixo estão as instruções sobre como rodar o código no seu computador usando o Visual Studio Code (VSCode).

<h3>Pré-requisitos:</h3>

Certifique-se de ter o Node.js instalado em seu sistema.

<h3>Passos para Executar:</h3>

<h3>Clone o repositório:</h3>

Abra o terminal e execute o seguinte comando para clonar este repositório para o seu computador:

git clone git@github.com:FelipeMalentaqui/Escribo.git
<h3>Abra o Projeto no VSCode</h3>:

Navegue até o diretório do projeto e abra-o no VSCode:

cd nome-do-repositorio

code .

<h3>Abra o Terminal no VSCode:</h3>

Dentro do VSCode, abra o terminal integrado. Você pode fazer isso indo para o menu View e selecionando Terminal.

<h3>Execute o Código:</h3>

No terminal, execute o código usando o Node.js. No caso deste projeto, você pode executar o exemplo fornecido no README da seguinte maneira:

node nome-do-arquivo.js

Substitua nome-do-arquivo.js pelo nome real do arquivo que contém as funções.

<h3>Descrição:</h3>

Este código JavaScript contém uma série de funções que lidam com a verificação e soma de números inteiros positivos divisíveis por 3 ou 5 até um determinado limite. Ele fornece uma maneira de verificar se um número é positivo, se é um número válido e, em seguida, realiza a soma dos números inteiros positivos menores que o número fornecido, que são divisíveis por 3 ou 5.

<h3>Funções:</h3>

<h2>verificaSeENumero(numero);</h2>

Esta função verifica se o argumento fornecido é um número. Se não for um número, lança um erro indicando que é necessário fornecer um número.

<h2>vericaSeENumeroPositivo(numero);</h2>

Esta função verifica se o número fornecido é positivo. Se o número for negativo, lança um erro indicando que é necessário fornecer um número positivo.

<h2>somandoNumerosInteiros(numero);</h2>

Esta função realiza a soma de todos os números inteiros positivos menores que o número fornecido, que são divisíveis por 3 ou 5. Ela utiliza as funções anteriores para verificar se o número é válido e positivo. Caso ocorra algum erro durante o processo, a função retorna a mensagem de erro. Caso contrário, retorna o somatório dos números e exibe os números divisíveis por 3 ou 5.

Exemplo de Uso

console.log(somandoNumerosInteiros(10));

<h3>Como Usar:</h3>

Depois de executar o código, você pode usar as funções conforme necessário. No exemplo fornecido no README, a função somandoNumerosInteiros é chamada com o argumento 10. Você pode experimentar chamando a função com diferentes argumentos ou incorporar essas funções em seus próprios projetos JavaScript.

Lembre-se de que o código fornece verificações para garantir que os números fornecidos sejam válidos e positivos. Certifique-se de seguir essas condições ao usar as funções.

Este exemplo chama a função somandoNumerosInteiros com o argumento 10 e imprime o resultado no console. O resultado será a soma de todos os números inteiros positivos menores que 10 que são divisíveis por 3 ou 5. Em seguida, os números divisíveis por 3 ou 5 são exibidos no console.

<h3>Observação:</h3> 
Na linha 30, tem um console log que esta comentado, caso queira ver os números divisíveis por 3 e 5, sugiro descomentar esta linha.

Certifique-se de fornecer um número válido como argumento ao chamar a função somandoNumerosInteiros, pois a validação é realizada internamente antes de executar o cálculo.
