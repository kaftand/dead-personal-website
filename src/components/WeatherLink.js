import React, {Component} from 'react';
import UnSelectedWeather from '../assets/images/weather.png'
import SelectedWeather from '../assets/images/weatherColorized.png'

console.log(SelectedWeather)

class WeatherLink extends Component
{
    constructor(props)
    {
        super(props)
        //this.selected = props.selected
    }
    render ()
    {
            return <img src={SelectedWeather} />
    }
}

export default WeatherLink
