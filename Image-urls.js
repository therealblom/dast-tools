let pic_urls = [];
for (let pic of document.images) {
    pic_urls.push(pic.src);
}
console.log(pic_urls);

//add filter for domain
if (pic.src.includes('example.com')) {
    pic_urls.push(pic.src);
}


/**
 * Extract and log all image URLs (src attributes) from the current webpage.
 * 
 * How to Use:
 * 1. Open a website in your browser.
 * 2. Open Developer Tools (F12 or Ctrl+Shift+I in Chrome/Firefox/Edge).
 * 3. Go to the Console tab and paste this script.
 * 4. Press Enter to execute.
 * 5. The console will display an array of all image URLs (src attributes) found on the page.
 * 
 * What Can Be Changed:
 * - To filter only images from a specific domain, modify the condition:
 *     `if (pic.src.includes('yourdomain.com')) { ... }`
 * - If you want to capture additional attributes (like `alt` or `title`), you can access them by:
 *     `pic.alt`, `pic.title`, etc.
 */
