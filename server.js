import express from 'express'
import env from 'dotenv'
env.config()
const app = express()
const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    return res.send("<h1>hi bro</h1>")
})

app.listen(PORT, () => {
    console.log(`server is running  at http://localhost:${[process.env.PORT]}`)
})