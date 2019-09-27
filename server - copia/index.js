//import express from 'express' (no es necesario para este proyecto)
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  //console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
  switch (req.params.selectedOperator) {
    case '*':
      result = firstValue * secondValue
      break
    case '+':
      result = firstValue + secondValue
      break
    case '-':
      result = firstValue - secondValue
      break
    case '/':
      result = firstValue / secondValue
      break
    case 'M+':
    case 'M-':
      result = mem
      break
    default:
      break  
  }
  res.send({ result: result })
})
 
//localhost por defecto

app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000")
})
