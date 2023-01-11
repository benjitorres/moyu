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

  function changeFontSize() {
    var text = document.getElementById("textarea");
    var select = document.getElementById("font-size");
    var fontSize = select.options[select.selectedIndex].value;
    text.style.fontSize = fontSize + "px";
}
/* the thing about fonts is that I'm not so sure that 12 size font is equivalent to 12 pixels
*/