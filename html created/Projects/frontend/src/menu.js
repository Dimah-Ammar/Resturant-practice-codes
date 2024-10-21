// Get references to the tabs and menu sections
const breakfastTab = document.getElementById('breakfastTab');
const lunchTab = document.getElementById('lunchTab');
const dinnerTab = document.getElementById('dinnerTab');

const breakfastMenu = document.getElementById('breakfastMenu');
const lunchMenu = document.getElementById('lunchMenu');
const dinnerMenu = document.getElementById('dinnerMenu');

// Function to show the selected menu and hide the others
function showMenu(selectedMenu) {
  breakfastMenu.classList.remove('active');
  lunchMenu.classList.remove('active');
  dinnerMenu.classList.remove('active');

  selectedMenu.classList.add('active');
}

// Add event listeners to tabs
breakfastTab.addEventListener('click', function() {
  showMenu(breakfastMenu);
});

lunchTab.addEventListener('click', function() {
  showMenu(lunchMenu);
});

dinnerTab.addEventListener('click', function() {
  showMenu(dinnerMenu);
});

// Optionally, display the breakfast menu by default on page load
window.onload = function() {
  showMenu(breakfastMenu);
};
