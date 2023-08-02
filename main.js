const Welcome = document.getElementById("Welcome")
const setLang = document.getElementById("ChangeLang")

const WelcomeTitle = document.getElementById("WelcomeTitle")
const Greeting = document.getElementById("greeting")

function updateWelcomeMessage() {
    const selectedLang = setLang.value;
    var translation = language[selectedLang].hello;
    WelcomeTitle.textContent = translation;
     translation = language[selectedLang].greeting;
    Greeting.textContent = translation;
  }
  
  // Add an event listener to the select element
  setLang.addEventListener("change", updateWelcomeMessage);
  
  // Initial call to set the default translation (English) on page load
  updateWelcomeMessage();
