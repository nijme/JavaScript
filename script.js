var seta = document.getElementsByClassName("seta_img_accordion");

  seta.addEventListener("click", function() {
    var divSobreMim = document.getElementsByClassName("sobre-mim");

    if (divSobreMim.style.display === "none") {
      divSobreMim.style.display = "hidden"
    }
  });