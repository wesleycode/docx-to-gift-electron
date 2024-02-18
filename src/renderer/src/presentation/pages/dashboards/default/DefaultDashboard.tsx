import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoCloudUploadOutline } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';
import { CTRLButtonIcon } from "../../../components/icons/ctrlbuttonicon/CTRLButtonIcon";
import { SelectFileButton } from "../../../components/buttons/selectfilebutton/SelectFileButton";

const DefaultDashboardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #202020;
    width: 100%;
    height: 100vh;
`;

const DefaultDashboardParagraph = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
`;

const FileSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100px;
    border: 2px dashed #3a3a3a;
    color: #bebebe;
    border-radius: 10px;
    gap: 10px;
`;

const Divider = styled.div`
    display: flex;
    background-color: #3a3a3a;
    width: 300px;
    height: 2px;
    border-radius: 1px;
`;

const DefaultDashboardButton = styled.button`
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

export function DefaultDashboard() {
    
    const navigate = useNavigate();
    
    function onExitButtonClick() {
        return close();
    }

    return (
        <DefaultDashboardContainer>
            <FileSectionContainer>
                <IoCloudUploadOutline size={18} color={'#ffffff'} />
                <DefaultDashboardParagraph>
                    Drag files here...
                </DefaultDashboardParagraph>
            </FileSectionContainer>
            <br />
            <Divider />
            <SelectFileButton
                
            />
            <DefaultDashboardButton
                onClick={onExitButtonClick}
            >
                <ButtonLeftContainer>
                    <IoMdExit size={15} color={'#ffffff'} />
                    <DefaultDashboardParagraph>
                        Exit
                    </DefaultDashboardParagraph>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                    <ButtonRightIconContainer>
                        <CTRLButtonIcon />
                    </ButtonRightIconContainer>
                    <DefaultDashboardParagraph>
                        + X
                    </DefaultDashboardParagraph>
                </ButtonRightContainer>
            </DefaultDashboardButton>
        </DefaultDashboardContainer>
    );
}