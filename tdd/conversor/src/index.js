const express = require('express')

const port = 3002;
const app = express()

app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello!')
});

function inputValido(temp, de, para) {
    if (temp === null || de === null || para === null) return false
    if (temp === undefined || de === undefined || para === undefined) return false
    if (!(de == 'C' || de == 'K' || de == 'F')) return false
    if (!(para == 'C' || para == 'K' || para == 'F')) return false
    if (isNaN(temp)) return false
    return true
}

function converteTemperatura(temp, de, para) {
    if (de == para) return String(temp)
    temp = Number(temp)
    if (de == 'C') {
        if (para == 'F') {
            return String(1.8 * temp + 32)
        } else if (para == 'K') {
            return String(temp + 273.15)
        }
    } else if (de == 'K') {
        if (para == 'C') {
            return String(temp - 273.15)
        } else if (para == 'F') {
            return String(1.8 * (temp - 273.15) + 32)
        }
    } else {
        if (para == 'C') {
            return String((temp - 32) / 1.8)
        } else if (para == 'K') {
            return String(((temp - 32) / 1.8) + 273.15)
        }
    }
}

app.get('/converterTemperatura', function(request, response) {
    let temp = request.query.valor
    let de = request.query.de
    let para = request.query.para
    if (!inputValido(temp, de, para)) {
        response.send("Dados invalidos!")
    } else {
        response.send(converteTemperatura(temp, de, para));
    }
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});

module.exports = app
