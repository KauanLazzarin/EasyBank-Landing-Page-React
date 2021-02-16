import styled from 'styled-components';
import RequestButton from '../RequestLink';
import LogoSrc from './../../images/logo.svg';

const Container = styled.nav`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;

    @media (max-width: 850px){
        display: none;
    }
`;

const LinksContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Logo = styled.img`
    min-width: 200px;
    width: 10%;
`;

const MenuLink = styled.a`
    font-size: 18px;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    color: hsl(233, 8%, 62%);
    text-decoration: none;
    margin: 0 20px;
`;  

export default function DesktopNav () {
    return (
        <Container>
            <Logo src={LogoSrc}/>


            <LinksContainer>
                <MenuLink href="/">Home</MenuLink>
                <MenuLink href="/">About </MenuLink>
                <MenuLink href="/">Contact</MenuLink>
                <MenuLink href="/">Carerrs</MenuLink>
            </LinksContainer>

            <RequestButton>Request invite</RequestButton>

        </Container>
    )
};