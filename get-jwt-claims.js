let jwt = sessionStorage.getItem("Token");
JSON.parse(atob(jwt.split('.')[1]));


/**
 * Decode and parse a JWT (JSON Web Token) stored in sessionStorage.
 * 
 * How to Use:
 * 1. This script retrieves the JWT token stored under the key "Token" in sessionStorage.
 * 2. It decodes the payload (middle part of the JWT) and logs the decoded JSON object to the console.
 * 
 * What Can Be Changed:
 * - Change the key `"Token"` to another key if the JWT is stored under a different name.
 * - Add custom logic to inspect or validate the JWT (e.g., check for `exp` to validate expiry).
 * - If you want to securely send the token elsewhere, you can replace `console.log` with your desired logic.
 */

let jwt = sessionStorage.getItem("Token");  // Retrieve JWT from sessionStorage

// Decode the payload and parse it into a JSON object
let decodedPayload = JSON.parse(atob(jwt.split('.')[1]));

// Log the decoded payload to the console for inspection
console.log(decodedPayload);
