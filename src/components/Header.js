import styled from 'styled-components';
import Background from './../images/bg-intro-desktop.svg';
import MockupSrc from './../images/image-mockups.png';
import RequestButton from './RequestLink';

const Container = styled.header`
    width: 100%;
    height: 70vh;
    background-image: url(${Background});
    background-size: 180%;
    background-position-y: -550px;
    background-position-x: -100px;
    background-repeat: no-repeat;

    @media (min-width: 850px) {
        background-size: 90%;
        background-position: 40vw -20vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        background-color: hsl(0, 0%, 98%);
    };

`;

const MockupContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    @media (min-width: 850px) {
        width: 50%;
        overflow: initial;
    }
`;

const Mockup = styled.img`
    width: 100%;
    transform: translateY(-23vh);

    @media (min-width: 850px) {
        transform: translateY(240px);
    }

    @media (min-width: 850px) and (max-width: 920px) {
        width: 120%;
        margin-left: -10vw;
    }
`;

const HeaderTexts = styled.div`
    margin-top: -20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media (min-width: 850px) {
        width: 50%;
        align-items: flex-start;
        padding-left: 5vw;
        text-align: left;
        transform: translateY(15vh);
    }
`;

const HeaderTitle = styled.h1`
    font-size: 64px;
    width: 80%;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    color: hsl(233, 26%, 24%);

    @media (min-width: 850px) {
        width: 70%;
        font-size: 50px;
    }
`;

const HeaderParapragh = styled.p`
    margin: 3vh 0 5vh;
    font-size: 22px;
    width: 80%;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    color: hsl(233, 8%, 62%);

    @media (min-width: 850px) {
        width: 60%;
    }
`;


export default function Header () {
    return (
        <Container>
            <MockupContainer>
                <Mockup src={MockupSrc}/> 
            </MockupContainer>

        <HeaderTexts>
            <HeaderTitle>Next generation digital banking</HeaderTitle>
            <HeaderParapragh>
                Take your financial life online. Your EasyBank account will 
                be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </HeaderParapragh>
            <RequestButton>Request Invite</RequestButton>
        </HeaderTexts>


        </Container>
    )
};