let homePt = document.getElementById('home-pt');
let guestPt = document.getElementById("guest-pt");

let countHome = 0;
let countGuest = 0;

function homeAdd1() {
  countHome += 1;
  homePt.innerHTML = countHome;
}

function homeAdd2() {
  countHome += 2;
  homePt.innerHTML = countHome;
}

function homeAdd3() {
  countHome += 3;
  homePt.innerHTML = countHome;
}

function guestAdd1() {
  countGuest += 1;
  guestPt.innerHTML = countGuest;
}

function guestAdd2() {
  countGuest += 2;
  guestPt.innerHTML = countGuest;
}

function guestAdd3() {
  countGuest += 3;
  guestPt.innerHTML = countGuest;
}

function reset() {
  alert('are you sure?')
  alert("reeeaaaallly???")
  alert("ok");
  countHome = 0;
  countGuest = 0;
  homePt.innerHTML = countHome;
  guestPt.innerHTML = countGuest;
}