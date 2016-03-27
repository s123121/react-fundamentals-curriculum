import React from 'react'
import GetLocation from '../components/GetLocation'

const styles = {
	container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
	header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  }
};

const HomeContainer = React.createClass({
	render: function() {
		return(
			<div style={styles.container}>
				<h1 style={styles.header}> Enter a City </h1>
				<GetLocation />
			</div>
		);
	}
});

export default HomeContainer