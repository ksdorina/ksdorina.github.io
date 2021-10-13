const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json());


app.get('/termekek', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'butorokadatb'
    })
    
    connection.connect()
    
    connection.query('SELECT * FROM butorok', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows);
      res.send(rows);
    })
    
    connection.end()
})


app.post('/termek_felvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'butorokadatb'
    })
    
    connection.connect()
    
    
    connection.query('INSERT INTO butorokadatb.butorok (id, név, ár, szín, méret, anyag) VALUES (NULL, "'+req.body.bevitel1+'", '+req.body.bevitel2+', "'+req.body.bevitel3+'", "'+req.body.bevitel4+'", "'+req.body.bevitel5+'");', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows);
      res.send(rows);
    })
    
    connection.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})