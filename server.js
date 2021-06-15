const express = require("express")
const mongoose = require("mongoose")

const Form = require("./models/user")

const app = express()
const dbURI = "mongodb+srv://admin:kada1234@cluster0.g3xuu.mongodb.net/formUsers?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(data=> {
        app.listen(4000)
        console.log("db connected")
    })
    .catch(err=>{
        console.log(err)
    })

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.render("index", {title:"Home"})
})
app.get("/success", (req, res)=>{
    res.render("success", {title:"success"})
})
app.get("/form", (req, res)=>{
    res.render("form", {title:"form"})
})
app.post("/form", (req, res)=>{
    const form = new Form(req.body)
    form.save()
        .then(data=>{
            res.redirect("/success")
        })
        .catch(err=> console.log(err))
})

app.use((req, res)=>{
    res.status(404).render("404", {title:"404"})
})