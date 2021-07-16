import React from 'react';
import styled from 'styled-components';
import { foodItems, foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
    // border: 2px solid black;
    height: 1000px;
    margin: 0px 400px 50px 20px;
`;


export function Menu({setOpenFood}) {
    return (
    <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods]) => (
            <>
                <h1> {sectionName} </h1>
                <FoodGrid>
                    {foodItems.map(food => (
                        <Food img={food.img} onClick={() => {
                            setOpenFood(food);
                        }}>
                            <FoodLabel>
                            {food.name}
                            </FoodLabel>
                        </Food>
                    ))}
                </FoodGrid>
        </>
    ))}                
    </MenuStyled>
    
    );
}