const fs = require("fs");

fs.stat("./", (error, paths) => {
  console.log(paths);
});

function stat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (error, paths) => {
      if (error) {
        reject(error);
      } else {
        resolve(paths);
      }
    });
  });
}

stat("./").then((paths) => console.log(paths));
