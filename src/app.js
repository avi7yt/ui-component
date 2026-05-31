const hamburgerIcon = document.getElementById("hamburgerIcon");

console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", (e) => {
    e.target.classList.add("hidden");
});
