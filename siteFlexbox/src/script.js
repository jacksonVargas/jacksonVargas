let btn = document.querySelector('.btn');
btn.onclick = () => {
    btn.classList.toggle('active');

    let side = document.querySelector('.side');
    if(side.classList.contains('hide')) {
        side.classList.add('show');
        side.classList.remove('hide');
    }else {
        side.classList.add('hide');
        side.classList.remove('show');
    }
}