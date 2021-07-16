import { useState } from "react";

// intializing hook, returning proprert in a object
export function useOpenFood() {
    const [openFood, setOpenFood] = useState();

    return {
        openFood,
        setOpenFood
    };
}