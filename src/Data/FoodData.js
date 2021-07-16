export const foodItems = [
    {
        name: 'Waffles',
        img: '/img/waffle.jpg',
        section: 'Hot food'
    },
    {
        name: 'Toast',
        img: '/img/toast.jpg',
        section: 'Hot food'
    }, 
    {
        name: 'Eggs',
        img: '/img/egg.jpg',
        section: 'Snacks'
    }, 
    {
        name: 'Fruit',
        img: 'img/fruit.jpg',
        section: 'Snacks'
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