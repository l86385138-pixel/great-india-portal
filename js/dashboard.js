import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const services = {
  student: [
    ["Live Class", "STUDENT_LIVE_CLASS_URL"],
    ["Recorded Class", "STUDENT_RECORDED_CLASS_URL"],
    ["Live Test", "STUDENT_LIVE_TEST_URL"],
    ["Notes / Study Material", "STUDENT_NOTES_URL"],
    ["Assignments", "STUDENT_ASSIGNMENTS_URL"],
    ["Chat", "STUDENT_CHAT_URL"]
  ],
  teacher: [
    ["Live Class", "TEACHER_LIVE_CLASS_URL"],
    ["Recorded Class", "TEACHER_RECORDED_CLASS_URL"],
    ["Live Test", "TEACHER_LIVE_TEST_URL"],
    ["Notes / Study Material", "TEACHER_NOTES_URL"],
    ["Assignments", "TEACHER_ASSIGNMENTS_URL"],
    ["Chat", "TEACHER_CHAT_URL"]
  ]
};

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    location.href = "login.html";
    return;
  }
  const snap = await getDoc(doc(db, "users", user.uid));
  const data = snap.exists() ? snap.data() : {name: user.email, role: "student"};
  document.getElementById("welcome").textContent = "Welcome, " + (data.name || user.email);
  document.getElementById("role").textContent = (data.role || "student").toUpperCase();

  const box = document.getElementById("services");
  (services[data.role] || services.student).forEach(([name, url]) => {
    const a = document.createElement("a");
    a.className = "service";
    a.href = url;
    a.textContent = name;
    a.target = "_blank";
    box.appendChild(a);
  });
});

document.getElementById("logout").onclick = async () => {
  await signOut(auth);
  location.href = "login.html";
};
