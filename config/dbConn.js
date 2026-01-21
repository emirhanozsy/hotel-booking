const mongoose = require("mongoose");

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB bağlandı");
    } catch (error) {
        console.error("MongoDB hata: ", error.message);
        process.exit(1);
    }
};

module.exports = dbConn;