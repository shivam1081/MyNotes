const { MongoClient } = require("mongodb");
// Connection URL
const url =
  "mongodb+srv://shivamdubey1801:JAsHHlO2xtKzuDgQ@namastenode.kxool.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Users");

  const dataForInsert = {
    firstName: "Kumar",
    lastName: "Dubey",
    age: "30",
    city: "Mumbai",
  };

  // Updating the Document
  const updateResult = await collection.updateOne({ firstName: "Kumar", }, { $set: { firstName: "Manish",} });
  console.log("Updated documents =>", updateResult);

  // Insert a document
  //   const insertResult = await collection.insertMany([dataForInsert]);
  //   console.log("Inserted documents =>", insertResult);

  // Read the documents
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
