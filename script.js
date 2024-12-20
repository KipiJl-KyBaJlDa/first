let gridItems = document.querySelector("main");
let url = 'https://my-json-server.typicode.com/KipiJl-KyBaJlDa/test/';
let productsArray = [];

fetch(url + 'products')
    .then(async function(response){
        let info = await response.json();
        console.log(info);
        gridItems.innerHTML = null;
        info.forEach(item => {
            productsArray.push(item);
            let prodItem = document.createElement('div');
            prodItem.classList.add('product');
            prodItem.innerHTML = `
                <h1 class="prod_name">${item.name}</h2>
                <img class="prod_img" src="${item.photo_url}">
                <p class="prod_desc">${item.description}</p>
                <b>Price</b>
                <p class="prod_price">${item.price}</p>
                <a href="">Profile</a>
                <button>Buy</button> 
            `;
            gridItems.append(prodItem);
        });
    })