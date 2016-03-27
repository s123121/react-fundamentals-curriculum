import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer} />
			<Route path='/forecast/:location' component={ForecastContainer} />
			<Route path='/detail/:location' component={DetailContainer} />
		</Route>
	</Router>
);

export default routes