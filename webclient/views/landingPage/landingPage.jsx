import React from 'react';

import LandingPageView from '../../components/landingPage/landingPage';

//This is a view layout, hence avoid putting any business logic
export default class LandingPage extends React.Component {
	render () {
		return <LandingPageView/>
	}
}
