  var isDefaultFont = true;

  function switchFont() {
    var text = document.getElementById("font-bubble");
    if (isDefaultFont) {
      text.style.fontFamily = "Times New Roman, serif";
      isDefaultFont = false;
    } else {
      text.style.fontFamily = "Arial, sans-serif";
      isDefaultFont = true;
    }
  }