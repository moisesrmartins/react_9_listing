const fs = require("fs");

fs.readdir("./", (error, paths) => {
  console.log(paths);
});

function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, paths) => {
      if (error) {
        reject(error);
      } else {
        resolve(paths);
      }
    });
  });
}
