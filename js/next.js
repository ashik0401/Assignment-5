



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('next-tab').addEventListener
        ('click', function () {
            window.location.href = "main.html";
        });
});


document.getElementById('back-btn').addEventListener('click', function () {
    window.history.back();
});


