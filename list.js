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

async function list() {
  const paths = await readdir("./");
  const statsPromises = paths.map(async (path) => await stat(path));
  const stats = await Promise.all(statsPromises);
  const pathIsFile = stats.map((path) => ({
    path: path.path,
    isFile: path.stat.isFile(),
  }));
  const files = pathIsFile.filter((path) => path.isFile);
  console.log(files);
}

list();
