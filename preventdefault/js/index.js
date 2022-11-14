document.querySelector("#id-checkbox").addEventListener("click",function (event){
    document.querySelector("#resultaat").innerHTML += "Sorry! <code>preventdefault()</code>" +
        "verbied u dit aan te vinken. <br>";
    event.preventDefault();
})






