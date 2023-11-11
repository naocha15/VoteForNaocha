var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.left = "0";
}

function closemenu() {
  sidemenu.style.left = "-200px"
}

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('sidemenu');

  document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    
    if (!isClickInsideNavbar) {
      navbar.classList.remove('show');
    }
  });

  // Toggle the navbar when clicking a button or any trigger
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('show');
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzDiQxkavhXjSl9fkDTDcwUlDjeu6EKubXK2zRHgZhuoFJV-lFdBw8GKFvlDgVtlxIFow/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function submitForm(event) {

  const form = document.getElementById("myForm");
  const submitButton = event.target;

  // Display loader
  submitButton.innerHTML = "<div class='loader'></div>";

  // Simulate form submission delay (2 seconds)
  setTimeout(function() {
    // Display "Submitted" for 2 seconds
    submitButton.innerHTML = "Submitted";

    // Reset button text to "Submit" after 2 seconds
    setTimeout(function() {
      submitButton.innerHTML = "Submit";
    }, 2000);
    
    // Reset the form after displaying "Submitted"
    setTimeout(function() {
      form.reset();
    }, 0);
  }, 2000);
}