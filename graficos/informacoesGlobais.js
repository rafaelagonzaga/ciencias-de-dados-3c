const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()
        const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
        const pessoasNoMundo = document.createElement('p')
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas)* 100)
        const paragrafo =  document.createElement(`p`)
        paragrafo.classList.add('graficos-container_texto')
        paragrafo.innerHTML = `Voce sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximandamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em media
        <span>${dados.horas}</span> horas e <span>${minutos}</span> minutos conectadas.`

        const container = document.getElementByld( "graficos-container")
        container.appendChild(paragrafo)

        console.log(dados);

    }

    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
console.log(paragrafo)
const minutos = math.roud( (dados.tempo_medio - horas)+100)  
 const porcentagemConectada = (( pessoasConectadas / pessoasNoMundo) *100.toFixed(2)


