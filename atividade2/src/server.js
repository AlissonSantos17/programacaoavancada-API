const express = require('express');
const app = express();
const moment = require('moment');

const Student = require('./class/Student')

app.use(express.json());

app.post('/estudante', (req, res) => {
  let dateNow = moment().format('YYYY-MM-DD HH:mm:ss')
  const student = new Student(req.body.id, req.body.registration, req.body.name, dateNow);
  
  if(student.name === "Marcio") {
    return res.status(202).json(`estudante é ${student.name}`)
  } else {
    return res.status(400).json({status: false})
  }
});

app.get('/home', (req, res) => {
  return res.status(201).json('Home da API')
});

app.put('/estudante', (req, res) => {
  let dateNow = moment().format('YYYY-MM-DD HH:mm:ss')
  const student = new Student(req.body.id, req.body.registration, req.body.name, dateNow);
  
  if(student.id === null) {
    return res.status(406).json({status: false})
  } else {
    return res.status(200).json({status: "OK"})
  }
  
}); 
app.listen(3000, () => {
  console.log('Server running in localhost:3000!')
})