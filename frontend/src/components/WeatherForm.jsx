import React from 'react'
import { toast } from 'react-toastify'
import Joi from 'joi-browser'
import Form from './common/Form'
import UserData from './UserData'
import Result from './Result'

import { getWeatherData } from './../services/weatherService'
class WeatherForm extends Form {
  state = {
    userData: null,
    data: { latitude: '', longitude: '', radius: '', weather: '', id: 1 },
    errors: {},
    result: null,
    loading: false,
  }

  schema = {
    latitude: Joi.number().required().label('Latitude'),
    longitude: Joi.number().required().label('Longitude'),
    radius: Joi.number().label('Within Miles').min(0).allow(null, ''),
    weather: Joi.string().label('Favourite Weather').allow(null, ''),
    id: Joi.number().required().label('ID'),
  }
  async doSubmit(data) {
    // e.preventDefault()
    // const { data } = this.state
    this.setState({ loading: true, result: [] })
    let userData = []
    data['id'] = 1

    userData.push(data)
    this.setState({ data, userData: userData })
    const result = await getWeatherData(data)
    if (result && result.data.parks.length === 0)
      toast.error('Sorry! No parks match your criteria')
    this.setState({ result: result.data.parks, loading: false })
  }
  render() {
    return (
      <React.Fragment>
        <div className="" style={{ backgroundColor: '#FFECF5' }}>
          <form
            name="userForm"
            className="form mx-2  border border-shadow rounded"
            onSubmit={this.handleSubmit}
          >
            <div className="row m-2 justify-content-center">
              {this.renderInput(
                'latitude',
                'Your latitude',
                'number',
                true,
                '',
              )}
              {this.renderInput(
                'longitude',
                'Your longitude',
                'number',
                true,
                '',
              )}

              {this.renderInput(
                'radius',
                'Within Miles:',
                'number',
                false,
                '0',
              )}
              {this.renderSelect(
                'weather',
                'Weather',
                this.props.weatherOptions,
              )}
            </div>
            <div className="row justify-content-center">
              {this.renderButton("Let's find the best parks for you!")}
            </div>
          </form>
          {this.state.userData && (
            <UserData
              headers={this.props.headers}
              userData={this.state.userData}
            ></UserData>
          )}
        </div>
        {this.state.result && (
          <div className="justify-content-center mx-2 ">
            <Result
              headers={this.props.headers}
              data={this.state.result}
            ></Result>
          </div>
        )}
        {this.state.loading && (
          <div className=" row justify-content-center">
            <div class="spinner-border text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default WeatherForm
