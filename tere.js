
// nupp
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

//kollane bg nupule
const btn = document.getElementById('btn');
btn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'yellow';
    console.log(event.target);
})


// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}