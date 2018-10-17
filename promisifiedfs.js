'use strict';

const fs = require('fs');

fs.readdirPromise = function(path){
  return new Promise(function(resolve, reject) {
    fs.readdir(path, (err, files) => {
      if (err) resolve([]);
      else resolve(files);
    })
  });
}
fs.writeFilePromise = function(path,data,encoding){
  return new Promise(function(resolve, reject) {
    fs.writeFile(path, data, encoding, function(err) {
        if (err) reject(err);
        else resolve(data);
    });
  });
}
fs.readFilePromise = function(path,encoding){
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err,data) {
        if (err) reject(err);
        else resolve(data);
    });
  });
}

fs.mkdirPromise = function(path){
  return new Promise(function(resolve, reject) {
    fs.mkdir(path,function(e){
        if(!e || (e && e.code === 'EEXIST')){
            resolve()
        } else {
            throw e
        }
    });
  });
}

module.exports = fs;
