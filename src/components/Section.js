import styled from 'styled-components';
import SectionCard from './SectionCard';
import OnlineBankingImage from './../images/icon-online.svg';
import SimpleBudgetingImage from './../images/icon-budgeting.svg';
import FastOnboardingImage from './../images/icon-onboarding.svg';
import OpenApiImage from './../images/icon-api.svg';


const Container = styled.section`
    margin-top: 57vh;
    padding: 14vh 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: hsl(220, 16%, 96%);

    @media (min-width: 850px) {
        margin-top: 10vh;
    }

    @media (min-width: 1200px){
        margin-top: 0vh;
    }
    
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 1200px) {
        width: 85%;
        flex-direction: row;
    }
`;

const SectionTexts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    @media (min-width: 1200px) {
        align-items: flex-start;
        text-align: left;
    }
`;

const SectionHeader = styled.h2`
    width: 60%;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    color: hsl(233, 26%, 24%);
    font-size: 50px;

    @media (min-width: 1200px) {
        width: 40%;
        margin-left: 10vw;
    }
`;

const SectionParagraph = styled.p`
    width: 70%;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    line-height: 37px;
    color: hsl(233, 8%, 62%);
    font-size: 24px;
    margin: 3vh 0 5vh;

    @media (min-width: 1200px) {
        width: 40%;
        margin-left: 10vw;
    }
`;


export default function Section () {
    return (
        <Container>
            <SectionTexts>
                <SectionHeader>Why choose Easybank?</SectionHeader>
                <SectionParagraph>
                    We leverage Open Banking to turn your bank account 
                    into your financial hub. Control your finances like never before.
                </SectionParagraph>
            </SectionTexts>

            <CardContainer>
                <SectionCard imageSrc={OnlineBankingImage} header="Online Banking">
                    Our modern web and mobile applications allow you to keep track
                    of your finances wherever you are in the world.
                </SectionCard>

                <SectionCard imageSrc={SimpleBudgetingImage} header="Simple Budgeting">
                    See exactly where your money goes each month. Receive notifications
                    when you're close to your hitting limits.
                </SectionCard>

                <SectionCard imageSrc={FastOnboardingImage} header="Fast Onboarding">
                    We don't do branches. Open your accounts in minutes online and start
                    taking control of your finances right away.
                </SectionCard>

                <SectionCard imageSrc={OpenApiImage} header="Open Api">
                    Manage your savings, investments, pensions, and much more from one account.
                    Tracking your money never been easier.
                </SectionCard>
            </CardContainer>
        </Container>
    )
};
