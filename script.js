const toggleButton = document.getElementById('mode-toggle');

const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');

// lightModeButton.addEventListener('click', () => {
//   document.body.classList.remove('dark-mode');
// });

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});                         
const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');

petitionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!isValidSignature(fullname, email)) {
   
    return;
  }

  errorMessage.textContent = '';

  // Add signature to the list
  const signatureItem = document.createElement('li');
  signatureItem.textContent = `${fullname} - ${email}`;
  signatureList.appendChild(signatureItem);

  // Clear form fields after successful submission
  document.getElementById('fullname').value = '';
  document.getElementById('email').value = '';
});

function isValidSignature(fullname, email) {
  // Simple validation for fullname and email
  if (fullname === '' || email === '') {
    return false;
  }
  return true; 

}
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for section animation
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // Modal functionality
    const submitBtn = document.getElementById('submitBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    const modalMessage = document.getElementById('modalMessage');
    const userName = document.getElementById('userName');
    const modalImage = document.getElementById('modalImage');

    submitBtn.addEventListener('click', () => {
        // modal
          const name = document.getElementById('fullname').value.trim();

        userName.textContent = name;
        modalMessage.textContent = `Thank you, ${name}!`;

        modalImage.classList.add('animate');

        
        modal.style.display = 'flex';

        
        setTimeout(() => {
            modal.style.display = 'none';
            modalImage.classList.remove('animate');
        }, 5000);
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImage.classList.remove('animate');
    });
});
