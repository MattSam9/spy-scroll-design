/* 
@sidenav click 
*/
var sideNav = document.getElementById("sideNave");
var sideNavBtn = document.getElementById("menuBtn");
sideNav.style.right = "-25rem";
sideNavBtn.onclick = function () {
  if (sideNav.style.right == "-25rem") {
    sideNav.style.right = "0rem";
    sideNavBtn.src = "img/closeBtn.png";
  } else {
    sideNav.style.right = "-25rem";
    sideNavBtn.src = "img/menu.png";
  }
};
/* 
~@ sidenav click 
*/
