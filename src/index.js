import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./db/index.js";
import app from './app.js';
const port = process.env.PORT || 3000

// Databse connection
connectDB()
.then(() => {

    app.on("error", (error) => {
        console.log("Error", error)
        throw error
    })

    app.get("/", async(req, res) => {
        res.send("Server is running")
    })

    app.listen(port, () => {
        console.log("Server is running on port: ", port)
    })

})
.catch((err) => {
    console.log("MongoDB Connection ERROR: ", err)
})