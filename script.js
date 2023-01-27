// about hide section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// sidemenu  nav
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//
// Add event listener to form's submit button

// ===== upload image======//
// ===== upload image======//
// <!-- frame user set -->
// Check if images exist in local storage
if (localStorage.getItem("images") !== null) {
  // If yes, get images
  let images = JSON.parse(localStorage.getItem("images"));

  // Loop through images and add to container
  images.forEach(function (image, index) {
    let img = document.createElement("img");
    img.src = image;
    img.setAttribute("data-index", index);

    let btn = document.createElement("button");
    // btn.innerHTML = "Delete";
    // btn.classList.add("delete-btn");
    btn.setAttribute("data-index", index);
    // btn.addEventListener("click", deleteImage);

    let container = document.createElement("div");
    container.appendChild(img);
    // container.appendChild(btn);

    document.getElementById("images").appendChild(container);
  });
}

// function deleteImage(e) {
//   let index = e.target.dataset.index;

//   let images = JSON.parse(localStorage.getItem("images"));
//   images.splice(index, 1);
//   localStorage.setItem("images", JSON.stringify(images));

//   location.reload();
// }


// ====== to load form data to local storage====
document.getElementById("contact-right").addEventListener("submit", saveData);

function saveData(e) {
  // Prevent form from submitting
  e.preventDefault();

  // Get form data
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Create contact object
  let contact = {
    name: name,
    email: email,
    message: message,
  };

  // Check if contacts exist in local storage
  if (localStorage.getItem("contacts") === null) {
    // If not, create a new array and add contact
    let contacts = [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  } else {
    // If yes, get contacts and add new contact
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
