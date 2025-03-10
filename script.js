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
});
