import React, { Component } from 'react'
import _ from 'lodash'
class Table extends Component {
  createkey = (item, header) => item.id + header

  rendercell = (item, header) => {
    return _.get(item, header)
  }
  state = {}
  render() {
    const { data, headers } = this.props
    return (
      <table className="table  table-bordered border border-shadow rounded">
        <thead className="text-dark ">
          <tr>
            {headers.map((header) => (
              <th key={header.path} scope="col">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {headers.map((header) => (
                <td key={this.createkey(item, header.path)}>
                  {this.rendercell(item, header.path)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
