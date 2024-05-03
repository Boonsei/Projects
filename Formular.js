const liste = [
  'jaki.gersti@gmail.com',
  'pesendorferfelix@gmail.com',
  'luke.ziegler@gmail.com',
  'horsimorsi@gmaill.com',
  'berndi.vinci@gmx.at'
];

function emailCheck() {
  var inputEmail=document.getElementById("input-value").value;
  
  if (liste.includes(inputEmail)){
    window.location.href = "akzeptiert.html";
  } else {
    document.getElementById("modalMessage").innerHTML = "Email-Adresse nicht gefunden. Bitte überprüfen Sie Ihre Eingabe.";
    document.getElementById("myModal").style.display = "block";
  }
}

function closeModal(){
  document.getElementById("myModal").style.display = "none";
}

function checkEnterKey(event) {
  if (event.keyCode === 13) {
      emailCheck();
  }
}

