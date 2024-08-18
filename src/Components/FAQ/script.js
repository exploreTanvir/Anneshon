document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Close all accordion content
            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach(content => {
                content.style.display = 'none';
            });

            // Remove active class from all headers
            accordionHeaders.forEach(header => {
                header.classList.remove('active');
            });

            // Open the clicked content
            const content = this.nextElementSibling;
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});
