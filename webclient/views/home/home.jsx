import React from 'react';

import HomeView from '../../components/home/home';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	render () {
		return <HomeView/>
	}
}
