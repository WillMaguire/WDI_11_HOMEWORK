var fs = require('fs');
var path = require('path');

var pathSupplied = process.argv[2];
var extFilter = process.argv[3];

function extension(elem) {
  var extName = path.extname(elem);
  return extName === '.' + extFilter;
};

fs.readdir(pathSupplied, function(err, list){
  if(err) {
    console.log('error');
  }
    list.filter(extension).forEach(function(value) {
      console.log(value);
    });
});

// from learnyournode
// var fs = require('fs')
// var path = require('path')
//
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
