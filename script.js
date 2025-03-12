document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showTestimonial(index) {
        if (testimonials.length === 0 || dots.length === 0) return;

        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showTestimonial(index));
        });

        // Auto-rotate testimonials
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }, 5000);
    }

    // Product Animation on Scroll
    const products = document.querySelectorAll('.product');

    function checkScroll() {
        if (products.length === 0) return;

        products.forEach(product => {
            const productTop = product.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (productTop < windowHeight * 0.8) {
                product.style.opacity = "1";
                product.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    
    // Contact Form Handling (only runs on contact page)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulate form processing
            formStatus.textContent = "Sending your message...";
            formStatus.className = "form-status";
            formStatus.style.display = "block";
            
            setTimeout(() => {
                // Simulate successful submission
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.className = "form-status success";
                contactForm.reset(); // Clear form fields
                
                console.log("Form submitted with:", { name, email, message });
            }, 1500);
        });
    }
    
    // Newsletter Form Handling (can be on any page)
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterStatus = document.getElementById('newsletterStatus');
    
    if (newsletterForm && newsletterStatus) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            
            // Simulate subscription processing
            newsletterStatus.textContent = "Processing your subscription...";
            newsletterStatus.className = "newsletter-status";
            newsletterStatus.style.display = "block";
            
            setTimeout(() => {
                // Simulate successful subscription
                newsletterStatus.textContent = "Thank you for subscribing to our newsletter!";
                newsletterStatus.className = "newsletter-status success";
                newsletterForm.reset(); // Clear form field
                
                console.log("Newsletter subscription:", { email });
            }, 1500);
        });
    }
    
    // Add any other JavaScript functionality for all pages here
});

