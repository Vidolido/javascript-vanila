let user = 'Goce Levkovski';
let pass = 'Fl1eb@asdasd';

function validator(user, pass) {
    // user validation
    let validated = []
    if(user) {
        let lowerCase = user.toLowerCase() ===  user ? 'The username should have at least one uppercase letter.': false;
        let lessThanEight = user.length >= 8 ? false : 'The username should be longer than 8 characters.';
        !lowerCase && !lessThanEight ? validated[0] = true : validated[0] = false;
        if(lowerCase) console.log(lowerCase);
        if(lessThanEight) console.log(lessThanEight);
    }
    if(pass) {
        let lowerCase = pass.toLowerCase() ===  pass ? 'The password should have at least one uppercase letter.': false;
        let lessThanEight = pass.length >= 8 ? false : 'The password should be longer than 8 characters.';
        let hasNumber = /\d/.test(pass) ? false : 'The password should have at least one number.';
        let hasSimbol = pass.match(/\W/) ? false : 'The password should have at least one special character.';

        if(lowerCase) console.log(lowerCase);
        if(lessThanEight) console.log(lessThanEight);
        if(hasNumber) console.log(hasNumber);
        if(hasSimbol) console.log(hasSimbol);

        !lowerCase && !lessThanEight && !hasNumber && !hasSimbol ? validated[1] = true : validated[1] = false;
    }

    if(validated[0] && validated[1]) {
        console.log('Login Successful')
    }

}
validator(user, pass)