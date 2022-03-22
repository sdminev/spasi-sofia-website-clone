document.addEventListener('DOMContentLoaded', function() {
  var openMenuButtons = document.querySelectorAll('button[aria-controls][aria-expanded="false"]')
  var closeMenuButtons = document.querySelectorAll('button[aria-controls][aria-expanded="true"]')

  handleMenuButtonClick = function(activeButton, complementaryButton) {
    var menuID = activeButton.getAttribute('aria-controls')
    var menu = document.getElementById(menuID);

    menu.classList.toggle('hidden');
    complementaryButton.classList.toggle('hidden');
    activeButton.classList.toggle('hidden');
  }

  openMenuButtons.forEach(function(openButton) {
    openButton.addEventListener('click', function() {
      var closeButton = document.querySelector('button[aria-controls=' + this.getAttribute('aria-controls') + '][aria-expanded="true"]');
      handleMenuButtonClick(this, closeButton);
    });
  });

  closeMenuButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
      var openButton = document.querySelector('button[aria-controls=' + this.getAttribute('aria-controls') + '][aria-expanded="false"]');
      handleMenuButtonClick(this, openButton);
    });
  });
})

