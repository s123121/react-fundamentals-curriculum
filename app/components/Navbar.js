import React from 'react'
import GetLocation from './GetLocation'

function Navbar(props) {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">mWeather</a>
				</div>
				<GetLocation className='nav-form navbar-right' direction='row'/>
			</div>
		</nav>
	);
}

export default Navbar