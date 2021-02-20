import styled from 'styled-components';

import CurrencyImage from './../images/image-currency.jpg';
import RestaurantImage from './../images/image-restaurant.jpg';
import PlaneImage from './../images/image-plane.jpg';
import ConfettiImage from './../images/image-confetti.jpg';
import ArticleCard from './ArticleCard';


const Container = styled.div`
    padding: 14vh 0 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: hsl(0, 0%, 98%);

    @media(min-width: 850px) {
        justify-content: space-around;
    }
`;

const ArticlesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media ( min-width: 850px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const ArticleHeader = styled.h2`
    font-weight: 300;
    font-size: 48px;
    font-family: 'Public Sans', sans-serif;
    color: hsl(233, 26%, 24%);

    @media (min-width: 850px) {
        width: 93%;
    }
`;

export default function Article () {
    return (
        <Container>
            <ArticleHeader>Latest Articles</ArticleHeader>

            <ArticlesContainer>
                
                <ArticleCard author="Claire Robinson" title="Receive money in any currency with no fees" imageSrc={CurrencyImage}> 
                    The world is getting smaller and we're becoming more mobile.
                    So why should you be forced to only receive money in a single...
                </ArticleCard>

                <ArticleCard author="Wilson Hutton" title="Treat yourself without worrying about money" imageSrc={RestaurantImage}>
                    Our simple budgeting feature allows you to separate out your speading and set 
                    realistic limits each month. That means you...
                </ArticleCard>

                <ArticleCard author="Wilson Hutton" title="Take your EasyBank card wherever you go" imageSrc={PlaneImage}>
                    We want you to enjoy your travels. This is why we don't charge any fees on purchases
                    while you're abroad. We'll even show you...
                </ArticleCard>
                
                <ArticleCard author="Claire Robinson" title="Our invite-only Beta accounts are now live!" imageSrc={ConfettiImage}>
                    After a lot of hard work by the whole team, we're excited to lauch our closed beta.
                    It's easy to request an invite through the site... 
                </ArticleCard>

            </ArticlesContainer>
        </Container>
    )
};