const express = require ("express")
const https = require("https")
const app = express()

app.get("/",function (req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Bronx&appid=d9b02fbefd5b6c8286dc44178a103af0&units=imperial"

  https.get(url ,function(response){

    response.on("data", function(data){

      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const icon = weatherData.weather[0].icon

      res.write(`<p>The weather is ${weatherData.weather[0].description}</p>`)
      res.write(`<h1>The temp in Bronx is ${temp} Farenheit.</h1>`)
      res.write(`<img src = "http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather"/>`)
      res.send()
    })
  })
})








app.listen(3000, function(){
  console.log("running on p 3000")
})
