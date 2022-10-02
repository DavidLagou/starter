

function toggleMenu() {
    var collapseMenu = document.getElementById('collapseMenu');


    if (collapseMenu.style.display == 'none' || collapseMenu.style.display == '') {
        collapseMenu.style.display = 'flex';
    }

    else {
        collapseMenu.style.display = 'none';
    }
}
