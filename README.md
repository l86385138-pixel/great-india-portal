# Great India Portal — Firebase + GitHub Pages

Simple portal with Login/Register and an authenticated dashboard. No portal name or logo is displayed.

## Firebase
- Project: great-india-portal
- Email/Password Authentication is required.
- Firestore is required.
- `firebase-config.js` contains the Firebase Web App configuration supplied from Firebase Console.

## GitHub Pages
Upload the CONTENTS of this folder to the repository root. Do not upload the ZIP itself as the website.

Then enable GitHub Pages from Settings -> Pages -> Deploy from a branch -> main -> / (root).

## Important
If Firebase still reports `auth/api-key-not-valid` after using this ZIP, the problem is in Firebase/Google Cloud API-key configuration rather than the HTML code. Check Google Cloud Console -> APIs & Services -> Credentials -> the Firebase Web API key, and make sure it is active and not restricted in a way that blocks Firebase Authentication.

Do not publish Service Account JSON files, private keys, or GitHub tokens.
