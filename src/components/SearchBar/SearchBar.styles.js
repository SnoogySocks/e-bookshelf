import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 60px 50px 30px 50px;
    width: var(--maxContentWidth);
    height: 45px;
`;

export const SearchButton = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: var(--darkBeige);
    border-radius: 40px;

    // TODO fix issue where clicking on typing clicks the search button
    :active {
        background-color: var(--darkestBeige);
    }

    input {
        width: 87%;
        padding: 20px 30px;
        background-color: var(--lightBeige);
        border: 0;
        border-radius: 40px;
        font-size: var(--fontMed);
        
        :focus {
            outline: none;
        }
    }

    img {
        margin: 10px auto 0 auto;
        width: auto;
    }
`;