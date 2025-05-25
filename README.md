# Ad Platform Website

A website that displays ads and allows users to add their own ads through a simple form.

## Features

- Add your own ads through a user-friendly form
- Ads are stored in the browser's localStorage
- Responsive grid layout for displaying ads
- Click on any ad to view more details in a modal popup
- Call-to-action buttons for each ad
- Mobile-friendly design

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Use the form at the top of the page to add your own ads
4. Click on any ad to see more details
5. Click the call-to-action button to visit the advertiser's website

## Adding Your Own Ads

Fill out the form with the following information:

- **Title**: The headline for your ad
- **Short Description**: Brief text that appears on the ad card
- **Image URL**: Link to the image you want to display (must be a valid URL)
- **Detailed Description**: Longer description shown when users click on your ad
- **Call-to-Action Link**: The URL where users will be directed when clicking your CTA button
- **Call-to-Action Text**: The text for your CTA button (e.g., "Buy Now", "Learn More")

## How It Works

- User-submitted ads are stored in your browser's localStorage
- If no user ads exist, sample default ads will be shown
- Your ads will persist between browser sessions until you clear your browser data

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- localStorage for data persistence

## Future Improvements

- Add ability to edit and delete ads
- Implement user authentication for personalized ad management
- Add analytics to track ad clicks and conversions
- Implement ad categories and filtering options
- Backend integration to store ads in a database 