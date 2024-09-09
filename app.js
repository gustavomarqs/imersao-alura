function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // camel case
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = "Nada foi encontrado. Campo de pesquisa vazio."
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()


// inicia uma sring para armazenar os resultados da pesquisa
    let = resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

// Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase()
        // se no dado titulo includes o campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                // Cria o HTML para cada item de resultado
            resultados += `
    <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link}
                        target="_blank">Mais informações</a>
                </div>
    `   
        }


    
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado!</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados   
}


