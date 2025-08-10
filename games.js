// Function to handle video playback
function playVideo(url) {
    // In a real implementation, this would open a modal with the video player
    window.open(url, '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set video thumbnails (would be dynamic in a real implementation)
const videoThumbnails = document.querySelectorAll('.video-thumbnail');
const thumbnailImages = [
    'https://source.unsplash.com/random/400x300/?ampe,game',
    'https://source.unsplash.com/random/400x300/?oware,board',
    'https://source.unsplash.com/random/400x300/?ayo,game',
    'https://source.unsplash.com/random/400x300/?morabaraba,board'
];

videoThumbnails.forEach((thumbnail, index) => {
    thumbnail.style.backgroundImage = `url(${thumbnailImages[index]})`;
    thumbnail.setAttribute('onclick', `playVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')`);
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
} 