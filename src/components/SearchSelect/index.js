import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SearchSelect extends React.Component {
  state = {
    inputValue: "",
    cities: ["London", "Monaco"],
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newCity = this.state.inputValue;
    this.setState({ inputValue: "", cities: [...this.state.cities, newCity] });

  };

  handleRemove = (city) => {
    const newCities = this.state.cities.filter((element) => element !== city);
    this.setState({ cities: newCities });
  };

  render() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} />
          </form>
          <ul>
            {this.state.cities.map((city) => (
              <li>
                <Link to={{pathname: `/city/${city}`, state: this.state}}>{city} this is the link</Link>
                <button onClick={() => this.handleRemove(city)}>Clear</button>
              </li>
            ))}
          </ul>
        </nav>
    );
  }
}
