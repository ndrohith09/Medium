// First Window

var input = document.createElement('input');
document.body.appendChild(input);
input.value = localStorage.getItem('user-value');
input.oninput = function(event) {
localStorage.setItem('user-value', input.value);
};

// Second Window

var output = document.createElement('p');
document.body.appendChild(output);
output.textContent = localStorage.getItem('user-value');
window.addEventListener('storage', function(event) {
if (event.key === 'user-value') {
output.textContent = event.newValue;
}
});

// First window

// page url: http://sub.a.com/1.html
document.domain = 'a.com';
var input = document.createElement('input');
document.body.appendChild(input);
input.value = localStorage.getItem('user-value');
input.oninput = function(event) {
localStorage.setItem('user-value', input.value);
};

// Second Window

// page url: http://sub.a.com/2.html
document.domain = 'a.com';
var output = document.createElement('p');
document.body.appendChild(output);
// Listener will never called under Chrome(53), Edge and Safari(10.0).
window.addEventListener('storage', function(event) {
if (event.key === 'user-value') {
output.textContent = event.newValue;
}
});

// Session Storage 

var audio = document.querySelector('audio');

// Maintain the volume if the user clicks a link then navigates back here.
audio.volume = Number(sessionStorage.getItem('volume') || 1.0);
audio.onvolumechange = function(event) {
sessionStorage.setItem('volume', audio.volume);
};

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key')


// Set Items
localStorage.setItem('StackOverflow', 'Documentation');
localStorage.setItem('font', 'Helvetica');
localStorage.setItem('image', 'sprite.svg');
 

//  ERROR CONDITIONS
// Get length
localStorage.length; // 3

var video = document.querySelector('video')
try {
video.volume = localStorage.getItem('volume')
} catch (error) {
alert('If you\'d like your volume saved, turn on cookies')
}
video.play()