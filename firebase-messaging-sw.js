importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCmTIkkPgO98K-FYWdRaUpYGsOwcnv5ayc",
    authDomain: "prime-ac52f.firebaseapp.com",
    databaseURL: "https://prime-ac52f.firebaseio.com",
    projectId: "prime-ac52f",
    storageBucket: "prime-ac52f.appspot.com",
    messagingSenderId: "315479184528",
    appId: "1:315479184528:web:5acaf5ce1438d7d5383415",
    measurementId: "G-NQKKQQVV11"
});

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(async function(payload) {
//     const notificationTitle = payload.data.title;
//     const notificationOptions = {
//         body: payload.data.body,
//         icon: 'alarm.png'
//     };
    // navigator.geolocation.getCurrentPosition((location) => {
    //     console.log(location);
    // })
    // let userToken = self.localStorage;
    // console.log("userTOken = " + userToken);
    // await fetch("http://elogist.in/itrm_webservices/Location/saveLocationTrackingLogs", {
    //     method: "POST",
    //     headers: {
    //         entrymode : 1,
    //         version : 1.0,
    //         authkey : userToken
    //     },
    //     body: JSON.stringify({
    //         "locationInfo":
    //         [
    //             {
    //             "lat":26.8715527,
    //             "lng":75.7758802,
    //             "action":"2",
    //             "gps":"0",
    //             "fetch_time":"2021-11-26 13:18:59"
    //             }
    //         ]
    //     })
    // }).then((res) => {
    //     res.json();
    // }).then((data) => {
    //     console.log(data);
    // })
//     return self.registration.showNotification(notificationTitle, notificationOptions);
// })


