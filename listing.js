const fs = require("fs");
fs.readdir("./", (error, paths) => {
  console.log(paths);
});
