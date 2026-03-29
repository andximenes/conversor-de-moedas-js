//Capturam os elementos html

let valueInput = document.querySelector("#value-input")
let currencySelect = document.querySelector("#currency-select")
let exchangeRate = document.querySelector("#exchange-rate")
let convertedValue = document.querySelector("#converted-value")

//Captura as classes css
let container = document.querySelector(".container")
let resultBox = document.querySelector(".result-box")

//Esconde a caixa de resultado e ajusta a altura do container
resultBox.style.display = "none"
container.style.height = "180px"

//Captura o formulário
let form = document.querySelector("form")

//Variáveis de câmbio
let dollar = 5.26 
let euro = 6.04
let pound = 6.97 //libra esterlina

//aplica o método de ouvinte ao formulário para quando for feito o submit, ele execute a função de conversão

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    let value = Number(valueInput.value) //garante que o valor seja um número
    let rate = 0 //taxa de câmbio
    let symbol = ""

    if(valueInput.value === ""){
        alert("Por favor, insira um valor para converter")
        return
    }
    
    if (value <= 0) {
        alert("Insira um valor acima de 0")
        return
    }

    switch (currencySelect.value) {
        case "USD":
            rate = dollar
            symbol = "US$"
            break
        case "EUR":
            rate = euro
            symbol = "€"
            break
        case "GBP":
            rate = pound
            symbol = "£"
            break
    }

    exchangeRate.textContent = `${symbol} 1 = R$ ${rate.toFixed(2)}`
    convertedValue.textContent = `R$ ${(value * rate).toFixed(2)}`
    resultBox.style.display = "flex"
    container.style.height = "300px"
})


