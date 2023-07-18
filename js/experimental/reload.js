window.onbeforeunload = function (e) {
    localStorage.setItem('reload-url', window.location.href);
}

window.onload = function (e) {
    if (localStorage.getItem('reload-url') != null) {
        if (window.location.href == localStorage.getItem('reload-url')) {
            console.log('Reload');
        }
    }
}