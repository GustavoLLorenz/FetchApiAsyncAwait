
//const fetch = require('node-fetch')
//const lista = document.getElementById('lista')

/* const getPrice = async () => {
    try {
        const url = 'https://api.coincap.io/v2/assets';
        const request = await fetch(url)
        const response = await request.json();
        const { data } = response;
        const onlyNames = data.map((moeda) => moeda.name)
        const onlyTen = onlyNames.slice(0, 10)

        return console.log(onlyTen)
    } catch (err) {
        console.log('quem sabe tu confere a url!')
    }

    
} */
/* const addCoinToHtmlList = async () => {
    const coins = await getPrice();
    const lista = document.getElementById('lista');
    
    coins.forEach((coin) => {
        const listItem = document.createElement('li');
        const name = coin;
        console.log(name)
        listItem.innerText = name;
        listItem.setAttribute('id', 'itemList')
        lista.appendChild(listItem)
        
    });

} */

const getPrice = async () => {
    try {
        const url = 'https://api.coincap.io/v2/assets';
        const request = await fetch(url)
        const response = await request.json();
        const { data } = response;
 
        const arrayComMoedas = [];
        data.forEach((moeda) => {
            const eachCoin = {
                nome: moeda.name,
                valor: moeda.priceUsd,
                symbol: moeda.symbol
            }
            arrayComMoedas.push(eachCoin)         
        });
        const firstTen = arrayComMoedas.splice(0, 10);
        return firstTen
    } catch (err) {
        console.log('quem sabe tu confere a url!')
    } 
}
const addCoinToHtmlList = async () => {
    const coins = await getPrice();
    const lista = document.getElementById('lista');
    
    coins.forEach((coin) => {
        const listItem = document.createElement('li');
        const name = coin.nome;
        const valor = parseInt(coin.valor);
        const simbolo = coin.symbol
        
        listItem.innerText = `${name}, (${simbolo}) valor: ${valor.toFixed(2)}`;
        listItem.setAttribute('id', 'itemList')
        lista.appendChild(listItem)
        
    });

}

 
window.onload = () => addCoinToHtmlList()