import styled from "styled-components";

const SelectButtonSelectButtonTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SelectButtonSelectButtonTextParagraph = styled.p<{ color: string; }>`
    color: ${(props) => props.color ?? props.color} ;
    font-size: 13px;
`;

type SelectButtonSelectButtonTextProps = {
    title: string;
    color: string;
}

export function SelectButtonSelectButtonText({ 
    title,
    color
}: SelectButtonSelectButtonTextProps) {
    return (
        <SelectButtonSelectButtonTextContainer>
            <SelectButtonSelectButtonTextParagraph 
                color={color}
            >
                { title }
            </SelectButtonSelectButtonTextParagraph>
        </SelectButtonSelectButtonTextContainer>
    );
}