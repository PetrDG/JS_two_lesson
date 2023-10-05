const goods = {
    1 : {
        id: 1,
        name: "Трусы",
        description: "Хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 500,
        available: 'Да'
    },
    2 : {
        id: 2,
        name: "Шотры",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 1500,
        available: 'Нет'
    },
    3 : {
        id: 3,
        name: "Рубашка",
        description: "Хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 3000,
        available: 'Да'
    },
    4 : {
        id: 4,
        name: "Штаны",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 4000,
        available: 'Нет'
    },
    5 : {
        id: 5,
        name: "Майка",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 500,
        available: 'Да'
    },
}



const basket = [
    {
        good: 1,
        amount: 5,
    },
    {
        good: 2,
        amount: 3,
    },
    {
        good: 3,
        amount: 4,
    },
]

function addGoods(good_id, amount) {
    if (goods[good_id].available === 'Да') {
        let basketItems = {
            good: goods[good_id].id,
            amount: amount
        }
        basket[basket.length] = basketItems;
    }
    else console.log('Не удалось добавить товар. Товара ', goods[good_id].name, ' нет в наличии:')

}

function delGoods(good) {
    basket.splice(good, 1); 
    return basket
}

function basketClean() {
    basket.splice(0, basket.length); 
    return basket
}

function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {

        totalSumm = totalSumm + basket[basketPosition].amount * goods[basket[basketPosition].good].price 

        totalAmount = totalAmount + basket[basketPosition].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }
    return totals
}

 basketClean()
 addGoods(1, 10)
 addGoods(2, 15)
 addGoods(4, 17)
 addGoods(5, 16)
 delGoods('3')
console.log('В корзине: ', basket)
total()
console.log(total());