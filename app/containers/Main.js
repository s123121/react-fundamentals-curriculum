import React from 'react'

import Navbar from '../components/Navbar'

const Main = React.createClass({
	render: function() {
		return (
			<div style={{width: '100%', height: '100%' }}>
				<Navbar />
				{this.props.children}
			</div>
		);
	}
});

export default Main