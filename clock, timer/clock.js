setTimeout(() => {
  console.log("load after 1s");
}, 2000);

document.querySelector(".js-button").addEventListener("click", () => {
    setTimeout(() => {
        alert("you clicked the button 2 seconds ago");
      }, 2 * 1000);
});

function showAlert() {
    alert("you clicked the second button");
};

document.querySelector(".js-button2").addEventListener("click", () => {
    setTimeout(showAlert, 500);
});