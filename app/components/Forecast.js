import React, {PropTypes} from 'react'
import {getDate} from '../utils/utils'
import DayItem from './DayItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

function Loading(props) {
	return (
		<div className="progress">
		  <div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
		    <span className="sr-only">60% Complete (warning)</span>
		  </div>
		</div>
	)
}

function ForecastUI(props) {
	console.log(props);
	return (
		<div style={{textAlign: 'center'}}>
			<h1 style={styles.header}>{props.city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
	      {props.forecast.list.map(function (listItem) {
	        return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
	      })}
    	</div>
    </div>
	)
}

function Forecast(props) {
	return (
		<div>
			{props.isLoading === true
			? <Loading />
			: <ForecastUI
          location={props.location}
          forecast={props.forecast}
          handleClick={props.handleClick} />
		   }
	  </div>
	)
}

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
  forecast: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Forecast