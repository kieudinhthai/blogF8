const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/database_test', {
            useNewUrlParser: true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        });
        console.log("Connect success!!!");
    } catch (error) {
        console.log("Connect fail!!!");
    }
}

module.exports ={connect}