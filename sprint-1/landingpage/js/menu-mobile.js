window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {

        if (document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';

            if (document.querySelector("#wave")) {
                document.querySelector("#wave").style.display = 'flex';
            }
            
            if (document.querySelector(".imagem-central")) {
                document.querySelector(".imagem-central").style.display = 'flex';
            }

            if (document.querySelector(".logo-central")) {
                document.querySelector(".logo-central").style.display = 'flex';
            }

        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';

            if (document.querySelector("#wave")) {
                document.querySelector("#wave").style.display = 'none';
            }

            if (document.querySelector(".imagem-central")) {
                document.querySelector(".imagem-central").style.display = 'none';
            }
           
            if (document.querySelector(".logo-central")) {
                document.querySelector(".logo-central").style.display = 'none';
            }
        }
    });
};