function changeFont() {
    // Get the value of the selected option
    var font = document.getElementById("font-picker").value;
  
    // Set the font-family style for the relevant elements
    document.getElementById("textarea").style.fontFamily = font;
    // ...
  }
  changeFont();

  //good for now; since there won't be many font choices (just two; maybe three with times new roman; so create a button that switches from the fonts; maybe arial and TNR is all you need tbh. fix for later. 