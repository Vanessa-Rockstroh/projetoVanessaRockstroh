function validationForm() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;
    let validationDirector = document.forms["register"]["director"].value;
    let validationDate = document.forms["register"]["date"].value;
    let validationRadio = document.forms["register"]["radio"].value;
    let validationActor = document.forms["register"]["actor"].value;
    let validationRate = document.forms ["register"]["rate"].value;

    if (validationCod == "") {
        alert("O Código deve ser preenchido");
        return false;
    } 
    if (validationTitle == "") {
        alert("O título deve ser preenchido");
        return false;
    }
    if(validationDirector == "") {
        alert("O nome do diretor deve ser preenchido");
        return false;
    }
    if(validationDate == "") {
        alert("A data deve ser preenchida");
        return false;
    }
    if(validationRadio == "") {
        alert("O gênero deve ser preenchido");
        return false;
    }
    if(validationActor == "") {
        alert("O ator/atriz deve ser preenchido");
        return false;
    }
    if(validationRate == "") {
        alert("A nota IMDb deve ser preenchida");
        return false;
    }
    alert("A validação ocorreu de forma correta");
}

function insert() {
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let director = document.forms["register"]["director"].value;
    let date = document.forms["register"]["date"].value;
    let radio = document.forms["register"]["radio"].value;
    let actor = document.forms["register"]["actor"].value;
    let rate = document.forms["register"]["rate"].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML =  `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${actor}</td>
    <td>${rate}</td>
    `;
}
