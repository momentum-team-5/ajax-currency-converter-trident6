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
    let targetEl = document.querySelector('.from')
    let option = document.createElement('option')
    option.innerText = currency
    option.value = currency
    targetEl.appendChild(option)
        // console.log(option, 'from')

}

for (let currency of currencies) {
    let targetEl = document.querySelector('.to')
    let option = document.createElement('option')
    option.innerText = currency
    option.value = currency
    targetEl.appendChild(option)
        // console.log(option, 'to')

}