document.addEventListener('DOMContentLoaded', function() {
    // Sample ad data - default ads if no user ads are available
    const defaultAds = [
        {
            id: 1,
            title: 'Premium Headphones',
            description: 'Experience crystal clear sound with our noise-cancelling headphones.',
            image: 'https://placehold.co/600x400/4c68d7/ffffff?text=Headphones',
            detailedDescription: 'These premium noise-cancelling headphones offer up to 30 hours of battery life, Bluetooth connectivity, and studio-quality sound. Perfect for music lovers, travelers, and professionals who need to focus without distractions.',
            ctaLink: 'https://example.com/headphones',
            ctaText: 'Buy Now'
        },
        {
            id: 2,
            title: 'Smart Watch Series 5',
            description: 'Track your fitness and stay connected with our latest smartwatch.',
            image: 'https://placehold.co/600x400/e74c3c/ffffff?text=Smartwatch',
            detailedDescription: 'Our Smart Watch Series 5 tracks your heart rate, sleep patterns, steps, and more. With a 3-day battery life and water resistance up to 50 meters, it's the perfect companion for your active lifestyle. Receive notifications, make calls, and control your music without reaching for your phone.',
            ctaLink: 'https://example.com/smartwatch',
            ctaText: 'Shop Now'
        },
        {
            id: 3,
            title: 'Eco-Friendly Water Bottle',
            description: 'Stay hydrated and save the planet with our reusable bottle.',
            image: 'https://placehold.co/600x400/27ae60/ffffff?text=Water+Bottle',
            detailedDescription: 'Made from recycled materials, our eco-friendly water bottle keeps your drinks cold for 24 hours or hot for 12 hours. BPA-free and dishwasher safe, this bottle helps reduce plastic waste while keeping you hydrated throughout the day.',
            ctaLink: 'https://example.com/bottle',
            ctaText: 'Get Yours'
        },
        {
            id: 4,
            title: 'Wireless Charging Pad',
            description: 'Charge your devices without the hassle of cables.',
            image: 'https://placehold.co/600x400/f39c12/ffffff?text=Charging+Pad',
            detailedDescription: 'This sleek wireless charging pad supports fast charging for all Qi-enabled devices. Its minimalist design fits perfectly in any home or office setting. The built-in smart chip prevents overheating and optimizes charging speed for each device.',
            ctaLink: 'https://example.com/charger',
            ctaText: 'Order Now'
        }
    ];

    // Get references to DOM elements
    const adsGrid = document.getElementById('adsGrid');
    const modal = document.getElementById('adModal');
    const adDetails = document.getElementById('adDetails');
    const closeBtn = document.querySelector('.close-btn');
    const addAdForm = document.getElementById('addAdForm');

    // Load ads from localStorage or use default ads
    function loadUserAds() {
        let userAds = JSON.parse(localStorage.getItem('userAds')) || [];
        return userAds;
    }

    // Save ads to localStorage
    function saveUserAds(ads) {
        localStorage.setItem('userAds', JSON.stringify(ads));
    }

    // Load ads into the grid
    function loadAds() {
        adsGrid.innerHTML = '';
        
        // Get user-submitted ads
        const userAds = loadUserAds();
        
        // Combine user ads with default ads if no user ads exist
        const adsToShow = userAds.length > 0 ? userAds : defaultAds;
        
        adsToShow.forEach(ad => {
            const adCard = document.createElement('div');
            adCard.classList.add('ad-card');
            adCard.dataset.adId = ad.id;
            
            adCard.innerHTML = `
                <img src="${ad.image}" alt="${ad.title}" class="ad-image" onerror="this.src='https://placehold.co/600x400/cccccc/666666?text=Image+Not+Found'">
                <div class="ad-content">
                    <h3 class="ad-title">${ad.title}</h3>
                    <p class="ad-description">${ad.description}</p>
                    <a href="#" class="view-more">View Details</a>
                </div>
            `;
            
            // Add click event to the entire card
            adCard.addEventListener('click', function() {
                showAdDetails(ad);
            });
            
            adsGrid.appendChild(adCard);
        });
    }

    // Show ad details in modal
    function showAdDetails(ad) {
        adDetails.innerHTML = `
            <img src="${ad.image}" alt="${ad.title}" class="ad-detail-image" onerror="this.src='https://placehold.co/600x400/cccccc/666666?text=Image+Not+Found'">
            <h2 class="ad-detail-title">${ad.title}</h2>
            <p class="ad-detail-description">${ad.detailedDescription}</p>
            <a href="${ad.ctaLink}" target="_blank" class="ad-cta">${ad.ctaText}</a>
        `;
        
        modal.style.display = 'block';
    }

    // Handle form submission for new ads
    addAdForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.classList.add('message');
        addAdForm.parentNode.insertBefore(messageEl, addAdForm);
        
        // Get form values
        const title = document.getElementById('adTitle').value.trim();
        const description = document.getElementById('adDescription').value.trim();
        const imageUrl = document.getElementById('adImageUrl').value.trim();
        const detailedDescription = document.getElementById('adDetailedDescription').value.trim();
        const ctaLink = document.getElementById('adCtaLink').value.trim();
        const ctaText = document.getElementById('adCtaText').value.trim();
        
        // Basic validation
        if (!title || !description || !imageUrl || !detailedDescription || !ctaLink || !ctaText) {
            messageEl.textContent = 'Please fill in all fields';
            messageEl.classList.add('error');
            
            // Remove message after 3 seconds
            setTimeout(() => {
                messageEl.remove();
            }, 3000);
            
            return;
        }
        
        // Get existing ads
        const userAds = loadUserAds();
        
        // Create new ad object
        const newAd = {
            id: Date.now(), // Use timestamp as unique ID
            title,
            description,
            image: imageUrl,
            detailedDescription,
            ctaLink,
            ctaText
        };
        
        // Add new ad
        userAds.push(newAd);
        
        // Save to localStorage
        saveUserAds(userAds);
        
        // Show success message
        messageEl.textContent = 'Ad added successfully!';
        messageEl.classList.add('success');
        
        // Remove message after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
        
        // Reset form
        addAdForm.reset();
        
        // Reload ads
        loadAds();
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize the app
    loadAds();
}); 