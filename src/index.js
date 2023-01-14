import "./styles.css";
//Attempt at labelling products below: (issue: unable to attach images)
var myArray = [
  { mood: "dainty", Image: "frenchB.webp", name: "French Blouse" },
  { mood: "dainty", Image: "tempest.webp", name: "Sleeveless Dress" },
  { mood: "athleisure", Image: "legging.jfif", name: "Legging" },
  { mood: "athleisure", Image: "zipup.jfif", name: "Zip Up" },
  { mood: "academia", Image: "platedskirt.jfif", name: "Plated Skirt" },
  { mood: "academia", Image: "pegsweater.webp", name: "Peggy Sweater" },
  { mood: "fatale", Image: "caspardress.jfif", name: "Caspar Dress" },
  { mood: "fatale", Image: "backstory.webp", name: "Backstory Dress" }
];

//Attempt at setting up the sorting function:
var resultdainty = myArray.find((item) => item.mood === "dainty");
var resultAthleisure = myArray.find((item) => item.mood === "athleisure");
var resultAcademia = myArray.find((item) => item.mood === "academia");
var resultfatale = myArray.find((item) => item.mood === "fatale");

//Trying to come up with a function for a button that prints out an aesthetic result

document.getElementById("comfy-button").addEventListener("click", comfy);
function comfy() {
  document.write(resultAthleisure.name);
}

var modal = document.getElementById("myModal");
var daintybtm = document.getElementById("academia-button");
daintybtm.onclick = function () {
  modal.style.display = "block";
};
document.getElementById("fatale-button").addEventListener("click", fatale);
function fatale() {
  document.write(resultfatale.name);
}

document.getElementById("dainty-button").addEventListener("click", dainty);
function dainty() {
  document.write(resultdainty.name);
}
