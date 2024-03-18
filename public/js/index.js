 // JavaScript to handle navbar visibility on scroll
 let prevScrollPos = window.scrollY;
 let isNavbarVisible = true; // Variable to track if the navbar is currently visible

 let menuLink = document.getElementById("navkilink");

 function toggleTou() {
     menuLink.classList.toggle('manu-outlu');
 }

 window.onscroll = function () {
     let currentScrollPos = window.scrollY;
     const navbar = document.getElementById("navbar");

     if (currentScrollPos === 0) {
         // At the very top of the page, show the navbar with a transparent background
         navbar.classList.remove("hidden");
         navbar.style.background = 'transparent';
         isNavbarVisible = true;
     } else if (prevScrollPos > currentScrollPos) {
         // Scrolling up
         if (!isNavbarVisible) {
             // If navbar is not currently visible, unhide it for 3000ms with milk white background
             navbar.classList.remove("hidden");
             navbar.style.background = '#fff'; // Milk white background
             isNavbarVisible = true;

             // Use setTimeout to hide the navbar again after 3000ms
             // setTimeout(function () {
             //     navbar.classList.add("hidden");
             //     navbar.style.background = 'transparent';
             //     isNavbarVisible = false;
             // }, 3000);
         }
     } else {
         // Scrolling down
         if (isNavbarVisible) {
             // If navbar is currently visible, hide it
             navbar.classList.add("hidden");
             navbar.style.background = 'transparent'; // Transparent background
             isNavbarVisible = false;

             setTimeout(function () {
                 navbar.classList.add("hidden");
                 navbar.style.background = 'transparent';
                 isNavbarVisible = false;
             }, 6000);
         }
     }

     prevScrollPos = currentScrollPos;
 };


 //   var navbardo = document.querySelector('nav');

 //   window.onscroll = function() {
 //      if(window.scrollY > 0){
 //          navbardo.style.background = '#eefff9';
 //      } else{
 //          navbardo.style.background = 'transparent';
 //      }
 //   }
/***********************************************************************************************************/
 /*-----------carousel-------------*/
 var slideIndex = 0;
 carousel();

 function carousel() {
     var i;
     var x = document.getElementsByClassName("slide-item");
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > x.length) {
         slideIndex = 1;
     }
     x[slideIndex - 1].style.display = "block";
     setTimeout(carousel, 5000);
 }

 function nextSlide() {
     slideIndex++;
     showSlide();
 }

 function prevSlide() {
     slideIndex--;
     showSlide();
 }

 function showSlide() {
     var x = document.getElementsByClassName("slide-item");
     if (slideIndex > x.length) {
         slideIndex = 1;
     }
     if (slideIndex < 1) {
         slideIndex = x.length;
     }
     for (var i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     x[slideIndex - 1].style.display = "block";
 }


 /**************************************************************************/
 /*Privacy*/
 function showTab(tab) {
    const privacyTab = document.getElementById('privacy');
    const termsTab = document.getElementById('terms');
    const privacyContent_privacy = document.querySelector('.content_privacy.active');
    const termsContent_privacy = document.querySelector('.content_privacy:not(.active)');

    privacyTab.classList.remove('active');
    termsTab.classList.add('active');

    privacyContent_privacy.style.display = 'none';
    termsContent_privacy.style.display = 'block';

    termsContent_privacy.classList.add('active');
    privacyContent_privacy.classList.remove('active');
}


/**********************************************************************************/
/* External Navbar chinglaknabane */
// Use fetch API to get the content of the external page
fetch('navbar.html')
.then(response => response.text())
.then(html => {
  // Insert the fetched HTML content into the div
  document.getElementById('external-navbar').innerHTML = html;
})
.catch(error => {
  // Handle any errors
  console.error('Error fetching external page:', error);
});


/************************************************************************************/
// Sample blog post data
const blogPosts = [
    { title: "Welcome to PortalEra Blog", content: "This is the first blog post on the PortalEra blog." },
    { title: "The Importance of Web Development", content: "In this post, we discuss why web development is crucial for businesses." },
    { title: "Tips for Successful E-Commerce Websites", content: "Learn about the key factors that contribute to the success of e-commerce websites." }
  ];
  
  const blogPostsContainer = document.getElementById('blog-posts');
  
  // Function to create a blog post element
  function createBlogPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;
    
    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;
    
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    
    return postElement;
  }
  
  // Function to render all blog posts
  function renderBlogPosts() {
    blogPosts.forEach(post => {
      const postElement = createBlogPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  // Render the blog posts when the page loads
  document.addEventListener('DOMContentLoaded', renderBlogPosts);
  