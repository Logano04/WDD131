document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded with JavaScript');
    const addButton = document.querySelector("#add");

    addButton.addEventListener('click', function () {
        console.log('add button clicked');
        document.getElementById("participantSet").insertAdjacentHTML('beforeend', '<div class="form-group"><label for="Participant">Participant</label><input type="text" class="form-control" id="Participant" name="Participant" required></div>');
    
    function participantTemplate(count) {
        count ++;
    }
});
});
