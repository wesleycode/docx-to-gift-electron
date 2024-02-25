import styled from "styled-components";

const DividerContainer = styled.div<{ color?: string; }>`
    background-color: ${(props) => props.color ? props.color : '#3a3a3a'};
    width: 100%;
    max-width: 300px;
    margin: 5px 0px;
    height: 2px;
    border-radius: 1px;
`;

type DividerProps = {
    color?: string;
}

export function Divider({
    color
}: DividerProps) {
    return (
        <DividerContainer 
            color={color} 
        />
    );
}