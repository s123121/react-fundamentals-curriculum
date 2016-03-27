import React from 'react'
import {convertTemp} from '../utils/utils'

import DayItem from './DayItem'

var styles = {
  container: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}


function Detail(props) {
	return (
		<div style={styles.container}>
			<DayItem day={props.weather} />
			<div style={styles.container}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {convertTemp(props.weather.temp.min)} degrees</p>
        <p>max temp: {convertTemp(props.weather.temp.max)} degrees</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
    </div>
	)
}

export default Detail