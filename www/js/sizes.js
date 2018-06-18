window.addEventListener('load',function(){
    const Y = window.innerHeight;
    const X = window.innerWidth;
    const footer = document.getElementById('foot1');
    const btnNew = document.getElementById('btnNew');
    footer.style.top = (Y-440)+'px';
    btnNew.style.top = (Y-150)+'px';
    btnNew.style.left = ((X/2)-52)+'px';
});