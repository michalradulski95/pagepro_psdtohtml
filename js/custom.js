/*Add active class in navbar*/
let selector, elems, makeActive;

selector1 = ".hammburger-links a";
selector2 = ".under-home a"
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
    underhome.classList.toggle('open');
});