window.onload = function () {

  const waitTime = 1000; // 1 second
  const btnWeather = document.getElementById('btn-get-weather');
  const valueSummary = document.getElementById('value-summary');
  const valueTemperature = document.getElementById('value-temperature');
  const valuePressure = document.getElementById('value-pressure');
  const valueHumidity = document.getElementById('value-humidity');
  const valueWindspeed = document.getElementById('value-windspeed');
  const url = 'https://api.forecast.io/forecast/2cdc91e6ecd2224868d69675c6b88b0d/49.9935,36.2304?si';

  const waitBeforeRequest = () => new Promise(resolve => {
    btnWeather.disabled = true;
    btnWeather.classList.add('btn-danger');
    valueSummary.innerHTML = '';
    valueTemperature.innerHTML = '';
    valuePressure.innerHTML = '';
    valueHumidity.innerHTML = '';
    valueWindspeed.innerHTML = '';

    setTimeout(() => {
      return resolve();
    }, waitTime);
  });
  const showWeather = weather => {
    valueSummary.innerHTML = weather.currently.summary;
    valueTemperature.innerHTML = `${weather.currently.temperature} &deg; C`;
    valuePressure.innerHTML = `${(weather.currently.pressure / 1.3332).toFixed(2)} mmHg`;
    valueHumidity.innerHTML = `${weather.currently.humidity}`;
    valueWindspeed.innerHTML = `${weather.currently.windSpeed} m/sec`;
  }
  const unblockButton = () => {
    btnWeather.disabled = false;
    btnWeather.classList.remove('btn-danger');
  }
  const getWeatherWithTimeout = () =>
    waitBeforeRequest()
    .then(() => fetch(url))
    .then(res => res.json())
    .then(res => showWeather(res))
    .then(() => unblockButton())
    .catch((err) => {
      console.log('Something went wrong.', err);
      // handle error
    });

  btnWeather
    .addEventListener('click', () => getWeatherWithTimeout());

}