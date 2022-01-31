const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// const me = new User({
//   name: "  Gimhan Ranasinghe     ",
//   email: "Gimhanravi@GMAIL.com",
//   password: "",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const task1 = new Task({
//   description: "Java",
//   completed: true,
// });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
