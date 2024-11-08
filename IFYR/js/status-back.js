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

document.querySelector("section").classList.remove("active");
document.getElementById('status-content').style.display = 'block';

// Array of Success emails
const successEmails = [
  "mos.shehab2008@gmail.com",
  "sultan1.sailau@gmail.com",
  "mostafanouh2019@gmail.com",
  "abdelwahabragab430@gmail.com",
  "myqfaa@gmail.com",
  "addite@gmail.com",
  "adilboranbayev7@gmail.com",
  "shamchunarkar@gmail.com",
  "bbatoolatef@gmail.com",
  "kareemnader424@gmail.com",
  "khaledaltahan006@gmail.com",
  "mayeesha.f.k@gmail.com",
  "moharramabdelkhalek@gmail.com",
  "oh898455@gmail.com",
  "omaralayashi5@gmail.com",
  "hazemmtaha00@gmail.com",
  "ibrahim.1323037@stemdakahlia.moe.edu.eg",
  "malakhamamah32@gmail.com",
  "mazen1582008mm@gmail.com",
  "gomohab08@gmail.com",
  "nouman.ali.anwar336@gmail.com",
  "omarsherifnaguib@gmail.com",
  "shahdahmed0920@gmail.com",
  "suhas.jorige@gmail.com",
  "tareqkhali23@gmail.com",
  "yasminabdelhamed863@gmail.com",
  "amr.waleeeed@gmail.com",
  "ssamsaamm10@gmail.com",
  "hanaegypt818@gmail.com",
  "m.zaied555@gmail.com",
  "mohamedyasserdahman@gmail.com",
  "elwasifianas@gmail.com",
  "dasalvi@ncsu.edu",
  "vtjulia05@gmail.com",
  "misragmalahmad@gmail.com",
  "warda01012023@gmail.com",
  "nashaatahmed555@gmail.com",
  "jane20062066@gmail.com",
  "mahmoud.2222048@stemsharkya.moe.edu.eg",
  "ahmedsaifeldeen1314@gmail.com",
  "mohamedhany578875@gmail.com",
  "alsanakamaldin@gmail.com",
  "betul.cinar@stu.ihu.edu.tr",
  "hanasat69@gmail.com",
  "amltalaat2003@gmail.com",
  "mariam.4am@gmail.com",
  "mrwnabdeltawab@gmail.com",
  "rewan.1123550@stemmaadi.moe.edu.eg",
  "davudskenderi1@gmail.com",
  "fareedsaid10@gmail.com",
  "didiaperaltaz@gmail.com",
  "nigeltakundachirambaguwa@gmail.com",
  "eyad6ashraf@gmail.com"
];
const FailEmails =[
    "ahlam.2323502@stemqena.moe.edu.eg",
    "abdallah.1023093@stemoctober.moe.edu.eg",
    "abdallah1khafaga2008@gmail.com",
    "abdallah.roshdy1023093@gmail.com",
    "abdelrahman.ibrahim.abuessa@gmail.com",
    "abdelrahman.mohammed.gomaa27@gmail.com",
    "abdelrahman.yasser530@gmail.com",
    "abdelwahabragab430@gmail.com",
    "ah2945260@gmail.com",
    "halaezzat2008@gmail.com",
    "ahmedbasounyelmanasfy@gmail.com",
    "ahmednasserdesouky@gmail.com",
    "alaaelsharnoby755@gmail.com",
    "alaamoha2009@gmail.com",
    "mustafa.2423036@stembsweif.moe.edu.eg",
    "anas.haitham.muye@gmail.com",
    "asmasaeed123789@gmail.com",
    "bvssvntmohamed@gmail.com",
    "bvssvntmohamedaboelyazied@gmail.com",
    "bmohamedaboelyazied@gmail.com",
    "carenwael1@gmail.com",
    "dfashida@gmail.com",
    "eman79538@gmail.com",
    "enangadorothy2@gmail.com",
    "fatmaselem485@gmail.com",
    "hamzaelzayat9@gmail.com",
    "hamzamohammedzahran@gmail.com",
    "hanabassiouny374@gmail.com",
    "haneenabdelhamid76@gmail.com",
    "haneenghoniem@outlook.com",
    "hindabohamar@gmail.com",
    "jana.mohammed1567@gmail.com",
    "janaabdelghani2@gmail.com",
    "kareem.1523018@stemluxor.moe.edu.eg",
    "kareemnader424@gmail.com",
    "kareememadmousa82@gmail.com",
    "kerolos.2223045@stemsharkya.moe.edu.eg",
    "khaledalhalwagy@gmail.com",
    "lenahazim5@gmail.com",
    "lordinayelioni7@gmail.com",
    "lynamamrya@gmail.com",
    "malkil3465@gmail.com",
    "mariemhassan2006@gmail.com",
    "mariamamirhanna1@gmail.com",
    "mariamamirhanna4@gmail.com",
    "mariam.elelidy25@gmail.com",
    "mariameltaweel67@gmail.com",
    "marimmahmoudlila25@gmail.com",
    "marwaalnaeemi@gmail.com",
    "mivenemad2@gmail.com",
    "mohamed00.rafaat2008@gmail.com",
    "mohamed410200580@gmail.com",
    "mohamedhany5788@gmail.com",
    "mohamednourelkady@gmail.com",
    "mona.2023552@stemmenof.moe.edu.eg",
    "nancyshaban2007@gmail.com",
    "nanakkwame18@gmail.com",
    "nodoyasser2009@gmail.com",
    "nohanasser977@gmail.com",
    "omaresmailx3@gmail.com",
    "omaryasserkhalaf2006@gmail.com",
    "ramy2923058@stemoctober2.moe.edu.eg",
    "rodinamohmed59@gmail.com",
    "samehdowidar93@gmail.com",
    "sandyhanimorqs@gmail.com",
    "sara.1622574@stemredsea.moe.edu.eg",
    "shantelmpofu767@gmail.com",
    "srajaldixit9@gmail.com",
    "sondos.1923558@stemgharbiya.moe.edu.eg",
    "tadiswamutisi@gmail.com",
    "ahmed.2523001@stemelsadat.moe.edu.eg",
    "udyati.malhotra@gmail.com",
    "xushnudbek0220@gmail.com",
    "ym145991@gmail.com",
    "zeyadmo.08moaied@gmail.com"
];

