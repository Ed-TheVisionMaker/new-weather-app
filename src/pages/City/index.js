import React from "react";
import axios from "axios";

// import DisplayData from "../../components/display/DisplayData"

export default class City extends React.Component {
  state = {
    data: null,
    isLoading: false,
    isError: false,
  };

    getCityData = async (city) => {
      try {
          this.setState({ isLoading: true });
          const apiKey = "360c24ca8f6f6c57345a7685b6ca7548";
          const geoCodeUrl = await axios(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
          );

          let cityLat;
          let cityLong;
      
          geoCodeUrl.data.find(returnedCities => {
            if (returnedCities.name === city) {
                cityLat = returnedCities.lat;
                cityLong = returnedCities.lon;
              }
            return (cityLat, cityLong);
              })
  
          const cityData = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=${apiKey}&units=metric`)
              this.setState({ data: cityData, isLoading: false})

      } 
        catch(error) {
                  console.log("error in API call, city page");
        };
    };

   componentDidMount() {
    const cityId = this.props.match.params.cityId;
    this.getCityData(cityId);
      }

  render() {
    const cityId = this.props.match.params.cityId;
    const hasData = !this.state.isLoading && this.state.data;
    return (
      <div>
      <div>{cityId} this is city page</div>
      </div>
    )
  }
}
