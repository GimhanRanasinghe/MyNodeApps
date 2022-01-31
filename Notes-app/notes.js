const fs = require("fs");
const chalk = require("chalk");

const warning = chalk.red.inverse;
const success = chalk.green.inverse;

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  //console.log(notes);

  // const dup = checkDuplicate(notes, title);

  // if (dup === false) {
  //   notes.push({
  //     title: title,
  //     body: body,
  //   });

  //   saveNote(notes);
  //   console.log("Note Added.");
  // } else {
  //   console.log("Title taken!");
  // }

  debugger;

  const duplicates = notes.filter((note) => note.title === title);

  if (duplicates.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log(success("Note Added."));
  } else {
    console.log(warning("Title taken!"));
  }
};

const loadNotes = () => {
  try {
    const noteBuffer = fs.readFileSync("notes.json");
    const noteJSON = noteBuffer.toString();
    return JSON.parse(noteJSON);
  } catch (e) {
    return [];
  }
};

const saveNote = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

// const checkDuplicate = function (notes, title) {
//   for (const element of notes) {
//     if (element.title === title) {
//       return true;
//     }
//   }
//   return false;
// };

const removeNote = (title) => {
  const prevNotes = loadNotes();
  const newNotesArray = prevNotes.filter(
    (prevnote) => prevnote.title !== title
  );
  saveNote(newNotesArray);
  if (prevNotes.length === newNotesArray.length) {
    console.log(warning("No note found!"));
  } else {
    console.log(success("Note removed!"));
  }
};

const listNotes = function () {
  const noteList = loadNotes();
  if (noteList.length > 0) {
    console.log(chalk.yellow.inverse("Your Notes"));
    noteList.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse("Empty!"));
  }
};

const read = function (title) {
  const noteList = loadNotes();
  const noteToRead = noteList.find((note) => note.title === title);
  if (noteToRead === undefined) {
    console.log(warning("No note found!"));
  } else {
    console.log(chalk.inverse(noteToRead.title));
    console.log(noteToRead.body);
  }
};

module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  read: read,
};
