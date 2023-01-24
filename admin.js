// Get data from local storage
var name1 = localStorage.getItem("fname");
var email = localStorage.getItem("email");
var message = localStorage.getItem("message");
// Create new table row
var row = document.createElement("tr");
// Create new table cells
var nameCell = document.createElement("td");
var emailCell = document.createElement("td");
var messageCell = document.createElement("td");
// Insert data into cells
nameCell.innerHTML = name1;
emailCell.innerHTML = email;
messageCell.innerHTML = message;

// Append cells to row
row.appendChild(nameCell);
row.appendChild(emailCell);
row.appendChild(messageCell);
// Append row to table
document.getElementById("myTable").appendChild(row);

// ====================
// /================================================================ upload================================//

var form = document.getElementById("form");

var parentDiv = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var reader = new FileReader();

  var name = document.getElementById("image").files[0].name;

  reader.addEventListener("load", function () {
    if (this.result && localStorage) {
      window.localStorage.setItem(name, this.result);
      alert("image stored in local storage");
      parentDiv.innerHTML = "";
      showImages();
    } else {
      alert("not successful");
    }
  });

  reader.readAsDataURL(document.getElementById("image").files[0]);
  console.log(name);
});

// ==== show img from local storage ====

function showImages() {
  for (let i = 0; i < window.localStorage.length; i++) {
    let res = window.localStorage.getItem(window.localStorage.key(i));
    var image = new Image();
    image.src = res;

    parentDiv.appendChild(image);
  }
}

function remove() {
  window.localStorage.clear();
  parentDiv.innerHTML = "";
}

showImages();
