const mongoose = require('mongoose')
mongoose.Connect('mongodb://127.0.0.1/school', {
    useNewUrlParser:true
})

const conn = mongoose.connection
conn.on('connected', ()=>{
    console.log('MongoDB connected')
})

conn.on('disconnected', ()=>{
    console.log('MongoDb disconnected')
})
conn.on('error', console.error.bind(console))  

module.exports = conn