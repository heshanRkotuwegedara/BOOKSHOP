const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");

const app = express();

//middlewares
app.use(express.json());
app.use("/books",router) //localhost:500/books

mongoose
    .connect(
    "mongodb+srv://admin:Rftdp8vgSyD6uX9h@cluster0.t9mcoko.mongodb.net/bookStore?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to database"))
        .then(() => {
             app.listen(5000)
    }).catch((error) => consol.log(err));
