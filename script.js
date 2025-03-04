function login() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;

    if (a === "Ciara" && b === "123") {
        window.open("home.html");
        document.getElementById("compiler").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Không hợp lệ";
    }
}
