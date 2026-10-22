function buildProductViewers(products) {
    var viewers = [];
    for (let i = 0; i < products.length; i++) {
        viewers.push(() => console.log(products[i].name));
    }
    return viewers;
}

var products = [{ name: "노트북" }, { name: "마우스" }, { name: "키보드" }];
var viewers = buildProductViewers(products);
viewers[0]();
viewers[1]();

function getExpensivePrices(items) {
    const pricesWithTax = items.map(item => {
        const raw = item.price * 1.1;
        return raw;
    });
    return pricesWithTax.filter(price => price.toFixed(0) > 10000);
}

const cartItems = [{ price: 5000 }, { price: 20000 }, { price: 8000 }];
console.log(getExpensivePrices(cartItems));
