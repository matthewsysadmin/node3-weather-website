const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=75e476b89b8c6c2c66115bbe85175c47&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined) 
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees. It feels like ' + body.current.feelslike + ' degrees. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast