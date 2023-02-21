const express = require('express');
const app = express();
const cors = require('cors');
// require("dotenv").config();
const toolsRoute = require("./routes/v1/tools.route.js")


// middleware 
app.use(cors());
app.use(express.json());

app.use("/api/v1/tools", toolsRoute)

app.all("*", (req, res) => {
    res.send("No Route Found")
})
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
// app.use(errorHandler)

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1)
    })
});