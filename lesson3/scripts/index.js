// Hamburger menu
menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () =>
{
    document.querySelector("#navbar").classList.toggle('active');
    document.querySelector("#menu-open").classList.toggle('active');
    document.querySelector("#menu-close").classList.toggle('active');
});

// Date
const today = new Date();
document.getElementById("copyright").innerHTML = today.getFullYear();