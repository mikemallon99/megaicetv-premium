// Function to replace the contents of the #logo-icon div with an img tag
function replaceLogoIcon() {
    // Find the div with id="logo-icon"
    const logoIconDiv = document.getElementById('logo-icon');

    // Check if the div exists
    if (logoIconDiv) {
        // Create a new img element
        const newImg = document.createElement('img');

        // Set the image source (URL of the image you want to display)
        newImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhMyFccGMFrJc-7AjWQKLGci00KxdG3wWVw&s'; // Replace with your image URL

        // Set other attributes for the img tag (optional)
        newImg.alt = 'New Logo';
        newImg.width = 100; // Example: set the width
        newImg.height = 50; // Example: set the height

        // Clear any existing content in the logo-icon div
        logoIconDiv.innerHTML = '';

        // Append the new img element to the logo-icon div
        logoIconDiv.appendChild(newImg);

        console.log('Replaced logo icon with new image.');
    } else {
        console.log('Element with id="logo-icon" not found.');
    }
}

// Call the function to replace the logo icon
replaceLogoIcon();

// Function to inject a script into the page context
function injectScript(file) {
    const script = document.createElement('script');
    script.src = browser.runtime.getURL(file); // Use browser.runtime.getURL to inject the script
    (document.head || document.documentElement).appendChild(script);
    script.onload = function() {
        script.remove(); // Remove the script after it's injected
    };
}

// Inject the script that modifies window.fetch
injectScript('injected_script.js');

