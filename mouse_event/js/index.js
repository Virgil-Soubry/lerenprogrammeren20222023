window.onload = function () {
    /*vastemen van documenten en variabelen*/
    let binnen = document.querySelector("#binnen");
    let buiten = document.querySelector("#buiten");
    let x = 0;
    let z = 0;

    binnen.onmousemove = function () {
        binnen.innerHTML = x += 1;
    }
    binnen.onmouseover = function () {
        binnen.style.backgroundColor = "#fac";
    }
    binnen.onmouseout = function () {
        binnen.style.backgroundColor = "#fff";
    }
    binnen.onmousedown = function () {
        binnen.innerHTML = z -= 1;
    }
    binnen.onmouseup = function () {
        binnen.innerHTML = z += 5;
    }
    binnen.onmouseleave = function () {
        binnen.innerHTML = x -= 5;
    }
    binnen.onmousewheel = function () {
        binnen.style.backgroundColor = "#198754"
    }
    binnen.ondblclick = function () {
        buiten.innerHTML += "Double Click <br>"
    }
    window.addEventListener("contextmenu", function (event) {
        if (event.button === 2) {
            buiten.innerHTML += "right click"
        }
    })
    /*
     0 - main button
     1 - wheel button
     2 - secondary button
     3 - fourth button (back button)
     4 - fifth button (forward button
    */
}





