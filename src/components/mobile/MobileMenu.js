import styled from 'styled-components';

const MobileMenuContainer = styled.div`
    width: 50vw;
    height:40vh;
    position: fixed;
    left: 25%;
    top: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    text-align: center;
    background-color: #ffffff;
    box-shadow: 2px 2px  10px 2px #c9fbda;
    border-radius: 20px;
    transform: translateY(-150px);
    opacity: 0;
    animation: slideDown .4s ease forwards;

    
    @keyframes slideDown {
        to {
            transform: initial;
            opacity: 1;
        }
    }
`;

const MobileMenuLink = styled.a `
    width: 100%;
    padding: 20px 0;

    color: #0f122a ;
    font-family: 'Public Sans';
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    transition: .3s;

    &:hover {
        color: hsl(233, 8%, 62%);
    }
`;

export default function MobileMenu () {
    return (
        <MobileMenuContainer>
            <MobileMenuLink href="/">Cadastrar</MobileMenuLink>
            <MobileMenuLink href="/">Agências Físicas </MobileMenuLink>
            <MobileMenuLink href="/">Sobre a corporação</MobileMenuLink>
            <MobileMenuLink href="/">Termos de serviço</MobileMenuLink>
        </MobileMenuContainer>
    )
};