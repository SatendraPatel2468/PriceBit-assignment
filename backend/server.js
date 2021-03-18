const app = require('./app')
const connectDB = require('./config/database')

const dotenv = require('dotenv')

const port = process.env.PORT || 5000

//Setting up config file
dotenv.config({ path: 'backend/config/config.env' })

//Connectiong database
connectDB();


app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
})