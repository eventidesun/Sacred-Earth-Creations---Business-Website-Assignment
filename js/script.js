// Function to scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the back-to-top button based on scroll position
window.addEventListener('scroll', function () {
    var button = document.querySelector('.back-to-top');

    if (window.scrollY > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }

    // Parallax scrolling
    var parallaxSection = document.querySelector('.parallax-section');
    var scrollPosition = window.scrollY;
    parallaxSection.style.backgroundPositionY = -(scrollPosition * 0.2) + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
    // Define the product items
    var productItems = document.querySelectorAll('.product-item');

    // Function to handle the ScrollFire effect
    function handleScrollFire(entries) {
        entries.forEach(function (entry) {
            var img = entry.target.querySelector('img');

            if (entry.isIntersecting) {
                img.classList.add('visible');
            } else {
                img.classList.remove('visible');
            }
        });
    }

    // Create an Intersection Observer
    var observer = new IntersectionObserver(handleScrollFire, {
        threshold: 0.5,
    });

    // Observe each product item
    productItems.forEach(function (item) {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    toggleProductID(); // Calls the function on page load
});

function toggleProductID() {
    var reason = document.querySelector('.contact-input[name="reason"]').value;
    var productIDLabel = document.querySelector('.contact-input-label');
    var productIDInput = document.querySelector('.contact-input[name="productID"]');

    if (reason === "productInfo") {
        productIDLabel.style.display = 'block';
        productIDInput.style.display = 'block';
    } else {
        productIDLabel.style.display = 'none';
        productIDInput.style.display = 'none';
    }
}

function validateName() {
    var nameInput = document.querySelector('.contact-input[name="name"]');
    var name = nameInput.value.trim();
    var nameRegex = /^[a-zA-Z\s]{4,}$/; // Valid as long as the text is 4+ characters long and contains no numbers

    if (nameRegex.test(name)) {
        nameInput.style.borderColor = "green";
    } else {
        nameInput.style.borderColor = "red";
    }
}

function validatePhone() {
    var phoneInput = document.querySelector('.contact-input[name="phone"]');
    var phone = phoneInput.value.trim();
    var phoneRegex = /^\d{3} \d{3} \d{4}$/; // Valid if text follows correct format of a phone number with spaces

    if (phoneRegex.test(phone)) {
        phoneInput.style.borderColor = "green";
    } else {
        phoneInput.style.borderColor = "red";
    }
}

function validateProductID() {
    var productIDInput = document.querySelector('.contact-input[name="productID"]');
    var productID = productIDInput.value.trim();
    var productCodes = ["A11B", "A12G", "A12C", "B11A", "B22B", "ABC123"]; // Valid if text matches one of the 6 product codes

    if (productCodes.includes(productID)) {
        productIDInput.style.borderColor = "green";
    } else {
        productIDInput.style.borderColor = "red";
    }
}

function validateMessage() {
    var messageInput = document.querySelector('.contact-input[name="message"]');
    var message = messageInput.value.trim();

    if (message.length >= 10 && message.length <= 30) { // Valid if text is 10-30 characters in length
        messageInput.style.borderColor = "green";
    } else {
        messageInput.style.borderColor = "red";
    }
}

function validateForm() {
    validateName();
    validatePhone();
    validateProductID();
    validateMessage();

    // Submit the form if all validations pass, otherwise, prevent the default form submission
    var isValid = document.querySelectorAll('.contact-input:invalid').length === 0;
    if (!isValid) {
        event.preventDefault();
    }
}


