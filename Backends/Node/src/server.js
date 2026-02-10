const mongo = require('./databases/mongo');

async function connectToDatabase()
{
    console.log("Hello Hector...");
    mongo.connectToDatabase();
}

module.exports = { connectToDatabase };