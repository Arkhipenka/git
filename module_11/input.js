window.addEventListener("load", function(event) {

let form = document.createElement('form');
form.id = "form";
form.innerHTML = "<input type='search' name='text' placeholder='Search...' id='search' class='search'>";
document.body.insertBefore(form, document.body.firstChild);

})