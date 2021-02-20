import styled from 'styled-components';

const Card = styled.article`
    width: 100%;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
`;

const CardHeader = styled.h3`
    width: 70%;
    margin: 2vh 0;
    
    font-weight:400;
    font-size: 24px;
    color: hsl(233, 26%, 24%);
    font-family: 'Public Sans', sans-serif;
`;

const CardParagraph = styled.p`
    width:70%;
    font-size:20px;
    font-family: 'Public Sans', sans-serif;
    color:hsl(233, 8%, 62%);
`;

const CardAuthor = styled.small`
    margin-top: 4vh;
    width: 70%;
    font-size: 16.3px;
    font-family: 'Public Sans', sans-serif;
    color: hsl(233, 8%, 62%);
`;

const CardImage = styled.img`
    width: 85%;
    border-radius: 10px 10px 0 0;
    max-width: 600px;

    @media (min-width: 850px) {
        max-width: inherit;
        width: 70%;
    }
`;


export default function ArticleCard ( {author, title, imageSrc, children} ) {
    return (

        <Card>
            <CardImage src={imageSrc} />
            <CardAuthor> By {author} </CardAuthor>
            <CardHeader> {title} </CardHeader>
            <CardParagraph> {children} </CardParagraph>
        </Card>

    )
};