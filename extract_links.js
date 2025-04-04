for (let link of document.links) { 
    if (link.href.indexOf('en.wikipedia') == -1) { 
        console.log(link.href);
    }
}

/**
 * Extract and log all links from the current webpage, excluding Wikipedia links. Useful to verify the scope of an assessment/scan.
 * 
 * How to Use:
 * 1. Open a website in your browser.
 * 2. Open Developer Tools (F12 or Ctrl+Shift+I in Chrome/Firefox/Edge).
 * 3. Go to the Console tab and paste this script.
 * 4. Press Enter to execute.
 * 5. The console will display all extracted links except those containing "en.wikipedia".
 * 
 * What Can Be Changed:
 * - To exclude other domains, modify `'en.wikipedia'` to a different string.
 * - To log only links from a specific domain, use `link.href.includes('yourdomain.com')` instead.
 * - Add additional processing (e.g., save links to a file, send to an API).
 */



