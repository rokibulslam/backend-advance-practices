const app = require('./app')
require('dotenv').config({path:'./config.env'})

const port=process.env.PORT;

app.listen(port, () => { console.log(`Server is running on port ${port}`)})