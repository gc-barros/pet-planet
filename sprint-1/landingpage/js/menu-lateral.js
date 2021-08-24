window.onload = function () {
    document.querySelector(".user-pic").addEventListener("click", function () {

        if (document.querySelector(".lateral-menu").style.display == 'block') {

            document.querySelector(".lateral-menu").style.display = 'none'; 

        } else {

            document.querySelector(".lateral-menu").style.display = 'block';
 
        }
    });
};
