
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  // import { getauth ,googleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAyMrUy6nc8uhvdj6LoQ60-lYyhqksxgyU",
    authDomain: "journey-sync-73635.firebaseapp.com",
    projectId: "journey-sync-73635",
    storageBucket: "journey-sync-73635.appspot.com",
    messagingSenderId: "685877190695",
    appId: "1:685877190695:web:e1b451f89f0fdac1f7ee02",
    measurementId: "G-C0M74LYZ41"
  };
  const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function signupLink() {
  const fullname = document.querySelector("input[name='Full Name']").value;
  const email = document.querySelector("input[name='email']").value;
  const mobilenumber = document.querySelector("input[name='Mobile Number']").value;
  const password = document.querySelector("input[name='password']").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      const user = userCredential.user;
      const database_ref = database.ref();
      const user_data = {
        fullname: fullname,
        email: email,
        mobilenumber: mobilenumber,
        last_login: Date.now(),
        uid: user.uid
      };
      database_ref.child('users/' + user_data.uid).set(user_data);
      alert('User Created!!');
    })
    .catch(function(error) {
      console.error("Error creating user:", error);
    });
}

// Event listeners for switching between login and signup forms
document.querySelector("label.signup").addEventListener("click", () => {
  document.querySelector("form.login").style.marginLeft = "-50%";
  document.querySelector(".title-text .login").style.marginLeft = "-50%";
  document.querySelector("#loginEmail").value = "";
  document.querySelector("#loginPassword").value = "";
});

document.querySelector("label.login").addEventListener("click", () => {
  document.querySelector("form.login").style.marginLeft = "0%";
  document.querySelector(".title-text .login").style.marginLeft = "0%";
});

// Event listener for signup form submission
document.querySelector("#sign").addEventListener("click", signupLink);

// Event listener for login form submission
document.querySelector("form.login").addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  const email = document.querySelector("#loginEmail").value;
  const password = document.querySelector("#loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = "logged.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorMessage);
    });
}

// Event listeners for third-party sign-in buttons
document.getElementById('google-signin').addEventListener('click', function() {
  provider_specific_function('google');
});

document.getElementById('apple-signin').addEventListener('click', function() {
  provider_specific_function('apple');
});

document.getElementById('facebook-signin').addEventListener('click', function() {
  provider_specific_function('facebook');
});

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth =firbase.auth()
//   const database = firebase.database()

//   function signupLink()
//   {
//     fullname = document.getElementById("Full Name").value
//     email = document.getElementById("email").value
//     mobilenumber = document.getElementById("Mobile Number").value
//     password = document.getElementById("password").value

//   }

// auth.createUserWithEmailAndPassword(email, password)
// .then(function(){

//   var uer = auth.currentUser

//   var database_ref = database.ref()

//   var user_data={
//     fullname : fullname,
//     email : email,
//     mobilenumber : mobilenumber,
//     last_login : Date.now()


//   }
//   database_ref.child('users/'+ user_data.uid).set(user_data)



//   alert('User Created!!')
// })
// .catch(function(eroor){

// })






  // const auth = getAuth(app);    google
  // auth.languageCode = 'en';
  // const analytics = getAnalytics(app);
  // const provider = new googleAuthProvider();


  // const googleLogin =document.getElementById("google-signin");
  // googleLogin.addEventListener("click,funtion")
  // {
  //   signInWithPopup(auth, provider)
  //   .then((result) => 
  //   {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const user = result.user;
  //     console.log(user);
  //     window.location.href="logged.html";


  //   }).catch((error) => 
  //   {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
       
  //   });
  // }