import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import {
  doc, setDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const msg = document.getElementById("msg");
const show = (text, error=false) => {
  msg.textContent = text;
  msg.className = "message " + (error ? "error" : "success");
};

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        document.getElementById("email").value.trim(),
        document.getElementById("password").value
      );
      location.href = "dashboard.html";
    } catch (err) {
      show("Login failed: " + err.message, true);
    }
  });
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        document.getElementById("email").value.trim(),
        document.getElementById("password").value
      );
      await setDoc(doc(db, "users", cred.user.uid), {
        name: document.getElementById("name").value.trim(),
        mobile: document.getElementById("mobile").value.trim(),
        email: cred.user.email,
        role: "student",
        createdAt: serverTimestamp()
      });
      location.href = "dashboard.html";
    } catch (err) {
      show("Registration failed: " + err.message, true);
    }
  });
}
