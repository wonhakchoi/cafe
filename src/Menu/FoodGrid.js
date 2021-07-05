import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const FoodLabel = styled.div `
    // absolute - sizes to the content itself
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    pading: 5px;
    margin: 4px 4px 4px 4px;
    border-radius: 2px;
`

export const Food = styled(Title)`
    height: 100px;
    padding: 10px;
    font-size: 20px;
    color: black;
    // take the image, and pass it inside a url property -- allows dynamic properties 
    background-image: ${({img}) => `url(${img});` }
    background-position: center;
    background-size: cover;
    filter: contrast(90%);
    border-radius: 4px;
    box-shadow: 1px 1px 4px 1px grey;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`