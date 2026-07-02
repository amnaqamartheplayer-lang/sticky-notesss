// var check = "hello www"
// console.log(check)

function addNote() {

    var search = document.getElementById("search").value;
    var parentCard = document.getElementById("parent");


    var card = `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card h-100 shadow">
                <img src="https://picsum.photos/300/200?random=${Math.random()}" 
                     class="card-img-top" 
                     alt="Random Image">

                <div class="card-body">
                    <h5 class="card-title">${search}</h5>
                    <p class="card-text">
                        This is your sticky note content.
                    </p>
                    <button class="btn btn-danger" onclick= 'deleteCard(this)'> Delete </button>
                    <button class="btn btn-warning" onclick= 'updateCard(this)'>Update </button>
                </div>
            </div>
        </div>
    `;

    parentCard.innerHTML += card;
    document.getElementById('input').value = ''
}


function deleteAll() {
    var parentCard = document.getElementById("parent");
    parentCard.innerHTML = ''

}

function updateCard(editcard) {
    var oldValue = editcard.previousElementSibling.previousElementSibling.previousElementSibling
    var newValue = prompt(`enter your new value`)
    if (newValue !== null) {
        oldValue.innerHTML = newValue
    }
}
  
function deleteCard(carddelet){

    carddelet.parentElement.parentElement.remove();


}