require("../src/db/mongoose");

const Task = require("../src/models/tasks");

// Task.findByIdAndDelete("60a0b5345fddce378447f7fc")
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: "false" });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount("60a156c1da3d2f62b4f411fc", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
