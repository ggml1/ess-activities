# TDD (Test-driven Development)

Those tasks aim at providing the programmer a feel of what it's like to use this culture when creating software. Two exercises are contained here and will be described below.


## Triangle

On `index.js`, it is defined a triangle class, which contain some functions we'll use to test whether a triangle is valid and, if so, what is its type (equilateral, isosceles or scalene).

To run the tests, enter this command while on the topmost level of the  `/triangulos` folder.
```bash
$ npm test
```

## Temperature Conversor
This app is a simple HTTP API that converts a given temperature from one scale to another (supports Kelvin, Fahrenheit and Celsius).
### Usage
To setup the HTTP server, run:
```bash
$ node index.js
```
The server will listen on port `3002` at the  `/converterTemperatura` endpoint. To query for a conversion, issue a `GET` request at this endpoint, following the sample above:
> http://localhost:3002/converterTemperatura?valor=X&de=Y&para=Z

This will convert temperature X in scale Y to scale Z, where:
- X = temperature value (any integer number)
- Y / Z = temperature scale, following the format below:
	- C (Celsius)
	- F (Fahrenheit)
	- K (Kelvin)


To run the tests, enter the following command on the topmost level of the `/conversor` folder (and make sure the server is not up while doing so):
```bash
$ npm test
```

