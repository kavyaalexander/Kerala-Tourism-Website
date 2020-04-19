function validation() {
    var uname = document.getElementById("name");
    var psw = document.getElementById("psw");
    if (useridvalidate(uname)) {
        if (pswvalidate(psw)) {

        }
    }
    return false;
}

function useridvalidate(uname) {
    var uid_len = /^[A-Za-z]+$/;
    if (uname.value.match(uid_len)) {

        return true;
    } else {
        alert('User Id should not be empty');
        return false;
    }
}

function pswvalidate(psw) {
    var pswdRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");


    if (psw.value.match(pswdRegex)) {
        window.location.action()
        return true;


    } else {
        alert('Please Enter Valid Password');
        return false;
    }
}