const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, ".client/build")))
};

// connect to Mongo DB 
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
    .then(() => console.log(`Mongo DB Succesfully Connected`))
    .catch(err => console.log(err));

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})