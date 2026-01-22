import { MongoClient } from "mongodb";

const username = process.env.MONGO_USER;
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());

const connectionString = `mongodb+srv://${username}:${password}@devcluster.vvs7qby.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString);

let db;

try {
  await client.connect();
  db = client.db("integration_ninjas"); // DB name
  console.log("✅ MongoDB connection successful");
} catch (e) {
  console.error("❌ MongoDB connection failed:", e);
}

export default db;
