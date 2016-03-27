import axios from 'axios'

const default_url = 'http://api.openweathermap.org/data/2.5/'
const app_id = 'b714ec74bbab5650795063cb0fdf5fbe' || 'efcc82d15c481677073eb7f899212f80'

function getCurrentWeather(location) {
	const param = `weather?q=${location}type=accurate&APPID=${app_id}`
	return axios.get(default_url + param)
		.then( function(currentWeatherData) {
			return currentWeatherData.data
		});
}

function getForecast(location) {
	const param = `forecast/daily?q=${location}&type=accurate&APPID=${app_id}&cnt=5`
	return axios.get(default_url + param)
		.then(function(forecastData) {
			return forecastData.data
		});
}

export function getWeatherData(location) {
	return axios.all(
			[getCurrentWeather(location), getForecast(location)]
		).then( function(data) {
			return data;
		});
}
