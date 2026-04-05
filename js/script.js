document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("viewmoreproj");
    const moreProject = document.getElementById("moreproject");

    btn.addEventListener("click", function () {
        moreProject.classList.toggle("hidden");

        if (moreProject.classList.contains("hidden")) {
            btn.textContent = "View More";
        } else {
            btn.textContent = "View Less";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
            e.preventDefault();
        } else {
            alert("Message sent successfully!");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let userName = prompt("Enter your name:");

    if (userName) {
        document.getElementById("welcomemessage").textContent =
            "Hello, " + userName + "! Welcome to my resume!";
    }
});

$(document).ready(function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    $("#darkModeToggle").on("click", function () {
        $("body").toggleClass("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀︎";
        } else {
            darkModeToggle.textContent = " ☾";
        }
    });
});

$("#downloadResume").on("click", function () {
    $("<a>")
        .attr("href", "assets/Pasos_Resume.pdf")
        .attr("download", "Pasos_Resume.pdf")[0]
        .click();
});