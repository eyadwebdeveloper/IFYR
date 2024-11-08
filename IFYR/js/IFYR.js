import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDQtBb8zDA1iPZBRjFtXjcnj2zAIhlHzIY",
    authDomain: "ysg-portal.firebaseapp.com",
    projectId: "ysg-portal",
    storageBucket: "ysg-portal.appspot.com",
    messagingSenderId: "91821075370",
    appId: "1:91821075370:web:80369759cd25604e7499d3",
    measurementId: "G-EC8037VVTR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



onAuthStateChanged(auth, (user) => {
  console.log('onAuthStateChanged callback executed');
  if (user) {
    console.log('User is signed in:', user.displayName);
    const userEmail = user.email;
    checkProgress();
  } else {
    console.log('No user signed in');
    showMsg('no user signed in');
    setTimeout(function() {
      window.location.href = `../IFYR-Portal`;
    }, 2000);
  }
  
});

async function checkProgress() {
  console.log('checkProgress() called');
  if (auth.currentUser) {
    console.log('auth.currentUser is not null');
    document.getElementById('username').innerHTML = auth.currentUser.displayName;
    
    try {
      const userRef = doc(db, 'IFYR', auth.currentUser.email);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        window.location.href = 'Status?tab=status'
      }
    } catch (error) {
      console.log('Error checking progress: ' + error.message);
    }
  } else {
    console.log('auth.currentUser is null');
    location.href = '../Login-Signup?tab-login';
    console.log('You must be signed in to check your progress.');
  }
}

function signOutUser() {
  auth.signOut().then(() => {
    // Sign-out successful.
    good('You have been signed out');
    setTimeout(function() {
      window.location.href = `../Login-Signup?tab-login`;
    }, 3000);
  }).catch((error) => {
    // An error happened.
    showMsg('Error signing out');
  });
}
const signOut = document.getElementById('signout');
signOut.addEventListener('click', (event) => {
  event.preventDefault();
  signOutUser();
});



document.querySelector("section").classList.remove("active");

function showMsg(msg){
    const section = document.getElementById("failed-popup");
     const overlay = document.querySelector(".overlay");
     const closeBtn = document.getElementById("close-btn");
     const message = document.getElementById('failed-msg');
        message.innerHTML = msg;
        section.classList.add("active");
      overlay.addEventListener("click", () =>{
        section.classList.remove("active");
      }
      );
      closeBtn.addEventListener("click", () =>{
        section.classList.remove("active");
      }
      );
}
function good(msg){
  document.getElementById("msg").innerHTML = msg;
  document.getElementById("submitted-popup").classList.add("active");
}
