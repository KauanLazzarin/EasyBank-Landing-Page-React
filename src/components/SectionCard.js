import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Card = styled.div`
    margin: 5vh 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const CardImage = styled.img`
    width: 20%;
    max-width: 120px;
    border-radius: 100%;
    align-self: center;
`;

const CardHeader = styled.h3`
    margin: 3vh 0;
    font-family: 'Public Sans', sans-serif;
    font-size: 34px;
    color:hsl(233, 26%, 24%);
    font-weight: 400;
`;

const CardParagraph = styled.p`
    width: 89%;
    font-family: 'Public Sans', sans-serif;
    font-size: 24px;
    color:hsl(233, 8%, 62%);
    font-weight: 400;
    line-height: 37px;
`;

export default function SectionCard ({ imageSrc, header, children}) {
    return (
        <Card>
            <CardImage src={ imageSrc } />
            <CardHeader>{ header }</CardHeader>
            <CardParagraph>{ children }</CardParagraph>
        </Card>
    );
} ;