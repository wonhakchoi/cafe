import { useState } from "react";


export function useToppings(defaultTopping) {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings());

    //setter
    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    }
    return {
        checkTopping,
        toppings
    }
}

const toppingsList = [
    "Strawberry Jam",
    "Blueberry Jam",
    "Peanut Butter",
    "Cream Cheese",
    "Butter"
];

function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }))
}

// function getDefaultToppings = () => {
//     return toppingsList.map(topping => ({
//         name: topping,
//         checked: false;
//     });
// }
