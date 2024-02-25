import styled from "styled-components";
import { SelectFileButton } from "../../../components/buttons/selectfilebutton/SelectFileButton";
import { CustomSelectFile } from "@renderer/presentation/components/inputs/customselectfile/CustomSelectFile";
import { LuClipboardCopy } from "react-icons/lu";
import { LuTimerReset } from 'react-icons/lu';
import { Spacer } from "@renderer/presentation/components/misc/spacer/Spacer";
import { useNavigate } from "react-router-dom";
import { SelectButton } from "@renderer/presentation/components/buttons/selectbutton/Index";
import { Divider } from "@renderer/presentation/components/misc/divider/Divider";
import { ApplicationConstants } from "@renderer/application/common/constants/ApplicationConstants";

const DefaultDashboardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #202020;
    width: 100%;
    height: auto;
`;

export function DefaultDashboard() {

    const navigate = useNavigate();

    function onExitButtonClick() {
        return close();
    }

    function onAboutButtonClick() {
        return alert('Made by Wesley de Araujo');
    }

    function onRedirectToSettingsPage() {
        navigate('/settings');
    }

    return (
        <DefaultDashboardContainer>
            <Spacer height={'20px'} />
            <CustomSelectFile />

            <Divider />

            <SelectFileButton />

            <SelectButton.Container
                onclick={onExitButtonClick}
            >
                <SelectButton.Icon
                    icon={LuClipboardCopy}
                    color='#ffffff'
                />
                <SelectButton.Text
                    title='Upload from clipboard'
                    color='#ffffff'
                />
                <SelectButton.RightText
                    title='CTRL + T'
                    color='#868686'
                />
            </SelectButton.Container>

            <SelectButton.Container
                onclick={onExitButtonClick}
            >
                <SelectButton.Icon
                    icon={LuTimerReset}
                    color='#ffffff'
                />
                <SelectButton.Text
                    title='Recent uploads'
                    color='#ffffff'
                />
                <SelectButton.RightText
                    title='CTRL + R'
                    color='#868686'
                />
            </SelectButton.Container>

            <Divider />

            <SelectButton.Container
                onclick={onAboutButtonClick}
            >
                <SelectButton.Text
                    title={'About ' + ApplicationConstants.APPLICATION_NAME}
                    color='#ffffff'
                />
            </SelectButton.Container>

            <SelectButton.Container
                onclick={onExitButtonClick}
            >
                <SelectButton.Text
                    title='Check for updates'
                    color='#ffffff'
                />
            </SelectButton.Container>

            <Divider />

            <SelectButton.Container
                onclick={onRedirectToSettingsPage}
            >
                <SelectButton.Text
                    title='Settings'
                    color='#ffffff'
                />
                <SelectButton.RightText
                    title='CTRL + L'
                    color='#868686'
                />
            </SelectButton.Container>

            <SelectButton.Container
                onclick={onExitButtonClick}
            >
                <SelectButton.Text
                    title='Quit'
                    color='#ffffff'
                />
                <SelectButton.RightText
                    title='CTRL + W'
                    color='#868686'
                />
            </SelectButton.Container>

        </DefaultDashboardContainer>
    );
}