const express = require('express');
const app = express();
const cors = require('cors');
// require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());



app.all("*", (req, res) => {
    res.send("No Route Found")
})
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})
// app.use(errorHandler)

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1)
    })
});