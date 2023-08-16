export const voltar = document.getElementById('voltar')
export const message = (val1) => {
    if (!isNaN(val1)) {
        const pesoKG = val1 * 1000
        return `O seu peso/kg é: ${pesoKG}Kg` 
    }else{
        const messageErroe = ' Error 404: Not found'
        return messageErroe
    }
}