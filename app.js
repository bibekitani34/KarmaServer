const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send({
    name: 'Archie Doe',
    age: 30
  })
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})