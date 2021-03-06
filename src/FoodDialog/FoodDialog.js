import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { coffeeBrown } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { useChoice } from '../Hooks/useChoice';
import { Choices } from './Choices';

const Dialog = styled.div`
    width: 500px;
    // height: 1000px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);

    display: flex;
    flex-direction: column;
`;

export const DialogContent = styled.div`
    // border: 2px solid blue;
    min-height: 100px;
    overflow: auto;
    padding: 0px 40px;
    padding-bottom: 60px;
`;

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 10px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    height: 20px;
    color: white;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${coffeeBrown};

    ${({disabled}) => disabled && `
        opacity: 0.5;
        background-color: grey;
        pointer-events: none;
    `
    }

`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => ( img ? `background-image: url(${img});` : `min-height: 75px`)};
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    top: ${({img}) => (img ? `100px` : `20px`)};
    font-size: 30px;
    font-weight: 600;
    left: 0px;
    padding-left: 10px;
    padding: 0px 40px;
    padding-right: 100px;
    opacity: 0.7;
    // display: flex;
    // justify-content: center;
`

const pricePerTopping = 0.5; 

export function getPrice(order){
    return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
}

function hasToppings(food) {
    return food.section === 'Hot food'
}

function FoodDialogContainer({ openFood, setOpenFood, orders, setOrders }) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);
    const isEditing = openFood.index > -1;

    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    };

    function editOrder() {
        const newOrders = [...orders];
        newOrders[openFood.index] = order;
        setOrders(newOrders); 
        close();
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }


    return (openFood ? (
        <>
            <DialogShadow onClick={close} />
            <Dialog>
                <DialogBanner img={openFood.img} >
                    <DialogBannerName>
                        {openFood.name}
                    </DialogBannerName>

                </ DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity} />

                    {hasToppings(openFood) && (
                    <>
                        <h3>Would you like toppings?</h3>
                    <Toppings {...toppings}/> 
                    </>)}
                    {openFood.choices &&
                        <Choices openFood={openFood} choiceRadio={choiceRadio} />}

                </DialogContent>

                <DialogFooter>
                    <ConfirmButton onClick={isEditing ? editOrder : addToOrder}
                        // when the food has choices and there's no radio value (aka nothing slected)
                        disabled={openFood.choices && !choiceRadio.value}
                    >
                        {/* Add to order: {formatPrice(openFood.price)} */}
                        {isEditing ? `Update order ` : `Add to order: `}
                        {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    ) : null
    );
}


export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}