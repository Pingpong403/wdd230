// get/store the amount of smoothies ordered by this user
var userOrders = 0;
if (!window.localStorage["userOrders"]) {
    window.localStorage.setItem("userOrders", 0);
}
else {
    userOrders = window.localStorage["userOrders"];
}

document.querySelector("#num-orders").innerHTML = `<strong>${userOrders}</strong>`;

// set custom orders message
let customMessage = "";
if (userOrders == 0) {
    customMessage = "Try us out!"
}
else if (userOrders <= 10) {
    customMessage = "Thank you!"
}
else if (userOrders <= 50) {
    customMessage = "Your contributions are greatly appreciated!"
}
else {
    customMessage = "You are one of our top customers. Thank you!"
}
document.querySelector("#custom-order-message").innerHTML = customMessage;