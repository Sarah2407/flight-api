let allFlights = require("../models/Flight");

const { v4: uuidv4 } = require('uuid');


const flights = (req, res) => {
    console.log(allFlights)
    res.send(allFlights);
}

const newFlight = (req, res) => {
    const flight = req.body;
    const flightWithId = {...flight, id: uuidv4()}
    allFlights.push(flightWithId);
    res.send(`Flight with title ${flight.title} added`);
}

const updateFlight = (req, res) => {
    const id = req.params.id;
    const { title, time, price, date } = req.body;

    const flight = allFlights.find((flight) => flight.id === id);

    if (title) flight.title = title;
    if (time) flight.time = time;
    if (price) flight.price = price;
    if (date) flight.title = date;

    res.send(`Flight with id ${id} updated`);
}

const deleteFlight = (req, res) => {
    const id = req.params.id;
    allFlights = allFlights.filter((flight) => flight.id !== id);
    res.send(`Flight with id ${id} removed`);
}

const getFlight = (req, res) => {
    const id = req.params.id;
    const foundFlight = allFlights.find((flight) => flight.id === id);
    res.send(foundFlight);
}


module.exports = {
    newFlight,
    updateFlight,
    deleteFlight,
    getFlight,
    flights
}