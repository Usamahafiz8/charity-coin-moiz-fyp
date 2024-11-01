const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://umarorakzai98:<u@123456789>@cluster0.0xei8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
}

module.exports = { client, connectDB };
