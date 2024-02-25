import styled from "styled-components";

const SelectButtonSelectButtonRightTextContainer = styled.p<{ color: string; }>`
    display: flex;
    position: absolute;
    right: 20px;
    color: ${(props) => props.color ?? props.color} ;
    font-size: 13px;
`;

type SelectButtonSelectButtonRightTextProps = {
    title: string;
    color: string;
}

export function SelectButtonSelectButtonRightText({
    title,
    color
}: SelectButtonSelectButtonRightTextProps) {
    return (
        <SelectButtonSelectButtonRightTextContainer
            color={color}
        >
            {title}
        </SelectButtonSelectButtonRightTextContainer>
    );
}