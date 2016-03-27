import React from 'react'
import {getWeatherData} from '../utils/weatherHelpers'

import Forecast from '../components/Forecast'

const ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired,
	},
	handleClick: function(weather) {
		this.context.router.push({
  		pathname: '/detail/' + this.props.routeParams.city,
	   	state: {
	      weather: weather
	    }
		})
	},
	getInitialState: function() {
		return {
			isLoading: true,
			forecastData: {}
		}
	},
	componentDidMount: function() {
		console.log(this);
		getWeatherData(this.props.params.location)
			.then(function(data) {
				console.log('data is :', data[1]);
				this.setState({
					isLoading: false,
					forecastData: data[1]
				});
			}.bind(this))
			.catch(function(err) {
				console.warn(err);
			})
	},
	render: function() {
		return(
			<Forecast
				location={this.props.routeParams.location}
				isLoading={this.state.isLoading}
				forecast={this.state.forecastData}
				handleClick={this.handleClick} />
		);
	}
});

export default ForecastContainer