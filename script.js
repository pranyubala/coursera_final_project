// Function to load random specials
function loadRandomSpecials() {

   
    var randomSpecials = [
        'specials1.html',
        'specials2.html',
        'specials3.html',
        // Add more pages as needed
    ];

    // Get the last loaded page from session storage
    var lastLoadedPage = sessionStorage.getItem('lastLoadedPage');

    // Remove the last loaded page from the options to avoid repetition
    var availablePages = randomSpecials.filter(page => page !== lastLoadedPage);

    // If there are available pages, pick a random one
    if (availablePages.length > 0) {
        var randomIndex = Math.floor(Math.random() * availablePages.length);
        var randomURL = availablePages[randomIndex];

        // Save the current page as the last loaded page
        sessionStorage.setItem('lastLoadedPage', randomURL);

        // Redirect to the selected page
        window.location.href = randomURL;
    } else {
        // If all pages have been loaded, reset and load any page
        sessionStorage.removeItem('lastLoadedPage');
        loadRandomSpecials();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Show loading overlay
    document.getElementById("loading-overlay").style.display = "flex";

    // Hide the loading overlay after 3 seconds
    setTimeout(function () {
        document.getElementById("loading-overlay").style.display = "none";
  }, 400);
});
 
