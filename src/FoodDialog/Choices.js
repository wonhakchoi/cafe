import React from "react";
import styled from "styled-components";

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
    ${CursorPointer}
`;
const Label = styled.label`
    ${CursorPointer}
`;


// choiceRadio is the name of the hook we're calling (useChoice)
export function Choices({openFood, choiceRadio }) {
    return (
        <>
            <h3> Choose one</h3>
            {openFood.choices.map(choice => (
                <>
                    <RadioInput
                        type="radio"
                        id={choice}
                        name="choice"
                        value={choice}
                        checked={choiceRadio.value === choice}
                        onChange={choiceRadio.onChange}
                        // call back to onChange fcn in useChoice hook
                        // same thing as 
                        // (e) {
                        //     setValue(e.target.value);
                        // }
                    />
                    <Label for={choice}>
                        {choice}
                    </Label> {" "}
                </>
            ))}
        </>
    )
}