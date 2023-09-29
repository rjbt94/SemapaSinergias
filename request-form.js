document.getElementById("card-form").
addEventListener("submit", function(event) {
    event.preventDefault();

const name = document.getElementById("req-name").value;
const email = document.getElementById("req-email").value;
const role = document.getElementById("req-role").value;
const description = document.getElementById("req-description").value;

const cardMarkup = `
<div class="card col-3" >
<h5 class="card-title"> ${name}</h5>
<br>
<h5 class="card-title"> ${role}</h5>
<br>
<p class="card-title"> ${description}</p>
</div>
`;

document.getElementById("cardContainer").innerHTML = cardMarkup;
});