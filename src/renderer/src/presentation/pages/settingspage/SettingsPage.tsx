import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DefaultDashboardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #202020;
    width: 100%;
    height: 100vh;
`;

const DefaultDashboardButton = styled.button`
    width: 250px;
    height: 60px;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: #5b00ee;
    cursor: pointer;
    transition: ease-in-out .25s;

    &:hover {
        background-color: #6200ff;
    }
`;

export function SettingsPage() {

    const navigate = useNavigate();

    return (
        <DefaultDashboardContainer>
            <DefaultDashboardButton
                onClick={() => {
                    navigate('/')
                }}
            >
                Voltar
            </DefaultDashboardButton>
        </DefaultDashboardContainer>
    );
}