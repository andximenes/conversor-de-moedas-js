console.log("script carregado! 🚀")

//Variáveis
const inputValue = document.querySelector("#value-input")
const currencySelect = document.querySelector("#currency-select")
const form = document.querySelector("form")
const exchangeRate = document.querySelector("#exchange-rate")
const convertedValue = document.querySelector("#converted-value")


//CSS
let containerForm = document.querySelector(".container")
let resultBox = document.querySelector(".result-box")


//Variáveis ref ao taxa de câmbio
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

//Envia o formulário pelo btn de Enter
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        form.requestSubmit()
    }
})

//converte o valor inserido para a moeda selecionada e exibe a taxa de câmbio e o valor convertido
function convertCurrency(symbol, rate, value) {
    //Teste - Verificar os parâmetros recebidos pela função
    // console.log(`symbol: ${symbol}, rate: ${rate} value: ${value}`)

    try {
        
    } catch (error) {
        console.log(error)
        alert("Ocorreu um erro ao converter a moeda. Por favor, tente novamente.")      
    }
}


//
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    //Teste - Verificar o valor selecionado e a taxa de câmbio correspondente
    console.log(`currencySelect.value: ${currencySelect.value}`)

    switch (currencySelect.value) {
        case "USD":
            convertCurrency(inputValue.value, "S$", dollar)
            break
        case "EUR":
            convertCurrency(inputValue.value, "€", euro)
            break
        case "GBP":
            convertCurrency(inputValue.value, "£", pound)
            break
    }

    //Teste - Verificar o símbolo e a taxa de câmbio atribuídos
   
    containerForm.style.height = "340px"
    resultBox.style.display = "flex"

})