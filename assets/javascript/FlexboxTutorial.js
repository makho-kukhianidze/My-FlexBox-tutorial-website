//--------------------------------------------------------------My Flexbox Tutorial - web-page-------------------------------------------------------//
// Function - tab Menu  - menu - Start.
function tabMenuBtn(evt, tabMenuLi) {
  var i, tabcontent, menuBtn;
  var footerAbsolute = document.getElementById('footerAbsolute');
  var StartJqueryTutotrial = document.getElementById('StartJqueryTutotrial');
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    StartJqueryTutotrial.style.display = "none";
    footerAbsolute.style.position = "relative";
  }
  menuBtn = document.getElementsByClassName("menuBtn");
  for (i = 0; i < menuBtn.length; i++) {
    menuBtn[i].className = menuBtn[i].className.replace(" active", "");
  }
  document.getElementById(tabMenuLi).style.display = "block";
  evt.currentTarget.className += " active";
}
// Function - tab Menu  - menu - End.
//--------------------------------------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------------------------------------//
// Scroll Back To Top Button code - Start.
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Scroll Back To Top Button code - End.
//--------------------------------------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------------------------------------------------------------//
// Variable block - Start.
var flexPara = document.getElementById('flexPara');
var flexParaTwo = document.getElementById('flexParaTwo');
var jusCont = document.getElementById('jusCont')
var flexParaInfo = document.getElementById('flexParaInfo')
// Variable block - End.
//--------------------------------------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------------------------------------//
// Functions - for button- Start.
function jtflexStart() {
  jusCont.style.display = "flex";
  jusCont.style.justifyContent = "flex-start";
  jusCont.style.alignItems = "baseline";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "justify-content: flex-start;";
  flexParaInfo.innerText = "(Items align to the left side of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtflexCenter() {
  jusCont.style.display = "flex";
  jusCont.style.justifyContent = "center";
  jusCont.style.alignItems = "baseline";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "justify-content: center;"
  flexParaInfo.innerText = "(Items align at the center of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtflexEnd() {
  jusCont.style.display = "flex";
  jusCont.style.justifyContent = "flex-end";
  jusCont.style.alignItems = "baseline";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "justify-content: flex-end;"
  flexParaInfo.innerText = "(Items align to the right side of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtflexBetween() {
  jusCont.style.display = "flex";
  jusCont.style.justifyContent = "space-between";
  jusCont.style.alignItems = "baseline";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "justify-content: space-between;"
  flexParaInfo.innerText = "(Items display with equal spacing between them)";
  flexParaTwo.innerText = ""
}

function jtfleAaround() {
  jusCont.style.display = "flex";
  jusCont.style.justifyContent = "space-around";
  jusCont.style.flexDirection = "row";
  jusCont.style.alignItems = "baseline";
  flexPara.style.color = "#e63c3c";
  flexPara.innerTextinnerText = "justify-content: space-around;"
  flexParaInfo.innerText = "(Items display with equal spacing around them)";
  flexParaTwo.innerText = ""
}

function jtfleEnd() {
  jusCont.style.display = "flex";
  jusCont.style.alignItems = "flex-end";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "align-items: flex-end;"
  flexParaInfo.innerText = "(Items align to the bottom of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtfleStart() {
  jusCont.style.display = "flex";
  jusCont.style.alignItems = "flex-start";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "align-items: flex-start;"
  flexParaInfo.innerText = "(Items align to the top of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtfleCenter() {
  jusCont.style.display = "flex";
  jusCont.style.alignItems = "center";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "align-items: center;"
  flexParaInfo.innerText = "(Items align at the vertical center of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtfleBaseline() {
  jusCont.style.display = "flex";
  jusCont.style.alignItems = "baseline";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "align-items: baseline;"
  flexParaInfo.innerText = "(Items display at the baseline of the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtfleStretche() {
  jusCont.style.display = "flex";
  jusCont.style.alignItems = "stretch";
  jusCont.style.flexDirection = "row";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "align-items: stretch;"
  flexParaInfo.innerText = "(Items are stretched to fit the parentDiv)";
  flexParaTwo.innerText = ""
}

function jtfleCenter() {
  jusCont.style.display = "flex";
  jusCont.style.justifyContent = "center";
  jusCont.style.flexWrap = "wrap";
  jusCont.style.flexDirection = "row";
  jusCont.style.alignItems = "center";
  flexPara.style.color = "#e63c3c";
  flexParaTwo.style.color = "#e63c3c";
  flexPara.innerText = "justify-content: center;"
  flexParaInfo.innerText = "(Items are stretched to fit the parentDiv)";
  flexParaTwo.innerText = "align-items: center;"
}

function jtfleDirection() {
  jusCont.style.display = "flex";
  jusCont.style.flexDirection = "row-reverse";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "flex-direction: row-reverse;"
  flexParaInfo.innerText = "(Items are placed the same as the text direction.)";
  flexParaTwo.innerText = ""
}

function jtfleColumn() {
  jusCont.style.display = "flex";
  jusCont.style.flexDirection = "column";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "flex-direction: column"
  flexParaInfo.innerText = "(Items are placed top to bottom.)";
  flexParaTwo.innerText = ""
}

function jtfleColumnReve() {
  jusCont.style.display = "flex";
  jusCont.style.flexDirection = "column-reverse";
  flexPara.style.color = "#e63c3c";
  flexPara.innerText = "flex-direction: column-reverse"
  flexParaInfo.innerText = "(Items are placed bottom to top - reverse)";
  flexParaTwo.innerText = ""
}
// Functions - for button- End.
//-------------------------------------------------------------------------End----------------------------------------------------------------------//