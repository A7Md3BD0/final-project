
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
  }
  function myFun() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("mor");
    var btnText = document.getElementById("myim");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = ""; 
      moreText.style.display = "none";
      document.getElementById("dot").style.position = "absolute";


    } else {
      dots.style.display = "none";
      btnText.innerHTML = ""; 
      moreText.style.display = "inline";

    }
  }