
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none'; 
    });
    document.getElementById(pageId).style.display = 'block';
  }
  document.getElementById('home-btn').addEventListener('click', () => showPage('home-page'));
  document.getElementById('weather-btn').addEventListener('click', () => showPage('weather-page'));
  document.getElementById('quiz-btn').addEventListener('click', () => showPage('quiz-page'));
  document.getElementById('quotes-btn').addEventListener('click', () => showPage('quotes-page'));
  async function getWeather() {
    const apiKey = '8338b3c3ab244be9a0280122252501'; 
    const city = 'india'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const description = data.current.condition.text;
      const temperature = data.current.temp_c; 
      document.getElementById('weather-description').textContent = description;
      document.getElementById('temperature').textContent = `${temperature}°C`;
  
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  let quoteIndex = 0;
  const quotes = [
    '“Believe in yourself and all that you are.”',
    '“You are never too old to set another goal or to dream a new dream.”',
    '“Your limitation—it’s only your imagination.”',
    '“Push yourself, because no one else is going to do it for you.”',
  ];
  
  function updateQuote() {
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = quotes[quoteIndex];
  }
  
  document.getElementById('next-quote').addEventListener('click', () => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    updateQuote();
  });
  
  document.getElementById('prev-quote').addEventListener('click', () => {
    quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
  });
  document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const exercise = document.getElementById('exercise').value;
    const stress = document.getElementById('stress').value;
  
    let wellnessTip = '';
  
    if (exercise === 'daily' && stress === 'low') {
      wellnessTip = 'Great job! Keep up the excellent work to stay healthy and stress-free!';
    } else if (exercise === 'few-times-week' && stress === 'moderate') {
      wellnessTip = 'Try to exercise more frequently and consider stress-reduction techniques like meditation.';
    } else {
      wellnessTip = 'You might benefit from incorporating regular exercise and relaxation techniques into your routine.';
    }
  
    document.getElementById('wellness-tip').textContent = wellnessTip;
  });
  getWeather();
  updateQuote();
  