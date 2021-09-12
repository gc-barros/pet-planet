window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        let visibleMenu = document.querySelector(".menu nav ul");
        if (visibleMenu.style.display == 'flex') {
            visibleMenu.style.display = 'none';
        } else {
            visibleMenu.style.display = 'flex';
        }
    });
};
