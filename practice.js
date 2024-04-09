
const firebaseConfig = {
  apiKey: "AIzaSyDRF0dB4Bcz_v68btlnVD-QN93U1iEX2us",
  authDomain: "kwitter-627b1.firebaseapp.com",
  databaseURL: "https://kwitter-627b1-default-rtdb.firebaseio.com",
  projectId: "kwitter-627b1",
  storageBucket: "kwitter-627b1.appspot.com",
  messagingSenderId: "598183737709",
  appId: "1:598183737709:web:c6390c8a46675c0dcf4264"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    userName = document.getElementById("username").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuario"
    });
}