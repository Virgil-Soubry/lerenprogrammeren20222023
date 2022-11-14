/*Variabelen declareren*/
let taskform = document.querySelector("#new_task_form");
let tasklist = document.querySelector("#tasklist");
let clear = document.querySelector("#clear");
/*uitschakelen van de standaard gedraging van de button */
taskform.addEventListener("submit", function (e) {
    e.preventDefault()

    /*ophalen taak: de volledige tag met inhoud */
    let newTaskInputValue = taskform.elements.new_task;
    /*Enkel de inhoud nl. de waarde door de gebruiker wordt overgedragen aan de functie addTask*/
    addTask(newTaskInputValue.value);
    /*clearen van input*/
    newTaskInputValue.value = ""
});


/*Doel: overdragen van iedere taak aan de sectie tasklist*/
function addTask(newTask) {
    /*opbouw van de tag*/
    const div = document.createElement("div");
    div.classList.add("mb-2","d-flex","align-items-center")
    const trash = document.createElement("button");
    trash.classList.add("btn","btn-danger","me-2")
    const checkbox = document.createElement("input");
    checkbox.classList.add("me-2")
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    /*toevoegen van de waarden van de button en de ingevulde taak van de gebruiker*/
    trash.innerHTML = "DELETE";
    label.innerText = newTask;
    /*in volgorde de elementen toevoegen*/
    div.appendChild(trash);
    div.appendChild(checkbox);
    div.appendChild(label);
    /*toevoegen van de volledige div tag aan de tasklist*/
    tasklist.appendChild(div);
    /*event listener aan div toevoegen*/
    trash.addEventListener("click", function (){
        div.remove();
    });
    /*taak uitgevoerd dus doorstreept*/
    checkbox.addEventListener("click", function (){
        if (checkbox.checked === true){
            label.style.textDecoration = "line-through";
        }else {
            label.style.textDecoration = "none";
        }
    });

}
clear.addEventListener("click",function (){
    tasklist.innerHTML = "";
});

function goodAlert(toegevoegd){
    const alertPlaceholder = document.getElementById("new_task")

    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            alert("Toegevoegd aan lijst", 'success')
        })
    }
}
