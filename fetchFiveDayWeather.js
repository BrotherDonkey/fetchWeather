'use strict';

const http = require('http');
const https = require('https');
const getDate = require('./getDate');
const printDate = require('./printDate');

const getYourOwn = "ac0079cb7f71dd021e4657610298c4df";
//please branch and get your own API from https://openweathermap.org/api

const fetchWeather = function() {
  const argv = process.argv.slice(2).join("_").replace(' ', '_');

  if (argv === ""){
    console.log('no city input')
  }

  else {
          const cityName = argv;
          const measurementSystem = "imperial";
          //to change to metric, change "imperial" above to "metric";
          const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&APPID=${getYourOwn}&mode=json&units=${measurementSystem}`;

          const request = http.get(url, request => {
          let responseBody = '';
          request.on('data', chunk => {
            responseBody += chunk;
          });

          request.on('end', () => {
            const weather = JSON.parse(responseBody);
            // console.log(responseBody);

            const fiveDayWeather = weather.list;

            let refinedFiveDayWeather = fiveDayWeather.map(function(weatherInstance){
              //separate useful value and return new object
              let WeatherObject = {};
              WeatherObject['city'] = weather.city.name;
              WeatherObject['timeString'] = printDate.printTime(weatherInstance.dt_txt);
              WeatherObject['date'] = printDate.printDay(weatherInstance.dt_txt);
              WeatherObject['temperature'] = weatherInstance.main.temp;
              WeatherObject['description'] = weatherInstance.weather[0].description;
              WeatherObject['overview'] = weatherInstance.weather[0].main;
              WeatherObject['iconUrl'] = `http://openweathermap.org/img/w/${weatherInstance.weather[0].icon}.png`;
              WeatherObject['time'] = getDate.getTime(weatherInstance.dt);
              return(WeatherObject);

          });

          console.log(refinedFiveDayWeather);

          refinedFiveDayWeather.forEach( function(weatherInput){
            console.log(`The weather in ${weatherInput.city} on ${weatherInput.date} at ${weatherInput.time} will be ${weatherInput.description} with an average temperature of ${weatherInput.temperature}.`)

          })


          return refinedFiveDayWeather;
          }) // end request end
        }) //end http.get
    }; //end else statement
}

module.exports.fetchWeather = fetchWeather;
