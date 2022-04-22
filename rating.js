var videogamerating = {
   games: []
};
class game{
  constructor(rating,name){
    this.rating = rating;
    this.name = name;
  }
}
function addrating(rating,game){
  let newgame = game(rating,game);
  var json = JSON.stringify(videogamerating);
  fs.readFile('ratings.json', 'utf8', function readFileCallback(err, data){
    if (err){ 
        console.log(err);
    } else {
    videogamerating = JSON.parse(data); 
    videogamerating.games.push(newgame.rating,newgame.game);
    json = JSON.stringify(videogamerating); 
    fs.writeFile('ratings.json', json, 'utf8', callback); 
}});
}
fs.readFile('ratings.json', 'utf8', function readFileCallback(err, data){
  if (err){ 
     console.log(err);
  } else {
    games = JSON.parse(data)
    for (var i = 0; i < games.length; i++){
      document.write("<br><br>array index: " + i);
      var obj = arr[i];
      for (var key in obj){
        var value = obj[key];
        document.write("<br> - " + key + ": " + value);
    }
}
    
