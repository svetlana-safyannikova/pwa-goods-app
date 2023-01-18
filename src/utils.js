const defaultGoods = [{ 'id': 0, 'title': 'Headphones', 'price': '10.00', 'date': new Date().toLocaleString() },
{ 'id': 1, 'title': 'Mouse', 'price': '15.20', 'date': new Date().toLocaleString() },
{ 'id': 2, 'title': 'Keyboard', 'price': '9.99', 'date': new Date().toLocaleString() }];


export const getGoods = () => {
    return JSON.parse(localStorage.getItem('goods')) || defaultGoods;
}

export const setGoods = (newGood) => {
    const goods = getGoods();
    goods.push(newGood);
    localStorage.setItem('goods', JSON.stringify(goods));
}