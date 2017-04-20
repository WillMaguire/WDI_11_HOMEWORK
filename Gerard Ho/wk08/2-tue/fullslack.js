// write a sample function and pass in an array and randomly pick one and return that for you
// for each element inside the array you want to apply the function to it the function has signature

var list = [1,2,3,4,5,6];

function shuffle(arr){
  var randomNum = Math.round(Math.random() * arr.length)
  return list[randomNum]
}


function consoleMe(blah){
  console.log(blah);
}

function forEachFunc(list,yeah){
  for(var i=0; i<list.length;i++){
    yeah(list[i])
  }
}

function whatever(){
  console.log("whatever")
}

function mapper(list,yeah){
  var newList = list.map(function(x){return yeah(x)});
  return newList
}

function transformation(x){
  y = x.toString() + " transformed"
  return y
}

function filtration(y){
  if(y===2){
    return true;
  }else{
    return false;
  }
}

forEachFunc(list,consoleMe)

var Fullslack = {

}
Fullslack.VERSION = '1.0'
Fullslack.shuffle = shuffle;
Fullslack.some = forEachFunc;
Fullslack.map = mapper;
Fullslack.filter = forEachFunc;
Fullslack.author = 'Gerard';


debugger
