function validate() {
    var a = document.getElementById('name').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('date').value;
    var d = document.getElementById('time').value;
    var e = document.getElementById('people').value;
    var f = document.getElementById('request').value;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
        alert("All fields are mandatory except of REQUEST");
        return false; 
    }

    else if (a.length > 50 || f.length > 250) {
        alert("Name should be less than 50 letters and request less than 250 letters");
        return false; 
    }

    else if (!/^[a-zA-Z\s\-]+$/.test(a)) {
        alert("Name must only consist of letters, spaces, and hyphens");
        return false; 
    }
    alert('Reserved');
    return true;
}

const submission = document.getElementById('submit');
submission.addEventListener('click', function() {
    validate();
    
});
