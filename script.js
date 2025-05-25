document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const adBanner = document.getElementById('dummyAd');
    const modal = document.getElementById('adModal');
    const closeBtn = document.querySelector('.close-btn');
    const ctaButton = document.querySelector('.cta-button');
    
    // Track ad views (in a real application, this would send to analytics)
    function trackAdView() {
        console.log('Ad viewed at: ' + new Date().toLocaleString());
    }
    
    // Track ad clicks (in a real application, this would send to analytics)
    function trackAdClick() {
        console.log('Ad clicked at: ' + new Date().toLocaleString());
    }
    
    // Track CTA button clicks (in a real application, this would send to analytics)
    function trackCTAClick() {
        console.log('CTA button clicked at: ' + new Date().toLocaleString());
    }
    
    // Show modal when ad is clicked
    adBanner.addEventListener('click', function() {
        modal.style.display = 'block';
        trackAdClick();
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle CTA button click
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        trackCTAClick();
        alert('Thank you for your interest! In a real application, this would redirect to the product page.');
    });
    
    // Track ad view when page loads
    trackAdView();
}); 