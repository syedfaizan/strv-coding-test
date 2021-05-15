var firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyAa5NA58g0DM-x0rDEdUzGpW1591UX5C_Y",
  authDomain: "strv-backend-test-e88ee.firebaseapp.com",
  databaseURL:
    "https://strv-backend-test-e88ee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "strv-backend-test-e88ee",
  storageBucket: "strv-backend-test-e88ee.appspot.com",
  messagingSenderId: "75967008313",
  appId: "1:75967008313:web:03463083489a04880987e8",
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

module.exports = database;
