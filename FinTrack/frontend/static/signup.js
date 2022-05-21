import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBND3ipRWjDS77DRoiljGIJE9A8WWibqxk",

  authDomain: "fintrack-stomello4ek.firebaseapp.com",

  projectId: "fintrack-stomello4ek",

  storageBucket: "fintrack-stomello4ek.appspot.com",

  messagingSenderId: "904770796483",

  appId: "1:904770796483:web:b9bdaefc1f31fa3b555b76",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

let submit = document.getElementById("submit__signup");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  let creds = document.getElementsByClassName("box__input");
  let username = creds[0].value;
  let password = creds[1].value;
  let validation = document.getElementsByClassName("validation1")[0];
  if (username == "" || password == "") {
    validation.textContent = "empty fields";
    return;
  }
  createUserWithEmailAndPassword(auth, username, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      let email = document.getElementsByClassName("right-section__name")[0];
      email.textContent = user.email;
      location.href = "#nav-header";
      alert("You are signed up!");
    })
    .catch((error) => {
      validation.textContent = error.code;
    });
});
