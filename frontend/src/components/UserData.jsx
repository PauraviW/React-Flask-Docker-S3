import React, { Component } from 'react'
import Table from './common/Table'

class UserData extends Component {
  state = {}
  render() {
    let headers = {}

    return (
      <div className="col-lg-12 pt-2">
        <div className="panel panel-primary">
          <div className="panel-heading panel-title text-left">
            <div className="p-2  bg-color    justify-content-left  text-light">
              {' '}
              <div className="mx-3 ">Your Preferences</div>
            </div>
            <Table
              onUserData={this.props.onUserData}
              headers={this.props.headers}
              data={this.props.userData}
            ></Table>
          </div>
        </div>
      </div>
    )
  }
}

export default UserData
