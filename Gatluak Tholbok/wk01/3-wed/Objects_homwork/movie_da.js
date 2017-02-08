
console.log('my movie database');

var badBoys = {
  title: 'Bad Boys II',
  stars: ['Will Smith', ' Martin Lawrence'],
  duration: 147
}
function getMovie() {
    console.log(badBoys.title + ' lasts ' + badBoys.duration + ' minutes. Stars: ' + badBoys.stars);
}
getMovie();
