function process_like() {
  let points_span = document.getElementById("numlikes");
  let points_span_text = points_span.innerText;
  let points_span_text_arr = points_span_text.split(" ");
  let points = points_span_text_arr[0];
  points++;

  points_span.innerText = points + " Likes";
}

function process_dislike() {
  let points_span = document.getElementById("numlikes");
  let points_span_text = points_span.innerText;
  let points_span_text_arr = points_span_text.split(" ");
  let points = points_span_text_arr[0];
  points--;

  points_span.innerText = points + " Likes";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const food_array = {
  "Pizza": "./assets/pizza.jpeg",
  "Chocolate": "./assets/chocolate.jpeg",
  "Dumpling noodles": "./assets/dumplingnoodles.jpeg",
  "Mushroom Pasta": "./assets/mushroompasta.jpeg",
  "Steak": "./assets/steak.jpeg",
  "Fish soup": "./assets/fishsoup.jpeg",
};

function show_food() {
  var keys = Object.keys(food_array);
  var len = keys.length;
  var rand_int = getRandomInt(0, len);
  document.getElementById("favfood").innerText = keys[rand_int];
  document.getElementById("foodimg").setAttribute("src",food_array[keys[rand_int]]);
}
