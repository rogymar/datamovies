import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
      to bottom,
      rgba(242, 132, 130, 0.20) 20%,
      rgba(36, 1, 25, 0.90) 70%
      
    ),
    url(${({ image }) => image}), var(--lightGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateBannerImage is;

    @keyframes animateBannerImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    max-Width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--whhite);

    h1 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }
`;


