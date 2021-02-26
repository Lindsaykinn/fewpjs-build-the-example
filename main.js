// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡"
const FULL_HEART = "♥"
let heartObjects = {"♥":"♡", "♡":"♥"};
let heartColors = {"red": "", "":"red"};

// Your JavaScript code goes here!
let likeButton = document.getElementsByClassName("like");

function likeCallback(e){ 
    mimicServerCall("blahblah")
    .then(function(serverMessage){
      e.target.innerText = heartObjects[e.target.innerText];
      e.target.style.color = heartColors[e.target.style.color]
    })
    .catch(function(error){
      document.getElementById("modal").className = "";
    })
  }
  for (let heart of likeButton){
    heart.addEventListener("click", likeCallback);
  }
 



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
  
}

