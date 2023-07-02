var dt = document.querySelector("#datetime");
dt.innerHTML = Date.now();

document.querySelector("#form-submit").addEventListener("click", () => {
    console.log(dt.innerHTML);
});