import styled from "styled-components";
import { LuFileInput } from 'react-icons/lu';

const SelectFileButtonContainer = styled.label`
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
    font-size: 14px;
`;

const ButtonRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    gap: 5px;
`;

export function SelectFileButton() {

    function handleOnDropFile(event?: React.SyntheticEvent) {
        event?.preventDefault();
    }

    return (
        <SelectFileButtonContainer
            onDrop={handleOnDropFile}
            htmlFor='fileInput'
        >
            <ButtonLeftContainer>
                <LuFileInput size={15} color={'#ffffff'} />
                <Paragraph>
                    Select file
                </Paragraph>
            </ButtonLeftContainer>
            <ButtonRightContainer>
                <Paragraph>
                    CTRL + T
                </Paragraph>
            </ButtonRightContainer>
        </SelectFileButtonContainer>
    );
}