var COOKIE_NAME = "Example Cookie"; /*The cookie's name*/
var COOKIE_VALUE = "Hello, world!"; /*The cookie's value*/
var COOKIE_PATH = "/foo/bar";  /*The cookie's  path*/
var COOKIE_EXPIRES; /*The cookie's expiration date (config'd below) */
/* Set the cookie expiration to 1 minute in future (60000ms = 1 minute). */
COOKIE_EXPIRES = (new Date(Date.now() + 60000)).toUTCString();
document.cookie +=
COOKIE_NAME + "=" + COOKIE_VALUE
+ "; expires=" + COOKIE_EXPIRES
+ "; path=" + COOKIE_PATH;