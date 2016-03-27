import React,{PropTypes} from 'react'

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

const GetLocation = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },
	getInitialState: function() {
		return {
			location: ''
		}
	},
	handleUpdateLocation: function(e) {
		this.setState({
			location: e.target.value
		});
	},
	handleSubmitLocation: function(e) {
		e.preventDefault();
		this.context.router.push('/forecast/' + this.state.location);
	},
	render: function() {
		return (
			<form style={getStyles(this.props)} className={this.props.className} onSubmit={this.handleSubmitLocation}>
					<input
						className="form-control"
						placeholder="Enter city name"
						onChange={this.handleUpdateLocation}
						value= {this.state.location}
						type="text" />
				<button type="submit" style={{margin: 10}} className="btn btn-success">Get weather</button>
			</form>
		)
	}
});

export default GetLocation
