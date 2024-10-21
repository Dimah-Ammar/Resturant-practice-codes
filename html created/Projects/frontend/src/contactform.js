function validate() {
    var a = document.getElementById('name').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('subject').value;
    var d = document.getElementById('message').value;

    if (a === "" || b === "" || c === "" || d === "") {
        alert("All fields are mandatory");
        return false; 
    }

    else if (a.length > 50 || c.length > 100 || d.length > 250) {
        alert("Name should be less than 50 letters, subject less than 100 letters and message less than 250 letters");
        return false; 
    }

    else if (!/^[a-zA-Z\s\-]+$/.test(a)) {
        alert("Name must only consist of letters, spaces, and hyphens");
        return false; 
    }
    else if (!/^[a-zA-Z\s\-]+$/.test(c)) {
        alert("Subject must only consist of letters, spaces, and hyphens");
        return false; 
    }
    else if (!/^[a-zA-Z\s\-]+$/.test(d)) {
        alert("Message must only consist of letters, spaces, and hyphens");
        return false; 
    }
    alert('Message Sent');
    return true;
}

const submission = document.getElementById('send');
submission.addEventListener('click', function() {
    validate();
    
});
