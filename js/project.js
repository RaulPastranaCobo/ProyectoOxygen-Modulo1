const butonMenu=document.getElementById('iconoMenuDesplegableId')
const menu=document.getElementById('menuDesplegableId')
const header=document.getElementById('header')
const crossMenu=document.getElementById('crossMenu')

function dropDownList(){
    menu.style.display='flex'
    header.style.boxShadow='0px 0px 0px 0px rgba(0, 0, 0, 0.29)'
    butonMenu.style.display='none'
    crossMenu.style.display='block'
    menu.style.backgroundColor='white'
}

function crossMenuList(){
    menu.style.display='none'
    crossMenu.style.display='none'
    butonMenu.style.display='block'
}

butonMenu.addEventListener('click',dropDownList)
crossMenu.addEventListener('click',crossMenuList)