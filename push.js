var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BNRMmUYAa7ul5bBmgDEGna4ItrXSUFwOZA0Tzpo4748wwXxMTrf0v-rAesMaOXU1rj7WrpvlgvK83VoQutiAxbE",
    "privateKey": "A8335vyBUFTa2yjn4juwtrvDws6V9qsm7mAHTIq632M"
};
 
 
webPush.setVapidDetails(
    'mailto:irfanchairurrachman@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/enxI1AG9Bsw:APA91bEviQiqDljs2P6LpPZwWGTBq0kc5LWhzylsfJLdT8qxmKKnus-K0CkfH9_flETo-d0sE_V1GlSVOVgNhKYPuKqWD-wqPqvsEYBpR5JL4eLbYPtZctLWQU2JAiXvvYiiE6LPlj4t",
    "keys": {
        "p256dh": "BDrPORLUIsZOeFNU7j1Ku/AsoskKaOM2aeRhjpF9cjTgqizHICK37KDEugbc8qYCXFvBaZrsN1cyCd89YpVLuA0=",
        "auth": "XHW2yw81lnqRw6W5m5zYWg=="
    }
};
var payload = 'Hey look, this is EPL for my 2nd Submission!';
var options = {
    gcmAPIKey: '810829470702',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);