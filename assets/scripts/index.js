const d = document
const main = d.querySelector('main');

import  {exo}  from "/assets/scripts/contacto.js";
exo()


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
    getHTML({
        url: "/assets/paginas/home.html",
        success:(html) => main.innerHTML = html,
        error:(error) => main.innerHTML = `<h1>${error}</h1`
    })
})