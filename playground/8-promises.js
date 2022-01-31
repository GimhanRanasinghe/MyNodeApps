const doWorkPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error occured");
    resolve("done");
  }, 2000);
});

doWorkPromises
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
