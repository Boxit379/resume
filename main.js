let hideTimeout;

function toggleDark() {
    document.body.classList.toggle('dark');
    // Change the icon
    document.getElementById('darkModeIcon').classList.toggle('fa-sun');
    document.getElementById('darkModeIcon').classList.toggle('fa-moon');
    // Save the state
    saveDarkMode();
}

function copy(id) {
    // Clear current timeout if it exists
    if (typeof hideTimeout !== 'undefined') {
        clearTimeout(hideTimeout);
    }
    navigator.clipboard.writeText(document.getElementById(id).innerText);
    document.getElementById('popup').classList.add('show');
    hideTimeout = setTimeout(function() {
        document.getElementById('popup').classList.remove('show');
    }
    , 1000);
}

// Save the state of the dark mode toggle
function saveDarkMode() {
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}
// Load the state of the dark mode toggle
function loadDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
        toggleDark();
    }
}

// Load the dark mode toggle state on page load
window.onload = function() {
    loadDarkMode();
}

const cursor = document.getElementById("cursor");
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

// On click, add the class 'clicked' to the cursor
document.addEventListener('mousedown', function(){
    cursor.classList.add("clicked");
});

// On mouseup, remove the class 'clicked' from the cursor
document.addEventListener('mouseup', function(){
    cursor.classList.remove("clicked");
});

// On hover over a button, add the class 'hovered' to the cursor
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('mouseover', event => {
        cursor.classList.add("hovered");
    })
});

// On hover out of a button, remove the class 'hovered' from the cursor
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('mouseout', event => {
        cursor.classList.remove("hovered");
    })
});

// If the cursor goes out of the window, hide it
window.addEventListener('mouseout', function(e) {
    if (e.toElement == null && e.relatedTarget == null) {
        cursor.style.display = 'none';
    }
});

// If the cursor comes back into the window, show it
window.addEventListener('mouseover', function(e) {
    cursor.style.display = 'block';
});