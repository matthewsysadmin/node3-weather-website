const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWF0dGhld2hhcnJpc29ubm9kZWpzIiwiYSI6ImNrZjcybnVoNjBiYmkyeGxiNHE0cXdwbGkifQ.T2SQ-r7BeY-xRi8DCoZ8jg&limit=1'

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined) 
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode