import React from 'react';



class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {weather: "Loading... Wakaaa"};

    this.getWeather= this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getWeather() {
    const lat = this.state.lat;
    const lon = this.state.lon;

    var xhttp = new XMLHttpRequest();
    const that = this;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        that.setState({weather: JSON.parse(xhttp.responseText)});
      }
      console.log(xhttp);
      console.log(that.state.weather);
    };

    xhttp.open("GET", 
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d3147be4176ce0da84db61aa737bc203`,
               true);
    xhttp.send();
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {lat: position.coords.latitude, lon: position.coords.longitude },
        this.getWeather
      );
    }); 
  }

  render(){
    const weather = this.state.weather;
    const city = weather.main ? weather.name : "";
    const temp = weather.main ? parseInt((weather.main.temp - 273.15) * 9 / 5 + 32) : "Loading..."
    console.log(weather);
    return (
      <div>
        {city}
        <div></div>
        {temp}
      </div>
    );
  }


}
//d3147be4176ce0da84db61aa737bc203 API KEY
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//navigator.geolocation.getCurrentPosition( (position) => console.log(position) ); 
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
//(0K − 273.15) × 9/5 + 32 = -459.7°F

export default Weather;