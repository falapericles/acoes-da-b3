# Projeto Ações da B3

Um aplicativo web para pesquisa e visualização de ações da B3, com gráficos de preços históricos das ações.

## Descrição

Este projeto permite que os usuários pesquisem ações da B3 e visualizem gráficos de preços históricos para as ações pesquisadas. A interface inclui:

- **Uma caixa de pesquisa com sugestões automáticas.**
- **Um gráfico de linha que exibe a variação de preços das ações ao longo do tempo.**

## Funcionalidades

- Pesquisa de ações por título ou código.
- Sugestões automáticas durante a digitação.
- Exibição de resultados da pesquisa com links para mais informações.
- Gráfico de linha que mostra os preços históricos das ações.

## Limitações

- A base de dados está abastecida com as 30 ações selecionadas do Ibovespa.
- O gráfico apresenta somente dados referentes ao mês de agosto, com os valores de fechamento diário.

## Tecnologias Utilizadas

- **HTML/CSS**: Estrutura e estilização da página.
- **JavaScript**: Lógica de pesquisa e geração de gráficos.
- **Chart.js**: Biblioteca para criação de gráficos.
- **Google Fonts**: Fonte utilizada para estilização do texto.

## Instalação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/acoes-da-b3.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd acoes-da-b3
    ```

3. **Certifique-se de que você tem um servidor local para servir os arquivos estáticos**. Você pode usar um servidor local simples como `http-server` (para Node.js) ou qualquer outro servidor de sua preferência.

## Uso

1. Abra o arquivo `index.html` no seu navegador:
    - Dê um clique duplo no arquivo `index.html` ou abra-o a partir do seu servidor local.

2. Digite o código ou título da ação na caixa de pesquisa e pressione "Pesquisar":
    - Veja os resultados da pesquisa e o gráfico atualizado com os preços históricos da ação.

## Estrutura de Arquivos

- **index.html**: Página principal do aplicativo.
- **style.css**: Estilos para o layout e design da página.
- **app.js**: Lógica JavaScript para pesquisa, sugestões e gráficos.
- **dados.js**: Dados estáticos das ações (deve ser preenchido com os dados reais).
- **precos_acoes.js**: Dados estáticos dos preços das ações (deve ser preenchido com os dados reais).

## Contribuições

Se você deseja contribuir para o projeto, sinta-se à vontade para enviar um pull request com suas melhorias ou correções. Por favor, siga as diretrizes de contribuição abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua nova feature ou correção.
3. Faça suas alterações e teste-as.
4. Envie um pull request para a branch principal.

## Licença

Este projeto é licenciado sob a Licença MIT.
