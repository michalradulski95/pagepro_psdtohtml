/*Swiper init*/
var swiper1 = new Swiper('.s1', {
    navigation: {
        nextEl: '.b1',
        prevEl: '.b2',
    },
});

var swiper2 = new Swiper('.s2', {
    navigation: {
        nextEl: '.b3',
        prevEl: '.b4',
    },
});



/*Add active class in navbar*/
let selector, elems, makeActive;

selector1 = ".menu-items a";
selector2 = ".menu-items .under-home a"
elems = document.querySelectorAll(selector1, selector2);

makeActive = function() {
    for (let i = 0; i < elems.lenght; i++)
        elems[i].classList.remove('active');

    this.classList.add('active');

};

for (let i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);

/*Under-home items display*/

let home = document.getElementById('home');
let underhome = document.querySelector('.under-home');

home.addEventListener('click', function(e) {
    e.preventDefault();
    underhome.classList.toggle('openhome');
});

/*Hamburger menu code */


let btn = document.getElementById('btn');
let menu = document.querySelector('.hammburger-links');
let menuimg = document.querySelector('.menu-img');
let menuprofile = document.querySelector('.profile');
let footer = document.querySelector('.footer');
let phoneavatar = document.querySelector('.phoneavatar');
let logo = document.querySelector('.logo');

btn.addEventListener('click', function() {
    menu.classList.toggle('openmenu');
    menu.classList.toggle('openmenubackground');
    menuimg.classList.toggle('openimg');
    menuprofile.classList.toggle('openmenuprofile');
    btn.classList.toggle('openhammburger');
    footer.classList.toggle('footerwithnav');
    phoneavatar.style.display = phoneavatar.style.display === 'none' ? '' : 'none';
    logo.classList.toggle('openmenulogo');
});

/*Validation form code */


function formValidation() {
    let mail = document.forms['newslettersub']['email'];
    let bubble = document.querySelector('.invalidmail');
    let mailShorten = document.querySelector('.wrongmail');
    let mailLabel = document.querySelector('.mail-label');
    let usernameLabel = document.querySelector('.username-label');
    let dquestionLabel = document.querySelector('.dquestion-label');

    let validMail = true;
    for (let i = 0; i < mail.length; i++) {
        if (mail[i].value == "") {
            mail[i].classList.add('invalid');
            bubble.classList.add('bubbleactive');
            mailShorten.style.width = "230px";
            mailLabel.innerHTML = "This isn’t a valid email";
            mailLabel.style.color = "#ff4d4d";
            usernameLabel.innerHTML = "Sorry, but this username is already taken";
            usernameLabel.style.color = "#ff4d4d";
            dquestionLabel.innerHTML = "Please select";
            dquestionLabel.style.color = "#ff4d4d";
            valid = false;
        }
    }
    if (validMail == false) {
        return validMail;
    }

    function setError(elem) {
        if (elem.className.indexOf('invalid') < 0) {
            elem.classList.add('invalid');
        }
    }

    function removeError(elem) {
        if (elem.className.indexOf('invalid') >= 0) {
            elem.classList.remove('invalid');
        }
    }

    let validForm = true;
    let username = document.forms['newslettersub']['username'];
    let dquestion = document.forms['newslettersub']['dquestion'];
    if (!username.value) {
        validForm = false;
        setError(username);
    } else {
        removeError(username);
    }
    if (!dquestion.selectedIndex) {
        validForm = false;
        setError(dquestion);
    } else {
        removeError(dquestion);
    }
    return validForm;
}