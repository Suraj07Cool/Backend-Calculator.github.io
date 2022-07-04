//Express.js is a node.js web application server framework, designed for building single page, multi page and hybrid web applications.
//It has been called the de facto standard server framework for node js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Welcome to suraj world")
})
app.get("/about", (req, res) => {
    res.send("Hola from about page")
})
app.get("/contact", (req, res) => {
    res.send("HEEELO from contact side page")
})
app.get("/calculator", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/calculator", (req, res) => {
    let n1 = Number(req.body.v1)
    let n2 = Number(req.body.v2)
    console.log(n1, n2)
    let sum = n1 + n2
    res.send(`The sum of two number is ${sum}`)
})
app.listen(3000, (req, res) => {
    console.log("Server is running at port no 3000")

})