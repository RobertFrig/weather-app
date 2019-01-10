import React, { Component } from 'react';
import Loader from '../../components/Loader';

class Forecast extends Component {
  state = {
    weather: null,
    zip: 20001
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=20001,us&APPID=a120b7d298fcbab2f3556f47d336008c`)
    .then((response) => response.json())
    .then(json => this.setState({ weather: json }));
  }

  onNewZip = e => {
    const { zip } = this.state.zip;
    // console.log("onnewzip",zip)
    this.setState({zip: e.target.value})
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip},us&APPID=a120b7d298fcbab2f3556f47d336008c`)
    .then((response) => response.json())
    .then(json => this.setState({ weather: json }));
  }

  render() {
    const { weather, zip } = this.state;
    console.log("weather in render",weather)
    console.log("render",zip)
    return(
      <div>          
        <input 
          type="number"
          maxLength="5" 
          onsubmit={this.onNewZip} />
          <input type="submit" value="Submit"/>

        { weather === null && <Loader />}
        { weather !== null
        &&
        <div>
          <h3>Weather for {weather.name}</h3>
          <h3>The current temperature is {Math.round((weather.main.temp - 273.15) * 9/5 + 32)}°F</h3>
          <h3>Today's high is {Math.round((weather.main.temp_max - 273.15) * 9/5 + 32)}°F</h3>
          <h3>Today's low is {Math.round((weather.main.temp_min - 273.15) * 9/5 + 32)}°F</h3>
        </div>
        }
      </div>
    )
  }
};

export default Forecast;