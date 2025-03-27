document.addEventListener("DOMContentLoaded", () => {
 
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

        
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }, 5000);
    }


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

    
    
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
           
            formStatus.textContent = "Sending your message...";
            formStatus.className = "form-status";
            formStatus.style.display = "block";
            
            setTimeout(() => {
                
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.className = "form-status success";
                contactForm.reset(); 
                
                console.log("Form submitted with:", { name, email, message });
            }, 1500);
        });
    }
    
   
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterStatus = document.getElementById('newsletterStatus');
    
    if (newsletterForm && newsletterStatus) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            
            
            newsletterStatus.textContent = "Processing your subscription...";
            newsletterStatus.className = "newsletter-status";
            newsletterStatus.style.display = "block";
            
            setTimeout(() => {
                
                newsletterStatus.textContent = "Thank you for subscribing to our newsletter!";
                newsletterStatus.className = "newsletter-status success";
                newsletterForm.reset(); 
                
                console.log("Newsletter subscription:", { email });
            }, 1500);
        });
    }
    
 
    const newArrivalsTab = document.querySelector('.catalog-tab[data-category="new"]');
    const previewContainer = document.getElementById('new-arrivals-preview');

    newArrivalsTab.addEventListener('mouseover', function() {
        if (!previewContainer.innerHTML) {
            fetch('new-arrivals.html')
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const newArrivalsSection = doc.querySelector('.new-arrivals');
                    if (newArrivalsSection) {
                        previewContainer.innerHTML = newArrivalsSection.innerHTML;
                    } else {
                        previewContainer.innerHTML = '<p>Error loading preview.</p>';
                    }
                })
                .catch(error => {
                    console.error('Error loading new arrivals preview:', error);
                    previewContainer.innerHTML = '<p>Error loading preview.</p>';
                });
        }
    })

   
    const bestSellersTab = document.querySelector('.catalog-tab[data-category="bestseller"]');
    const bestSellersPreview = document.getElementById('best-sellers-preview');

    if (bestSellersTab && bestSellersPreview) {
        bestSellersTab.addEventListener('mouseover', function() {
            if (!bestSellersPreview.innerHTML) {
                fetch('best-sellers.html')
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(data, 'text/html');
                        const bestSellersSection = doc.querySelector('.best-sellers');
                        if (bestSellersSection) {
                            bestSellersPreview.innerHTML = bestSellersSection.innerHTML;
                        } else {
                            bestSellersPreview.innerHTML = '<p>Error loading preview.</p>';
                        }
                    })
                    .catch(error => {
                        console.error('Error loading best sellers preview:', error);
                        bestSellersPreview.innerHTML = '<p>Error loading preview.</p>';
                    });
            }
        });
    }

    
     const giftSetsTab = document.querySelector('.catalog-tab[data-category="gift"]');
    const giftSetsPreview = document.getElementById('gift-sets-preview');

    if (giftSetsTab && giftSetsPreview) {
        giftSetsTab.addEventListener('mouseover', function() {
            if (!giftSetsPreview.innerHTML) {
                fetch('gift-sets.html')
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(data, 'text/html');
                        const giftSetsSection = doc.querySelector('.gift-sets');
                        if (giftSetsSection) {
                            giftSetsPreview.innerHTML = giftSetsSection.innerHTML;
                        } else {
                            giftSetsPreview.innerHTML = '<p>Error loading preview.</p>';
                        }
                    })
                    .catch(error => {
                        console.error('Error loading gift sets preview:', error);
                        giftSetsPreview.innerHTML = '<p>Error loading preview.</p>';
                    });
            }
        });
    }

});
