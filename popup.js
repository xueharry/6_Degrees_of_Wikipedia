function getGoalTerm(){
    // Cancel form submit
    event.preventDefault();

    // Get the goal term that the user has entered
    var goalTerm = document.getElementById('goalterm').value;
    console.log(goalTerm);
}

// When the popup has loaded
window.addEventListener('load', function(evt) {
    // Handle term form submit event
    document.getElementById('termform').addEventListener('submit', getGoalTerm);
})