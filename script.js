const currenyEl_one = document.getElementById('currency-one')
const currenyEl_two = document.getElementById('currency-two')

const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swapEl = document.getElementById('swap')

//fetch exchange rates and update the DOM
function calculate(){
    const currency_one = currenyEl_one.value
    const currency_two = currenyEl_two.value

    fetch(`https://v6.exchangerate-api.com/v6/10b79ae7b40ea78e0360efa3/latest/${currency_one}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const rate = data.conversion_rates[currency_two]
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })

}


//Event listeners
currenyEl_one.addEventListener('change', calculate)
currenyEl_two.addEventListener('change', calculate)

amountEl_one.addEventListener('input',calculate)
amountEl_two.addEventListener('input',calculate)

swapEl.addEventListener('click', () => {
    const temp = currenyEl_one.value
    currenyEl_one.value = currenyEl_two.value
    currenyEl_two.value = temp
    calculate()
})