function showMsg(msg) {
    const section = document.getElementById("failed-popup");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.getElementById("close-btn");
    const message = document.getElementById('failed-msg');

    message.innerHTML = msg;
    section.classList.add("active");
    
    overlay.addEventListener("click", () => {
        section.classList.remove("active");
    });

    closeBtn.addEventListener("click", () => {
        section.classList.remove("active");
    });
}

function good(msg) {
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("submitted-popup").classList.add("active");
}

onAuthStateChanged(auth, (user) => {
    console.log('onAuthStateChanged callback executed');
    if (user) {
        console.log('User  is signed in:', user.displayName);
        checkProgress(user.email); // Pass user email to checkProgress
    } else {
        showMsg('No user signed in');
        setTimeout(() => {
            window.location.href = './Login-Signup?tab=login';
        }, 2000);
    }
});
var decision;
var success;
async function checkProgress(userEmail) {
  try {
      const userRef = doc(db, 'IFYR', userEmail);
      const userDoc = await getDoc(userRef);

     var userData;
      if (userDoc.exists()) {
         userData = userDoc.data();
          console.log('User  data:', userData); // Log the user data to check its structure
          document.getElementById('welcome-team').innerHTML = userData.TeamName;
          document.getElementById('status-date').innerHTML = `${userData.date}, ${userData.time}`;
          // Your existing logic for handling successEmails
          // Check if TeamName exists before accessing it
          let Team = userData.TeamName;
          setTimeout(() => {
            if (Team == undefined) {
              Team = "Team";
            }
          }, 3000)
      if (successEmails.includes(userEmail)) {
        success = true;
        decision = `
        <span>Dear ${Team},</span>
        <br />
  <br />
  <span>We are delighted to inform you that your research has been selected to advance to the final round of the International Fair of Youth Researchers, hosted by the Youth Science Journal. Your project demonstrated exceptional originality, a well-crafted research question, and impressive methodological rigor. From among 170 teams representing countries worldwide, your work stood out as a remarkable example of innovation and scholarly dedication.
  </span>
  <br />
  <span>The reviewing committee was highly impressed with the depth of your inquiry and the clarity with which you presented your findings. Your ability to push the boundaries of current knowledge and explore novel ideas reflects an admirable commitment to advancing scientific understanding.</span>
  <br />
  <span>As you prepare for the final stage, we kindly ask that you submit a presentation of your research by November 15th.<a href="https://forms.gle/1v2Qiu7B5qip8r1x7">in this form</a> This presentation will be a crucial component in your journey, allowing you to share your insights and engage with the evaluators who are eager to learn more about your work.
  </span>
  <br />
  <span>We extend our warmest congratulations on your well-deserved success and look forward with great anticipation to seeing your final presentation. Your research is an inspiring contribution to the scientific community, and we are excited to witness where your insights and passion will lead.
  </span>
  <br />
  <br />
  <span>
  Sincerely,
  <br />
  IFYR organization comittee
  <br />
  Youth Science Journal
  </span>
        `;
      } else if(FailEmails.includes(userEmail)) {
        success = false;
        decision = `
        <span>Dear ${Team},</span>
<span>Thank you for your participation in this year’s International Fair of Youth Researchers, organized by the Youth Science Journal. We commend you for the hard work, creativity, and dedication that went into your research. Your commitment to exploring new ideas and contributing to the scientific community is commendable, and we were honored to have your team among the 170 entries from around the world.
</span>
<br />
<span>While we regret to inform you that your team was not selected to advance to the next round, please know that the reviewing committee was thoroughly impressed by the quality of your research and your innovative approach. The competition was intense, with many outstanding projects, and your work was a valuable part of that exceptional lineup.
</span>
<br />
<span>We encourage you to continue pursuing your research interests, refining your methods, and building on the foundation you have established. The pursuit of scientific knowledge is a journey, and every project brings new learning and growth. We look forward to seeing where your passion for research will take you in the future.
</span>
<br />
<span>Thank you once again for being a part of this competition. Your work exemplifies the spirit of curiosity and resilience that drives meaningful progress in science.
</span>
<br/>
<br/>
<span>
With warmest regards,
<br />
IFYR organization comittee
<br />
Youth Science Journal
</span>
        `;
      }
          
      } else {
        window.location.href = './IFYR-Portal?tab=app';
      }

      
  } catch (error) {
      console.error('Error fetching user document:', error);
  }
}

