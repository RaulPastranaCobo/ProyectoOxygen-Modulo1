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


const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    const nombre = document.getElementById('nameInputId').value;
    const email = document.getElementById('emailInputId').value;
    const datos = {
        nombre: nombre,
        email: email
    };



    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.status);
        }
        return respuesta.json();
    })
    .then(data => {
        console.log('Datos enviados exitosamente:', data);
        formulario.reset();
    })
    .catch(error => {
        console.error('Hubo un problema con el envío:', error);
        alert('Ocurrió un error al enviar los datos. Intenta nuevamente.');
    });
});


function modalFormulario() { 
    const modal = document.getElementById('modal');
    const crossModal = document.getElementById('crossModal');
    const emailModal = document.getElementById('emailPopUpId');
    const submitButton = document.getElementById('submitNewsletter');
    const modalContent = document.getElementById('modalContent'); 
    
    let modalShown = false;

    const showModal = () => {
        if (!modalShown) {
            modal.showModal();
            modalShown = true;
        }
    };

    const timeoutId = setTimeout(showModal, 5000);

    const scrollHandler = () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 25) {
            showModal();
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', scrollHandler);
        }
    };
    window.addEventListener('scroll', scrollHandler);

    submitButton.addEventListener('click', async () => {
        const emailValue = emailModal.value;

        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailValue)) {
            emailModal.style.borderBottom = '1px solid red';
            return;
        }

        
        const datos = { email: emailValue };
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!respuesta.ok) {
                throw new Error('Error en la solicitud: ' + respuesta.status);
            }

            
            const data = await respuesta.json();
            console.log('Datos enviados exitosamente:', data);

            
            modalContent.innerHTML = `<p>Gracias por suscribirte!</p>`;
            setTimeout(() => {
                modalContent.innerHTML = `
                    <button id="crossModal">X</button>
                    <h2>Subscribe to our newsletter</h2>
                    <form id="newsletterForm">
                        <input type="email" id="emailPopUpId" placeholder="Enter your email" required />
                        <button id="submitNewsletter" type="button">Subscribe</button>
                    </form>`;
            }, 2000); 

        } catch (error) {
            console.error('Hubo un problema con el envío:', error);
            alert('Ocurrió un error al enviar los datos. Intenta nuevamente.');
        }
    });

    crossModal.addEventListener('click', () => {
        modal.close();
        localStorage.setItem('newsletterClosed', 'true');
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
            localStorage.setItem('newsletterClosed', 'true');
        }
    });

   
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.close();
            localStorage.setItem('newsletterClosed', 'true');
        }
    });
}
modalFormulario();




const pricingData = {
    basic: 0,
    professional: 25,
    premium: 60
};

let exchangeRates = {};


async function fetchExchangeRates() {
    try {
        const response = await fetch(
            "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
        );
        const data = await response.json();
        exchangeRates = data.usd;
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}


function updatePricing() {
    const selectedCurrency = document.getElementById("selectPricing").value;
    const rate = exchangeRates[selectedCurrency] || 1;

    document.getElementById("textpricing12").textContent = `${Math.round(pricingData.basic * rate)} ${selectedCurrency.toUpperCase()}`;
    document.getElementById("textpricing22").textContent = `${Math.round(pricingData.professional * rate)} ${selectedCurrency.toUpperCase()}`;
    document.getElementById("textpricing32").textContent = `${Math.round(pricingData.premium * rate)} ${selectedCurrency.toUpperCase()}`;
}


document.getElementById("selectPricing").addEventListener("change", updatePricing);


fetchExchangeRates().then(() => {
    document.getElementById("selectPricing").value = "usd";
    updatePricing();
});

function slider(){
    const images=document.getElementsByClassName('imgSlider')
    const left=document.getElementById('left')
    const right=document.getElementById('right')
    const imgCircles=document.getElementById('imgCircles')

    for(let i=0;i<images.length;i++){
        const imgCircle = document.createElement('div')
        imgCircle.classList.add('imgCircle')
        imgCircles.appendChild(imgCircle)
    }

    const imgsCircles=document.getElementsByClassName('imgCircle')

    console.log('slider',{images})
    images[0].style.display='block'
    imgsCircles[0].style.backgroundColor='rgb(185, 183, 183)'

    let i=0

    const imgLoop=()=>{
        setInterval(()=>{
            images[i].style.display = 'none'
            imgsCircles[i].style.backgroundColor = 'rgba(185, 183, 183, 0.3)'
            const pass=(i+1)%images.length
            images[pass].style.display='block'
            imgsCircles[pass].style.backgroundColor='rgb(185, 183, 183)'
            i=(i+1)%images.length
        },3000)
    }
    

    setTimeout(()=>imgLoop(0),3000)

    left.addEventListener('click', () => {
        images[i].style.display = 'none'
        imgsCircles[i].style.background = 'rgba(185, 183, 183, 0.586)'
        const pass = ((i - 1) + images.length) % images.length
        images[pass].style.display = 'block'
        imgsCircles[pass].style.background = 'rgb(185, 183, 183)'
        i = ((i - 1) + images.length) % images.length 
    })

    right.addEventListener('click', () => {
        images[i].style.display = 'none'
        imgsCircles[i].style.background = 'rgba(185, 183, 183, 0.586)'
        const pass = (i + 1) % images.length
        images[pass].style.display = 'block'
        imgsCircles[pass].style.background = 'rgb(185, 183, 183)'
        i = (i + 1) % images.length
    })

}

slider()