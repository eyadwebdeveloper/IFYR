import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

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
const storage = getStorage(app);



onAuthStateChanged(auth, (user) => {
  console.log('onAuthStateChanged callback executed');
  if (user) {
    console.log('User is signed in:', user.displayName);
    checkProgress();
  } else {
    console.log('No user signed in');
    location.href = './Login-Signup?tab-login?tab=login'
  }
});

async function checkProgress() {
  console.log('checkProgress() called');
  const user = auth.currentUser;
  if (user) {
    console.log('User is signed in:', user.displayName);
    try {
      const userRef = doc(db, 'IFYR', user.email);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        // Get the radio inputs
const paperCategoryRadios = document.getElementsByName('paper-category');
const paperFieldRadios = document.getElementsByName('paper-field');


// Function to get the value of the checked radio input
function getCheckedRadioValue(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null; // Return null if no radio is checked
}
// Function to set the checked value of a radio input
function setCheckedRadioValue(radios, value) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].value === value) {
      radios[i].checked = true;
    } else {
      radios[i].checked = false;
    }
  }
}

// Example usage:


// Get the values of the checked radio inputs
let paperCategoryValue = getCheckedRadioValue(paperCategoryRadios);
let paperFieldValue = getCheckedRadioValue(paperFieldRadios);
document.getElementById('app-team-name').innerHTML = userData.TeamName;
document.getElementById('team-name').value = userData.TeamName;
document.getElementById('team-size').value = userData.TeamSize;
document.getElementById('member1-first-name').value = userData.LeaderFirstName;
document.getElementById('member1-last-name').value = userData.LeaderLastName;
document.getElementById('member1-email-address').value = userData.LeaderEmailAddress;
document.getElementById('member1-birthday').value = userData.LeaderBirthday;
document.getElementById('member1-country').value = userData.LeaderCountry;
document.getElementById('member1-institution').value = userData.Leaderinstitution;
document.getElementById('member2-first-name').value = userData.Member2FirstName;
document.getElementById('member2-last-name').value = userData.Member2LastName;
document.getElementById('member2-email-address').value = userData.Member2EmailAddress;
document.getElementById('member2-birthday').value = userData.Member2Birthday;
document.getElementById('member2-country').value = userData.Member2Country;
document.getElementById('member2-institution').value = userData.Member2institution;
document.getElementById('member3-first-name').value = userData.Member3FirstName;
document.getElementById('member3-last-name').value = userData.Member3LastName;
document.getElementById('member3-email-address').value = userData.Member3EmailAddress;
document.getElementById('member3-birthday').value = userData.Member3Birthday;
document.getElementById('member3-country').value = userData.Member3Country;
document.getElementById('member3-institution').value = userData.Member3institution;
document.getElementById('member4-first-name').value = userData.Member4FirstName;
document.getElementById('member4-last-name').value = userData.Member4LastName;
document.getElementById('member4-email-address').value = userData.Member4EmailAddress;
document.getElementById('member4-birthday').value = userData.Member4Birthday;
document.getElementById('member4-country').value = userData.Member4Country;
document.getElementById('member4-institution').value = userData.Member4institution;
document.getElementById('member5-first-name').value = userData.Member5FirstName;
document.getElementById('member5-last-name').value = userData.Member5LastName;
document.getElementById('member5-email-address').value = userData.Member5EmailAddress;
document.getElementById('member5-birthday').value = userData.Member5Birthday;
document.getElementById('member5-country').value = userData.Member5Country;
document.getElementById('member5-institution').value = userData.Member5institution;
document.getElementById('paper-title').value = userData.paperTitle;
setCheckedRadioValue(paperCategoryRadios, userData.paperCategorey);
setCheckedRadioValue(paperFieldRadios, userData.paperField);



        if (userData.fileUploaded) {
          location.href = './Status?tab=status'
        } else {
         
          const fileInput = document.getElementById('real-file');
          const uploadFileBtn = document.getElementById('send-paper');
          
          uploadFileBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const file = fileInput.files[0];
            // Upload the file to Firebase Storage
            const fileRef = ref(storage, `IFYR/${auth.currentUser.email}/${file.name}`);
            await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(fileRef);
            // Update the user's Firestore document to indicate a file has been uploaded
            const userRef = doc(db, 'IFYR', auth.currentUser.email);
            await setDoc(userRef, { ...userData, fileUrl: downloadURL, fileUploaded: true });
            alert('File uploaded successfully!');
            window.location.href = './Status?tab=status';
          });
        }
      } else {
        window.location.href = './IFYR-Portal?tab=rules';
      }
    } catch (error) {
      console.error('Error checking progress: ' + error.message);
    }
  } else {
    console.log('No user signed in');
    alert('You must Signin first');
    setTimeout(function() {
        window.location.href = `./IFYR-Portal?tab=status`;
      }, 2000);
  }
}
function signOutUser() {
  auth.signOut().then(() => {
    // Sign-out successful.
    alert('You have been signed out');
    window.location.href = `./Login-Signup?tab-login`; // redirect to login page
  }).catch((error) => {
    // An error happened.
    alert('Error signing out');
  });
}
const signOut = document.getElementById('signout');
signOut.addEventListener('click', (event) => {
  event.preventDefault();
  signOutUser();
});

document.getElementById('member2').style.display = 'none';
document.getElementById('member3').style.display = 'none';
document.getElementById('member4').style.display = 'none';
document.getElementById('member5').style.display = 'none';
document.getElementById('team-size').addEventListener('change', function() {
    var selectedValue = document.getElementById('team-size').value;
    console.log("Selected team size:", selectedValue);
    if (selectedValue == 'solo'){
      document.getElementById('member2').style.display = 'none';
      document.getElementById('member3').style.display = 'none';
      document.getElementById('member4').style.display = 'none';
      document.getElementById('member5').style.display = 'none';
    }
    else if(selectedValue == 'due'){
      document.getElementById('member2').style.display = 'block';
      document.getElementById('member3').style.display = 'none';
      document.getElementById('member4').style.display = 'none';
      document.getElementById('member5').style.display = 'none';
    } else if(selectedValue == 'trio'){
      document.getElementById('member2').style.display = 'block';
      document.getElementById('member3').style.display = 'block';
      document.getElementById('member4').style.display = 'none';
      document.getElementById('member5').style.display = 'none';
    } else if(selectedValue == 'squad'){
      document.getElementById('member2').style.display = 'block';
      document.getElementById('member3').style.display = 'block';
      document.getElementById('member4').style.display = 'block';
      document.getElementById('member5').style.display = 'none';
    } else if(selectedValue == 'quintet'){
      document.getElementById('member2').style.display = 'block';
      document.getElementById('member3').style.display = 'block';
      document.getElementById('member4').style.display = 'block';
      document.getElementById('member5').style.display = 'block';
    } 
  });


  document.getElementById('file-container').addEventListener('click', ()=>{
    document.getElementById('real-file').click();
  })
  const fileInput = document.getElementById('real-file');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  document.getElementById('file-name').textContent = file.name;
});