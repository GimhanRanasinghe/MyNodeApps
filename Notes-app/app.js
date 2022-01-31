const { command, demandOption, argv } = require("yargs");
const yargs = require("yargs");
const { removeNote } = require("./notes.js");
const notesUtil = require("./notes.js");

//yargs.version("1.1.0")

yargs.command({
  command: "add",
  description: "add a note",
  builder: {
    title: {
      description: "add a title",
      demandOption: true,
      type: "string",
    },

    body: {
      description: "add a body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesUtil.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "title of the remove note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesUtil.removeNote(argv.title);
  },
});

yargs.command({
  command: "read",
  description: "reading a note",
  builder: {
    title: {
      describe: "title",
      demandOption: true,
    },
  },
  handler(argv) {
    notesUtil.read(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "listing",

  handler() {
    notesUtil.listNotes();
  },
});

//this code gives the help option and to run the commands
//yargs.argv
//this also works as above
yargs.parse();

// const h=process.argv[2]

// if (h==="hi"){
//     console.log("correct")

// }else{

//     console.log("wrong")
// }

//const chalk = require("chalk")
// const success =   chalk.blue.inverse.bold;
// const print =   console.log;

// const fs = require("fs")
// fs.writeFileSync("note.txt",success("error"))

// print(success("error"))

// const getNotes = require("./notes")

// const notes = getNotes()

// console.log(notes)
// console.log(validator.isURL("google.com"))
