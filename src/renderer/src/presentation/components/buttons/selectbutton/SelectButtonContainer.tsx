import { ColorConstants } from "@renderer/application/common/constants/ColorConstants";
import { ReactNode } from "react";
import styled from "styled-components";

const SelectButtonContainerWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 28px;
    background: none;
    border: none;
    transition: ease-in-out .25s;
    padding: 0 18px;
    cursor: pointer;

    &:hover {
        background-color: ${ColorConstants.PRIMARY_ACCENT_COLOR};
    }
`;

type SelectButtonContainerProps = {
    children: ReactNode;
    onclick: () => void;
}

export function SelectButtonContainer({ 
    children,
    onclick
}: SelectButtonContainerProps) {

    return (
        <SelectButtonContainerWrapper
            onClick={onclick}
        >
            { children }
        </SelectButtonContainerWrapper>
    );
}