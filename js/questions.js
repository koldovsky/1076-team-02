
const accordionButtons = document.querySelectorAll('.questions__accordion-button');

        accordionButtons.forEach(button => {п
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });