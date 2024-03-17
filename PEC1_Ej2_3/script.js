const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const amountEl_two = document.querySelectorAll(' #movie option');
const currency = document.getElementById('currency');
const currency_selected = currency.querySelector('option[selected]')




populateUI();

let ticketPrice = +movieSelect.value;
let currencyInitial = currency_selected.value;

calculate(movieSelect.value)


function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice + currencyInitial;
  
  setMovie(movieSelect.selectedIndex, movieSelect.value);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

function calculate(movie) {

  const currency_one = currencyInitial
  const currency_two = currency.value
  const amount_one = movie;
  
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => {
    if (res.status != 200) {
      throw new Error('Some error occurred while exchange rates was calculating.');
    }
    return res.json();
    })
    .then(data => {
      const rate = data.rates[currency_two];
      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const selectedSeatsCount = selectedSeats.length;
      const options = document.querySelectorAll('#movie option');
      const price = +(amount_one * rate).toFixed(2) 
      total.innerText = selectedSeatsCount * price + currency_two;
      
      options.forEach(option => {
        const amount_one = option.value;
        const priceText = +(amount_one * rate).toFixed(2) 
        const optionText = option.textContent.trim();
    
        const lastNumberMatch = optionText.match(/\d+(\.\d+)?\D*$/);

        if (lastNumberMatch) {
          const lastNumberIndex = lastNumberMatch.index;
          const titleMovie = optionText.substring(0, lastNumberIndex).trim();
          const newOptionText = titleMovie + ' ' + priceText; 
          option.textContent = newOptionText + currency_two; 

        } else {
          option.textContent = optionText + ' ' + priceText + currency_two; 
        }  
      });
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
    return;
  }); 
}
  

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  calculate(e.target.value)
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    calculate(movieSelect.value)
    updateSelectedCount();
  }
});

currency.addEventListener('change', e=> {
  calculate (movieSelect.value)
});

updateSelectedCount();