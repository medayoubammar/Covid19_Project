//firebase

const firebaseConfig = {
    apiKey: "AIzaSyCX9wMF5t0H-T_6y1_LRYe3OqDQOggw7ro",
    authDomain: "gomycodefirebase.firebaseapp.com",
    databaseURL: "https://gomycodefirebase.firebaseio.com",
    projectId: "gomycodefirebase",
    storageBucket: "gomycodefirebase.appspot.com",
    messagingSenderId: "670386039764",
    appId: "1:670386039764:web:8f48ebba79083758b44441",
    measurementId: "G-SF4MN2S4H4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();





var messagesRef = firebase.database().ref('gomycodefirebase');



document.getElementById('contactForm').addEventListener('submit', submitForm);

function saveMessage(name, email, subject, msg) {

    var newMessageRef = firebase.database().ref(name);;
    newMessageRef.set({

        name: name,
        email: email,

        subject: subject,
        msg: msg

    });

}

function submitForm(e) {
    e.preventDefault();
    alert('sub admis');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('subject').value;
    var track = document.getElementById('msg').value;
    saveMessage(name, email, subject, msg);


}