console.log("fullslack library")


var list = [1,2,3,4,5];


var Fullslack = {
  VERSION: function() {
      var version = parseFloat(1.0)
      return version
  },

  shuffle: function(list) {
    var max = list.length
    var randomElem = Math.floor( Math.random() * max )+1
    var element = list[randomElem]
    return element
  },

  map: function(list) {
    newArray = []
    list.forEach(function(value, key) {
      var num = value+value
      newArray.push(num)
      return newArray
    });
    }
}


var transform = function(newArray) {
  console.log(newArray)
}

Fullslack.VERSION();
Fullslack.shuffle(list);
Fullslack.map(list, transform);
