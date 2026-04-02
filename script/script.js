//taxas
let USD = 5.17
let EUR = 5.96
let GBP = 6.83

//variáveis elementos html
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

//Obtem o valor
amount.addEventListener("input", () => {
    //testa o recebimento do valor
    //console.log(`Amount: ${amount.value}`)

    //Substitui letras por vazio
    const regex = /\D+/g
    amount.value = amount.value.replace(regex, "")

    // Teste
    //console.log(`Value: ${amount.value}`)
})

//Obtem o tipo de moeda
// currency.addEventListener("input", () => {
//     console.log(`Currency: ${currency.value}`)
// })

//converte moeda
function convertCurrency(amount, price, symbol) {
    //console.log(`Amount: ${amount}, Price: ${price}, Symbol: ${symbol}`)


    try {
        // Exibindo a contação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calcula o total e mostra o resultado
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `${total} Reais `

        //Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        //Remove a classe do footer do formulário
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde")
    }
}

//Formata a moeda em real brasileiro
function formatCurrencyBRL (value) {
    //converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()


    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$" )
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€" )
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£" )
            break
    }
    
    
})