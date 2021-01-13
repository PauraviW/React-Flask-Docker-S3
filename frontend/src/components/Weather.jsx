import React, { Component } from 'react'
import UserData from './UserData'
import WeatherForm from './WeatherForm'
class Weather extends Component {
  state = {
    weatherOptions: [],
    headers: [],
    userData: null,
  }
  componentDidMount() {
    const weatherOptions = [
      'Thunderstorm',
      'Drizzle',
      'Rain',
      'Snow',
      'Mist',
      'Clear',
      'Clouds',
    ]

    const headers = [
      { path: 'latitude', label: 'Latitude' },
      { path: 'longitude', label: 'Longitude' },
      { path: 'radius', label: 'Within Miles' },
      { path: 'weather', label: 'Favourite Weather' },
    ]

    this.setState({ weatherOptions, headers })
  }

  render() {
    return (
      <React.Fragment>
        <main className="border  border-dark rounded my-4 ">
          <div className="content  ">
            <div className="p-2  bg-color    justify-content-left  text-light">
              {' '}
              <div className="mx-3 ">Your Details Please</div>
            </div>
            <div className="" style={{ backgroundColor: '#FFECF5' }}>
              <div className="justify-content-left">
                <div className="mx-3 pt-1 ">
                  Please enter your current location and the maximum distance
                  that you wish to travel
                </div>
              </div>
              <div style={{ paddingTop: '7px' }} className="">
                <WeatherForm
                  userData={this.state.userData}
                  weatherOptions={this.state.weatherOptions}
                  headers={this.state.headers}
                  data={this.state.userData}
                  {...this.props}
                ></WeatherForm>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default Weather
