import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {toast} from 'react-toastify';
import {ToastContainer} from 'react-toastify'
import NavBar from './components/Navbar';
import Weather from './components/Weather';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
    state = {}
    render() {
        return (<React.Fragment>
            <NavBar></NavBar>
            <ToastContainer/>
            <div className='d-flex justify-content-center'
                style={
                    {
                        paddingLeft: "0px !important",
                        paddingRight: '0px !important'
                    }
            }>
                <div className=" col-lg-10">
                    <Switch>
                        <Route path='/' render ={(props)=> <Weather {...props}></Weather>}></Route>
                    </Switch>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default App
