let menu_icone=document.getElementById('menu_icon');
let side_nav=document.getElementById('side_nav');

side_nav.style.right ="-200px";
menu_icone.onclick= function() {
    if(side_nav.style.right == "-200px"){
        side_nav.style.right="0";
    }else{
        side_nav.style.right="-200px";
    }
};