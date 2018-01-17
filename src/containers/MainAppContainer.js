import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import WeatherLink from '../components/WeatherLink.js'

class MainAppContainer extends React.Component {
    constructor (props)
    {
        super(props);
    }
    render ()
    {
        return <div>One Love <WeatherLink/></div>
    }
}

export default MainAppContainer
