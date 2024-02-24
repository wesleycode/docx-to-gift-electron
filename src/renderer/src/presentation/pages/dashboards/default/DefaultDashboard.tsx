import styled from "styled-components";
import { SelectFileButton } from "../../../components/buttons/selectfilebutton/SelectFileButton";
import { CustomSelectFile } from "@renderer/presentation/components/inputs/customselectfile/CustomSelectFile";
import { LuClipboardCopy } from "react-icons/lu";
import { LuTimerReset } from 'react-icons/lu';
import { Spacer } from "@renderer/presentation/components/misc/spacer/Spacer";

const DefaultDashboardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #202020;
    width: 100%;
    height: auto;
`;

const DefaultDashboardParagraph = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: white;
`;

const Divider = styled.div`
    display: flex;
    background-color: #3a3a3a;
    width: 300px;
    height: 2px;
    border-radius: 1px;
`;

const DefaultDashboardButton = styled.a`
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

const ButtonRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    gap: 5px;
`;

const Paragraph = styled.p<{ color?: string }>`
    color: ${(props) => props.color ? props.color : '#868686'};
    font-size: 14px;
`;

export function DefaultDashboard() {

    function onExitButtonClick() {
        return close();
    }

    return (
        <DefaultDashboardContainer>
            <Spacer height={'20px'} />
            <CustomSelectFile />
            <Divider />

            <Spacer height={'5px'} />

            <SelectFileButton />
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <LuClipboardCopy size={15} color={'#ffffff'} />
                    <Paragraph color={'#ffffff'}>
                        Upload from clipboard
                    </Paragraph>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                    <Paragraph>
                        CTRL + T
                    </Paragraph>
                </ButtonRightContainer>
            </DefaultDashboardButton>
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <LuTimerReset size={15} color={'#ffffff'} />
                    <Paragraph color={'#ffffff'}>
                        Recent uploads
                    </Paragraph>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                    <Paragraph>
                        CTRL + T
                    </Paragraph>
                </ButtonRightContainer>
            </DefaultDashboardButton>
            <Spacer height={'10px'} />
            <Divider />

            <Spacer height={'5px'} />
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <Paragraph color={'#ffffff'}>
                        About Docx to Gift
                    </Paragraph>
                </ButtonLeftContainer>
            </DefaultDashboardButton>
            <Spacer height={'2px'} />
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <Paragraph color={'#ffffff'}>
                        Check for updates
                    </Paragraph>
                </ButtonLeftContainer>
            </DefaultDashboardButton>

            <Spacer height={'5px'} />
            <Divider />

            <Spacer height={'5px'} />
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <Paragraph color={'#ffffff'}>
                        Settings
                    </Paragraph>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                    <Paragraph>
                        CTRL + L
                    </Paragraph>
                </ButtonRightContainer>
            </DefaultDashboardButton>
            <Spacer height={'2px'} />
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <Paragraph color={'#ffffff'}>
                        Quit
                    </Paragraph>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                    <Paragraph>
                        CTRL + W
                    </Paragraph>
                </ButtonRightContainer>
            </DefaultDashboardButton>
        </DefaultDashboardContainer>
    );
}