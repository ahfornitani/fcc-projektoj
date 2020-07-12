/*
This is an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library libphonenumber (https://github.com/catamphetamine/libphonenumber-js or https://gitlab.com/catamphetamine/libphonenumber-js)
*/
function telephoneCheck(str) {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
}
telephoneCheck("555-555-5555");
