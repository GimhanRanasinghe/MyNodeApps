const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const object = JSON.parse(bookJSON);
// console.log(object.title);

// fs.writeFileSync("1-json.json", bookJSON);

// const databuffer = fs.readFileSync("1-json.json");
// const dataJSON = databuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author);

const person = fs.readFileSync("1-json.json");
const persondata = person.toString();
const personObject = JSON.parse(persondata);

personObject.name = "Giman";
personObject.age = 54;

fs.writeFileSync("1-json.json", JSON.stringify(personObject));
