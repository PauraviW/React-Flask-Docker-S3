import http from './httpService'
import {config} from './../config/config'


export function getWeatherData(data) {
    const apiEndpoint = config.API_ENDPOINT

    let url = apiEndpoint + 'latitude/' + data.latitude + '/longitude/' + data.longitude

    if (data.radius) {
        url += '?radius=' + data.radius
    } else {
        url += '?radius=100000'
    }
    if (data.weather) {
        url += '&weather=' + data.weather
    }

    return http.get(url)
}
