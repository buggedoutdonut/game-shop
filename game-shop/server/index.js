const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const Pool = require('pg').Pool

const connection = new Pool(({
    host:'localhost',
    user:'postgres',
    password:'password',
    port:5432,
    database:'gameDetails',
}))

app.listen(3000, () =>{
    console.log("Server connected.")
})

connection.connect(() => {
    console.log("Database is connected.")
})

app.get('/get',(req,res) =>{
    const query = "Select * from games"
    connection.query(query, (err,result) => {
        if(err){
            res.send(err.message)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/BestSelling',(req,res) =>{
    const query = "Select * from games ORDER BY sold DESC LIMIT 3"
    connection.query(query,(err,result) => {
        if(err){
            res.send(err.message)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/Recommended', (req,res) =>{
    const value = "Yes"
    const query = "Select * from games where recommended = $1 LIMIT 5"
    connection.query(query,[value],(err,result) =>{
        if(err){
            res.send(err.message)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/ReleaseDate', (req,res) =>{
    const query = "Select * from games ORDER BY releasedate DESC LIMIT 5"
    connection.query(query,(err,result) =>{
        if(err){
            res.send(err.message)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/MostWishlisted', (req,res) =>{
    const query = "Select * from games ORDER BY wishlist DESC LIMIT 5"
    connection.query(query,(err,result) =>{
        if(err){
            res.send(err.message)
        } else {
            res.send(result.rows)
        }
    })
})