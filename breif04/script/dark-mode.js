checkDarkMode();

function enableLightMode(){
  document.body.classList.remove("dark");
  document.getElementById('nav').classList.remove("dark");
  document.getElementById('darkmodeh1').classList.remove("dark");
  document.getElementById('darkmodeh23').classList.remove("dark");
  document.getElementById('darkmodeh22').classList.remove("dark");
  document.getElementById('darkmodeh21').classList.remove("dark");
  document.getElementById('section1').classList.remove('dark')
  document.getElementById('section2').classList.remove('dark')
  document.getElementById('last').classList.remove('dark')
  localStorage.darkMode = false;
}
function enableDarkMode(){
  document.body.classList.add("dark");
  document.getElementById('nav').classList.add("dark");
  document.getElementById('darkmodeh1').classList.add("dark");
  document.getElementById('darkmodeh23').classList.add("dark");
  document.getElementById('darkmodeh22').classList.add("dark");
  document.getElementById('darkmodeh21').classList.add("dark");
  document.getElementById('section1').classList.add('dark')
  document.getElementById('section2').classList.add('dark')
  document.getElementById('last').classList.add('dark')
  localStorage.darkMode = true;
}
function checkDarkMode(){
  if(localStorage.darkMode){
    document.body.classList.add("dark");
  }
  else{
    document.body.classList.remove("dark");
  }
}