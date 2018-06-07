if (Notification) {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
}
function notificacion(textMessage) {
    if (Notification) {
        var title = "dix";
        var extra = {
            icon: "img/chat.png",
            body: textMessage
        };
        var noti = new Notification( title, extra);
        noti.onclick = {
            
        }
    }
}