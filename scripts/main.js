// Manipulate Image on Click
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/littleBlueFishLogo-text.png") {
    myImage.setAttribute("src", "images/littleBlueFishLogo-simple.png");
  } else {
    myImage.setAttribute("src", "images/littleBlueFishLogo-text.png");
  }
};

// Create a Button
let myButton = document.querySelector("button");
let myHeading = document.querySelector('#p1');

// Create a Function to capture Name
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
  }

// Create Button Action
  myButton.onclick = () => {
    setUserName();
  };
  