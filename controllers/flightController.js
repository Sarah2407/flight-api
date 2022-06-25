const data = {};
data.flights = require("../models/Flight");

const newFlight = (req, res) => {
    res.json({
        "title": req.body.name,
        "time": req.body.airport,
        "price": req.body.destination,
        "date": req.body.date
    })
}

const updateFlight = (req, res) => {
    res.json({
        "title": req.body.name,
        "time": req.body.airport,
        "price": req.body.destination,
        "date": req.body.date
    })
}

const deleteFlight = (req, res) => {
    res.json({
        "id": req.body.id
    })
}

const getFlight = (req, res) => {
    res.json({
        "id": req.params.id
    })
}

const flights = (req, res) => {
    console.log("example")
    res.send(data.flights);
}

module.exports = {
    newFlight,
    updateFlight,
    deleteFlight,
    getFlight,
    flights
}