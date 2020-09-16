const express = require("express");
const router = express.Router();
const request = require("request");

const City = require("../model/City");

router.get("/city/:cityName", function (req, res) {
  request.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&APPID=a204c0950b7058d054f8861187b6e948`, function (error, response, body){
        if (!error) {
            res.send(body)
        }
    })
})


router.get("/cities/", function (req, res) {
  City.find({}, function (err, cities) {
    res.send(cities);
  });
});

router.post("/city/", function (req, res) {
  let c1 = new City({
    name: req.body.name,
    temperature: req.body.temperature,
    conditions: req.body.conditions,
    conditionPic: req.body.conditionPic,
  });
  c1.save();
  res.end();
});

router.delete("/city/:cityName", function (req, res) {
  City.find({ name: req.params.cityName }).deleteOne().exec();
  res.end();
});

module.exports = router;
