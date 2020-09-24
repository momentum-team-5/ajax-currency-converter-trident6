const currencies = [
    'EUR',
    'CAD',
    'HKD',
    'ISK',
    'PHP',
    'DKK',
    'HUF',
    'CZK',
    'AUD',
    'RON',
    'SEK',
    'IDR',
    'INR',
    'BRL',
    'RUB',
    'HRK',
    'JPY',
    'THB',
    'CHF',
    'SGD',
    'PLN',
    'BGN',
    'TRY',
    'CNY',
    'NOK',
    'NZD',
    'ZAR',
    'USD',
    'MXN',
    'ILS',
    'GBP',
    'KRW',
    'MYR'
]
const userUrl = 'https://api.exchangeratesapi.io/latest?base='

// const targetEl = document.querySelector('#curSelect')


for (let currency of currencies) {
    let targetEl = document.querySelector('.from_currency')
    let option = document.createElement('option')
    option.innerText = currency
    option.value = currency
    targetEl.appendChild(option)
        // console.log(option, 'from')

}

for (let currency of currencies) {
    let targetEl = document.querySelector('.to_currency')
    let option = document.createElement('option')
    option.innerText = currency
    option.value = currency
    targetEl.appendChild(option)
        // console.log(option, 'to')
}

//start here

const from_currency = document.getElementById("from_currency")
const from_amount = document.getElementById("from_amount")
const to_currency = document.getElementById("to_currency")
const to_amount = document.getElementById("to_amount")
const rate = document.getElementById("rate")
const exchange = document.getElementById("exchange")

for (let currencyCode of currencies) {
    const option = document.createElement("option")
    option.textContent = currencyCode
    option.value = currencyCode
    from_currency.appendChild(option)
}

from_currency.value = 'USD'

for (let currencyCode of currencies) {
    const option = document.createElement("option")
    option.textContent = currencyCode
    option.value = currencyCode
    to_currency.appendChild(option)
}

exchange.addEventListener("click", function() {

        fetch("https://api.exchangeratesapi.io/latest?base=" + from_currency.value)
            .then(function(response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                console.log(data.rates[to_currency.value])
                    // get amount from_amount ; then convert to to_currency

                const convertedAmt = from_amount.value * data.rates[to_currency.value]
                console.log(convertedAmt)
                to_amount.value = convertedAmt
            });
    })
    //when exchange button is clicked use the convertRate function
    //to pull the fetch info from the api and convert the data.