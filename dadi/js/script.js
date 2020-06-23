var gioca = document.getElementById('btn');

gioca.addEventListener("click", function () {
  var giocatore = Math.floor(Math.random() * 6 + 1);
  var computer = Math.floor(Math.random() * 6 + 1);

  if (giocatore > computer) {
    console.log("Vince Giocatore");
  } else if (computer > giocatore) {
    console.log("Vince Computer");
  } else {
    console.log("Pareggio");
  }
});
