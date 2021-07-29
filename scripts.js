// let e a variavel

// aqui foi feito a busca do select e do button la no html com os respectivos nomes usando esses codicos
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



// essa funcao toda converte o real em euro e dolar, atualizado.
// o async function, fez a busca em outro servidor para pegar o valor das moedas, atualizadas usando esse codicos.
async function coverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high



    let InputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")


    // 
    if (select.value === "US$ Dolar americano") {
        let ValorEmDolares = InputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = InputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: 'currency', currency: 'EUR' })
    }

    textoReal.innerHTML = InputValorEmReais.toLocaleString("pt-br", { style: 'currency', currency: "BRL" })

}
// essa funcao e responsavel por trocar a bandeira e o nome das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dolar americano") {
        textoMoedas.innerHTML = "Dolar americano"
        bandeiraMoedas.src = "img/eua.png"
    }
    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }


    coverterMoedas()
}

// essa funcao esta ouvindo quando e clicado no botao de converter
botao.addEventListener("click", coverterMoedas)
// essa funcao esta ouvindo quando ocorre a troca do select
select.addEventListener("change", trocaDeMoeda)