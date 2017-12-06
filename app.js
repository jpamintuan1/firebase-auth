(function() {

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAb90yTx_rZPpKhd-jF0tQNqncsomHnqp8",
    authDomain: "rentfinds-22659.firebaseapp.com",
    databaseURL: "https://rentfinds-22659.firebaseio.com",
    projectId: "rentfinds-22659",
    storageBucket: "rentfinds-22659.appspot.com",
    messagingSenderId: "29885036537"
  };
  firebase.initializeApp(config);

// Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

// Add Login event 
btnLogin.addEventListener('click', e => {
	// Get email and pass
const email = txtEmail.value; 
const pass = txtPassword.value;
const auth = firebase.auth();
// Sign in
const promise = auth.signInWithEmailAndPassword(email, pass);

promise.catch(e => console.log(e.message));

});

// Add signup event
btnSignUp.addEventListener('click', e => {
// Get email and pass
const email = txtEmail.value; 
const pass = txtPassword.value;
const auth = firebase.auth();


const promise = auth.createUserWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));

});

btnLogout.addEventListener('click', e=> {
	firebase.auth().signOut();
});


// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
if (firebaseUser) {
	console.log(firebaseUser);
btnLogout.classList.remove('hide');

} else {
	console.log('not logged in');
btnLogout.classList.add('hide');
}

});


  }());