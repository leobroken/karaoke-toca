// Importa os scripts do Firebase para o Service Worker rodar em segundo plano
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js');

// Configuração do Firebase da Toca do Guerreiro
firebase.initializeApp({
    apiKey: "AIzaSyCW9c9Uv0kekNSu1E6Y32toewgWm4Ngeps",
    authDomain: "karaoke-toca-30cf3.firebaseapp.com",
    projectId: "karaoke-toca-30cf3",
    storageBucket: "karaoke-toca-30cf3.firebasestorage.app",
    messagingSenderId: "722633752685",
    appId: "1:722633752685:web:7ac81abddc58e9aef27f64"
});

// Evento disparado quando o usuário clica na notificação do celular
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if ('focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});

