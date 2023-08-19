const d = document,
 main = d.querySelector('main'),
 home = d.getElementById('home'),
sobre = d.getElementById('sobre'),
servicos = d.getElementById('servicos'),
contacto = d.getElementById('contacto')


const getHTML = (options) => {
    let {url, success, error} = options; 
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === 4) return;
    
    if (xhr.status === 200 && xhr.status < 300) {
        let html = xhr.responseText;
        success(html);
    }else {
        let message = xhr.statusText1 || 'Aconteceu uma coisa errada'
        error(`Error ${xhr.status}: ${message}`);
    }
})

xhr.open('GET', url)
xhr.setRequestHeader("Content-type", "text/html; charset=utf-8")
xhr.send();
}

d.addEventListener('DOMContentLoaded', (e) => {
   home.addEventListener('click', (e) => {
    getHTML({
        url: "/LOJA-1.0/assets/paginas/home.html",
        success:(html) => main.innerHTML = html,
        error:(error) => main.innerHTML = `<h1>${error}</h1`
    })
   })

   sobre.addEventListener('click', (e) => {
    getHTML({
        url: "/LOJA-1.0/assets/paginas/sobre.html",
        success:(html) => main.innerHTML = html,
        error:(error) => main.innerHTML = `<h1>${error}</h1`
    })
   })

   servicos.addEventListener('click', (e) => {
    getHTML({
        url: "/LOJA-1.0/assets/paginas/servicos.html",
        success:(html) => main.innerHTML = html,
        error:(error) => main.innerHTML = `<h1>${error}</h1`
    })
   })

   contacto.addEventListener('click', (e) => {
    contacto.style.background = 'grey'
    getHTML({
        url: "/LOJA-1.0/assets/paginas/contacto.html",
        success:(html) => main.innerHTML = html,
        error:(error) => main.innerHTML = `<h1>${error}</h1`
    })
   })
})