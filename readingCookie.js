var name = name + "=",
  cookie_array = document.cookie.split(";"),
  cookie_value;
for (var i = 0; i < cookie_array.length; i++) {
  var cookie = cookie_array[i];
  while (cookie.charAt(0) == " ") cookie = cookie.substring(1, cookie.length);
  if (cookie.indexOf(name) == 0)
    cookie_value = cookie.substring(name.length, cookie.length);
}
