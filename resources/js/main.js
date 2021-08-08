function dropIt() {
    toggleClass(document.getElementById('navigation-dropdown'), "hide");
}

var toggleClass = function (el, className) {
    if (el) {
        if (el.className.indexOf(className) != -1) {
            el.className = el.className.replace(className, '');
        } else {
            el.className += ' ' + className;
        }
    }
};