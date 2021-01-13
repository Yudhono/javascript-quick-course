const myname = 'afs';
const myemail = 'yudhonowitanto@gmail.com';
const password = 'yudhono123';
const confirmpassword = 'yudhono123';

const validateEmail = (email) => {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

const validatePass = (mypass) => {
    if (mypass.match(confirmpassword)) {
        return true;
    } else {
        return false;
    }
}


if ((myname.length >= 3 === true) && (validateEmail(myemail) === true) && (validatePass(password) === true)) {
    console.log('semua benar');
} else {
    console.log('ada salah satu salah');
}






