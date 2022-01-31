//CRUD creat read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users")
    //   .deleteMany({ age: 22 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({
        description: "Java",
      })
      .then((result) => {
        console.log(result.deletedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

// db.collection("users").insertOne(
//   {
//     name: "Gimhan",
//     age: 22,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }
//     console.log(result.ops);
//   }
// );
// db.collection("users").insertMany(
//   [
//     {
//       name: "Udu",
//       age: 21,
//     },
//     {
//       name: "Sera",
//       age: 5,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert!");
//     }

//     console.log(result.ops);
//   }
// );

// db.collection("tasks").insertMany(
//   [
//     {
//       description: "Java",
//       completed: true,
//     },
//     {
//       description: "Node",
//       completed: false,
//     },
//     {
//       description: "Python",
//       completed: true,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert!");
//     }

//     console.log(result.ops
//         );
//   }
// );

// db.collection("users").findOne({ name: "Gimhan" }, (error, user) => {
//   if (error) {
//     return console.log("Unable to fetch");
//   }

//   console.log(user);
// });

// db.collection("users")
//   .find({ age: 22 })
//   .toArray((error, user) => {
//     console.log(user);
//   });

// db.collection("users")
//   .find({ age: 22 })
//   .count((error, count) => {
//     console.log(count);
//   });

// db.collection("tasks").findOne(
//   { _id: new ObjectID("609d43be49e9b236e8588f54") },
//   (eror, task) => {
//     console.log(task);
//   }
// );

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, task) => {
//     console.log(task);
//   });

// db.collection("users")
//   .updateOne(
//     {
//       _id: new ObjectID("609d3f58adcd7852c8c780e3"),
//     },
//     {
//       //   $set: {
//       //     name: "Subaa",
//       //     age: 23,
//       //   },
//       $inc: {
//         age: 1,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .updateMany(
//     {
//       completed: false,
//     },
//     {
//       $set: {
//         completed: true,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result.modifiedCount);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
