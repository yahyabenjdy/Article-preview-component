const shareButton = document.querySelector("#share_image");
const shareBox = document.querySelector("#share__box");

shareButton.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
});
