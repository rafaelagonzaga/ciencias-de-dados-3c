const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()
        const pessoasConectadas =(dados.total_pessoas_conectadas) / 1e9
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container_texto')
        paragrafo.innerHTML = 'Voce sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximandamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em media
        <span>${dados.tempo_medio}</span> horas conectadas'

        console.log(dados);

    }

    visualizarInformacoesGlobais()
