async function myFunction() {
  try {
    let x = document.getElementById("id").value;
    let xlowcase = x.toLowerCase();
    const requestURL = 'https://pokeapi.co/api/v2/pokemon/' + xlowcase;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();  
    console.log(data);
    const att = document.createAttribute("src");
    att.value =   data.sprites.front_default;
    document.getElementById("image").setAttributeNode(att);
    document.getElementById("name").innerHTML = "Name: " + data.name;
    document.getElementById("number").innerHTML = "Id: " + data.id;
    let txt = "";
    for (let i = 0; i < data.types.length; i++) {
      txt += data.types[i].type.name + " ";
    }
    document.getElementById("type").innerHTML = "Type: " + txt;
  }
  catch{
    alert("tht's not a pokemon");
  }
}

var input = document.getElementById("id");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("buttonsearch").click();
  }
});