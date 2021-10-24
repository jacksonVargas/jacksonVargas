let btn = document.querySelector('.btn');
btn.onclick = () => {
    let menu = document.querySelector('.menu-navigation');
    if(menu.classList.contains('hide')) {
        menu.classList.add('show');
        menu.classList.remove('hide');
        btn.innerHTML = '<i class="fa fa-times fa-fw"></i>'
    }else {
        menu.classList.add('hide');
        menu.classList.remove('show');
        btn.innerHTML = '<i class="fa fa-bars fa-fw"></i>'
    }
}