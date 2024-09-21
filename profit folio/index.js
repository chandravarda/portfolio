let menuIcon = document.querySelector('#menu-icon')
let navbar =document.querySelector(".navbar")


menuIcon.onclick =()=>{
    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle('active')
}
 
// scrol section active link

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight ;
        let id = sec.getAttribute('id')
         
         if(top >= offset && top < offset + height){
             navLinks.forEach((links)=>{
                links.classList.remove('active');
                // document.querySelector(`header nav a[href+ + id + ]`).classList.add('active')
                // document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
                const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                } else {
                    console.warn(`No link found for id: ${id}`);
                }
             })
         }
    })
    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 100 );

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
// scroll reveal
ScrollReveal({
    delay:200,
    duration:2000,
    distance:'80px'
})
ScrollReveal().reveal('.home-content,heading',{origin:'top'})
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact-form',{origin:'bottom'})
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'})
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'})


//   // Initialize EmailJS with your public key
  (function() {
    emailjs.init("fZ1UEWhQc5O4bEwcz"); // Replace with your actual public key
  })();

  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Collect form input values
    const templateParams = {
      full_name: document.getElementById('full_name').value,
      email: document.getElementById('email').value,
      mobile_number: document.getElementById('mobile_number').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('avxr7gb', 'template_oatnuxf', templateParams)
      .then(function(response) {
         document.getElementById('status').innerHTML = 'Email sent successfully!';
      }, function(error) {
         document.getElementById('status').innerHTML = 'Failed to send email. Please try again.';
      });
  });

