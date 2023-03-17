

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDaL9jS2Mnr2TbEkbvbqQ-2Ase8zxc1lro",
    authDomain: "dockergen-2ea72.firebaseapp.com",
    projectId: "dockergen-2ea72",
    storageBucket: "dockergen-2ea72.appspot.com",
    messagingSenderId: "303366155037",
    appId: "1:303366155037:web:e55396fbc5d26d000bcff4",
    measurementId: "G-4FXF5B9DEJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

