import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--lightGrey);
    color: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--otherColor);
        padding-right: 15px;
        text-decoration: none;

        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }
`;
