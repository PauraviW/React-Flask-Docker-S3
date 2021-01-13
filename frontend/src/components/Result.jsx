import React, { Component } from 'react'

class Result extends Component {
  state = {}
  render() {
    const { data: parks } = this.props
    return (
      <div className="row">
        {parks.map((park) => (
          <div className="col-lg-4" key={park['id']}>
            <div className="park-card ">
              <div
                className="panel  panel-primary border border-dark rounded "
                style={{ minHeight: '600px; !important' }}
              >
                <div className="bg-color text-light">
                  <div className="panel-heading   text-left panel-title text-light">
                    <div
                      style={{
                        paddingTop: '2px',
                        paddingLeft: '4px',
                        fontSize: '20px',
                        paddingBottom: '4px',
                      }}
                    >
                      <a href={park['url']} target="_blank">
                        {park['name']}
                      </a>
                    </div>

                    <div>
                      <div
                        style={{
                          color: 'black',
                          fontSize: '12px',
                          paddingTop: '2px',
                          paddingLeft: '4px',
                        }}
                        className="text-light card-subtitle   "
                      >
                        {park['address']}
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table mb-0"
                  style={{ backgroundColor: '#fff' }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <b>Best Date:</b>
                      </td>
                      <td className="label-info">
                        <b>{park['idate']}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Distance:</td>
                      <td>About {park['distance']} miles</td>
                    </tr>
                    <tr>
                      <td>Weather:</td>
                      <td>{park['mainWeather']}</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                      <td>{park['desc']}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Temperature (Day and Night):</b>
                      </td>
                      <td className=" font-cell table-cell">
                        {park['temp_day']} &#8457;
                      </td>
                      <td className="font-cell table-cell">
                        {park['temp_night']} &#8457;
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Feels Like (Day and Night):</b>
                      </td>
                      <td className="font-cell table-cell">
                        {park['feels_day']} &#8457;
                      </td>
                      <td className="font-cell table-cell">
                        {park['feels_night']} &#8457;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Result
