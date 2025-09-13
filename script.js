document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-effect');
   const roles = ['AI & Data Science Student', 'Frontend Developer', 'Python Fullstack Developer', 'AI & DS Enthusiast', 'Python Programmer', 'Data Analyst', 'Aspiring Data Scientist', 'Content Writer', 'Designer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150; // Slower typing speed

    function type() {
        const currentRole = roles[roleIndex];
        const displayedText = isDeleting ? currentRole.substring(0, charIndex--) : currentRole.substring(0, charIndex++);
        typingText.textContent = `I am a ${displayedText}`;

        if (!isDeleting && charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
            typeSpeed = 75;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 150;
        }
        setTimeout(type, typeSpeed);
    }

    type();

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            mobileMenu.classList.remove('open');
        });
    });

    // Update the profile picture with the uploaded file
    const profileImg = document.querySelector('.animate-pulse-slow img');
    const profilePhotoUrl = 'uploaded:Profile Photo.png';
    profileImg.src = profilePhotoUrl;
    profileImg.onload = () => {
        // If the image loads, stop the pulse animation
        profileImg.parentElement.classList.remove('animate-pulse-slow');
        profileImg.parentElement.style.animation = 'none';
    };
    profileImg.onerror = () => {
        // Keep the placeholder if the image fails to load
        profileImg.src = 'https://placehold.co/800x800/0d0d0d/f0f0f0?text=Profile+Photo';
    };
});
