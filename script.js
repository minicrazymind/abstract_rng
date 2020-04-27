
let vowels = ["a", "e", "i", "o", "u", "y"];
let consnts = ["q", "w", "r", "t", "p", "s", "d" ,"f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let letters = ["a", "e", "i", "o", "u", "y", "q", "w", "r", "t", "p", "s", "d" ,"f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let capLet = ["Q", "E", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D" ,"F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let intro = [",", " is", " is disguised", " ", " might be", " definitely is", " is without a doubt,", " :"];
let adjective = [" a great", " the best", " the worst", " the weirdest", " the most insane", " the biggest", " the smallest", " the most wholesome", " the most dangerous", " a red", " a blue", " a silver", " a golden", " the smelliest", " the scariest", " the most powerful", " the deadliest", " a small little"]
let object = [" food", " nation", " country", " person", " building", " mountain", " place", " thing", " dragon", " wizard", " vehicle", " object", " military", " company", " law firm", " bank", " establishment",  " restaurant", " island", " bird", " animal", " creature", " national park", " park", " castle", " fortess", " secret base", " empire", " weapon", " leader"];
let inThe = [" in the world", " known to man", " in the galaxy", " in the universe", " known to Papa Johns", " on the planet", " in the neighborhood", " in New York City", " in the United States", " in Europe", " in Africa", " in Oceania", " in the Arctic", " on the Moon", " on Pluto", " in Asia", " in the Middle East", " in South America", " in North America"];

let charName = generateName();
createChar(generateName());

function createChar(charName) {

  //Name
  var header = document.createElement("H1");  //Create an <h1> element
  header.innerHTML = charName; //Insert name
  document.getElementById("header").appendChild(header);     // Append Header to our div

  //Type Image
  var image = document.createElement("IMG");   //Create an <img> element
  let randTypeNum = Math.floor(Math.random() * 18) + 1;
  image.src = "data/" + randTypeNum + ".png";      // Insert text
  document.getElementById("type").appendChild(image);     // Append Image to our div


  //Theme Image
  var image2 = document.createElement("IMG");   //Create an <img> element
  image2.src = "https://picsum.photos/1000";      // Insert text
  document.getElementById("charPic").appendChild(image2);     // Append Image to our div

  //Title of Description
  var desTitle = document.createElement("H2");  //Create an <h1> element
  desTitle.innerHTML = "Description"; //Insert name
  document.getElementById("descrip").appendChild(desTitle);     // Append Header to our div

  //Description
  var para = document.createElement("P"); //Create a <p> element
  var textDescript = charName + generateDescription(); //Make some text
  para.innerHTML = textDescript; //Insert text
  document.getElementById("descrip").appendChild(para); //Apend to block

}

//Creaets random name
function generateName() {
  let output = "";
  let luckyNum = Math.floor(Math.random() * 8);

  output = output + capLet[Math.floor(Math.random() * capLet.length)];
  output = output + letters[Math.floor(Math.random() * letters.length)];

  for(let i = 0; i < luckyNum; i++) {
    if(i%2 == 0) {
      output = output + vowels[Math.floor(Math.random() * vowels.length)];
    }
    else {
      output = output + consnts[Math.floor(Math.random() * consnts.length)];
    }
  }

  return output;
}

function generateDescription() {
  let final = "";

  final = final + intro[Math.floor(Math.random() * intro.length)];
  final = final + adjective[Math.floor(Math.random() * adjective.length)];
  final = final + object[Math.floor(Math.random() * object.length)];
  final = final + inThe[Math.floor(Math.random() * inThe.length)];

  return final;
}
