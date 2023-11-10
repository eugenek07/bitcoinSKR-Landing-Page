function toggleDropdown(element) {
    var dropdown = element.querySelector('.dropdown-content');
    if (dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
    } else {
      dropdown.classList.add('active');
    }
  }