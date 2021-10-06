import { useState } from "react";


export function useQuantity(defaultQuantity) {
    const [value, setValue] = useState(defaultQuantity || 1);
    
    function onChange(e) {
        // convert text value into number w/ the + operator
        if (!(+e.target.value >= 1)) {
            setValue(1);
            return;
        }
        setValue(+e.target.value);
        // + sets this to be an integer
    }

    return {
        value,
        setValue,
        onChange
    }
}