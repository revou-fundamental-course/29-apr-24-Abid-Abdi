function validation() {
  let username = document.getElementById("username").value;
  if (username == "" || username == null) {
    document.getElementById("username").style.border = "2px solid red";
    alert("Harap untuk memasukkan nama anda");
  } else {
    alert("Welcome " + username);
    console.log(username);
  }

  let email = document.getElementById('e-mail').value;
  if (email == '' || email == null) {
    document.getElementById('email').style.border = "2px solid red";
    alert("Harap untuk memasukkan email anda")
  } 
}

document.addEventListener('DOMContentLoaded', (event) => {
  ShowSlide(0);
  document.getElementById("send-btn").addEventListener("click", () => validation());
  setInterval(() => NextSlide(1), 2000);
});

let IndexSlide = 1;
ShowSlide(1);

function NextSlide(n) {
  console.log("NextSlide :" + n);
  ShowSlide((IndexSlide += n));
}

function ShowSlide(index) {
  let ListImage = document.getElementsByClassName("card-item");
  console.log(ListImage);
  console.log("banyaknya Image :" + ListImage.length);

  index > ListImage.length ? (IndexSlide = 1) : console.log("aman");
  let i = 0;
  while (i < ListImage.length) {
    ListImage[i].style.display = "none";
    i++;
  }

  ListImage[IndexSlide - 1].style.display = "block";

  console.log("ShowSlide :" + index);
}

setInterval(() => NextSlide(1), 2000);