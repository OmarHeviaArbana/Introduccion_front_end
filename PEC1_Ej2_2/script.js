const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const amount_one = parseFloat(amountEl_one.value);
  
  rateEl.innerText = 'Calculating exchange rates...';

  if (amount_one < 0 || isNaN(amount_one)) {
    alert("Please enter a positive amount.");
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => {
    if (res.status != 200) {
      throw new Error('Some error occurred while exchange rates was calculating.Please, try again.');
    }
    return res.json();
    })
    .then(data => {
      const rate = data.rates[currency_two];
      console.log(rate);
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
    .catch(error => {
      rateEl.innerText = `Error: ${error.message}`;
    });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();