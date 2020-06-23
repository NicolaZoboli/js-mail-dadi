var listaMail = ["piero@gmail.com", "giovannino@gmail.com", "asdrubale@gmail.com", 69, 11, 87];
var mailFound = false;
var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var mail = document.getElementById('mail').value;

  for (var i = 0; i < listaMail.length; i++) {
    if (mail == listaMail[i]) {
      mailFound = true;
    }
  }

  if (mailFound == true) {
    document.getElementById('result').innerHTML = "Mail Trovata";
  } else if (mailFound == false) {
    document.getElementById('result').innerHTML = "Mail Non Trovata";
  }

});
