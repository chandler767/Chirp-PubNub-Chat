# Chirp PubNub Chat

This project is a demo chat application that uses audible chirps to connect users to the same channel using the [Chirp WebAssembly SDK](https://developers.chirp.io/docs/getting-started/wasm) and [PubNub Javascript SDK](https://www.pubnub.com/docs/web-javascript/pubnub-javascript-sdk?devrel_gh=Chirp-PubNub-Chat).

<a href="https://www.pubnub.com/blog/how-to-send-chat-invites-using-chirp/?devrel_gh=Chirp-PubNub-Chat"><img class="aligncenter" src="https://www.pubnub.com/blog/wp-content/uploads/2019/04/chirp-chat.gif" alt="Use Chirp to connect users to the same chat." width="600" /></a>

Using Chirp you can eliminate the need to users to manually enter the channel they want to join. The users only need to enable microphone access and turn up their speaker to connect to each other. Chirp is a great alternative to QR codes.

Want to learn more about this project or build a clone from scratch? Check out the [tutorial](https://www.pubnub.com/blog/how-to-send-chat-invites-using-chirp/?devrel_gh=Chirp-PubNub-Chat).

<a href="https://www.pubnub.com/blog/how-to-send-chat-invites-using-chirp/?devrel_gh=Chirp-PubNub-Chat">
    <img alt="PubNub Blog" src="https://i.imgur.com/aJ927CO.png" width=260 height=98/>
</a>

## What is Chirp?

Chirp’s SDKs allows you to send small amounts of data over sound. It is designed to work in noisy everyday environments and doesn’t require perfect silence to work. In my experiments I found that my chirps were received in almost every reasonable scenario I tested.

<a href="https://chirp.io" target="_blank" rel="noopener"><img src="https://www.pubnub.com/blog/wp-content/uploads/2019/04/chirp.io_.gif" alt="Chirp" width="324" height="192" /></a>

## Getting Started

<ul>
 	<li>Sign up for a <a href="https://developers.chirp.io" target="_blank" rel="noopener noreferrer">Chirp account</a>. Get your Chirp key from the <a href="https://developers.chirp.io/applications" target="_blank" rel="noopener noreferrer">applications page</a>.</li>
 	<li>Sign up for a <a href="https://dashboard.pubnub.com/signup/" target="_blank" rel="noopener noreferrer">PubNub account </a>(always free). Once you sign up, you can get your unique PubNub keys from the <a href="https://admin.pubnub.com/" target="_blank" rel="noopener noreferrer">PubNub Admin Dashboard</a>. Sign up using the form below.</li>
</ul>

Replace “YOUR_PUBNUB_PUBLISH_KEY_HERE” and “YOUR_PUBNUB_SUBSCRIBE_KEY_HERE” with your Publish Key and Subscribe Key from the <a href="https://admin.pubnub.com/" target="_blank" rel="noopener noreferrer">PubNub Admin Dashboard</a>.

Replace "YOUR_CHIRP_KEY_HERE" with your Chirp key from the <a href="https://developers.chirp.io/applications" target="_blank" rel="noopener noreferrer">applications page</a>.

Although Chirp sends data completely offline, registration credentials are needed to identify your user account to the SDK, and to configure the SDK with your profile-specific features.
<p class="paragraph paragraph--margin-bottom ">For web-based applications using the Chirp JavaScript or WebAssembly SDKs, applications are identified using your application key, and must be hosted on one of the web origins that you specify in the <a href="https://developers.chirp.io/applications">origins pane of your application</a>.</p>

<strong>Important Note:</strong> CORS rules won’t allow the browser to load the <a href="https://developers.chirp.io/docs/getting-started/wasm" target="_blank" rel="noopener noreferrer">Chirp WebAssembly SDK</a> directly from the file system.

You must host the files using a server. I recommend <a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noopener noreferrer">http-server</a> to test locally.

<a href="https://www.npmjs.com/get-npm" target="_blank" rel="noopener">Install with NPM</a>:

<code>npm install http-server -g</code>

Start the server from the same directory as your project files:

<code>http-server</code>

Add your origin to the <a href="https://developers.chirp.io/applications" target="_blank" rel="noopener">origins pane of your application</a>.

<a href="https://developers.chirp.io/applications" target="_blank" rel="noopener"><img src="https://www.pubnub.com/blog/wp-content/uploads/2019/04/Screen-Shot-2019-04-15-at-3.24.29-PM.png" alt="Chirp applications config" width="419" height="219" /></a>

<strong>Visit <a href="http://localhost:8080" target="_blank" rel="noopener">http://localhost:8080</a> to view and test your chat application powered by Chirp and PubNub.</strong>
