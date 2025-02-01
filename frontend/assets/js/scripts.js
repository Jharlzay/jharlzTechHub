// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navLinks").style.backgroundColor = "#10141B";
  } else {
    document.getElementById("navLinks").style.backgroundColor = "transparent";
  }
}

const allOne = document.getElementById("allContainer");
const imageOne = document.getElementById("imgContainer");
const textOne = document.getElementById("textContainer");
const videoOne = document.getElementById("videoContainer");
const myAllColorSwap = document.getElementById("myAllColorSwap");
function myAll(){

  allOne.style.display = "block";
  allOne.style.transition = "all 1s ease";

  allOne.style.width = "100%";
  allOne.style.height = "100vh";
  allOne.style.padding = "2em";
  allOne.style.opacity = "0.8";
  allOne.style.gap = "4em";
  imageOne.style.display = "none";
  textOne.style.display = "none";
  videoOne.style.display = "none";
  myAllColorSwap.style.backgroundColor = " var(--div1-color)";

};

function myImage(){
  imageOne.style.display = "block";
  imageOne.style.transition = "all 1s ease";

  imageOne.style.width = "100%";
  imageOne.style.height = "100vh";
  imageOne.style.padding = "2em";
  imageOne.style.opacity = "0.8";
  imageOne.style.gap = "4em";
  
  textOne.style.display = "none";
  videoOne.style.display = "none";
  allOne.style.display = "none";
  myAllColorSwap.style.backgroundColor = "transparent";

  
};

function myText(){
  textOne.style.display = "block";
  textOne.style.width = "100%";
  textOne.style.height = "100vh";
  textOne.style.padding = "2em";
  textOne.style.opacity = "0.8";
  textOne.style.gap = "4em";

  imageOne.style.display = "none";
  videoOne.style.display = "none";
  allOne.style.display = "none";
  myAllColorSwap.style.backgroundColor = "transparent";
};

function myVideo(){
  videoOne.style.display = "block";
  videoOne.style.width = "100%";
  videoOne.style.height = "100vh";
  videoOne.style.padding = "2em";
  videoOne.style.opacity = "0.8";
  videoOne.style.gap = "4em";

  imageOne.style.display = "none";
  textOne.style.display = "none";
  allOne.style.display = "none";
  myAllColorSwap.style.backgroundColor = "transparent";
};

// About section /subscription

document.getElementById('subscribe-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  const response = await fetch('/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
  });

  const result = await response.json();
  document.getElementById('message').innerText = result.message;
});

// const imagetot = document.getElementById("imagetot");
// const imgContainer = document.getElementById("imgContainer");
// const imageTwo = document.getElementById("imageTwo");

// imagetot.addEventListener("click", () => {
//   imgContainer.style.display = "block";

// });