function signOutUser () {
    auth.signOut().then(() => {
        good('You have been signed out');
        setTimeout(() => {
            window.location.href = './Login-Signup?tab=login';
        }, 2000);
    }).catch((error) => {
        showMsg('Error signing out');
    });
}
const signOut = document.getElementById('signout');
signOut.addEventListener('click', (event) => {
  event.preventDefault();
  signOutUser();
});

function confettiFalling() {

	var box = document.getElementById("box");
	var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

	for (var i = 0; i < 1000; i++) {
		
		// Create 1000 DIV elements for confetti
		var div = document.createElement("div");
		div.classList.add("confetti");
		box.appendChild(div);
	}

	var confetti = document.querySelectorAll('.confetti');

	for (var i = 0; i < confetti.length; i++) {
		
		var size = Math.random() * 0.01 * [i];

		confetti[i].style.width = 5 + size + 'px';
		confetti[i].style.height = 16 + size + 'px';
		confetti[i].style.left = Math.random() * innerWidth + 'px';

		var background = colors[Math.floor(Math.random() * colors.length)];
		confetti[i].style.backgroundColor = background;

		box.children[i].style.transform = "rotate("+ size*[i] +"deg)";
	}
}

document.getElementById('open-update').addEventListener('click', () => {
  document.getElementById('decision-email').innerHTML = decision;
  document.querySelector('.status-update').classList.add('active');
  document.querySelector('body').style.overflow = 'hidden';
  if(success){
    confettiFalling();
  }
});
document.getElementById('close-update').addEventListener('click', () => {
  document.getElementById('decision-email').innerHTML = decision;
  document.querySelector('.status-update').classList.add('active');
  document.querySelector('.status-update').classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
});
