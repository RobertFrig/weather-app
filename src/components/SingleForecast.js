import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleForecast extends Component {
  state = {
    weather: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${id},us&APPID=a120b7d298fcbab2f3556f47d336008c`)
    .then((response) => response.json())
    .then(json => this.setState({ weather: json }));
  }

  render() {
    const { weather } = this.state;
    return (
      <div>
        { weather === null && <Loader />}
        { weather !== null && weather.cod === "404" && <p>Location at { this.state.zip } not found</p>}
        { weather !== null && weather.cod !== "404"
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

export default SingleForecast;