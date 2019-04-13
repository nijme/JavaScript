var acc = document.getElementsByClassName("seta_img_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var sobreMim = this.nextElementSibling;
    if (sobreMim.style.display === "block") {
      sobreMim.style.display = "none";
    } else {
      sobreMim.style.display = "block";
    }
  });
}




