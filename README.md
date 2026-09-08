# Simple Firebase Portal

This is a deliberately simple portal: public page -> Login/Register -> authenticated dashboard.
No portal name or logo is included.

## Firebase setup
1. Create a Firebase project.
2. Enable Authentication -> Sign-in method -> Email/Password.
3. Create Firestore Database.
4. Add a Web App in Firebase and copy its config into `firebase-config.js`.
5. Publish `firestore.rules` in Firestore Rules.
6. Upload this folder to a GitHub repository and enable GitHub Pages.

## Teacher accounts
New registrations are created as `student` by default.
For security, do NOT let the public registration form choose `teacher`.
A trusted/admin process should change a user's `role` to `teacher`.

## Connecting the apps
Edit `js/dashboard.js` and replace the placeholder URLs with the real Student App and Teacher App URLs.
The portal then acts as the login/gateway while the apps provide Live Class, Recorded Class, Live Test, Notes, Assignments and Chat.

If you want one common app to receive the logged-in user, the app can later verify Firebase Authentication and use the same Firebase project.
