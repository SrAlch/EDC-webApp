import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    background-color: grey;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;
