const { Chirp, toAscii } = ChirpConnectSDK
const key = '847AE335BabB1EFDB9Ca0507c'
let sdk

var new_channel = ""
var channel = "";
pubnub = new PubNub({
    publishKey : 'demo',
    subscribeKey : 'demo'
})

msgList = $('.msg-group')
inputBox = $('#input-box')
sendButton = $('#send-button')
joinButton = $('#join-button')
hostButton = $('#host-button')
chirpButton = $('#chirp-button')
newChatModal = $('#newChatModal')
welcomeModal = $('#welcomeModal')

class chat_control {
    publishMessage(name, msg) {
        msgList.append(this.msg_html(name, msg, 'right'));
        this.scroll_to_bottom(); 
    }
    receiveMessage(name, msg) {
        msgList.append(this.msg_html(name, msg, 'left'));
        this.scroll_to_bottom(); 
    }
    msg_html(name, msg, side) {
        var msg_tmpl = `
            <div class="card">
                 <div class="card-body">
                     <h6 class="card-subtitle mb-2 text-muted text-${side}">${name}</h6>
                     <p class="card-text float-${side}">${msg}</p>
                 </div>
            </div>
            `;
        return msg_tmpl;
    }
    scroll_to_bottom() {
        msgList.scrollTop(msgList[0].scrollHeight);
    }
}
var chat = new chat_control();

pubnub.addListener({
    status: function(statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
            welcomeModal.modal('hide');
            newChatModal.modal('hide');
            chat.receiveMessage('Welcome', "You're connected to the chat! Press 'Chirp' to share your chat with a nearby device.");
        }
    },
    message: function(msg) {
        if (msg.publisher == pubnub.getUUID()) {
            chat.publishMessage('You', msg.message);
        } else {
            chat.receiveMessage('Guest', msg.message);
        }
    },
})

function publishMessage() {
    if (channel != "") {
        msg = inputBox.val().trim().replace(/(?:\r\n|\r|\n)/g, '<br>'); // Format message.
        if (msg != '') {
            var publishConfig = {
                channel: channel,
                message: msg
            }
            pubnub.publish(publishConfig, function(status, response) {
                console.log(status, response);
            })
            inputBox.val('');
        }
    }
}
sendButton.on('click', publishMessage.bind());
inputBox.keyup(function (e) {
    if(e.keyCode == 13 && !e.shiftKey) {
        publishMessage();
    }
    if (e.keyCode === 27) {
        inputBox.blur();
    }
})

Chirp({
    key: key,
    onReceived: data => {
        if (data.length > 0) {
            new_channel = toAscii(data);
            //console.log(toAscii(new_channel));
            if (channel == "") { // First time commecting to chat. 
                channel = new_channel;
                pubnub.subscribe({
                    channels: [channel]  
                });
            } else if (channel != new_channel) {
                newChatModal.modal('show');
            }
        }   
    }
})
.then(_sdk => {
    sdk = _sdk
})
.catch(console.warn)

function chripSend() {
    if (channel != "") {
        const payload = new TextEncoder('utf-8').encode(channel);
        sdk.send(payload);
    }
}
chirpButton.on('click', chripSend.bind());  

function hostChat() {
    if (channel == "") {
        channel = pubnub.getUUID().slice(-10);
        pubnub.subscribe({
            channels: [channel]  
        });
    }
}
hostButton.on('click', hostChat.bind());

function joinChat() {
    if (channel != new_channel) {
        channel = new_channel;
        inputBox.val('');
        msgList.html('');
        pubnub.subscribe({
            channels: [channel]  
        });
    }
}
joinButton.on('click', joinChat.bind());

welcomeModal.modal('show');