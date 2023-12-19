const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonReduce = document.querySelector('.reduce-all')
const buttonFilter = document.querySelector('.filter-all')

function formatMoeda(value) {
    return newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function showAll(productArray) {

    let myLi = " "

    productArray.forEach((product) => {

        myLi += `
        <li>
            <img src= ${product.src}>
            <p>${product.name}</p>
            <p class="color"> ${formatMoeda(product.price)}</p>
        </li>
    `

    });

    list.innerHTML = myLi
}

function mapAll() {
    const newPrice = menuOptions.map((pruduct) => ({
        ...pruduct,
        price: pruduct.price * 0.9,
    }))

    showAll(newPrice)
}

function reduceAll() {
    const sumValue = menuOptions.reduce((acc, value) => {
        return acc + value.price
    }, 0)

    list.innerHTML = `
        <li>
            <p>A soma dos valores no menu é: ${formatMoeda(sumValue)}</p>
        </li>
    `
}

function filterAll() {
    const filter = menuOptions.filter(menuOptions => {
        if (menuOptions.vegan === true) return true

        else return false
    })

    showAll(filter)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonReduce.addEventListener('click', reduceAll)
buttonFilter.addEventListener('click', filterAll)
