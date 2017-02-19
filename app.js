'use strict';

const fetchFiveDayWeather = require ('./fetchFiveDayWeather.js');

try {
  fetchFiveDayWeather.fetchWeather();

  console.log('The weather in ${weatherObject.city} on ${weatherObject.date} at ${weatherObject.time} will be ${weatherObject.description} with an average temperature of ${weatherObject.temperature}.')

} catch (error) {
  console.error(`An error occurred: (${error.message})`);
}
