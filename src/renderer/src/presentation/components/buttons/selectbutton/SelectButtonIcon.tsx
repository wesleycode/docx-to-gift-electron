import { ElementType } from "react";
import styled from "styled-components";

const SelectButtonIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

type SelectButtonIconProps = {
    icon: ElementType;
    color: string;
}

export function SelectButtonIcon({ 
    icon: Icon,
    color 
}: SelectButtonIconProps) {
    return (
        <SelectButtonIconContainer>
            <Icon size={15} color={color} />
        </SelectButtonIconContainer>
    );
}