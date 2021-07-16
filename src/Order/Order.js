import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';


const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 44px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 5px grey;
    z-index: 10;

    display: flex;
    flex-direction: column;
`;

// extends off of DialogContent
const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderFooter = styled.div`

`;


export function Order() {
    return <OrderStyled>

        <OrderContent>
            Your order is looking pretty empty
        </OrderContent>

        <DialogFooter>
            <ConfirmButton>
                Checkout
            </ConfirmButton>
        </DialogFooter>


    </OrderStyled>
}