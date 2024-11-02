



function toggleOpenHours() {
  const openHoursDropdown = document.getElementById("openHoursDropdown");
  openHoursDropdown.classList.toggle("show");

  const arrowIcon = document.getElementById("arrowIcon");
  arrowIcon.classList.toggle("rotate");
}

    let contactUsDropdownVisible = false;

    function toggleContactUs() {
        const dropdown = document.getElementById('contactUsDropdown');
        contactUsDropdownVisible = !contactUsDropdownVisible;
    
        if (contactUsDropdownVisible) {
            dropdown.style.display = 'block';
            // Add an event listener to close dropdown when clicking outside
            document.addEventListener('click', closeContactUsDropdownOnClickOutside);
        } else {
            dropdown.style.display = 'none';
            // Remove the event listener
            document.removeEventListener('click', closeContactUsDropdownOnClickOutside);
        }
    }
    
    function closeContactUsDropdownOnClickOutside(event) {
        const dropdown = document.getElementById('contactUsDropdown');
        const targetElement = event.target;
    
        if (!dropdown.contains(targetElement)) {
            // Clicked outside the dropdown


            let contactUsDropdownVisible = false;
            let legalDropdownVisible = false;
            
            function toggleContactUs() {
                const dropdown = document.getElementById('contactUsDropdown');
                contactUsDropdownVisible = !contactUsDropdownVisible;
            
                if (contactUsDropdownVisible) {
                    dropdown.style.display = 'block';
                    document.addEventListener('click', closeDropdownOnClickOutside);
                } else {
                    dropdown.style.display = 'none';
                    document.removeEventListener('click', closeDropdownOnClickOutside);
                }
            }
            
        }}

        let legalDropdownVisible = false;

function toggleLegal() {
    const dropdown = document.getElementById('legalDropdown');
    legalDropdownVisible = !legalDropdownVisible;

    if (legalDropdownVisible) {
        dropdown.style.display = 'block';
        document.addEventListener('click', closeDropdownOnClickOutside);
    } else {
        dropdown.style.display = 'none';
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}

function closeDropdownOnClickOutside(event) {
    const dropdown = document.getElementById('legalDropdown');
    const targetElement = event.target;

    if (!dropdown.contains(targetElement)) {
        dropdown.style.display = 'none';
        legalDropdownVisible = false;
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}








function setActiveMenu() {
    const menuItems = document.querySelectorAll('.bottom-menu a');
    menuItems.forEach((item) => {
      item.classList.remove('active');
      if (window.location.href === item.href) {
        item.classList.add('active');
      }
    });
  }
  
  // Call the function to set the active menu when the page loads and on every link click
  document.addEventListener('DOMContentLoaded', setActiveMenu);
  document.querySelectorAll('.bottom-menu a').forEach(item => {
    item.addEventListener('click', setActiveMenu);
  });
  

      





  document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let menuSections = document.querySelectorAll('.menu_section');
    let menuItems = document.querySelectorAll('.menu-item');
    
    menuSections.forEach((section, index) => {
        let offsetTop = section.offsetTop;
        let offsetBottom = offsetTop + section.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove('active');
            });
            
            let menuItemId = 'menu_item_' + index;
            document.getElementById(menuItemId).classList.add('active');
        }
    });
});






document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let menuSections = document.querySelectorAll('.menu_section');
    let menuItems = document.querySelectorAll('.menu-item');

    menuSections.forEach((section, index) => {
        let offsetTop = section.offsetTop;
        let offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove('active');
            });

            let menuItemId = 'menu_item_' + index;
            document.getElementById(menuItemId).classList.add('active');

            // Automatically scroll to the active menu item
            const container = document.getElementById('strat_order');
            const activeMenuItem = document.getElementById(menuItemId);
            container.scrollLeft = activeMenuItem.offsetLeft - (container.offsetWidth - activeMenuItem.offsetWidth) / 2;
        }
    });
});

function scrollToActiveMenuItem() {
    const activeMenuItem = document.querySelector('.menu-item.active');
    if (activeMenuItem) {
        const container = document.getElementById('strat_order');
        container.scrollLeft = activeMenuItem.offsetLeft - (container.offsetWidth - activeMenuItem.offsetWidth) / 2;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    scrollToActiveMenuItem();
});




        
        




