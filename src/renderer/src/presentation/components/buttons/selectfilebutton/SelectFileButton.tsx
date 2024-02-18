import styled from "styled-components";
import { LuFileInput } from 'react-icons/lu';
import { CTRLButtonIcon } from "../../icons/ctrlbuttonicon/CTRLButtonIcon";

const SelectFileButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    height: 25px;
    background: none;
    cursor: pointer;
    margin-top: 5px;
    transition: ease-in-out .25s;

    &:hover {
        background-color: #6200ff;
    }
`;

const ButtonLeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const Paragraph = styled.p`
    color: white;
`;

const ButtonRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    gap: 5px;
`;

const ButtonRightIconContainer = styled.div`
    width: 20px;
    height: 20px;
`;

export function SelectFileButton() {
    return (
        <SelectFileButtonContainer>
            <ButtonLeftContainer>
                <LuFileInput size={15} color={'#ffffff'} />
                <Paragraph>
                    Load file
                </Paragraph>
            </ButtonLeftContainer>
            <ButtonRightContainer>
                <ButtonRightIconContainer>
                    <CTRLButtonIcon />
                </ButtonRightIconContainer>
                <Paragraph>
                    + T
                </Paragraph>
            </ButtonRightContainer>
        </SelectFileButtonContainer>
    );
}