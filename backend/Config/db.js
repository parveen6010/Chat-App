const mongoose = require("mongoose");


const connectdb = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_PORT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,


        });
        console.log(`Mongodb connceted: ${conn.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(`error: ${error.message}`.red.bold);
        process.exit();
    }
};
module.exports = connectdb;