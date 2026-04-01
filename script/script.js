console.log("script carregado! 🚀")

//Variáveis
const inputValue = document.querySelector("#value-input")
const currencySelect = document.querySelector("#currency-select")
const form = document.querySelector("form")
const exchangeRate = document.querySelector("exchange-rate")
const convertedValue = document.querySelector("converted-value")



//Variáveis de câmbio
let dollar = 5.26 
let euro = 6.04
let pound = 6.97 //libra esterlina


//Obtem o número inserido no campo "Valor"
inputValue.addEventListener("input", () => {
    //Teste - pega o que o usuário está digitando
    // const value = inputValue.value
    // console.log(value)

    //o Regex pega tudo o que é texto
    const hasCharacteresRegex = /\D+/g
    //O replace Substitui o que é texto pora vazio ""
    inputValue.value = inputValue.value.replace(hasCharacteresRegex, "")

})

//Obtem o valor da moeda selecionada
currencySelect.addEventListener("change", () => {
    const optionSelect = currencySelect.value
    console.log(optionSelect)
})


//
form.addEventListener("submit", (event) =>{
    event.preventDefault()

    let symbol = ""
    let rate = 0

    //Teste - Verificar o valor selecionado e a taxa de câmbio correspondente
    console.log(`currencySelect.value: ${currencySelect.value}`)
    console.log(`rate: ${rate}`)

    switch (currencySelect.value) {
        case "USD":
            symbol = "US$"
            rate = dollar
            break
        case "EUR":
            symbol = "€"
            rate = euro
            break
        case "GBP":
            symbol = "£"
            rate = pound
            break
    }

    //Teste - Verificar o símbolo e a taxa de câmbio atribuídos
    console.log(`${symbol} 1 = RS ${rate}`)
    console.log(`R$ ${inputValue.value * rate} Reais`)

    exchangeRate.textContent = `${symbol} 1 = R$ ${rate}`
    convertedValue.textContent = `R$ ${inputValue.value * rate} Reais`

})