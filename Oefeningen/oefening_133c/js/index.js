function getInputForm(){
    maxGetal = document.getElementById("maxgetal").value;
    hoeveelGetallen = document.getElementById("maxoef").value;
    myPrint();
}
let resultaat="";
let maxGetal;
let hoeveelGetallen;
let array1 = [];
let array2 = [];
let array3 = [];
let x = 0;

function myPrint(){
    while(x < hoeveelGetallen){
        array1.push(Math.floor(Math.random()* maxGetal));
        array2.push(Math.floor(Math.random()* maxGetal));
        array3.push(array1[x]+array2[x]);
        /*document.write(`${array1[x]} + ${array2[x]} = ${array3[x]}<br>`);*/
        resultaat = document.getElementById("card");
        resultaat.innerHTML +=
            `<div class="p-lg-2 col-12 col-lg-3">
                <div class="card">
                    <img src="https://picsum.photos/200" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Oefening ${x + 1}</h5>
                            <p class="card-text">${array1[x]} + ${array2[x]} = </p>
                            <form>
                                <div class="mb-3">
                                    <label htmlFor="maxoef" class="form-label">Hoeveel oefeningen wil je?</label>
                                    <input type="number" min="1" class="form-control" id="maxoef"
                                           placeholder="Geef je antwoord...">
                                </div>
                            </form>
                            <div class="modal fade" id="exampleModalToggle${x}" aria-hidden="true"
                                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">oefening
                                                ${x + 1}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ${array1[x]} + ${array2[x]} = ${array3[x]}
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle${x}"
                                                    data-bs-toggle="modal">Terug
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModalToggle${x}" aria-hidden="true"
                                 aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Hide this modal and show the first with the button below.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle${x}"
                                                    data-bs-toggle="modal">Terug
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle${x}"
                               role="button">Antwoord</a>
                        </div>
                </div>
            </div>
        `
        x++;
    }
}