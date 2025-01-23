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

const scrollBar=document.getElementById('scrollBar')

function scrollPercentage(){
    const percentage=document.documentElement.scrollTop
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
    const widthPercentage=(percentage/height)*100
    scrollBar.style.width=widthPercentage + "%"
    
    
}

window.onscroll=function(){
    if(document.documentElement.scrollTop>=200){
        toTop.style.display='block'
    
    }else{
        toTop.style.display='none'
    }
    scrollPercentage()
}

const toTop=document.getElementById('toTop')

function getToTop(){
    window.scrollTo({top:0,behavior:'smooth' })
}

toTop.addEventListener('click',getToTop)


const formulario=document.getElementById('formulario')

formulario.addEventListener('submit',evento =>{
    evento.preventDefault()
    const nombre=document.getElementById('nameInputId').value
    const email=document.getElementById('emailInputId').value
    const datos={
        nombre:nombre,
        email:email
    }

    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method:'POST',
        body:JSON.stringify(datos)
    })
    .then(respuesta=>respuesta.json())
    
        
    
})