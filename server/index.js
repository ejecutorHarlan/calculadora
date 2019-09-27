//import express from 'express' (no es necesario para este proyecto)
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.get('/getmult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  //console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
      result = firstValue * secondValue


  res.send({ result: result })
})

app.get('/getsum/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  //console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result

      result = firstValue + secondValue


  res.send({ result: result })
})

app.get('/getres/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  //console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result

      result = firstValue - secondValue


  res.send({ result: result })
})

app.get('/getdiv/:firstValue/:secondValue', function (req, res) {
  //console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
      result = firstValue / secondValue


  res.send({ result: result })
})

//localhost por defecto

app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000")
})
