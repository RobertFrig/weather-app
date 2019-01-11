import React, { Component } from 'react';
import Loader from './Loader';
// import { Link } from 'react-router-dom';

// import ZipForm from './ZipForm';

class Forecasts extends Component {
  state = {
    weather: null,
    zip: 20001
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.zip},us&APPID=a120b7d298fcbab2f3556f47d336008c`)
    .then((response) => response.json())
    .then(json => this.setState({ weather: json }));
  }

  handleSubmit(e) {
    // e.preventDefault();
    console.log(e.target.value)
    this.setState({zip: e.target.value})
    // console.log(this.state.zip)
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.zip},us&APPID=a120b7d298fcbab2f3556f47d336008c`)
    // .then((response) => response.json())
    // .then(json => this.setState({ weather: json }));
    // console.log("zip",this.state.zip)
  }

  render() {
    const { weather } = this.state;
    console.log("weather in render",weather)
    console.log("render",this.state.zip)
    return(
      <div>          
        <form onSubmit={this.handleSubmit}>
          <label>
            Zipcode:
            <input type="number" onSubmit={this.handleSubmit}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
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

export default Forecasts;