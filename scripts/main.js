const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dog.jpg") {
    myImage.setAttribute("src", "images/dog2.jpeg");
  } else {
    myImage.setAttribute("src", "images/dog.jpg");
  }
};

let myButton = document.querySelector("button");

myButton.onclick = () => {
    setUserName();
  };

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Canis familiaris, ${myName}`;
      }
  }

if (!localStorage.getItem("name")) {
    setUserName();
    } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Canis familiaris, ${storedName}`;
}
