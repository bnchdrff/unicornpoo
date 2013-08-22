/**
 * This code is served within a FIF.
 */

var body = window.document.body;
body.innerHTML = header + body.innerHTML;
body.innerHTML += footer;
var style = document.createElement('link');
style.type = 'text/css';
style.rel = 'stylesheet';
style.href = '//localhost:3000/sharedmenus.css';
window.document.getElementsByTagName("head")[0].appendChild(style);
