
// Nav for Desktop
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinksDesktop = document.querySelectorAll(".nav-link");
    const navLinksMobile = document.querySelectorAll(".nav-link-mobile");

    // Function to remove active class from all links and apply it to the clicked link (for desktop)
    function setActiveLinkDesktop(link) {
        navLinksDesktop.forEach(nav => nav.classList.remove("nav-link-active"));
        link.classList.add("nav-link-active");
    }

    // Function to remove active class from all links and apply it to the clicked link (for mobile)
    function setActiveLinkMobile(link) {
        navLinksMobile.forEach(nav => nav.classList.remove("nav-link-mobile-active"));
        link.classList.add("nav-link-mobile-active");
    }

    // Click event listener for each desktop nav link
    navLinksDesktop.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLinkDesktop(this); // Set the clicked link as active
        });
    });

    // Click event listener for each mobile nav link
    navLinksMobile.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLinkMobile(this); // Set the clicked link as active
        });
    });

    // Intersection Observer to detect scrolling into a section
    const options = {
        root: null,
        threshold: 0.6, // When 60% of the section is visible
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const navLinkDesktop = document.querySelector(`a.nav-link[href="#${id}"]`);
            const navLinkMobile = document.querySelector(`a.nav-link-mobile[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Set the corresponding link as active when the section is in view
                if (navLinkDesktop) {
                    setActiveLinkDesktop(navLinkDesktop);
                }
                if (navLinkMobile) {
                    setActiveLinkMobile(navLinkMobile);
                }
            }
        });
    }, options);

    // Observe each section for intersection with the viewport
    sections.forEach(section => {
        observer.observe(section);
    });
});


// Nav for Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu");
    const closeIcon = document.getElementById("close");
    const menuList = document.getElementById("menu-list");

    // Function to show menu and hide close icon
    function openMenu() {
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        menuList.classList.remove("hidden");
        menuList.classList.add("flex")
    }

    // Function to hide menu and show close icon
    function closeMenu() {
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        menuList.classList.remove("flex");
        menuList.classList.add("hidden");
    }

    // Event listener for opening the menu
    menuIcon.addEventListener("click", openMenu);

    // Event listener for closing the menu
    closeIcon.addEventListener("click", closeMenu);

    menuList.addEventListener("click", closeMenu);
});


// Audio
const toggleButton = document.getElementById('toggleButton');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');

toggleButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        buttonText.textContent = "Pause Music";   
        toggleButton.classList.add('animate-pulse'); 
        play.classList.add('hidden');
        pause.classList.remove('hidden');
    } else {
        audio.pause();
        buttonText.textContent = "Play Music";  
        toggleButton.classList.remove('animate-pulse'); 
        pause.classList.add('hidden');   
        play.classList.remove('hidden');
    }
});