import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

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

const OrderContainer = styled.div`
    padding: 10px 10px;
    border-bottom: 1px solid grey;
    ${({editable}) => editable ? `
        &:hover {
            cursor: pointer;
            background-color: #e7e7e7;
        }
    `
        : `pointer-events: none`
    }
`;

const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styled.div`
    color; gray;
    font-size: 10px;
`;

export function Order({ orders, setOrders, setOpenFood }) {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return <OrderStyled>

        {orders.length === 0 ?
            (<OrderContent>
                Your order is looking pretty empty
            </OrderContent>)
            : (
                <OrderContent>
                    {" "}
                    <OrderContainer>
                        Your Order: {orders.length}
                    </OrderContainer>
                    {" "}
                    {orders.map((order, index) => (
                        // add the editable attribute -- part of css
                        <OrderContainer editable>
                            <OrderItem
                                onClick={() => {
                                    setOpenFood({ ...order, index })
                                }}
                            >

                                <div> {order.quantity} </div>
                                <div> {order.name} </div>
                                <div style={{ cursor: 'pointer' }}
                                    onClick={(e) => {
                                        // so that it doesn't bubble up to the parent, which triggers the dialog
                                        // bubbles to the onClick above
                                        e.stopPropagation();
                                        deleteItem(index)
                                    }}> x </div>
                                <div> {formatPrice(getPrice(order))} </div>

                            </OrderItem>

                            <DetailItem>
                                {order.toppings
                                    .filter(t => t.checked)
                                    .map(topping => topping.name)
                                    .join(", ")
                                }
                            </DetailItem>
                            {order.choice && <DetailItem>{order.choice}</DetailItem>}
                        </OrderContainer>
                    ))}
                    <OrderContainer>
                        <OrderItem>
                            <div />
                            <div> Subtotal </div>
                            <div> {formatPrice(subtotal)} </div>
                        </OrderItem>
                        <OrderItem>
                            <div />
                            <div> Tax </div>
                            <div> {formatPrice(tax)} </div>
                        </OrderItem>
                        <OrderItem>
                            <div />
                            <div> Total </div>
                            <div> {formatPrice(total)} </div>
                        </OrderItem>
                    </OrderContainer>

                </OrderContent>
            )}

        <DialogFooter>
            <ConfirmButton>
                Checkout
            </ConfirmButton>
        </DialogFooter>


    </OrderStyled>
}