//  <!-- frame user set Upload img section -->
// Add event listener to form
document.getElementById("image-form").addEventListener("submit", saveImage);

function saveImage(e) {
  // Prevent form from submitting
  e.preventDefault();

  // Get image file
  let image = document.getElementById("image").files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    let imageData = reader.result;
    // Check if images exist in local storage
    if (localStorage.getItem("images") === null) {
      // If not, create a new array and add image
      let images = [];
      images.push(imageData);
      localStorage.setItem("images", JSON.stringify(images));
    } else {
      // If yes, get images and add new image
      let images = JSON.parse(localStorage.getItem("images"));
      images.push(imageData);
      localStorage.setItem("images", JSON.stringify(images));
    }
  };
  reader.readAsDataURL(image);
}

// user table
// Check if contacts exist in local storage
if (localStorage.getItem("contacts") !== null) {
  // If yes, get contacts
  let contacts = JSON.parse(localStorage.getItem("contacts"));

  // Loop through contacts and add to table
  contacts.forEach(function (contact, index) {
    let row = document.createElement("tr");

    row.innerHTML = `
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.message}</td>
    <td><button class="delete-btn" data-index="${index}">Delete</button></td>
  `;

    document.getElementById("contacts").children[1].appendChild(row);
  });
}

// Add event listener to delete buttons
let deleteBtns = document.getElementsByClassName("delete-btn");
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", deleteData);
}

function deleteData(e) {
  // Get index of contact to delete
  let index = e.target.dataset.index;

  // Get contacts from local storage
  let contacts = JSON.parse(localStorage.getItem("contacts"));

  // Remove contact from array
  contacts.splice(index, 1);

  // Update local storage
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // Reload page to update table
  location.reload();
}

// ====================
// /================================================================ upload================================//

// var form = document.getElementById("form");

// var parentDiv = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   var reader = new FileReader();

//   var name = document.getElementById("image").files[0].name;

//   reader.addEventListener("load", function () {
//     if (this.result && localStorage) {
//       window.localStorage.setItem(name, this.result);
//       alert("image stored in local storage");
//       parentDiv.innerHTML = "";
//       showImages();
//     } else {
//       alert("not successful");
//     }
//   });

//   reader.readAsDataURL(document.getElementById("image").files[0]);
//   console.log(name);
// });

// ==== show img from local storage ====

// =============== user info=========
