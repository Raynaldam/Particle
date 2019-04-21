var req = new XMLHttpRequest();

function create() {
    req.open('POST', 'http://localhost:8080/registrant', true);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            console.log('Berhasil');
        } else {
            console.log('gagal konek');
        }
    }
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone_number = document.getElementById('phone_number').value;
    var job_title = document.getElementById('job_title').value;
    var company = document.getElementById('company').value;
    var class_date = document.getElementById('class_date').value;
    var class_location = document.getElementById('class_location').value;

    let sendData = JSON.stringify({
        'firstName' : firstName,
        'lastName' : lastName,
        'email' : email,
        'phone_number' : phone_number,
        'job_title' : job_title,
        'company' : company,
        'class_date' : class_date,
        'class_location' : class_location
    })
    req.send(sendData);
}