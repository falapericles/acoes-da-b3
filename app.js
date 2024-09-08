let chart; // Variável global para armazenar o gráfico

function pesquisar() {
    let resultadosDiv = document.getElementById("resultados");
    let termoPesquisa = document.getElementById("input-pesquisa").value.toLowerCase();
    let resultadosHTML = "";

    // Filtrar dados com base no termo de pesquisa
    let dadosFiltrados = dados.filter(dado => 
        dado.titulo.toLowerCase().includes(termoPesquisa) || 
        dado.descricao.toLowerCase().includes(termoPesquisa)
    );

    if (dadosFiltrados.length > 0) {
        for (let dado of dadosFiltrados) {
            resultadosHTML += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
        atualizarGrafico(dadosFiltrados[0]); // Atualiza o gráfico com o primeiro item filtrado
    } else {
        resultadosHTML = "<p>Nenhum resultado encontrado.</p>";
    }

    // Exibir resultados
    resultadosDiv.innerHTML = resultadosHTML;
}

document.getElementById('input-pesquisa').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const list = document.getElementById('autocomplete-list');

    // Show the autocomplete list if there's input, otherwise hide it
    list.style.display = input ? 'block' : 'none';

    // Clear the list of suggestions
    list.innerHTML = '';

    if (input) {
        const matchesTitulo = dados.filter(item => item.titulo.toLowerCase().startsWith(input));
        const matchesCodigo = dados.filter(item => item.codigo.toLowerCase().startsWith(input));

        const matchedItems = new Set([...matchesTitulo, ...matchesCodigo]);

        matchedItems.forEach(match => {
            const div = document.createElement('div');
            div.textContent = `${match.titulo}`;
            div.addEventListener('click', function() {
                document.getElementById('input-pesquisa').value = match.titulo;
                list.style.display = 'none';// Clear the list of suggestions after selection
                pesquisar(); // Execute the search with the selected title
            });
            list.appendChild(div);
        });
    }
});

function obterPrecosPorCodigo(codigo) {
    return precos.filter(preco => preco.codigo === codigo);
}

function prepararDadosParaGrafico(dado) {
    const precosHistoricos = obterPrecosPorCodigo(dado.codigo);

    const labels = precosHistoricos.map(preco => preco.data);
    const data = precosHistoricos.map(preco => parseFloat(preco.precoFechamento));

    return {
        labels: labels,
        datasets: [{
            label: dado.titulo,
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false
        }]
    };
}

function atualizarGrafico(dado) {
    const ctx = document.getElementById('graficoLinha').getContext('2d');
    const dadosGrafico = prepararDadosParaGrafico(dado);

    if (chart) {
        chart.destroy(); // Destroi o gráfico anterior
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: dadosGrafico,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Inicia o gráfico vazio ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('graficoLinha').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('graficoLinha');
    canvas.style.display = 'none'; // Oculta o gráfico inicialmente
});
