const fs = require("fs");

fs.stat("./", (error, paths) => {
  console.log(paths);
});
