const main = document.getElementById('contain')
main.style.width = '500px'
main.style.background = 'lightgray',
main.style.color = 'black'

const getUsers = (options) => {
    let {url, successo, erro} = options;
    const xhr = new XMLHttpRequest();

   xhr.addEventListener('readystatechange', (e) =>{
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
        let users = xhr.responseText;
        successo(users)
    } else {
        let message = (xhr.statusText || 'Foi aconteceu um erro')
        erro(`${xhr.status}: ${message}`)
    }
   })

   xhr.open('GET', url);
   xhr.send()
}


document.addEventListener('DOMContentLoaded', (e) => {
    getUsers({
        url: '/users.json',
        successo: (sucess) => main.innerHTML = sucess,
        erro: (err) => main.innerHTML = err
    });
})