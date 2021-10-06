import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-bottom: 40px
`

export const FoodLabel = styled(Title) `
    // absolute - sizes to the content itself
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    pading: 5px;
    margin: 4px 4px 4px 4px;
    border: 6px solid white;
    border-radius: 4px;
    font-size: 14px;
`

export const Food = styled.div`
    height: 200px;
    padding: 10px;
    font-size: 20px;
    color: black;
    // take the image, and pass it inside a url property -- allows dynamic properties 
    background-image: ${({img}) => `url(${img});` }
    background-position: center;
    background-size: cover;
    filter: contrast(90%);
    border-radius: 4px;

    margin-top: 5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: 1s
    box-shadow: 0px 0px 2px 0px grey;
    &:hover {
        margin-top: 0px;
        margin-bottom: 5px;
        cursor: pointer;
        filter: contrast(100%);
        box-shadow: 0px 5px 10px 0px grey
    }
`