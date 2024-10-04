# 📈 Projeto Ações da B3

Um aplicativo web interativo para pesquisa e visualização das ações da B3, com gráficos de preços históricos para facilitar a análise e acompanhamento das variações de mercado.

## 📋 Descrição

O projeto permite que usuários pesquisem e explorem informações de ações da B3, exibindo um gráfico com a variação de preços históricos de cada ação. A interface oferece uma experiência dinâmica com:

- 🔎 **Caixa de pesquisa com sugestões automáticas durante a digitação.**
- 📊 **Gráfico de linha** que ilustra a variação dos preços ao longo do tempo.
- 📝 **Resultados detalhados** com links para mais informações sobre as ações pesquisadas.

## ✨ Funcionalidades

- **🔍 Pesquisa de ações**: Digite o nome ou código para obter resultados relevantes.
- **💡 Sugestões automáticas**: As sugestões aparecem conforme você digita na caixa de pesquisa.
- **📈 Visualização de gráficos**: Acompanhe os preços históricos das ações selecionadas.
- **🔗 Navegação intuitiva**: Acesse detalhes adicionais das ações com um clique.

## 🚫 Limitações

- A base de dados inclui apenas as **30 ações mais representativas do Ibovespa**.
- Os gráficos exibem dados **somente do mês de agosto**, com valores de fechamento diário.

## 🛠️ Tecnologias Utilizadas

- **HTML/CSS**: Estrutura e estilização da aplicação.
- **JavaScript**: Lógica de interação e manipulação dos gráficos.
- **Chart.js**: Biblioteca JavaScript para criação de gráficos interativos.
- **Google Fonts**: Fonte personalizada para melhorar a aparência do texto.

## 💻 Instalação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/acoes-da-b3.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd acoes-da-b3
    ```

3. **Configure um servidor local** para servir os arquivos estáticos. Use `http-server` (para Node.js) ou outra ferramenta de sua preferência.

## 🚀 Uso

1. Abra o arquivo `index.html` no seu navegador:
    - Clique duas vezes no arquivo `index.html` ou utilize o servidor local configurado.

2. Na caixa de pesquisa, digite o código ou título da ação que deseja buscar e pressione "Pesquisar".
    - O gráfico será atualizado para mostrar os preços históricos da ação escolhida.

## 📂 Estrutura de Arquivos

- **`index.html`**: Página principal da aplicação.
- **`style.css`**: Estilos e layout.
- **`app.js`**: Lógica de pesquisa e geração de gráficos.
- **`dados.js`**: Dados estáticos das ações (atualize com os dados reais).
- **`precos_acoes.js`**: Dados estáticos dos preços das ações (atualize com os dados reais).

## 🤝 Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções! Siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature ou correção (`git checkout -b minha-feature`).
3. Teste suas alterações e adicione commits (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie um pull request para a branch principal.

## 📜 Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

Com essa interface amigável e visualização simplificada de ações, o **Projeto Ações da B3** é uma ferramenta para acompanhar o mercado financeiro de forma prática e eficiente!
