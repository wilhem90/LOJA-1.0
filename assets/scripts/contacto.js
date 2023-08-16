export function exo() {
    var lera = document.querySelector('.uvab');
    if (lera) {
        lera.innerHTML = 'Muito importante na questão do nosso amigo Gabi';
    } else {
        console.error('Elemento .uvab não encontrado.');
    }
}
