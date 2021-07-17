// converting number into price
export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems = [
    {
        name: 'Waffles',
        img: '/img/waffle.jpg',
        section: 'Hot food',
        price: 2
    },
    {
        name: 'Toast',
        img: '/img/toast.jpg',
        section: 'Hot food',
        price: 3.50
    }, 
    {
        name: 'Eggs',
        img: '/img/egg.jpg',
        section: 'Snacks',
        price: 1.99
    }, 
    {
        name: 'Fruit',
        img: 'img/fruit.jpg',
        section: 'Snacks',
        price: 1.50
    }
];

// result takes same value and current value; keeping an instance of variance
// taking data structure -> turn into a onject, keys = section names; values = arrays
// arrays are going to push on the food; each section will have a list of each own unique
export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]){ // if we don't have the section(key)
        res[food.section] = []; // take the result and add in food section as a key
    }
    res[food.section].push(food);
    return res;
}, {});