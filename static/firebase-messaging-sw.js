
importScripts(
  'https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyABaTJz_penEbwSydayA0f2tPvN4KiqF1Q","authDomain":"test-yoi-pymes.firebaseapp.com","databaseURL":"https:\u002F\u002Ftest-yoi-pymes.firebaseio.com\"","projectId":"test-yoi-pymes","storageBucket":"test-yoi-pymes.appspot.com","messagingSenderId":"982327365403","appId":"1:982327365403:web:b0c8f2b606123fc6958dbe","measurementId":"G-MXGJL4BZP9"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.info("SW received the message: ", payload);
  const notification = payload.notification;

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
    vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
    actions: [
      // First item is always taken as click action (see comment below)
      {
        title: "Visit",
        action: notification.clickPath
      }
    ]
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function(e) {
  const notification = e.notification
  // MARK 1 -> always takes first item
  const clickAction = notification.actions[0].action
  const action = e.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow(clickAction)
    notification.close()
  }
})
