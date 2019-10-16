window.onload = () => {

    btn_lunes = document.getElementById("lunes");
    btn_martes = document.getElementById("martes");
    btn_miercoles = document.getElementById("miercoles");
    btn_jueves = document.getElementById("jueves");
    btn_viernes = document.getElementById("viernes");

    let ellunes = document.getElementsByClassName("Monday");
    let elmartes = document.getElementsByClassName("Tuesday");
    let elmiercoles = document.getElementsByClassName("Wednesday");
    let eljueves = document.getElementsByClassName("Thursday");
    let elviernes = document.getElementsByClassName("Friday");

    ellunes[0].setAttribute("style", "display:none");
    elmartes[0].setAttribute("style", "display:none");
    elmiercoles[0].setAttribute("style", "display:none");
    eljueves[0].setAttribute("style", "display:none");
    elviernes[0].setAttribute("style", "display:none");

    function clickdia(unnumero) {
        if (unnumero == 0) {
            ellunes[0].setAttribute("style", "display:block");
            elmartes[0].setAttribute("style", "display:none");
            elmiercoles[0].setAttribute("style", "display:none");
            eljueves[0].setAttribute("style", "display:none");
            elviernes[0].setAttribute("style", "display:none");
        }
        if (unnumero == 1) {
            ellunes[0].setAttribute("style", "display:none");
            elmartes[0].setAttribute("style", "display:block");
            elmiercoles[0].setAttribute("style", "display:none");
            eljueves[0].setAttribute("style", "display:none");
            elviernes[0].setAttribute("style", "display:none");
        }
        if (unnumero == 2) {
            ellunes[0].setAttribute("style", "display:none");
            elmartes[0].setAttribute("style", "display:none");
            elmiercoles[0].setAttribute("style", "display:block");
            eljueves[0].setAttribute("style", "display:none");
            elviernes[0].setAttribute("style", "display:none");
        }
        if (unnumero == 3) {
            ellunes[0].setAttribute("style", "display:none");
            elmartes[0].setAttribute("style", "display:none");
            elmiercoles[0].setAttribute("style", "display:none");
            eljueves[0].setAttribute("style", "display:block");
            elviernes[0].setAttribute("style", "display:none");
        }
        if (unnumero == 4) {
            ellunes[0].setAttribute("style", "display:none");
            elmartes[0].setAttribute("style", "display:none");
            elmiercoles[0].setAttribute("style", "display:none");
            eljueves[0].setAttribute("style", "display:none");
            elviernes[0].setAttribute("style", "display:block");
        }
        console.log(unnumero);
    };

    btn_lunes.addEventListener("click", function () {
        clickdia(0);
    });
    btn_martes.addEventListener("click", function () {
        clickdia(1);
    });
    btn_miercoles.addEventListener("click", function () {
        clickdia(2);
    });
    btn_jueves.addEventListener("click", function () {
        clickdia(3);
    });
    btn_viernes.addEventListener("click", function () {
        clickdia(4);
    });
};