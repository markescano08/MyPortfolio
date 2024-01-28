//Transition-image
document.addEventListener("DOMContentLoaded", function() {
  const transitionImage = document.querySelector(".transition-image");
  const imageArray = ["Portfolio/profilepic/PSCII.jpg", "Portfolio/profilepic/FD.jpg", "Portfolio/profilepic/school.jpg", "Portfolio/profilepic/guitar.jpg"];
  let currentImageIndex = 0;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    const nextImageSrc = imageArray[currentImageIndex];
    transitionImage.style.opacity = 0; // Hide the current image
    setTimeout(() => {
      transitionImage.src = nextImageSrc; 
      transitionImage.style.opacity = 1;
    }); 
  }

  setInterval(nextImage, 4000); // Change image every 3 seconds (adjust as needed)
});

//Navbar
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px"; /* Adjust the height of the navbar */
    }

    prevScrollPos = currentScrollPos;
  };

// Smooth scrolling when clicking on links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// On/Off Dropdown list
let dropdownVisible = false;
  function toggleDropdown() {
    const dropdownContent = document.getElementById("menu-icon").querySelector(".dropdown-content");

    if (dropdownVisible) {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }

    dropdownVisible = !dropdownVisible;
  }

  function closeDropdown() {
    const dropdownContent = document.getElementById("menu-icon").querySelector(".dropdown-content");
    dropdownContent.style.display = "none";
    dropdownVisible = false;
  }
  
  // Close dropdown when scrolling
window.addEventListener("scroll", () => {
  if (dropdownVisible) {
    closeDropdown();
  }
});
  
// Create and append popup containers for each image trigger
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-trigger').forEach((trigger, index) => {
    const imageSrc = trigger.getAttribute('data-image-src');
    createImagePopup(imageSrc, index, trigger); // Pass trigger to the function
  });
  window.addEventListener('scroll', () => {
const openPopup = document.querySelector('.popup-container[style*="display: flex;"]');
if (openPopup) {
  const index = parseInt(openPopup.id.replace('imagePopup', ''), 10);
  closeImagePopup(index);
}
});
});

function createImagePopup(imageSrc, index, trigger) {
  // Create elements
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  popupContainer.id = `imagePopup${index}`;

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => closeImagePopup(index));

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Popup Image';

  // Append elements
  popupContent.appendChild(closeBtn);
  popupContent.appendChild(img);
  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);

  // Attach click event to open the popup
  trigger.addEventListener('click', () => openImagePopup(index));
}

function openImagePopup(index) {
  const popup = document.getElementById(`imagePopup${index}`);
  popup.style.display = 'flex';
}

function closeImagePopup(index) {
  const popup = document.getElementById(`imagePopup${index}`);
  popup.classList.add('closed'); // Add 'closed' class for fade-out animation
  setTimeout(() => {
    popup.style.display = 'none';
    popup.classList.remove('closed');
  }, 500); // Adjust the duration to match the CSS transition duration
}

//Transition Image 2
document.addEventListener("DOMContentLoaded", function() {
  const transitionImage = document.querySelector(".transition-image2");
  const indicatorsContainer = document.querySelector(".indicators");
  const imageArray = ["welder.jpg", "TechDraft.jpg", "electrician.jpg", "builder.jpg"];
  let currentImageIndex = 0;

  function updateIndicators() {
    const indicators = Array.from(indicatorsContainer.children);
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active-indicator", index === currentImageIndex);
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    const nextImageSrc = imageArray[currentImageIndex];
    transitionImage.style.opacity = 0; // Hide the current image
    transitionImage.onload = function() {
      // Set new image after it's loaded
      transitionImage.style.opacity = 1;
      updateIndicators();
    };
    
    transitionImage.src = nextImageSrc;
  }

  // Create indicators based on the number of images
  for (let i = 0; i < imageArray.length; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", () => {
      currentImageIndex = i;
      updateIndicators();
      transitionImage.style.opacity = 0;
      setTimeout(() => {
        transitionImage.src = imageArray[currentImageIndex];
        transitionImage.style.opacity = 1;
      });
    });
    indicatorsContainer.appendChild(indicator);
  }

  updateIndicators(); 
  setInterval(nextImage, 4000);
});
